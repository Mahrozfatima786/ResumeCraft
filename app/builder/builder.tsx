'use client';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Download, RotateCcw, CheckCircle2, Eye, PencilLine, Upload, AlertCircle } from 'lucide-react';
import ResumePreview from '@/components/ResumePreview';
import { sampleResume, templates, type ResumeData } from '@/lib/data';

const fields:{key:keyof ResumeData;label:string;placeholder:string;multiline?:boolean;hint?:string}[]=[
 {key:'fullName',label:'Full name',placeholder:'e.g. Aarav Sharma'}, {key:'role',label:'Professional title',placeholder:'e.g. Frontend Developer'}, {key:'email',label:'Email address',placeholder:'you@example.com'}, {key:'phone',label:'Phone number',placeholder:'+91 98765 43210'}, {key:'location',label:'City / Location',placeholder:'e.g. Kanpur, India'}, {key:'website',label:'LinkedIn / Portfolio',placeholder:'linkedin.com/in/yourname'}, {key:'summary',label:'Professional summary',placeholder:'A short introduction about your strengths and goals...',multiline:true}, {key:'experience',label:'Work experience',placeholder:'Role | Company | Dates\nDescribe your contribution and achievements...',multiline:true,hint:'Use a new line for each role or achievement.'}, {key:'education',label:'Education',placeholder:'Degree | Institution | Year',multiline:true}, {key:'skills',label:'Skills',placeholder:'React, JavaScript, CSS, teamwork...'}, {key:'projects',label:'Projects',placeholder:'Project name — what you built and the result...',multiline:true}, {key:'certifications',label:'Certifications',placeholder:'Course or certification name',multiline:true}
];
function normalizeResumeText(text:string):Partial<ResumeData>{
 const lines=text.replace(/\r/g,'\n').split('\n').map(line=>line.replace(/\s+/g,' ').trim()).filter(Boolean);
 const joined=lines.join('\n');
 const email=joined.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0]||'';
 const phone=joined.match(/(?:\+?\d[\d ()-]{7,}\d)/)?.[0]?.trim()||'';
 const website=joined.match(/(?:https?:\/\/)?(?:www\.)?(?:linkedin\.com\/[^\s]+|github\.com\/[^\s]+|[A-Z0-9._%+-]+\.(?:com|in|dev)\/[^\s]*)/i)?.[0]||'';
 const sectionAliases:{key:keyof ResumeData;names:string[]}[]=[
  {key:'summary',names:['summary','professional summary','profile','objective','career objective','about me']},
  {key:'experience',names:['experience','work experience','employment history','professional experience','work history']},
  {key:'education',names:['education','academic background','qualifications','educational qualifications']},
  {key:'skills',names:['skills','technical skills','key skills','core competencies','technologies']},
  {key:'projects',names:['projects','personal projects','key projects','academic projects']},
  {key:'certifications',names:['certifications','certificates','licenses','courses']}
 ];
 const normalized=(line:string)=>line.toLowerCase().replace(/[:|•]/g,'').trim();
 const result:Partial<ResumeData>={};
 const nameLine=lines.find(line=>line.length>2&&line.length<55&&!/@|https?:|www\.|\d{4,}|resume|curriculum vitae/i.test(line)&&!sectionAliases.some(a=>a.names.includes(normalized(line))));
 if(nameLine)result.fullName=nameLine;
 if(email)result.email=email;
 if(phone)result.phone=phone;
 if(website)result.website=website;
 const sectionPositions=lines.map((line,index)=>({line,index,alias:sectionAliases.find(a=>a.names.includes(normalized(line)))})).filter(x=>x.alias);
 for(const section of sectionPositions){
  const end=sectionPositions.find(x=>x.index>section.index)?.index??lines.length;
  const content=lines.slice(section.index+1,end).join('\n').trim();
  if(section.alias&&content) (result as Record<string,string>)[section.alias.key]=content;
 }
 const firstSectionIndex=sectionPositions[0]?.index??lines.length;
 const introLines=lines.slice(0,Math.min(firstSectionIndex,8)).filter(line=>line!==nameLine&&line!==email&&line!==phone&&line!==website&&!/^(resume|curriculum vitae)$/i.test(line));
 const role=introLines.find(line=>line.length<90&&!/\b(kanpur|india|linkedin|github|@)\b/i.test(line));
 if(role)result.role=role;
 const location=lines.find(line=>/\b(india|uttar pradesh|delhi|mumbai|bengaluru|bangalore|hyderabad|pune|chennai|noida|gurugram|kanpur)\b/i.test(line)&&line!==role);
 if(location)result.location=location;
 if(!result.summary){const summaryCandidate=lines.find(line=>line.length>70&&line.length<450&&line!==nameLine);if(summaryCandidate)result.summary=summaryCandidate;}
 if(result.skills)result.skills=result.skills.replace(/\n+/g,', ');
 return result;
}
async function extractResumeText(file:File):Promise<string>{
 const buffer=await file.arrayBuffer();
 if(file.name.toLowerCase().endsWith('.txt'))return new TextDecoder().decode(buffer);
 if(file.name.toLowerCase().endsWith('.docx')){
  const mammoth=await import('mammoth');
  const result=await mammoth.extractRawText({arrayBuffer:buffer});
  return result.value;
 }
 if(file.name.toLowerCase().endsWith('.pdf')){
  const pdfjs=await import('pdfjs-dist/legacy/build/pdf.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc=new URL('pdfjs-dist/legacy/build/pdf.worker.mjs',import.meta.url).toString();
  const pdf=await pdfjs.getDocument({data:new Uint8Array(buffer),useSystemFonts:true,isEvalSupported:false}).promise;
  const pages:string[]=[];
  for(let pageNo=1;pageNo<=pdf.numPages;pageNo++){
   const page=await pdf.getPage(pageNo);
   const content=await page.getTextContent();
   const textItems=content.items.filter(item=>'str' in item&&'transform' in item) as Array<{str:string;transform:number[]}>;
   const rows=new Map<number,Array<{x:number;str:string}>>();
   for(const item of textItems){
    const y=Math.round(item.transform[5]);
    const row=rows.get(y)||[];row.push({x:item.transform[4],str:item.str});rows.set(y,row);
   }
   pages.push([...rows.entries()].sort((a,b)=>b[0]-a[0]).map(([,row])=>row.sort((a,b)=>a.x-b.x).map(item=>item.str).join(' ')).join('\n'));
  }
  return pages.join('\n');
 }
 throw new Error('Please upload a PDF, DOCX, or TXT file.');
}
export default function Builder(){const params=useSearchParams();const initial=params.get('template')||'modern';const [data,setData]=useState<ResumeData>(sampleResume);const [template,setTemplate]=useState(initial);const [saved,setSaved]=useState(false);const [mobilePreview,setMobilePreview]=useState(false);const [uploading,setUploading]=useState(false);const [uploadMessage,setUploadMessage]=useState('');const [uploadError,setUploadError]=useState(false);
 useEffect(()=>{try{const raw=localStorage.getItem('resumecraft-data');if(raw){const parsed=JSON.parse(raw);setData({...sampleResume,...parsed.data});if(parsed.template)setTemplate(parsed.template)}}catch{}},[]);
 useEffect(()=>{const t=setTimeout(()=>{try{localStorage.setItem('resumecraft-data',JSON.stringify({data,template}));setSaved(true)}catch{setSaved(false)}},350);return()=>clearTimeout(t)},[data,template]);
 const completion=useMemo(()=>{const required=['fullName','role','email','summary','education','skills'] as (keyof ResumeData)[];return Math.round(required.filter(k=>data[k].trim()).length/required.length*100)},[data]);
 const update=(key:keyof ResumeData,value:string)=>setData(prev=>({...prev,[key]:value}));
 const handleResumeUpload=async(file?:File)=>{
  if(!file)return;
  setUploadMessage('');setUploadError(false);
  if(file.size>8*1024*1024){setUploadError(true);setUploadMessage('File size must be 8 MB or less.');return;}
  if(!/\.(pdf|docx|txt)$/i.test(file.name)){setUploadError(true);setUploadMessage('Supported formats: PDF, DOCX, and TXT.');return;}
  setUploading(true);
  try{
   const text=await extractResumeText(file);
   if(!text.trim())throw new Error('No readable text found. If this is a scanned PDF, please use a text-based PDF or enter the details manually.');
   const extracted=normalizeResumeText(text);
   const meaningful=Object.entries(extracted).filter(([,value])=>Boolean(value?.trim()));
   if(meaningful.length<2)throw new Error('We could not identify enough resume details. Try a text-based PDF/DOCX or fill in the fields manually.');
   setData(prev=>({...prev,...extracted}));
   setUploadMessage(`Imported ${meaningful.length} fields from ${file.name}. Please review the details before downloading.`);
   setMobilePreview(false);
  }catch(error){setUploadError(true);setUploadMessage(error instanceof Error?error.message:'Could not read this file. Please try another resume.');}
  finally{setUploading(false);}
 };
 const reset=()=>{if(confirm('Reset all fields to the sample resume?')){setData(sampleResume);setTemplate('modern')}};
 const download=async()=>{
  const element=document.querySelector('.preview-stage .resume-paper') as HTMLElement|null;
  if(!element){alert('Resume preview is not ready. Please try again.');return;}
  const safeName=(data.fullName||'resume').trim().replace(/[^a-z0-9-_]+/gi,'-').replace(/^-+|-+$/g,'')||'resume';
  try{
   const module=await import('html2pdf.js');
   const html2pdf=(module as unknown as {default?:()=>{set:(options:unknown)=>{from:(element:HTMLElement)=>{save:()=>Promise<void>}}}}).default;
   if(!html2pdf)throw new Error('PDF exporter is unavailable');
   await html2pdf().set({
    margin:[8,8,8,8],
    filename:`${safeName}.pdf`,
    image:{type:'jpeg',quality:0.98},
    html2canvas:{scale:2,useCORS:true,backgroundColor:'#ffffff',scrollY:0},
    jsPDF:{unit:'mm',format:'a4',orientation:'portrait'},
    pagebreak:{mode:['css','legacy']}
   }).from(element).save();
  }catch(error){
   console.error('Direct PDF download failed:',error);
   alert('Direct PDF download could not start. The print dialog will open; choose “Save as PDF”.');
   window.print();
  }
 };
 return <div className="builder-page"><div className="builder-top container"><div><div className="eyebrow">RESUME WORKSPACE</div><h1>Build your resume</h1><p>Fill in your details and watch your resume come together.</p></div><div className="builder-top-actions"><span className="save-state"><CheckCircle2 size={15}/>{saved?'Saved on this device':'Saving…'}</span><button className="button button-small" onClick={download}><Download size={16}/> Save as PDF</button></div></div>
 <div className="builder-layout container"><aside className={`editor-panel ${mobilePreview?'hide-mobile-editor':''}`}><div className="editor-panel-head"><div><h2>Your details</h2><p>Only the fields you fill in appear in the preview.</p></div><button className="icon-button" title="Reset sample data" onClick={reset}><RotateCcw size={17}/></button></div><div className="upload-resume-box"><div className="upload-resume-icon"><Upload size={18}/></div><div className="upload-resume-copy"><strong>Have an existing resume?</strong><span>Upload PDF, DOCX or TXT to autofill your details.</span></div><label className={`button button-small upload-resume-button ${uploading?'is-disabled':''}`} htmlFor="existing-resume-upload"><Upload size={15}/>{uploading?'Reading…':'Upload resume'}</label><input id="existing-resume-upload" className="visually-hidden-file" type="file" accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain" disabled={uploading} onChange={e=>{const file=e.target.files?.[0];void handleResumeUpload(file);e.currentTarget.value='';}}/></div>{uploadMessage&&<div className={`upload-feedback ${uploadError?'upload-error':''}`} role="status">{uploadError?<AlertCircle size={16}/>:<CheckCircle2 size={16}/>}<span>{uploadMessage}</span></div>}<div className="progress-wrap"><div className="progress-label"><span>Resume completeness</span><b>{completion}%</b></div><div className="progress-track"><span style={{width:`${completion}%`}}/></div></div><div className="template-picker"><label htmlFor="template-select">Choose a template</label><select id="template-select" value={template} onChange={e=>setTemplate(e.target.value)}>{templates.map(t=><option value={t.id} key={t.id}>{t.name} — {t.description}</option>)}</select></div><form className="resume-form" onSubmit={e=>{e.preventDefault();download()}}>{fields.map(f=><div className="form-field" key={f.key}><label htmlFor={f.key}>{f.label}</label>{f.multiline?<textarea id={f.key} value={data[f.key]} placeholder={f.placeholder} rows={f.key==='experience'||f.key==='projects'?4:3} onChange={e=>update(f.key,e.target.value)}/>:<input id={f.key} value={data[f.key]} placeholder={f.placeholder} onChange={e=>update(f.key,e.target.value)} />}{f.hint&&<small>{f.hint}</small>}</div>)}<button className="button editor-download" type="submit"><Download size={17}/> Print / Save as PDF</button></form><p className="editor-note">Tip: in the print dialog, choose “Save as PDF” as the destination.</p></aside><section className={`preview-panel ${mobilePreview?'show-mobile-preview':''}`}><div className="preview-toolbar"><div><Eye size={17}/><span>Live preview</span></div><span className="preview-size">A4 · {templates.find(t=>t.id===template)?.name}</span></div><div className="preview-stage"><ResumePreview data={data} template={template}/></div><div className="preview-bottom"><span><CheckCircle2 size={15}/> Changes save automatically on this device</span><button onClick={download} className="text-link">Print / Save PDF <Download size={15}/></button></div></section><div className="mobile-builder-switch"><button className={!mobilePreview?'active':''} onClick={()=>setMobilePreview(false)}><PencilLine size={16}/> Edit details</button><button className={mobilePreview?'active':''} onClick={()=>setMobilePreview(true)}><Eye size={16}/> Preview</button></div></div></div>
}

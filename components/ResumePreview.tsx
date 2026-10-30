import type { ResumeData } from '@/lib/data';
export default function ResumePreview({data, template='modern'}:{data:ResumeData;template?:string}) {
 const lines=(v:string)=>v.split('\n').map(s=>s.trim()).filter(Boolean);
 return <article className={`resume-paper resume-${template}`}>
  <div className="resume-top"><div><h1>{data.fullName || 'Your Name'}</h1><p className="resume-role">{data.role || 'Your Professional Title'}</p></div>{template==='creative'&&<div className="resume-mark">RC</div>}</div>
  <div className="resume-contact">{[data.email,data.phone,data.location,data.website].filter(Boolean).join('  ·  ')}</div>
  {data.summary&&<section className="resume-section"><h2>Profile</h2><p>{data.summary}</p></section>}
  {data.experience&&<section className="resume-section"><h2>Experience</h2>{lines(data.experience).map((line,i)=><p className="resume-line" key={i}>{line}</p>)}</section>}
  {data.education&&<section className="resume-section"><h2>Education</h2>{lines(data.education).map((line,i)=><p className="resume-line" key={i}>{line}</p>)}</section>}
  {data.skills&&<section className="resume-section"><h2>Skills</h2><p>{data.skills}</p></section>}
  {data.projects&&<section className="resume-section"><h2>Projects</h2>{lines(data.projects).map((line,i)=><p className="resume-line" key={i}>{line}</p>)}</section>}
  {data.certifications&&<section className="resume-section"><h2>Certifications</h2>{lines(data.certifications).map((line,i)=><p className="resume-line" key={i}>{line}</p>)}</section>}
 </article>
}

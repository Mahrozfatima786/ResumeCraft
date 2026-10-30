export type ResumeData = {
  fullName: string; role: string; email: string; phone: string; location: string; website: string;
  summary: string; education: string; experience: string; skills: string; projects: string; certifications: string;
};
export const sampleResume: ResumeData = {
  fullName: 'Aarav Sharma', role: 'Frontend Developer', email: 'aarav.sharma@email.com', phone: '+91 98765 43210',
  location: 'New Delhi, India', website: 'linkedin.com/in/aaravsharma',
  summary: 'Frontend developer passionate about building accessible, responsive, and user-friendly web experiences. Experienced in turning product requirements into clean, maintainable interfaces.',
  education: 'B.Tech, Computer Science | Delhi Institute of Technology | 2020 – 2024',
  experience: 'Frontend Developer | BrightApps Technologies | 2024 – Present\nBuilt responsive React interfaces and reusable UI components.\nCollaborated with design and API teams to improve product usability.\n\nWeb Development Intern | PixelWorks | 2023 – 2024\nDeveloped landing pages and fixed UI issues across devices.',
  skills: 'React, Next.js, JavaScript, TypeScript, HTML, CSS, Git, REST APIs',
  projects: 'Portfolio Website — Built a responsive portfolio with project case studies and contact form.\nTask Tracker — Created a task management app with filtering and local storage.',
  certifications: 'Meta Front-End Developer Certificate (example)'
};
export const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean and polished for most roles', tag: 'Popular' },
  { id: 'classic', name: 'Classic', description: 'Traditional, ATS-friendly layout', tag: 'ATS friendly' },
  { id: 'minimal', name: 'Minimal', description: 'Simple, spacious, and readable', tag: 'Simple' },
  { id: 'creative', name: 'Creative', description: 'A little color for creative roles', tag: 'Stand out' }
];
export const articles = [
  { slug: 'resume-for-freshers', title: 'How to Make a Resume as a Fresher', category: 'Resume Tips', read: '5 min read', excerpt: 'A practical guide to presenting education, projects, skills, and internships when you are starting your career.', body: ['Start with a clear name and contact details, then add a short summary focused on the role you want.', 'Place education, relevant projects, internships, and technical skills where recruiters can scan them quickly.', 'Use action verbs and specific outcomes where possible. Never add experience, skills, or qualifications you do not have.', 'Keep formatting consistent and export a PDF. Review the final file before sending it to an employer.'] },
  { slug: 'ats-resume-basics', title: 'ATS-Friendly Resume: The Basics', category: 'Resume Tips', read: '6 min read', excerpt: 'Learn how clear headings, relevant keywords, and simple formatting can make your resume easier to read.', body: ['Applicant tracking systems vary, so no design can guarantee a pass. A clear, text-based resume is a sensible starting point.', 'Use standard headings such as Experience, Education, Skills, and Projects. Avoid putting important details only in images.', 'Tailor your resume honestly to the job description. Include relevant skills only when you can discuss them in an interview.', 'Before applying, check spelling, dates, contact details, and whether the PDF text can be selected.'] },
  { slug: 'react-developer-resume', title: 'React Developer Resume: What to Include', category: 'Tech Careers', read: '7 min read', excerpt: 'A checklist for highlighting React, JavaScript, projects, collaboration, and measurable outcomes.', body: ['Mention the technologies you genuinely use, such as React, JavaScript, TypeScript, CSS, testing tools, and APIs.', 'Describe projects with the problem, your contribution, and the result. A live demo or code repository can help when appropriate.', 'Explain your impact without inventing metrics. Mention accessibility, performance, reusable components, or collaboration when relevant.', 'Keep the resume aligned with each role and prepare to explain every skill and project listed.'] }
];

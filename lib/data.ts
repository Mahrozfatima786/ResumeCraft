export type ResumeData = {
	fullName: string;
	role: string;
	email: string;
	phone: string;
	location: string;
	website: string;
	summary: string;
	education: string;
	experience: string;
	skills: string;
	projects: string;
	certifications: string;
};
export const sampleResume: ResumeData = {
	fullName: "Aarav Sharma",
	role: "Frontend Developer",
	email: "aarav.sharma@email.com",
	phone: "+91 98765 43210",
	location: "New Delhi, India",
	website: "linkedin.com/in/aaravsharma",
	summary:
		"Frontend developer passionate about building accessible, responsive, and user-friendly web experiences. Experienced in turning product requirements into clean, maintainable interfaces.",
	education:
		"B.Tech, Computer Science | Delhi Institute of Technology | 2020 – 2024",
	experience:
		"Frontend Developer | BrightApps Technologies | 2024 – Present\nBuilt responsive React interfaces and reusable UI components.\nCollaborated with design and API teams to improve product usability.\n\nWeb Development Intern | PixelWorks | 2023 – 2024\nDeveloped landing pages and fixed UI issues across devices.",
	skills: "React, Next.js, JavaScript, TypeScript, HTML, CSS, Git, REST APIs",
	projects:
		"Portfolio Website — Built a responsive portfolio with project case studies and contact form.\nTask Tracker — Created a task management app with filtering and local storage.",
	certifications: "Meta Front-End Developer Certificate (example)",
};
export const templates = [
	{
		id: "modern",
		name: "Modern",
		description: "Clean and polished for most roles",
		tag: "Popular",
	},
	{
		id: "classic",
		name: "Classic",
		description: "Traditional, ATS-friendly layout",
		tag: "ATS friendly",
	},
	{
		id: "minimal",
		name: "Minimal",
		description: "Simple, spacious, and readable",
		tag: "Simple",
	},
	{
		id: "creative",
		name: "Creative",
		description: "A little color for creative roles",
		tag: "Stand out",
	},
];
export const articles = [
	{
		slug: "resume-for-freshers",
		title: "How to Make a Resume as a Fresher",
		category: "Resume Tips",
		read: "5 min read",
		excerpt:
			"A practical guide to presenting education, projects, skills, and internships when you are starting your career.",
		body: [
			"Start with a clear name and contact details, then add a short summary focused on the role you want.",
			"Place education, relevant projects, internships, and technical skills where recruiters can scan them quickly.",
			"Use action verbs and specific outcomes where possible. Never add experience, skills, or qualifications you do not have.",
			"Keep formatting consistent and export a PDF. Review the final file before sending it to an employer.",
		],
	},
	{
		slug: "ats-resume-basics",
		title: "ATS-Friendly Resume: The Basics",
		category: "Resume Tips",
		read: "6 min read",
		excerpt:
			"Learn how clear headings, relevant keywords, and simple formatting can make your resume easier to read.",
		body: [
			"Applicant tracking systems vary, so no design can guarantee a pass. A clear, text-based resume is a sensible starting point.",
			"Use standard headings such as Experience, Education, Skills, and Projects. Avoid putting important details only in images.",
			"Tailor your resume honestly to the job description. Include relevant skills only when you can discuss them in an interview.",
			"Before applying, check spelling, dates, contact details, and whether the PDF text can be selected.",
		],
	},
	{
		slug: "react-developer-resume",
		title: "React Developer Resume: What to Include",
		category: "Tech Careers",
		read: "7 min read",
		excerpt:
			"A checklist for highlighting React, JavaScript, projects, collaboration, and measurable outcomes.",
		body: [
			"Mention the technologies you genuinely use, such as React, JavaScript, TypeScript, CSS, testing tools, and APIs.",
			"Describe projects with the problem, your contribution, and the result. A live demo or code repository can help when appropriate.",
			"Explain your impact without inventing metrics. Mention accessibility, performance, reusable components, or collaboration when relevant.",
			"Keep the resume aligned with each role and prepare to explain every skill and project listed.",
		],
	},
	{
		slug: "resume-for-freshers-with-no-experience",
		title: "How to Make a Resume for Freshers With No Experience",
		category: "Resume Tips",
		read: "8 min read",
		excerpt:
			"Learn how to create a fresher resume with no work experience using education, skills, academic projects, and certifications.",
		body: [
			"Creating your first resume can feel difficult when you have no work experience. However, you can demonstrate your potential through your education, skills, academic projects, internships, and certifications.",
			"Start with your name, professional email address, phone number, and city. Add a short career objective that explains your relevant strengths and the type of role you are seeking.",
			"Include your educational qualifications, college name, graduation year, and relevant coursework. Freshers can place education near the top of their resume.",
			"Create a skills section that matches the job you want. For example, a web development applicant might include HTML, CSS, JavaScript, and React if they genuinely know these technologies.",
			"Academic projects are valuable when you have limited experience. Explain what you built, which technologies you used, and what your contribution was. Include a portfolio or GitHub link when relevant.",
			"You can also include relevant internships, volunteer work, certifications, and college achievements. Choose information that supports your application rather than adding unrelated details.",
			"For an ATS-friendly resume, use clear headings, readable text, consistent formatting, and relevant keywords from the job description. Avoid false claims and check that your PDF is readable before submitting it.",
			"Before applying, proofread your resume, verify your contact information, and tailor the content to the position. A one-page resume is usually enough for a fresher.",
			"You can now use ResumeCraft to explore resume templates and create a resume for your first job.",
		],
	},
];

# ResumeCraft — Next.js Resume Maker

A responsive resume-builder starter project built with Next.js App Router, TypeScript, React, and CSS. Includes four templates, live editing, local browser saving, print-to-PDF, informational pages, and sample career guides.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Features
- Responsive homepage and template gallery
- Resume editor with personal information, summary, experience, education, skills, projects, certifications
- Four visual styles: Modern, Classic, Minimal, Creative
- Live preview and completeness indicator
- Autosaves resume data in localStorage on the current browser/device
- Direct PDF download using html2pdf.js, with browser print-to-PDF fallback
- Blog sample articles, About, Contact, and Privacy Policy pages
- No database, login, or paid API required

## Before publishing
1. Replace `https://example.com` in `app/layout.tsx` with your real site URL after you have one.
2. Replace the placeholder email in `app/contact/page.tsx`.
3. Review and customize `app/privacy/page.tsx` to match the services you actually use.
4. Add your own original content and review all text for accuracy.
5. Add a real domain, analytics, consent controls, and AdSense only when appropriate; this starter does not include ad code and does not guarantee AdSense approval or earnings.
6. Test print-to-PDF in Chrome and Firefox, and check mobile and desktop layouts.

## Deploy free
A typical free deployment option is Vercel: push this folder to a GitHub repository, import the repository into Vercel, and deploy with the default Next.js settings. Free plan terms and limits can change; check the provider's current terms.

## Privacy note
The editor saves resume data to localStorage only in the user's browser. It does not send resume details to a server in this starter version. Users should avoid entering sensitive information on shared devices.

## Import an existing resume

The builder now includes an **Upload resume** option. Users can select a text-based PDF, DOCX, or TXT file (up to 8 MB). The app extracts readable text in the browser, attempts to map common headings such as Summary, Experience, Education, Skills, Projects, and Certifications into the editor, and updates the live preview using the currently selected template.

- Install dependencies with `npm install`, then run `npm run dev`.
- Scanned/image-only PDFs are not OCR-processed; upload a text-based PDF or enter details manually.
- Resume parsing is heuristic, so users should review every field before downloading.
- Files are read locally in the browser and are not uploaded to an application server by this feature. Existing resume details are saved in browser local storage by the builder.

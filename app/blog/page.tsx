// import type { Metadata } from 'next';import Link from 'next/link';import {ArrowUpRight,BookOpen} from 'lucide-react';import {articles} from '@/lib/data';
// export const metadata:Metadata={title:'Resume Tips & Career Guides',description:'Practical resume writing and career guides for job seekers.'};
// export default function Blog(){return <section className="inner-page container"><div className="eyebrow">THE CAREER NOTEBOOK</div><h1>Small tips. Big next steps.</h1><p className="page-lede">Straightforward guides to help you write a clearer resume and prepare for your next opportunity.</p><div className="article-grid">{articles.map((a,i)=><article className="article-card" key={a.slug}><div className={`article-art article-art-${i+1}`}><BookOpen size={36}/><span>CAREER GUIDE / 0{i+1}</span></div><div className="article-content"><div className="article-meta">{a.category} <span>·</span> {a.read}</div><h2><Link href={`/blog/${a.slug}`}>{a.title}</Link></h2><p>{a.excerpt}</p><Link href={`/blog/${a.slug}`} className="text-link">Read guide <ArrowUpRight size={16}/></Link></div></article>)}</div><div className="note-box"><strong>About these guides</strong><p>Use them as general educational information. Always verify job details through the employer’s official website and never pay a recruiter to secure a job.</p></div></section>}
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
	title: "Resume Tips & Career Guides | ResumeCraft",
	description:
		"Explore practical resume writing tips, ATS-friendly resume guides, and career advice to help you prepare for your next job.",
};

export default function BlogPage() {
	return (
		<main className="inner-page container">
			<div className="eyebrow">THE CAREER NOTEBOOK</div>

			<h1>Resume Tips & Career Guides</h1>

			<p className="page-lede">
				Learn how to create a professional resume, highlight your skills,
				prepare for your first job, and improve your job applications.
			</p>

			<div className="article-grid">
				{articles.map((article, index) => (
					<article
						className="article-card"
						key={article.slug}>
						<div className={`article-art article-art-${(index % 3) + 1}`}>
							<BookOpen size={36} />

							<span>CAREER GUIDE / {String(index + 1).padStart(2, "0")}</span>
						</div>

						<div className="article-content">
							<div className="article-meta">
								{article.category}
								<span> · </span>
								{article.read}
							</div>

							<h2>
								<Link href={`/blog/${article.slug}`}>{article.title}</Link>
							</h2>

							<p>{article.excerpt}</p>

							<Link
								href={`/blog/${article.slug}`}
								className="text-link">
								Read article
								<ArrowUpRight size={16} />
							</Link>
						</div>
					</article>
				))}
			</div>

			<section className="note-box">
				<strong>Build your next career step</strong>

				<p>
					Explore practical resume advice and create a resume that highlights
					your education, skills, and projects.
				</p>

				<Link
					href="/builder"
					className="button">
					Create Your Resume
				</Link>
			</section>
		</main>
	);
}

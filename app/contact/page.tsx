import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
	return (
		<section className="inner-page narrow-page container">
			<div className="eyebrow">GET IN TOUCH</div>
			<h1>Contact us</h1>
			<p className="page-lede">
				Have feedback about the resume builder or an idea for a guide? We’d love
				to hear it.
			</p>
			<div className="note-box">
				<strong>Before you publish</strong>
				<p>
					Replace this placeholder with an email address you control. Do not
					publish a personal phone number or private address unless you want it
					to be public.
				</p>
				<p>
					<strong>Email:</strong> ressumecraft@gmail.com
				</p>
			</div>
			<div className="prose">
				<h2>Helpful details to include</h2>
				<p>
					Tell us which page you were using, what happened, and which
					browser/device you use. Please do not email sensitive identity
					documents or a resume containing private information.
				</p>
			</div>
		</section>
	);
}

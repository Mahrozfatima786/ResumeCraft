import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Read ResumeCraft’s Privacy Policy to understand how resume information, cookies, and third-party advertising are handled.",
};

export default function Privacy() {
	return (
		<section className="inner-page narrow-page container">
			<div className="eyebrow">YOUR PRIVACY</div>

			<h1>Privacy Policy</h1>

			<p className="page-lede">Last updated: October 2026</p>

			<div className="prose">
				<h2>1. Introduction</h2>
				<p>
					Welcome to ResumeCraft. We respect your privacy and aim to be
					transparent about how information is handled when you use our website.
					This policy explains how resume information, cookies, and third-party
					advertising may be handled while you use our services.
				</p>

				<h2>2. Resume Information and Local Storage</h2>
				<p>
					ResumeCraft lets you enter personal and professional information to
					create a resume. The resume editor stores the information you enter in
					your browser’s local storage on the device you use. The editor is
					designed to keep this resume information in your browser rather than
					sending it to our server.
				</p>
				<p>
					Information stored in your browser may remain there after you leave
					the website. Anyone with access to your device or browser profile may
					be able to access it. You can clear your browser storage to remove
					locally saved information. Avoid entering sensitive information on a
					shared device.
				</p>

				<h2>3. Advertising and Google AdSense</h2>
				<p>
					ResumeCraft may display advertisements provided by third-party
					advertising services, including Google AdSense. These services may use
					cookies, web beacons, IP addresses, or similar technologies to serve
					advertisements, measure ad performance, prevent fraud, and support
					advertising-related functions.
				</p>
				<p>
					Depending on your location, consent choices, and applicable settings,
					Google and its partners may use information about visits to this
					website and other websites to provide personalized or non-personalized
					advertisements.
				</p>
				<p>
					To learn how Google handles data from sites and apps that use its
					services, visit{" "}
					<a
						href="https://policies.google.com/technologies/partner-sites"
						target="_blank"
						rel="noopener noreferrer">
						How Google uses information from sites or apps that use its services
					</a>
					. You can also review Google’s{" "}
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						rel="noopener noreferrer">
						Privacy Policy
					</a>
					.
				</p>

				<h2>4. Cookies and Similar Technologies</h2>
				<p>
					Cookies are small files that websites and third-party services may
					store in your browser. They may be used for advertising,
					functionality, security, and performance measurement. You can manage
					or delete cookies through your browser settings. Blocking cookies may
					affect certain website features or advertising functionality.
				</p>
				<p>
					Where required by applicable law, appropriate consent or preference
					controls must be provided for cookies and advertising technologies.
				</p>

				<h2>5. Third-Party Services and External Links</h2>
				<p>
					Our website may use third-party services or link to external websites.
					Those services and websites operate under their own privacy policies
					and practices. We encourage you to review their policies before
					providing information or interacting with their services.
				</p>

				<h2>6. Data Security and Retention</h2>
				<p>
					Resume information saved in local storage remains on the browser and
					device where it was entered, unless you use another feature or service
					that transmits it elsewhere. We cannot guarantee the security of your
					device or browser. You are responsible for protecting access to your
					device and removing locally stored information when appropriate.
				</p>

				<h2>7. Children’s Privacy</h2>
				<p>
					ResumeCraft is intended for people creating resumes and is not
					designed specifically to collect personal information from children.
					If you believe a child has provided personal information through a
					feature on this website, please contact us so we can review the
					concern.
				</p>

				<h2>8. Your Choices and Privacy Rights</h2>
				<p>
					Depending on where you live, you may have rights regarding your
					personal information, including rights to request access, correction,
					or deletion of information held by a service. You can remove resume
					information stored locally by clearing this website’s data in your
					browser. For requests or questions about privacy, contact us using the
					email address below.
				</p>

				<h2>9. Changes to This Policy</h2>
				<p>
					We may update this Privacy Policy when our website, services, or legal
					requirements change. Any revised policy will be published on this page
					with an updated revision date.
				</p>

				<h2>10. Contact Us</h2>
				<p>
					If you have questions about this Privacy Policy or our privacy
					practices, contact us at{" "}
					<a href="mailto:ressumecraft@gmail.com">ressumecraft@gmail.com</a>.
				</p>
			</div>
		</section>
	);
}

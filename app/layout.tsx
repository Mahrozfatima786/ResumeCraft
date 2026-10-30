import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		default: "ResumeCraft — Free Resume Maker",
		template: "%s | ResumeCraft",
	},
	description:
		"Create a professional resume with free templates. Edit your details, preview instantly, and print or save as PDF.",
	metadataBase: new URL("https://resumecraft-nine.vercel.app"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta
					name="google-adsense-account"
					content="ca-pub-9336883811142704"
				/>
			</head>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />

				<Script
					id="google-adsense"
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9336883811142704"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}

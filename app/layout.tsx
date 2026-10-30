import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata = { title: { default: 'ResumeCraft — Free Resume Maker', template: '%s | ResumeCraft' }, description: 'Create a professional resume with free templates. Edit your details, preview instantly, and print or save as PDF.', metadataBase: new URL('https://example.com') };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>; }

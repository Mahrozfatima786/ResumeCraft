import type { Metadata } from 'next';
import { Suspense } from 'react';
import Builder from './builder';
export const metadata:Metadata={title:'Resume Builder',description:'Create and preview your resume with free templates.'};
export default function BuilderPage(){return <Suspense fallback={<div className="container inner-page">Loading resume builder…</div>}><Builder/></Suspense>}

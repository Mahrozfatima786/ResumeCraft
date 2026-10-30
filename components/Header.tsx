import Link from 'next/link';
import { FileText, Menu } from 'lucide-react';
export default function Header() {
  return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="brand"><span className="brand-icon"><FileText size={21}/></span><span>Resume<span className="brand-accent">Craft</span></span></Link><nav className="main-nav"><Link href="/builder">Resume Builder</Link><Link href="/templates">Templates</Link><Link href="/blog">Resume Tips</Link></nav><Link className="button button-small nav-cta" href="/builder">Build my resume <span aria-hidden="true">↗</span></Link><details className="mobile-menu"><summary aria-label="Open menu"><Menu size={23}/></summary><div className="mobile-menu-panel"><Link href="/builder">Resume Builder</Link><Link href="/templates">Templates</Link><Link href="/blog">Resume Tips</Link><Link href="/about">About</Link></div></details></div></header>;
}

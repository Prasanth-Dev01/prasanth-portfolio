'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
      <nav className="shell flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <Link href="#home" className="focus-ring text-lg font-semibold tracking-tight">
          {portfolio.name}
          <span className="text-[#b8f36b]">.</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, id]) => (
            <Link key={id} href={`#${id}`} className="nav-link focus-ring text-sm text-zinc-400 transition-colors hover:text-white">
              {name}
            </Link>
          ))}
          <Link href="#contact" className="nav-contact focus-ring flex items-center gap-2 border border-[#b8f36b] px-4 py-2 text-sm text-[#b8f36b] transition-colors">
            <span>Contact me</span>
            <ArrowUpRight className="nav-arrow" size={14} />
          </Link>
        </div>
        <button className="focus-ring p-2 md:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#111] px-6 py-5 md:hidden">
          {[...links, ['Contact', 'contact']].map(([name, id]) => (
            <Link key={id} onClick={() => setOpen(false)} href={`#${id}`} className="focus-ring block border-b border-white/10 py-4 text-sm text-zinc-200">
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

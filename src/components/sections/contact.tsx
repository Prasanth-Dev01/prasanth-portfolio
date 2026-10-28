'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowDownToLine, ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
export function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    if (!portfolio.email) return;
    await navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return (
    <section id="contact" className="section-pad">
      <div className="shell">
        <div className="border border-white/10 bg-[#111] p-7 transition-colors duration-300 hover:border-[#b8f36b]/30 sm:p-12 md:p-16">
          <p data-label className="eyebrow">
            05 / Your next move
          </p>
          <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl md:text-8xl">
            <span className="block overflow-hidden">
              <span data-contact-line className="inline-block">
                LET’S BUILD
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-contact-line className="inline-block text-[#b8f36b]">
                SOMETHING
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-contact-line className="inline-block">
                GREAT.
              </span>
            </span>
          </h2>
          <p data-contact-support className="mt-7 max-w-lg text-sm leading-6 text-zinc-400">
            Have an opportunity or a project in mind? I’d be glad to hear from you.
          </p>
          <div data-contact-support className="mt-8 flex flex-wrap gap-3">
            {portfolio.email ? (
              <>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="focus-ring contact-link inline-flex items-center gap-2 bg-[#b8f36b] px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white"
                >
                  <Mail size={15} /> Get in touch <ArrowUpRight className="contact-arrow" size={14} />
                </a>
                <button onClick={copyEmail} className="focus-ring inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-[#b8f36b]">
                  {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy email'}
                </button>
              </>
            ) : (
              <span className="inline-flex items-center gap-2 border border-dashed border-white/20 px-4 py-3 text-sm text-zinc-400">
                <Mail size={15} /> Add your email in src/data/portfolio.ts
              </span>
            )}
            {portfolio.resume && (
              <Link href={portfolio.resume}  download className="focus-ring inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-sm text-zinc-300 hover:border-[#b8f36b]">
                <ArrowDownToLine size={15} /> Resume
              </Link>
            )}
          </div>
          <div data-contact-support className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-6">
            {portfolio.links.linkedin && (
              <a className="focus-ring social-link flex items-center gap-2 text-sm text-zinc-400 hover:text-white" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn <ArrowUpRight className="social-arrow" size={12} />
              </a>
            )}
            {portfolio.links.github && (
              <a className="focus-ring social-link flex items-center gap-2 text-sm text-zinc-400 hover:text-white" href={portfolio.links.github} target="_blank" rel="noreferrer">
                <Github size={15} /> GitHub <ArrowUpRight className="social-arrow" size={12} />
              </a>
            )}
            {!portfolio.links.linkedin && !portfolio.links.github && <p className="text-xs text-zinc-500">Add your social profile URLs in src/data/portfolio.ts.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

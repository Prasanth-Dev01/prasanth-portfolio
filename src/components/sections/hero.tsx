import Link from 'next/link';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { buttonVariants } from '@/components/ui/button';
export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pt-24 sm:min-h-[850px]">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="shell relative z-10 pb-20 pt-16">
        <div data-hero-kicker className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[.2em] text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-[#b8f36b] shadow-[0_0_12px_#b8f36b]" />
          {portfolio.availability}
        </div>
        <h1 className="display max-w-5xl">
          {portfolio.heroHeading.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-2">
              <span data-hero-line className={`inline-block ${index === 1 ? 'text-[#b8f36b]' : ''}`}>
                {line.endsWith('.') ? (
                  <>
                    {line.slice(0, -1)}
                    <span className="text-[#b8f36b]">.</span>
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p data-hero-body className="max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
            {portfolio.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link data-hero-action href="#projects" className={buttonVariants()}>
              Explore projects <ArrowDownRight size={16} />
            </Link>
            <Link data-hero-action href="#contact" className={buttonVariants({ variant: 'outline' })}>
              Contact me <ArrowUpRight size={15} />
            </Link>
            {portfolio.resume && (
              <a data-hero-action href={portfolio.resume} download className={buttonVariants({ variant: 'text' })}>
                <Download size={15} /> Resume
              </a>
            )}
          </div>
        </div>
        <div className="mt-20 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] uppercase tracking-wider text-white">
          <span>React.js</span>
          <span className="text-[#b8f36b]">/</span>
          <span>Next.js</span>
          <span className="text-[#b8f36b]">/</span>
          <span>TypeScript</span>
          <span className="ml-auto hidden items-center gap-2 sm:flex">
            Scroll to explore <ArrowDown size={14} />
          </span>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from 'lucide-react';
import { experience } from '@/data/experience';
import { portfolio } from '@/data/portfolio';
export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="shell grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20">
        <div data-section-head>
          <p data-label className="eyebrow">
            04 / Experience
          </p>
          <h2 data-heading className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
            Work history<span className="text-[#b8f36b]">.</span>
          </h2>
        </div>
        <div>
          {experience.map((item, index) => (
            <article key={`${item.role}-${index}`} data-experience-entry className="border-t border-white/15 py-7 first:border-t">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-medium">{item.role}</h3>
                <span className="text-xs text-zinc-500">{item.dates || 'Dates to be added'}</span>
              </div>
              <p className="mt-1 text-sm text-[#b8f36b]">{item.company || 'Company details configurable'}</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tag) => (
                  <span key={tag} className="text-xs text-zinc-500">
                    {tag}
                    <span className="ml-2 text-[#b8f36b]">/</span>
                  </span>
                ))}
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
                <ArrowUpRight size={13} /> {portfolio.experience} of frontend development experience
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

export function Projects() {
  const [active, setActive] = useState('All');
  const root = useRef<HTMLDivElement>(null);
  const visible = active === 'All' ? projects : projects.filter((project) => project.category === active);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const cards = gsap.utils.toArray<HTMLElement>('[data-card]', root.current);
      gsap.fromTo(cards, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.42, stagger: 0.045, ease: 'power2.out', clearProps: 'transform,opacity', overwrite: true });
    },
    { scope: root, dependencies: [active], revertOnUpdate: true },
  );

  return (
    <section id="projects" className="section-pad">
      <div className="shell">
        <div data-section-head className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p data-label className="eyebrow">
              02 / Selected work
            </p>
            <h2 data-heading className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
              Projects<span className="text-[#b8f36b]">.</span>
            </h2>
          </div>
          <p data-copy className="max-w-sm text-sm leading-6 text-zinc-400">
            Sample concepts for visual direction only. These are demos, not verified client projects or claims about work history.
          </p>
        </div>
        <div data-project-filters className="mb-7 flex flex-wrap gap-2" aria-label="Filter demo projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`focus-ring border px-3 py-2 text-xs transition-colors ${active === filter ? 'border-[#b8f36b] bg-[#b8f36b] text-black' : 'border-white/15 text-zinc-400 hover:border-[#b8f36b]/60 hover:text-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div ref={root} className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:gap-y-10" aria-live="polite">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

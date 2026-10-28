'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowUpRight, Code2, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  const card = useRef<HTMLElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const arrow = useRef<SVGSVGElement>(null);
  const accent = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const safe = contextSafe ?? ((callback: () => void) => callback);
      const enter = safe(() => {
        gsap.to(image.current, { scale: 1.04, duration: 0.65, ease: 'power2.out', overwrite: true });
        gsap.to(overlay.current, { opacity: 1, duration: 0.35, overwrite: true });
        gsap.to(arrow.current, { x: 4, y: -4, duration: 0.25, ease: 'power2.out', overwrite: true });
        gsap.to(accent.current, { scaleX: 1, duration: 0.35, ease: 'power2.out', overwrite: true });
      });
      const leave = safe(() => {
        gsap.to(image.current, { scale: 1, duration: 0.7, ease: 'power2.out', overwrite: true });
        gsap.to(overlay.current, { opacity: 0, duration: 0.4, overwrite: true });
        gsap.to(arrow.current, { x: 0, y: 0, duration: 0.25, overwrite: true });
        gsap.to(accent.current, { scaleX: 0, duration: 0.3, overwrite: true });
      });
      const node = card.current;
      node?.addEventListener('pointerenter', enter);
      node?.addEventListener('pointerleave', leave);
      return () => {
        node?.removeEventListener('pointerenter', enter);
        node?.removeEventListener('pointerleave', leave);
      };
    },
    { scope: card },
  );

  return (
    <article ref={card} data-card className="group min-w-0">
      <div className="relative aspect-[1.55] overflow-hidden border border-white/10 bg-[#111] transition-colors duration-300 group-hover:border-[#b8f36b]/50 group-focus-within:border-[#b8f36b]/50">
        <Image ref={image} src={project.image} alt={`Demo concept preview: ${project.title}`} fill sizes="(max-width: 767px) 100vw, (max-width: 1180px) 50vw, 570px" className="object-cover" />
        <div ref={overlay} className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
          <span className="border border-white/20 bg-black/50 px-2 py-1 text-[10px] uppercase tracking-[.16em] text-white">Demo concept</span>
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-white/70">
            <Code2 size={14} />
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#b8f36b]" ref={accent} />
      </div>
      <div className="flex items-start justify-between gap-5 py-5">
        <div className="min-w-0">
          <h3 className="text-xl font-medium transition-colors duration-300 group-hover:text-[#b8f36b] group-focus-within:text-[#b8f36b]">{project.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="border border-white/10 px-2 py-1 text-[10px] text-zinc-400">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-1 flex shrink-0 items-center gap-3">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Open repository for ${project.title}`} className="focus-ring text-zinc-400 transition-colors hover:text-white">
              <Github size={17} />
            </a>
          )}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open demo for ${project.title}`} className="focus-ring text-[#b8f36b]">
              <ArrowUpRight ref={arrow} size={20} />
            </a>
          ) : (
            <span aria-label="Demo link not configured" title="Demo link not configured" className="text-zinc-600">
              <ArrowUpRight ref={arrow} size={20} />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

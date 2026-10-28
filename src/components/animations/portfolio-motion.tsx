'use client';
import { type ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from('[data-hero-kicker]', { y: 10, scale: 0.96, opacity: 0, duration: 0.46 })
        .from('[data-hero-line]', { yPercent: 105, opacity: 0, duration: 0.7, stagger: 0.095 }, '-=0.18')
        .from('[data-hero-body]', { y: 13, opacity: 0, duration: 0.48 }, '-=0.22')
        .from('[data-hero-action]', { y: 9, opacity: 0, duration: 0.36, stagger: 0.075 }, '-=0.2');
      gsap.to('.hero-orbit', { x: 8, y: -14, duration: 3.2, ease: 'sine.inOut', repeat: -1, yoyo: true });

      gsap.utils.toArray<HTMLElement>('[data-section-head]').forEach((head) => {
        const label = head.querySelector<HTMLElement>('[data-label]');
        const heading = head.querySelector<HTMLElement>('[data-heading]');
        const copy = head.querySelector<HTMLElement>('[data-copy]');
        const tl = gsap.timeline({ scrollTrigger: { trigger: head, start: 'top 86%', once: true } });
        if (label) tl.from(label, { y: 12, opacity: 0, duration: 0.4, ease: 'power2.out' });
        if (heading) tl.from(heading, { y: 22, opacity: 0, duration: 0.58, ease: 'power3.out' }, '-=0.16');
        if (copy) tl.from(copy, { y: 12, opacity: 0, duration: 0.42, ease: 'power2.out' }, '-=0.22');
      });
      gsap.utils.toArray<HTMLElement>('[data-label]').forEach((label) => {
        if (label.closest('[data-section-head], [data-about-content]')) return;
        gsap.from(label, { y: 10, opacity: 0, duration: 0.38, ease: 'power2.out', scrollTrigger: { trigger: label, start: 'top 88%', once: true } });
      });

      gsap.utils.toArray<HTMLElement>('[data-about-content]').forEach((el) =>
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.62,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        }),
      );
      gsap.utils.toArray<HTMLElement>('[data-skill-row]').forEach((row) => {
        const tags = row.querySelectorAll<HTMLElement>('[data-skill-tag]');
        gsap.from(row, { y: 17, opacity: 0, duration: 0.52, ease: 'power2.out', scrollTrigger: { trigger: row, start: 'top 88%', once: true } });
        gsap.from(tags, { y: 8, opacity: 0, duration: 0.34, stagger: 0.035, delay: 0.16, ease: 'power2.out', scrollTrigger: { trigger: row, start: 'top 88%', once: true } });
      });
      gsap.utils.toArray<HTMLElement>('[data-experience-entry]').forEach((entry) =>
        gsap.from(entry, {
          x: 16,
          opacity: 0,
          duration: 0.58,
          ease: 'power2.out',
          scrollTrigger: { trigger: entry, start: 'top 86%', once: true },
        }),
      );
      gsap.utils.toArray<HTMLElement>('[data-contact-line]').forEach((line, index) =>
        gsap.from(line, {
          yPercent: 75,
          opacity: 0,
          duration: 0.62,
          delay: index * 0.07,
          ease: 'power3.out',
          scrollTrigger: { trigger: line, start: 'top 92%', once: true },
        }),
      );
      gsap.utils.toArray<HTMLElement>('[data-contact-support]').forEach((el) =>
        gsap.from(el, {
          y: 12,
          opacity: 0,
          duration: 0.45,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        }),
      );
    },
    { scope: root },
  );

  return (
    <main ref={root} className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <span className="hero-orbit absolute right-[12%] top-[32%] h-2 w-2 rounded-full bg-[#b8f36b] shadow-[0_0_12px_#b8f36b]" />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
}

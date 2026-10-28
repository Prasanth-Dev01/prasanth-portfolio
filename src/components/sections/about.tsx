import { portfolio } from '@/data/portfolio';
export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="shell grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20">
        <div data-about-content>
          <p data-label className="eyebrow">
            01 / A little about me
          </p>
          <p className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
            <span className="about-spark h-1.5 w-1.5 rounded-full bg-[#b8f36b]" />
            Thoughtful interfaces.
            <br />
            Reliable foundations.
          </p>
        </div>
        <div>
          <h2 data-about-content className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            I’m a frontend developer focused on <span className="text-[#b8f36b]">maintainable, responsive web applications.</span>
          </h2>
          <p data-about-content className="mt-7 max-w-2xl text-base leading-7 text-zinc-400">
            {portfolio.about}
          </p>
          <div data-about-content className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm text-zinc-300">
            <span>Responsive by default</span>
            <span>Reusable components</span>
            <span>Accessible interactions</span>
            <span>API-connected products</span>
          </div>
        </div>
      </div>
    </section>
  );
}

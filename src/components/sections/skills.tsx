import { skillGroups } from '@/data/skills';
export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="shell">
        <div data-section-head className="mb-12">
          <p data-label className="eyebrow">
            03 / Tools of the trade
          </p>
          <h2 data-heading className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
            Skills &amp; tools<span className="text-[#b8f36b]">.</span>
          </h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {skillGroups.map((group, index) => (
            <div key={group.title} data-skill-row className="grid gap-5 py-7 md:grid-cols-[.55fr_1.45fr] md:gap-10">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-[#b8f36b]">0{index + 1}</span>
                <h3 className="text-sm text-zinc-300">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.skills.map((skill) => (
                  <li data-skill-tag key={skill} className="border border-white/10 px-3 py-2 text-xs text-zinc-400 transition-colors hover:border-[#b8f36b]/50 hover:text-white">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

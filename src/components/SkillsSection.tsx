import { PORTFOLIO_DATA } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-[#E5E3DC] bg-[#FAF9F6] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            id="skills-heading"
            className="font-display text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl"
          >
            Skills
          </h2>
          <p className="mt-3 text-base text-[#475569]">
            Core languages and web technologies I work with while building projects and studying computer science.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PORTFOLIO_DATA.skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-[#E5E3DC] bg-white p-7 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-[#111827]">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#57606F]">
                {group.summary}
              </p>

              <ul className="mt-6 divide-y divide-[#E5E3DC] border-t border-[#E5E3DC]">
                {group.items.map((skill) => (
                  <li key={skill.name} className="py-4 first:pt-5 last:pb-0">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-base font-semibold text-[#1B365D]">
                        {skill.name}
                      </span>
                      <span className="text-sm leading-relaxed text-[#475569]">
                        {skill.detail}
                      </span>
                    </div>
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

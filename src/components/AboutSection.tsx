import { PORTFOLIO_DATA } from '../data/portfolio';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-[#E5E3DC] bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2
              id="about-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl"
            >
              About Me
            </h2>
            <p className="mt-2 text-sm text-[#57606F]">
              Background and learning goals
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-[65ch] text-base leading-relaxed text-[#334155] sm:text-lg sm:leading-[1.75]">
              {PORTFOLIO_DATA.profile.aboutParagraph}
            </p>

            {/* Clean unboxed factual summary separated by subtle hairline divider */}
            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-[#E5E3DC] pt-8 sm:grid-cols-3">
              {PORTFOLIO_DATA.profile.highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium tracking-wide text-[#57606F]">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-[#111827]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

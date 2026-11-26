import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Typography Hierarchy & Primary CTA */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="text-sm font-medium tracking-wide text-[#2F5586]">
            {PORTFOLIO_DATA.profile.tagline}
          </p>

          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            {PORTFOLIO_DATA.profile.name}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
            {PORTFOLIO_DATA.profile.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-[#1B365D] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#142947] transition-colors min-h-[44px]"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#about"
              className="whitespace-nowrap shrink-0 py-2 text-sm font-medium text-[#1B365D] underline-offset-4 hover:underline transition-colors"
            >
              Read about me
            </a>
          </div>
        </div>

        {/* Right Column: Geometric Lattice Visual Element */}
        <div className="lg:col-span-6">
          <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-[#E5E3DC] bg-[#F3F2EE]">
            {!imageError ? (
              <img
                src="/src/assets/images/hero_ml_lattice_1795666097340.jpg"
                alt="Minimalist geometric lattice illustration in deep navy and slate blue on warm off-white paper representing Artificial Intelligence and Machine Learning structures"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-full w-full object-cover aspect-[4/3] lg:aspect-auto"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-full min-h-[320px] w-full items-center justify-center bg-gradient-to-br from-[#FAF9F6] via-[#F3F2EE] to-[#E8ECEF] p-8"
              >
                <svg
                  viewBox="0 0 320 240"
                  className="h-56 w-full max-w-xs text-[#1B365D]"
                  fill="none"
                >
                  <circle cx="64" cy="70" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="64" cy="170" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="160" cy="48" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="160" cy="120" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="160" cy="192" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="256" cy="120" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M69 70L155 48M69 70L154 120M69 170L154 120M69 170L155 192M165 48L251 120M166 120L251 120M165 192L251 120"
                    stroke="currentColor"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

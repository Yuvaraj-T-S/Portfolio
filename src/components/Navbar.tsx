import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-full border border-[#E5E3DC] bg-white/95 px-5 py-2.5 shadow-[0_2px_12px_rgba(17,24,39,0.04)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single-element brand wordmark */}
          <a
            href="#home"
            className="whitespace-nowrap shrink-0 font-display text-base font-semibold tracking-tight text-[#111827] hover:text-[#1B365D] transition-colors"
          >
            {PORTFOLIO_DATA.profile.name}
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap shrink-0 text-sm font-medium text-[#475569] hover:text-[#1B365D] underline-offset-4 hover:underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single primary action (desktop) + mobile menu toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PORTFOLIO_DATA.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yuvaraj T S on GitHub (opens in a new tab)"
              className="hidden md:inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full bg-[#1B365D] px-4 py-2 text-xs font-semibold text-white hover:bg-[#142947] transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex md:hidden items-center justify-center rounded-full p-2.5 text-[#111827] hover:bg-[#F3F2EE] transition-colors min-h-[44px] min-w-[44px]"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="mx-auto mt-2 max-w-5xl rounded-2xl border border-[#E5E3DC] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.06)] md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-[#111827] hover:bg-[#F3F2EE] hover:text-[#1B365D] transition-colors min-h-[44px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 mt-1 border-t border-[#E5E3DC]">
              <a
                href={PORTFOLIO_DATA.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl bg-[#1B365D] px-4 py-3 text-sm font-semibold text-white hover:bg-[#142947] transition-colors min-h-[44px]"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

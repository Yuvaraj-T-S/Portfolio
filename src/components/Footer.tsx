import { PORTFOLIO_DATA } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-[#E5E3DC] bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <p className="text-sm text-[#57606F]">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}
        </p>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-sm text-[#475569]">
          <a href="#home" className="hover:text-[#1B365D] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#1B365D] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#1B365D] transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#1B365D] transition-colors">
            Projects
          </a>
          <a
            href={PORTFOLIO_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1B365D] transition-colors"
          >
            GitHub
          </a>
          {PORTFOLIO_DATA.contact.linkedinUrl && (
            <a
              href={PORTFOLIO_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1B365D] transition-colors"
            >
              LinkedIn
            </a>
          )}
          {PORTFOLIO_DATA.contact.email && (
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="hover:text-[#1B365D] transition-colors"
            >
              Email
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}

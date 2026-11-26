import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, type ProjectCategory, type ProjectItem } from '../data/portfolio';

const FILTER_OPTIONS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Repositories' },
  { id: 'web', label: 'Web & TypeScript' },
  { id: 'systems', label: 'Python & C' },
  { id: 'mobile', label: 'Mobile' },
];

interface GitHubRepoResponse {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

function inferCategory(language: string | null): Exclude<ProjectCategory, 'all'> {
  const lang = (language || '').toLowerCase();
  if (lang === 'dart' || lang === 'kotlin' || lang === 'swift') return 'mobile';
  if (lang === 'c' || lang === 'c++' || lang === 'python') return 'systems';
  return 'web';
}

function formatMonthYear(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<ProjectItem[]>(PORTFOLIO_DATA.projects);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  useEffect(() => {
    const controller = new AbortController();

    async function syncGitHubRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${PORTFOLIO_DATA.contact.githubHandle}/repos?sort=updated&per_page=30`,
          { signal: controller.signal }
        );
        if (!response.ok) return;

        const repos: GitHubRepoResponse[] = await response.json();
        if (!Array.isArray(repos) || repos.length === 0) return;

        const curatedByName = new Map(
          PORTFOLIO_DATA.projects.map((item) => [item.name.toLowerCase(), item])
        );

        const merged: ProjectItem[] = repos
          .filter((repo) => !repo.fork)
          .map((repo) => {
            const existing = curatedByName.get(repo.name.toLowerCase());
            const updatedLabel = formatMonthYear(repo.updated_at) || existing?.updatedAt || 'Recent';

            return {
              id: existing?.id || String(repo.id),
              name: repo.name,
              language: existing?.language || repo.language || 'Repository',
              updatedAt: updatedLabel,
              category: existing?.category || inferCategory(repo.language),
              description:
                repo.description?.trim() ||
                existing?.description ||
                'Public GitHub repository — view source code and files on GitHub.',
              repoUrl: repo.html_url,
              liveUrl: repo.homepage?.trim() || existing?.liveUrl,
            };
          });

        if (merged.length > 0) {
          setProjects(merged);
        }
      } catch {
        // Silently retain curated fallback list if offline or rate-limited
      }
    }

    syncGitHubRepos();
    return () => controller.abort();
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-[#E5E3DC] bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="projects-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl"
            >
              Projects
            </h2>
            <p className="mt-3 text-base text-[#475569]">
              Public repositories from{' '}
              <a
                href={PORTFOLIO_DATA.contact.githubReposUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1B365D] underline underline-offset-4 hover:text-[#142947]"
              >
                github.com/{PORTFOLIO_DATA.contact.githubHandle}
              </a>
              , showcasing hands-on learning across web development, Python, and C.
            </p>
          </div>

          {/* Interactive category filter buttons */}
          <div
            role="group"
            aria-label="Filter repositories by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-[#F3F2EE] p-1 self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveFilter(option.id)}
                  aria-pressed={isSelected}
                  className={`whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors min-h-[36px] ${
                    isSelected
                      ? 'bg-white text-[#111827] shadow-xs'
                      : 'text-[#475569] hover:text-[#111827]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Repository grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-[#E5E3DC] bg-[#FAF9F6] p-6 transition-colors hover:border-[#CBD5E1]"
            >
              <div>
                {/* Clean unboxed metadata row */}
                <div className="flex items-center gap-2 font-mono text-xs text-[#57606F] tabular-nums">
                  <span>{project.language}</span>
                  <span aria-hidden="true">·</span>
                  <span>Updated {project.updatedAt}</span>
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-[#111827]">
                  {project.name}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-[#E5E3DC] pt-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub (opens in a new tab)`}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-semibold text-[#1B365D] hover:text-[#142947] underline-offset-4 hover:underline"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo for ${project.name} (opens in a new tab)`}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-medium text-[#475569] hover:text-[#111827] underline-offset-4 hover:underline"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <a
            href={PORTFOLIO_DATA.contact.githubReposUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-medium text-[#1B365D] hover:bg-[#F3F2EE] transition-colors min-h-[44px]"
          >
            <span>Browse all repositories on GitHub</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

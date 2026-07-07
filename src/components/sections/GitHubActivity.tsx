import { ArrowUpRight, GitBranch, Star, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { useGitHubStats } from "@/hooks/use-github-stats";
import { profile } from "@/data/profile";

/** Accent hex (no #) for the contribution-graph SVG service. */
const CHART_COLOR = "478CFF";

export function GitHubActivity() {
  const { data, isLoading, isError } = useGitHubStats();

  return (
    <section id="github" className="section-padding relative">
      <div className="container">
        <SectionHeading
          eyebrow="Open Source"
          title="Live from GitHub"
          description="Pulled straight from the GitHub API — repositories, languages, and a year of contributions."
        />

        <div className="mx-auto max-w-5xl space-y-5">
          {/* Stat row */}
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: GitBranch,
                value: isLoading ? "…" : isError ? "30+" : String(data!.publicRepos),
                label: "Public repositories",
              },
              {
                icon: Users,
                value: isLoading ? "…" : isError ? "—" : String(data!.languagesCount),
                label: "Languages used",
              },
              {
                icon: Star,
                value: isLoading || isError ? "—" : (data!.topLanguages[0]?.name ?? "—"),
                label: "Top language",
              },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <article className="glass shadow-premium flex items-center gap-4 rounded-3xl p-6">
                  <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                    <stat.icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Language distribution */}
          {data && data.topLanguages.length > 0 && (
            <Reveal delay={0.1}>
              <article className="glass shadow-premium rounded-3xl p-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
                  Language distribution
                </h3>
                <div className="mt-4 flex h-2.5 overflow-hidden rounded-full bg-white/[0.05]" role="img" aria-label="Language distribution bar">
                  {data.topLanguages.map((lang, i) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percent}%`, opacity: 1 - i * 0.17 }}
                      className="bg-accent first:rounded-l-full"
                      title={`${lang.name} ${lang.percent}%`}
                    />
                  ))}
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {data.topLanguages.map((lang, i) => (
                    <li key={lang.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span
                        className="h-2 w-2 rounded-full bg-accent"
                        style={{ opacity: 1 - i * 0.17 }}
                        aria-hidden
                      />
                      {lang.name}
                      <span className="text-xs text-muted-foreground/70">{lang.percent}%</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )}

          {/* Contribution graph */}
          <Reveal delay={0.15}>
            <article className="glass shadow-premium rounded-3xl p-7">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
                  Contribution activity
                </h3>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  @{profile.githubUsername}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
              <img
                src={`https://ghchart.rshah.org/${CHART_COLOR}/${profile.githubUsername}`}
                alt={`GitHub contribution graph for ${profile.githubUsername}`}
                loading="lazy"
                className="w-full"
              />
            </article>
          </Reveal>

          {/* Recently pushed repos */}
          {data && data.recentRepos.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.recentRepos.map((repo, i) => (
                <Reveal key={repo.name} delay={i * 0.06} className="h-full">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass shadow-premium group flex h-full flex-col rounded-3xl p-6 transition-colors duration-300 hover:border-accent/30"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="truncate text-sm font-semibold text-foreground">{repo.name}</h3>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-2 line-clamp-2 flex-grow text-xs leading-relaxed text-muted-foreground">
                      {repo.description ?? "No description"}
                    </p>
                    <p className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                          {repo.language}
                        </span>
                      )}
                      <span>Updated {new Date(repo.pushed_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

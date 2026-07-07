import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Hammer } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { featuredProjects, type Project } from "@/data/projects";

function TechBadges({ tech, limit }: { tech: string[]; limit?: number }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  const rest = limit ? tech.length - limit : 0;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {shown.map((t) => (
        <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground">
          {t}
        </li>
      ))}
      {rest > 0 && (
        <li className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground">
          +{rest}
        </li>
      )}
    </ul>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <Reveal delay={0.05}>
      <SpotlightCard className="card-border-gradient shadow-premium group grid gap-8 overflow-hidden rounded-3xl p-7 md:p-10 lg:grid-cols-2">
        {/* Editorial index number */}
        <span
          className="index-number pointer-events-none absolute -top-4 right-6 text-[7rem] font-bold opacity-60 md:text-[9rem]"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Narrative */}
        <article className={`relative ${flipped ? "lg:order-2" : ""}`}>
          <div className="mb-5 flex items-center gap-3">
            <span className="glass flex h-12 w-12 items-center justify-center rounded-2xl">
              <project.icon className="h-5 w-5 text-accent" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">{project.title}</h3>
              <p className="text-sm text-accent-soft">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>

          {project.highlights && (
            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glow-accent-sm inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-soft"
              >
                <Globe className="h-4 w-4" aria-hidden />
                Live demo
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40"
              >
                <Github className="h-4 w-4" aria-hidden />
                Source code
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </motion.a>
            )}
            {!project.live && (
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                <Hammer className="h-3.5 w-3.5" aria-hidden />
                Live demo shipping soon
              </span>
            )}
          </div>
        </article>

        {/* Engineering depth */}
        <div className={`relative flex flex-col gap-4 ${flipped ? "lg:order-1" : ""}`}>
          {project.architecture && (
            <div className="rounded-2xl border border-white/[0.07] bg-background-secondary/70 p-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">Architecture</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.architecture}</p>
            </div>
          )}
          {project.challenge && project.solution && (
            <div className="rounded-2xl border border-white/[0.07] bg-background-secondary/70 p-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">Challenge → Solution</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.solution}</p>
            </div>
          )}
          <TechBadges tech={project.tech} />
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real-time infrastructure, 3D experiences, and AI-native platforms — five flagship builds, with the full catalog below."
        />

        {/* Featured */}
        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Everything else lives on GitHub */}
        <Reveal delay={0.15} className="mt-16 text-center">
          <p className="mb-5 text-sm text-muted-foreground">
            30+ more builds — real-time systems, AI products, and full-stack platforms — live on GitHub.
          </p>
          <motion.a
            href="https://github.com/namrathar-18?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="glow-accent-sm inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-soft"
          >
            <Github className="h-4 w-4" aria-hidden />
            Explore all projects on GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

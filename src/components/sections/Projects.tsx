import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Hammer, RotateCw } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { featuredProjects, type Project } from "@/data/projects";

function TechBadges({ tech, limit = 4 }: { tech: string[]; limit?: number }) {
  const shown = tech.slice(0, limit);
  const rest = tech.length - limit;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {shown.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground"
        >
          {t}
        </li>
      ))}
      {rest > 0 && (
        <li className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground">
          +{rest}
        </li>
      )}
    </ul>
  );
}

/**
 * A card that turns on hover, keyboard focus, or tap to reveal what the
 * project is, along with its live demo and source links.
 *
 * The rotation is pure CSS so it composites on the GPU and so that tabbing
 * to a link on the reverse face flips the card automatically (focus-within).
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Drives the flip on touch devices, which have no hover state
  const [tapped, setTapped] = useState(false);

  const faceBase =
    "absolute inset-0 flex flex-col rounded-3xl p-6 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]";

  return (
    <Reveal delay={index * 0.07} className="h-full">
      <div
        className="group h-full [perspective:1400px]"
        onClick={() => setTapped((v) => !v)}
      >
        <div
          data-flipped={tapped}
          className="relative h-full min-h-[21rem] w-full transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] [transform-style:preserve-3d] group-focus-within:[transform:rotateY(180deg)] group-hover:[transform:rotateY(180deg)] data-[flipped=true]:[transform:rotateY(180deg)] motion-reduce:transition-none"
        >
          {/* ---------- Front ---------- */}
          <div
            className={`${faceBase} card-border-gradient shadow-premium cursor-pointer group-focus-within:pointer-events-none group-hover:pointer-events-none`}
          >
            <span
              className="index-number pointer-events-none absolute right-5 top-3 text-6xl font-bold opacity-50"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="glass mb-5 flex h-12 w-12 items-center justify-center rounded-2xl">
              <project.icon className="h-5 w-5 text-accent" aria-hidden />
            </span>

            <h3 className="text-lg font-semibold leading-snug text-foreground">{project.title}</h3>
            <p className="mt-1 text-sm text-accent-soft">{project.subtitle}</p>

            <div className="mt-auto pt-6">
              <TechBadges tech={project.tech} />
              <p className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground/70">
                <RotateCw className="h-3 w-3" aria-hidden />
                Hover to see more
              </p>
            </div>
          </div>

          {/* ---------- Back ---------- */}
          <div
            className={`${faceBase} glass-strong shadow-premium border border-accent/25 [transform:rotateY(180deg)]`}
          >
            <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.summary ?? project.description}
            </p>

            <div className="mt-auto flex flex-col gap-2.5 pt-6">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-accent-sm inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-soft"
                >
                  <Globe className="h-4 w-4" aria-hidden />
                  Live demo
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                  <Hammer className="h-3.5 w-3.5" aria-hidden />
                  Demo shipping soon
                </span>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  Source code
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="bg-halo absolute inset-x-0 top-0 h-96" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Five flagship builds — real-time infrastructure, 3D experiences, and AI-native platforms. Hover any card to see what it does and open the live demo."
        />

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
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

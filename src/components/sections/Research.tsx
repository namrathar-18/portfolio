import { ArrowUpRight, BookOpen, FlaskConical, Target } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { research } from "@/data/research";

export function Research() {
  return (
    <section id="research" className="section-padding relative overflow-hidden">
      {/* Distinct backdrop for the research block */}
      <div className="bg-dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Research"
          title="Beyond shipping — studying systems"
          description="Active research in cloud systems, with a full implementation behind every claim."
        />

        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-5">
          {/* Main paper */}
          <Reveal className="lg:col-span-3">
            <article className="glass shadow-premium relative h-full overflow-hidden rounded-3xl p-8">
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
                aria-hidden
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-soft">
                <FlaskConical className="h-3 w-3" aria-hidden />
                Current work
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-snug text-foreground">{research.headline}</h3>
              <p className="mt-1 text-sm font-medium text-accent-soft">{research.status}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{research.summary}</p>

              <ul className="mt-6 space-y-2.5">
                {research.contributions.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>

              <a
                href={research.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-soft"
              >
                Paper & implementation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </article>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* Interests */}
            <Reveal delay={0.1}>
              <article className="glass shadow-premium rounded-3xl p-7">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-accent-soft">
                  <Target className="h-4 w-4" aria-hidden />
                  Research interests
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {research.interests.map((interest) => (
                    <li key={interest} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {interest}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* Publications + future */}
            <Reveal delay={0.2}>
              <article className="glass shadow-premium rounded-3xl p-7">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-accent-soft">
                  <BookOpen className="h-4 w-4" aria-hidden />
                  Publications
                </h3>
                <ul className="mt-4 space-y-3">
                  {research.publications.map((pub) => (
                    <li key={pub.title}>
                      <p className="text-sm font-medium text-foreground">{pub.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {pub.venue} · {pub.year}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/[0.07] pt-4 text-sm leading-relaxed text-muted-foreground">
                  {research.futureGoals}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

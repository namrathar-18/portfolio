import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { experience } from "@/data/experience";

const badgeStyles: Record<string, string> = {
  Current: "border-accent/40 bg-accent/10 text-accent-soft",
  Internship: "border-white/15 bg-white/[0.05] text-foreground/80",
  Leadership: "border-white/15 bg-white/[0.05] text-foreground/80",
  Education: "border-accent/30 bg-accent/[0.07] text-accent-soft",
  "Gold Medal": "border-accent/40 bg-accent/10 text-accent-soft",
};

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="bg-halo absolute inset-x-0 top-0 h-96" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Experience & Education"
          title="The journey so far"
          description="Adobe and EY internships, an MCA at CHRIST and a gold-medal BCA at Presidency, and leadership across two college-wide IT fests — most recent first."
        />

        <ol className="relative mx-auto max-w-3xl">
          {/* Rail */}
          <div
            className="absolute bottom-3 left-5 top-3 w-px bg-gradient-to-b from-accent/60 via-white/15 to-transparent sm:left-6"
            aria-hidden
          />

          {experience.map((item, index) => (
            <li key={item.title + item.period} className="relative pb-10 pl-16 last:pb-0 sm:pl-20">
              {/* Node */}
              <div
                className="glass absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-white/15 sm:left-6"
                aria-hidden
              >
                <item.icon className={`h-4 w-4 ${["Current", "Gold Medal"].includes(item.badge) ? "text-accent" : "text-muted-foreground"}`} />
              </div>

              <Reveal direction="right" delay={index * 0.08}>
                <article className="glass shadow-premium rounded-3xl p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium tracking-wide text-muted-foreground">{item.period}</span>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${badgeStyles[item.badge]}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-accent-soft">{item.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  {item.points && (
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

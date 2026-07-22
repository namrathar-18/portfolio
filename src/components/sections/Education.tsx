import { GraduationCap, Medal } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Two computer-applications degrees and a consistent record at the top of the class."
        />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.12} className="h-full">
              <article className="glass shadow-premium relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-colors duration-300 hover:border-accent/30">
                {item.honors && (
                  <div
                    className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
                    aria-hidden
                  />
                )}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="glass flex h-12 w-12 items-center justify-center rounded-2xl">
                    <GraduationCap className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <p className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {item.period}
                  </p>
                </div>

                <h3 className="text-lg font-semibold leading-snug text-foreground">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-accent-soft">{item.institution}</p>

                {item.honors && (
                  <p className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent-soft">
                    <Medal className="h-3.5 w-3.5" aria-hidden />
                    {item.honors}
                  </p>
                )}

                <div className="mt-5 border-t border-white/[0.07] pt-5">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Key coursework
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <li
                        key={course}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

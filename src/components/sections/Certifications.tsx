import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified learning"
        />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.12} className="h-full">
              <article className="glass shadow-premium flex h-full flex-col rounded-3xl p-7 transition-colors duration-300 hover:border-accent/30">
                <div className="flex items-start gap-4">
                  <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                    <BadgeCheck className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-foreground">{cert.title}</h3>
                    <p className="mt-1 text-sm text-accent-soft">{cert.issuer}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {cert.date}
                      {cert.credentialId && <> · Credential {cert.credentialId}</>}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="bg-halo absolute inset-x-0 top-0 h-96" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="About"
          title="Engineer, gold medalist, systems thinker"
          description={profile.bio}
        />

        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Portrait */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl"
                aria-hidden
              />
              <div className="glass shadow-premium relative overflow-hidden rounded-3xl p-2">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt={`Portrait of ${profile.name}`}
                  width={420}
                  height={420}
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className="glass-strong shadow-premium absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full px-5 py-2.5 text-sm">
                <span className="font-semibold text-foreground">{profile.role}</span>
                <span className="text-muted-foreground"> · {profile.location}</span>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <div className="space-y-5 lg:col-span-3">
            {profile.story.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <ul className="mt-2 flex flex-wrap gap-2" aria-label="Interests">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {profile.philosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <article className="glass shadow-premium group h-full rounded-3xl p-7 transition-colors duration-300 hover:border-accent/30">
                <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

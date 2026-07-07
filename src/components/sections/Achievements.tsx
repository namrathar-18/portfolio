import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="bg-halo absolute inset-x-0 top-0 h-96" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Achievements"
          title="Numbers that tell the story"
        />

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.1} direction="scale" className="h-full">
              <article className="glass shadow-premium group h-full rounded-3xl p-7 text-center transition-colors duration-300 hover:border-accent/30">
                <span className="glass mx-auto flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:border-accent/40">
                  <item.icon className="h-5 w-5 text-accent" aria-hidden />
                </span>
                <p className="font-display mt-5 text-2xl font-bold tracking-tight text-foreground">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-accent-soft">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

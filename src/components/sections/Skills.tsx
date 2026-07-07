import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="The stack behind the systems"
          description="Technologies I reach for when building production-grade, real-time, and AI-native applications."
        />

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.08} className="h-full">
              <article className="glass shadow-premium h-full rounded-3xl p-6 transition-colors duration-300 hover:border-accent/30">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 transition-colors duration-300 hover:border-accent/40"
                    >
                      <img
                        src={skill.icon}
                        alt=""
                        width={16}
                        height={16}
                        loading="lazy"
                        className={`h-4 w-4 object-contain ${skill.invert ? "brightness-200 invert" : ""}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <span className="whitespace-nowrap text-sm text-muted-foreground">{skill.name}</span>
                    </motion.li>
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

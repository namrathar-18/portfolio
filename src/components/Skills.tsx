import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 90, color: 'from-neon-yellow to-neon-green' },
      { name: 'Java', level: 85, color: 'from-neon-pink to-neon-purple' },
      { name: 'C', level: 75, color: 'from-neon-cyan to-neon-green' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React.js', level: 92, color: 'from-neon-cyan to-neon-purple' },
      { name: 'Node.js', level: 88, color: 'from-neon-green to-neon-cyan' },
      { name: 'Express.js', level: 85, color: 'from-neon-purple to-neon-pink' },
      { name: 'Next.js', level: 80, color: 'from-neon-pink to-neon-yellow' },
      { name: 'Tailwind CSS', level: 95, color: 'from-neon-cyan to-neon-green' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 88, color: 'from-neon-green to-neon-cyan' },
      { name: 'MySQL', level: 82, color: 'from-neon-purple to-neon-pink' },
      { name: 'Cassandra', level: 70, color: 'from-neon-yellow to-neon-green' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 90, color: 'from-neon-pink to-neon-purple' },
      { name: 'Postman', level: 85, color: 'from-neon-yellow to-neon-pink' },
      { name: 'VS Code', level: 95, color: 'from-neon-cyan to-neon-purple' },
      { name: 'RESTful APIs', level: 88, color: 'from-neon-green to-neon-cyan' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            My <span className="text-gradient-cyan">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold font-space mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

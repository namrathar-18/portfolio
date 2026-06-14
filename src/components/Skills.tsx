import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', logo: '📜', color: 'from-neon-yellow to-neon-green' },
      { name: 'Java', logo: '☕', color: 'from-neon-pink to-neon-purple' },
      { name: 'C', logo: '🔧', color: 'from-neon-cyan to-neon-green' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React.js', logo: '⚛️', color: 'from-neon-cyan to-neon-purple' },
      { name: 'Node.js', logo: '🟢', color: 'from-neon-green to-neon-cyan' },
      { name: 'Express.js', logo: '🚂', color: 'from-neon-purple to-neon-pink' },
      { name: 'Next.js', logo: '▲', color: 'from-neon-pink to-neon-yellow' },
      { name: 'Tailwind CSS', logo: '🎨', color: 'from-neon-cyan to-neon-green' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: '🍃', color: 'from-neon-green to-neon-cyan' },
      { name: 'MySQL', logo: '🐬', color: 'from-neon-purple to-neon-pink' },
      { name: 'Cassandra', logo: '💿', color: 'from-neon-yellow to-neon-green' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', logo: '🔀', color: 'from-neon-pink to-neon-purple' },
      { name: 'Postman', logo: '📮', color: 'from-neon-yellow to-neon-pink' },
      { name: 'VS Code', logo: '💻', color: 'from-neon-cyan to-neon-purple' },
      { name: 'RESTful APIs', logo: '🔌', color: 'from-neon-green to-neon-cyan' },
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
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-gradient-cyan">
            My Skills
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className={`relative glass p-4 rounded-xl text-center hover:border-primary/50 transition-all duration-300`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                      <div className="relative">
                        <div className="text-4xl mb-2">{skill.logo}</div>
                        <p className="font-medium text-sm">{skill.name}</p>
                      </div>
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

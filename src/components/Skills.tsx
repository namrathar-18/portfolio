import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` },
      { name: 'Java', icon: `${CDN}/java/java-original.svg` },
      { name: 'C', icon: `${CDN}/c/c-original.svg` },
      { name: 'SQL', icon: `${CDN}/mysql/mysql-original.svg` },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: `${CDN}/react/react-original.svg` },
      { name: 'Next.js', icon: `${CDN}/nextjs/nextjs-original.svg` },
      { name: 'Redux', icon: `${CDN}/redux/redux-original.svg` },
      { name: 'Tailwind CSS', icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'HTML5', icon: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${CDN}/css3/css3-original.svg` },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', icon: `${CDN}/express/express-original.svg`, invert: true },
      { name: 'Socket.io', icon: `${CDN}/socketio/socketio-original.svg`, invert: true },
      { name: 'JWT', icon: 'https://jwt.io/img/pic_logo.svg' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'MySQL', icon: `${CDN}/mysql/mysql-original.svg` },
      { name: 'Redis', icon: `${CDN}/redis/redis-original.svg` },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, invert: true },
      { name: 'Docker', icon: `${CDN}/docker/docker-original.svg` },
      { name: 'GitHub Actions', icon: `${CDN}/githubactions/githubactions-original.svg` },
      { name: 'Vercel', icon: `${CDN}/vercel/vercel-original.svg`, invert: true },
    ],
  },
  {
    title: 'Tools & Testing',
    skills: [
      { name: 'Git', icon: `${CDN}/git/git-original.svg` },
      { name: 'GitHub', icon: `${CDN}/github/github-original.svg`, invert: true },
      { name: 'Postman', icon: `${CDN}/postman/postman-original.svg` },
      { name: 'VS Code', icon: `${CDN}/vscode/vscode-original.svg` },
      { name: 'Jest', icon: `${CDN}/jest/jest-plain.svg` },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies I work with to build production-grade systems
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5 pl-1">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.08 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="group"
                  >
                    <div className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/50 hover:border-primary/50 hover:glow-purple transition-all duration-300 cursor-default">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-5 h-5 object-contain flex-shrink-0 ${(skill as any).invert ? 'invert brightness-200' : ''}`}
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
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

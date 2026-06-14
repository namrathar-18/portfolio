import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Music, Calendar, Stethoscope } from 'lucide-react';

const projects = [
  {
    title: 'Spotify Clone',
    description: 'A full-featured music streaming app built during EY internship with Spotify API integration, user authentication via Clerk, and seamless audio playback.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Clerk Auth', 'Spotify API'],
    icon: Music,
    gradient: 'from-neon-green via-neon-cyan to-neon-green',
    link: '#',
    github: '#',
  },
  {
    title: 'Eventify',
    description: 'Event management system designed for smooth coordination of college fests with features like event scheduling, participant registration, and admin controls.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    icon: Calendar,
    gradient: 'from-neon-purple via-neon-pink to-neon-purple',
    link: '#',
    github: '#',
  },
  {
    title: 'Medcare',
    description: 'Comprehensive hospital management system for handling patient and doctor records, appointment booking, billing management, and patient record updates.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'RESTful API'],
    icon: Stethoscope,
    gradient: 'from-neon-cyan via-neon-green to-neon-cyan',
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                  <project.icon className="w-7 h-7 text-background" />
                </div>

                <h3 className="text-2xl font-bold font-space mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

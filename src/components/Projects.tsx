import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Music, Calendar, Stethoscope, MessageSquare, Zap, Star } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Messaging Platform',
    description: 'Production-grade full-stack messaging app with WebSocket-based real-time communication, Redis pub/sub for scalable broadcasting across multiple server instances, JWT auth with refresh tokens, and Docker containerization.',
    tech: ['Node.js', 'Express.js', 'Socket.io', 'Redis', 'MongoDB', 'React', 'TypeScript', 'Docker', 'JWT'],
    icon: MessageSquare,
    gradient: 'from-neon-purple via-neon-pink to-neon-cyan',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    link: 'https://github.com/namrathar-18/messaging-platform',
    github: 'https://github.com/namrathar-18/messaging-platform',
    featured: true,
    badge: 'FEATURED',
    highlights: ['WebSocket real-time', 'Redis pub/sub', 'Dockerized', 'Deployed on Render'],
  },
  {
    title: 'Spotify Clone (Musify)',
    description: 'Full-featured music streaming app built during EY internship. Spotify API integration, Clerk authentication, real-time audio playback with queue management, and artist/album exploration.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Clerk Auth', 'Spotify API'],
    icon: Music,
    gradient: 'from-neon-green via-neon-cyan to-neon-green',
    glowColor: 'rgba(0, 204, 204, 0.5)',
    link: '#',
    github: '#',
    featured: false,
    badge: 'MERN',
    highlights: [],
  },
  {
    title: 'Eventify',
    description: 'Event management system for college fests — event scheduling, participant registration, admin controls, and real-time updates for attendees.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    icon: Calendar,
    gradient: 'from-neon-purple via-neon-pink to-neon-purple',
    glowColor: 'rgba(236, 72, 153, 0.5)',
    link: '#',
    github: '#',
    featured: false,
    badge: 'FULL STACK',
    highlights: [],
  },
  {
    title: 'Medcare',
    description: 'Hospital management system for patient/doctor records, appointment booking, billing, and record management. RESTful API with MySQL backend.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'RESTful API'],
    icon: Stethoscope,
    gradient: 'from-neon-cyan via-neon-green to-neon-cyan',
    glowColor: 'rgba(34, 197, 94, 0.5)',
    link: '#',
    github: '#',
    featured: false,
    badge: 'FULL STACK',
    highlights: [],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-purple"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 30}%` }}
            animate={{ y: [-20, 20, -20], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

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
            Real-world projects showcasing full-stack engineering, system design, and scalable architecture
          </p>
        </motion.div>

        {/* Featured Project — full width hero card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 group relative"
          >
            {/* Animated glow border */}
            <div
              className="absolute -inset-1 rounded-3xl opacity-60 blur-lg group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, rgba(168,85,247,0.8), rgba(236,72,153,0.8), rgba(0,204,204,0.8))` }}
            />
            <div className="relative glass rounded-3xl p-8 md:p-10 border border-neon-purple/40 hover:border-neon-purple/80 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple via-neon-pink to-neon-cyan flex items-center justify-center shadow-lg">
                      <featured.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white animate-pulse">
                        ★ {featured.badge}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full border border-neon-cyan/50 text-neon-cyan">
                        LIVE ON RENDER
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-space mb-3 text-gradient">{featured.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{featured.description}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {featured.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-neon-cyan">
                        <Zap className="w-4 h-4 text-neon-yellow flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-neon-purple/40 bg-neon-purple/10 text-neon-purple font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl border border-neon-purple/40 hover:border-neon-purple hover:glow-purple text-sm font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </motion.a>
                    <motion.a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-primary rounded-xl text-white text-sm font-semibold hover:glow-purple transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Right — architecture diagram */}
                <div className="md:w-72 flex-shrink-0">
                  <div className="glass rounded-2xl p-5 border border-neon-cyan/20">
                    <p className="text-xs text-neon-cyan font-semibold mb-4 uppercase tracking-widest">System Architecture</p>
                    <div className="space-y-3 text-sm">
                      {[
                        { layer: 'Frontend', stack: 'React + TypeScript', color: 'text-neon-cyan' },
                        { layer: 'Gateway', stack: 'Express.js + Socket.io', color: 'text-neon-purple' },
                        { layer: 'Pub/Sub', stack: 'Redis (multi-server)', color: 'text-neon-pink' },
                        { layer: 'Auth', stack: 'JWT + Refresh Tokens', color: 'text-neon-yellow' },
                        { layer: 'Database', stack: 'MongoDB + Mongoose', color: 'text-neon-green' },
                        { layer: 'Infra', stack: 'Docker + Render', color: 'text-muted-foreground' },
                      ].map((item, i) => (
                        <motion.div
                          key={item.layer}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.08 }}
                          className="flex items-center gap-3"
                        >
                          <span className="text-xs text-muted-foreground w-16 flex-shrink-0">{item.layer}</span>
                          <div className="h-px flex-1 bg-border/50" />
                          <span className={`text-xs font-medium ${item.color}`}>{item.stack}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${project.glowColor}, transparent)` }}
              />
              <div className="relative glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-background" />
                  </div>
                  <span className="px-2 py-1 text-xs font-bold rounded-full bg-muted text-muted-foreground">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-space mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/namrathar-18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full border border-neon-purple/40 hover:border-neon-purple hover:glow-purple font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            Explore all projects on GitHub
            <Star className="w-4 h-4 text-neon-yellow" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

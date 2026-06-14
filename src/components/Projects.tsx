import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Github, MessageSquare, Music, Zap, Brain,
  TrendingUp, Leaf, Code2, Users, Sparkles, FileText,
} from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Messaging Platform',
    description: 'Production-grade messaging app with WebSocket communication, Redis pub/sub for scalable multi-server broadcasting, JWT auth with refresh tokens, and Docker containerization.',
    tech: ['Node.js', 'Express.js', 'Socket.io', 'Redis', 'MongoDB', 'React', 'TypeScript', 'Docker', 'JWT'],
    icon: MessageSquare,
    gradient: 'from-neon-purple via-neon-pink to-neon-cyan',
    glowColor: '168,85,247',
    github: 'https://github.com/namrathar-18/messaging-platform',
  },
  {
    title: 'QuizLive — Multiplayer Quiz Platform',
    description: 'Kahoot-style real-time quiz platform supporting 100+ concurrent players per room and 20+ simultaneous rooms with sub-120ms broadcast latency. Leaderboard powered by Redis sorted sets.',
    tech: ['React', 'Node.js', 'Socket.io', 'Redis', 'MongoDB', 'JWT', 'Zustand'],
    icon: Zap,
    gradient: 'from-neon-yellow via-neon-green to-neon-cyan',
    glowColor: '250,204,21',
    github: 'https://github.com/namrathar-18/quiz-platform',
  },
  {
    title: 'AI Finance Tracker',
    description: 'MERN-stack finance tracker with RAG-based Q&A over your transactions, CSV/PDF bank statement ingestion, LLM-hybrid categorization, AES-256-GCM encryption at rest, and SSE streaming responses.',
    tech: ['Node.js', 'MongoDB', 'React', 'OpenAI', 'RAG', 'AES-256', 'SSE'],
    icon: TrendingUp,
    gradient: 'from-neon-green via-neon-cyan to-neon-purple',
    glowColor: '34,197,94',
    github: 'https://github.com/namrathar-18/finance-tracker',
  },
  {
    title: 'EcoRoute — AI Travel Planner',
    description: 'Carbon-aware multi-modal travel planner with LLM itinerary optimization, RAG sustainability assistant streamed via SSE, Leaflet maps, and Recharts carbon footprint dashboard.',
    tech: ['Node.js', 'LangChain.js', 'OpenAI', 'Pinecone', 'React', 'Leaflet', 'Docker'],
    icon: Leaf,
    gradient: 'from-neon-green via-neon-yellow to-neon-cyan',
    glowColor: '74,222,128',
    github: 'https://github.com/namrathar-18/eco-route',
  },
  {
    title: 'DevPulse — AI Code Review',
    description: 'AI-powered engineering platform that posts inline PR review comments, suggests top reviewers using ML, indexes PR history for natural-language Q&A, and surfaces real-time cycle-time metrics.',
    tech: ['Node.js', 'OpenAI', 'GitHub API', 'RAG', 'MongoDB', 'React', 'Socket.io'],
    icon: Code2,
    gradient: 'from-neon-cyan via-neon-purple to-neon-pink',
    glowColor: '0,204,204',
    github: 'https://github.com/namrathar-18/devpulse',
  },
  {
    title: 'Musify — Spotify Clone',
    description: 'Full-stack music streaming clone with 500+ cached Spotify tracks, playlist management, likes, 30-second preview streaming, and a polished Spotify-style UI. Built during EY internship.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Clerk Auth', 'Spotify API', 'Zustand'],
    icon: Music,
    gradient: 'from-neon-green via-neon-cyan to-neon-green',
    glowColor: '34,197,94',
    github: 'https://github.com/namrathar-18/musify',
  },
  {
    title: 'AuraAI Beauty',
    description: 'AI-powered beauty and skincare advisor built with Google Gemini. Analyzes skin type, recommends personalized routines, and provides ingredient-level breakdowns for beauty products.',
    tech: ['React', 'Vite', 'Google Gemini API', 'TypeScript', 'Tailwind CSS'],
    icon: Sparkles,
    gradient: 'from-neon-pink via-neon-purple to-neon-cyan',
    glowColor: '236,72,153',
    github: 'https://github.com/namrathar-18/auraai-beauty',
  },
  {
    title: 'Campus Placement Portal',
    description: 'Full-stack campus recruitment platform for students and placement officers — centralized job postings, application tracking, real-time notifications, and analytics dashboards.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST API'],
    icon: Users,
    gradient: 'from-neon-purple via-neon-pink to-neon-yellow',
    glowColor: '168,85,247',
    github: 'https://github.com/namrathar-18/campus-placement-portal',
  },
  {
    title: 'Dynamic Load Balancing Research',
    description: 'IEEE-format research paper with full implementation — a dynamic load balancing algorithm for multi-cloud environments with cost optimization, statistical analysis, and performance benchmarks.',
    tech: ['Python', 'Multi-Cloud', 'Load Balancing', 'Cost Optimization', 'IEEE Research'],
    icon: FileText,
    gradient: 'from-neon-cyan via-neon-green to-neon-purple',
    glowColor: '0,204,204',
    github: 'https://github.com/namrathar-18/research-paper',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,1), transparent)', top: '5%', left: '-10%' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, rgba(0,204,204,1), transparent)', bottom: '5%', right: '-5%' }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-gradient">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            9 projects spanning real-time systems, AI integrations, and full-stack engineering — all source code on GitHub.
          </p>
        </motion.div>

        {/* Uniform grid — all 9 projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, rgba(${project.glowColor},1), transparent)` }}
              />

              <div className="relative glass rounded-2xl p-6 h-full flex flex-col border border-border/50 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 flex-shrink-0`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold font-space mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* GitHub link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground group/link transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <Github className="w-4 h-4 group-hover/link:text-neon-purple transition-colors" />
                  <span className="group-hover/link:text-neon-purple transition-colors">View Source Code</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
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
            All repositories on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

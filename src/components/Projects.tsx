import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Github, MessageSquare, Music, Calendar, Stethoscope,
  Zap, Brain, TrendingUp, Leaf, Code2, Users, Sparkles,
} from 'lucide-react';

type Category = 'All' | 'Real-time' | 'AI-Powered' | 'Full Stack';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  github: string;
  category: Category[];
  featured?: boolean;
  highlights?: string[];
}

const projects: Project[] = [
  {
    title: 'Real-Time Messaging Platform',
    description: 'Production-grade messaging app with WebSocket communication, Redis pub/sub for scalable multi-server broadcasting, JWT auth with refresh tokens, and Docker containerization. Deployed on Render.',
    tech: ['Node.js', 'Express.js', 'Socket.io', 'Redis', 'MongoDB', 'React', 'TypeScript', 'Docker', 'JWT'],
    icon: MessageSquare,
    gradient: 'from-neon-purple via-neon-pink to-neon-cyan',
    glowColor: '168,85,247',
    github: 'https://github.com/namrathar-18/messaging-platform',
    category: ['Real-time', 'Full Stack'],
    featured: true,
    highlights: ['WebSocket real-time', 'Redis pub/sub', 'Docker + Render', 'JWT + refresh tokens'],
  },
  {
    title: 'QuizLive — Multiplayer Quiz Platform',
    description: 'Kahoot-style real-time quiz platform supporting 100+ concurrent players per room and 20+ simultaneous rooms with sub-120ms broadcast latency. Leaderboard powered by Redis sorted sets.',
    tech: ['React', 'Node.js', 'Socket.io', 'Redis', 'MongoDB', 'JWT', 'Zustand'],
    icon: Zap,
    gradient: 'from-neon-yellow via-neon-green to-neon-cyan',
    glowColor: '250,204,21',
    github: 'https://github.com/namrathar-18/quiz-platform',
    category: ['Real-time', 'Full Stack'],
    highlights: ['100+ concurrent players', 'Redis leaderboard', 'Sub-120ms latency'],
  },
  {
    title: 'AI Finance Tracker',
    description: 'MERN-stack finance tracker with RAG-based Q&A over your transactions, CSV/PDF bank statement ingestion, LLM-hybrid categorization, AES-256-GCM encryption at rest, and SSE streaming responses.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'OpenAI', 'RAG', 'AES-256', 'SSE'],
    icon: TrendingUp,
    gradient: 'from-neon-green via-neon-cyan to-neon-purple',
    glowColor: '34,197,94',
    github: 'https://github.com/namrathar-18/finance-tracker',
    category: ['AI-Powered', 'Full Stack'],
    highlights: ['RAG over transactions', 'AES-256 encryption', 'SSE streaming'],
  },
  {
    title: 'EcoRoute — AI Travel Planner',
    description: 'Carbon-aware multi-modal travel planner with LLM itinerary optimization, RAG sustainability assistant (streamed via SSE), Leaflet maps, and Recharts carbon footprint dashboard.',
    tech: ['Node.js', 'Express', 'LangChain.js', 'OpenAI', 'Pinecone', 'React', 'Leaflet', 'Docker'],
    icon: Leaf,
    gradient: 'from-neon-green via-neon-yellow to-neon-cyan',
    glowColor: '74,222,128',
    github: 'https://github.com/namrathar-18/eco-route',
    category: ['AI-Powered', 'Full Stack'],
    highlights: ['LangChain RAG', 'Carbon footprint calc', 'LLM itinerary optimizer'],
  },
  {
    title: 'DevPulse — AI Code Review',
    description: 'AI-powered engineering-productivity platform that posts inline PR review comments, suggests the two best human reviewers using ML, indexes PR history for natural-language Q&A, and surfaces real-time cycle-time metrics.',
    tech: ['Node.js', 'Express', 'OpenAI', 'GitHub API', 'RAG', 'MongoDB', 'React', 'Socket.io'],
    icon: Code2,
    gradient: 'from-neon-cyan via-neon-purple to-neon-pink',
    glowColor: '0,204,204',
    github: 'https://github.com/namrathar-18/devpulse',
    category: ['AI-Powered', 'Full Stack'],
    highlights: ['Inline PR comments', 'Reviewer suggestion ML', 'RAG over PR history'],
  },
  {
    title: 'Musify — Spotify Clone',
    description: 'Full-stack music streaming clone with 500+ cached Spotify tracks, playlist management, likes, 30-second preview streaming, and a polished Spotify-style UI built during EY internship.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Clerk Auth', 'Spotify API', 'Zustand'],
    icon: Music,
    gradient: 'from-neon-green via-neon-cyan to-neon-green',
    glowColor: '34,197,94',
    github: 'https://github.com/namrathar-18/musify',
    category: ['Full Stack'],
  },
  {
    title: 'AuraAI Beauty',
    description: 'AI-powered beauty and skincare advisor built with Google Gemini. Analyzes skin type, recommends personalized routines, and provides ingredient-level breakdowns for beauty products.',
    tech: ['React', 'Vite', 'Google Gemini API', 'TypeScript', 'Tailwind CSS'],
    icon: Sparkles,
    gradient: 'from-neon-pink via-neon-purple to-neon-cyan',
    glowColor: '236,72,153',
    github: 'https://github.com/namrathar-18/auraai-beauty',
    category: ['AI-Powered'],
  },
  {
    title: 'Campus Placement Portal',
    description: 'Full-stack campus recruitment platform for students and placement officers — centralized job postings, application tracking, notifications, and analytics all in one place.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST API'],
    icon: Users,
    gradient: 'from-neon-purple via-neon-pink to-neon-yellow',
    glowColor: '168,85,247',
    github: 'https://github.com/namrathar-18/campus-placement-portal',
    category: ['Full Stack'],
  },
];

const CATEGORIES: Category[] = ['All', 'Real-time', 'AI-Powered', 'Full Stack'];

const categoryIcons: Record<Category, React.ElementType> = {
  All: Zap,
  'Real-time': MessageSquare,
  'AI-Powered': Brain,
  'Full Stack': Code2,
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,1), transparent)', top: '10%', left: '-5%' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, rgba(0,204,204,1), transparent)', bottom: '10%', right: '-5%' }}
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-gradient">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            8 projects — real-time systems, AI integrations, and full-stack engineering. All source code on GitHub.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat];
            const isActive = activeFilter === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-primary border-transparent text-white glow-purple'
                    : 'glass border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {cat}
                <span className={`px-1.5 py-0.5 text-xs rounded-full ${isActive ? 'bg-white/20' : 'bg-muted'}`}>
                  {cat === 'All' ? projects.length : projects.filter(p => p.category.includes(cat)).length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured card — only visible when in filtered set */}
        <AnimatePresence mode="wait">
          {featured && (
            <motion.div
              key={featured.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8 group relative"
            >
              {/* Glow border */}
              <div
                className="absolute -inset-px rounded-3xl opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, rgba(${featured.glowColor},0.8), rgba(0,204,204,0.6), rgba(236,72,153,0.6))` }}
              />
              <div className="relative glass rounded-3xl p-7 md:p-10 border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Left */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${featured.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <featured.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-primary text-white animate-pulse">
                        ★ FEATURED
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold font-space mb-3 text-gradient">{featured.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{featured.description}</p>

                    {featured.highlights && (
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {featured.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-sm">
                            <Zap className="w-3.5 h-3.5 text-neon-yellow flex-shrink-0" />
                            <span className="text-neon-cyan">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl border border-neon-purple/40 hover:border-neon-purple hover:glow-purple text-sm font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      View Source Code on GitHub
                    </motion.a>
                  </div>

                  {/* Right — architecture */}
                  <div className="md:w-64 flex-shrink-0 w-full">
                    <div className="glass rounded-2xl p-5 border border-neon-cyan/20">
                      <p className="text-xs text-neon-cyan font-bold mb-4 uppercase tracking-widest">System Architecture</p>
                      <div className="space-y-2.5 text-xs">
                        {[
                          { layer: 'UI', stack: 'React + TypeScript', color: 'text-neon-cyan' },
                          { layer: 'API', stack: 'Express.js + Socket.io', color: 'text-neon-purple' },
                          { layer: 'Pub/Sub', stack: 'Redis (multi-server)', color: 'text-neon-pink' },
                          { layer: 'Auth', stack: 'JWT + Refresh Tokens', color: 'text-neon-yellow' },
                          { layer: 'DB', stack: 'MongoDB + Mongoose', color: 'text-neon-green' },
                          { layer: 'Infra', stack: 'Docker Compose', color: 'text-muted-foreground' },
                        ].map((item, i) => (
                          <motion.div
                            key={item.layer}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.07 }}
                            className="flex items-center gap-2"
                          >
                            <span className="text-muted-foreground w-10 flex-shrink-0">{item.layer}</span>
                            <div className="h-px flex-1 bg-border/40" />
                            <span className={`font-medium ${item.color} text-right`}>{item.stack}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid of remaining projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative"
              >
                {/* Card glow */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, rgba(${project.glowColor},1), transparent)` }}
                />
                <div className="relative glass rounded-2xl p-6 h-full flex flex-col border border-border/50 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon + categories */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {project.category.map(cat => (
                        <span key={cat} className="px-1.5 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-space mb-2 group-hover:text-gradient transition-all">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                  {/* Highlights if present */}
                  {project.highlights && (
                    <div className="mb-3 space-y-1">
                      {project.highlights.map(h => (
                        <div key={h} className="flex items-center gap-1.5 text-xs text-neon-cyan">
                          <Zap className="w-3 h-3 text-neon-yellow flex-shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
                    whileHover={{ x: 3 }}
                  >
                    <Github className="w-4 h-4 group-hover/link:text-neon-purple transition-colors" />
                    <span className="group-hover/link:text-neon-purple transition-colors">View Source Code</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
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

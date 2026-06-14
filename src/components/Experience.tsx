import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Trophy, Star, Cpu } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Technical Consultant Intern',
    organization: 'Adobe',
    period: 'June 2025 – Present',
    description: 'Working as a Technical Consultant Intern at Adobe — contributing to enterprise-grade product solutions, collaborating with cross-functional teams, and gaining hands-on exposure to world-class software engineering practices.',
    icon: Briefcase,
    color: 'neon-pink',
    badge: 'CURRENT',
  },
  {
    type: 'education',
    title: 'Master of Computer Applications (MCA)',
    organization: 'CHRIST (Deemed to be University), Bangalore',
    period: 'June 2025 – Present',
    description: 'Pursuing MCA with a GPA of 9.32/10, focusing on advanced software engineering, distributed systems, and cloud-native architectures.',
    icon: GraduationCap,
    color: 'neon-cyan',
    badge: 'CURRENT',
  },
  {
    type: 'work',
    title: 'AI Intern',
    organization: 'Skill Vertex',
    period: '2024',
    description: 'Completed an AI-focused internship, building hands-on experience with machine learning concepts, AI tooling, and integrating intelligent features into software applications.',
    icon: Cpu,
    color: 'neon-green',
    badge: 'INTERNSHIP',
  },
  {
    type: 'work',
    title: 'MERN Stack Intern',
    organization: 'EY Global Delivery Services',
    period: 'Dec 2024 – Jan 2025',
    description: 'Built Musify — a full-featured Spotify clone — using MongoDB, Express.js, React, Node.js, Clerk auth, and the Spotify Web API. Gained real-world experience in full-stack MERN development over 6 weeks.',
    icon: Briefcase,
    color: 'neon-purple',
    badge: 'INTERNSHIP',
  },
  {
    type: 'leadership',
    title: 'Event Head — IT Fest Kalopsia',
    organization: 'Presidency College, Bangalore',
    period: 'September 2024',
    description: "Led the organization of the college's annual IT fest — coordinating technical events, managing volunteer teams, and ensuring a seamless experience for 500+ participants.",
    icon: Star,
    color: 'neon-yellow',
    badge: 'LEADERSHIP',
  },
  {
    type: 'leadership',
    title: 'Event Head — IT Fest Aarohana',
    organization: 'Presidency College, Bangalore',
    period: 'October 2023',
    description: 'Organized and managed technical competitions, coding challenges, and workshops during the annual IT fest. Spearheaded end-to-end event planning and execution.',
    icon: Star,
    color: 'neon-yellow',
    badge: 'LEADERSHIP',
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'Presidency College (Autonomous), Bangalore',
    period: 'Aug 2022 – May 2025',
    description: 'Graduated as Gold Medalist with GPA 9.54/10 — top of the batch. Built a strong foundation in DSA, OOP, DBMS, OS, CN, and web development.',
    icon: Trophy,
    color: 'neon-yellow',
    badge: '🥇 GOLD MEDAL',
  },
];

const badgeColors: Record<string, string> = {
  'CURRENT': 'bg-neon-green/20 text-neon-green border-neon-green/40',
  'INTERNSHIP': 'bg-neon-purple/20 text-neon-purple border-neon-purple/40',
  'LEADERSHIP': 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/40',
  '🥇 GOLD MEDAL': 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/40',
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-gradient-cyan">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">My journey — most recent first</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-pink via-neon-purple via-neon-cyan to-neon-yellow transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform -translate-x-1/2 mt-7 z-10 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-primary animate-ping opacity-30" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-14' : 'md:pl-14'}`}>
                <motion.div
                  className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300 border border-border/50 hover:border-primary/40"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-${exp.color}/10 border border-${exp.color}/20`}>
                        <exp.icon className={`w-4 h-4 text-${exp.color}`} />
                      </div>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <span className={`px-2 py-0.5 text-xs font-bold rounded-full border ${badgeColors[exp.badge] ?? 'bg-muted text-muted-foreground border-border'}`}>
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-space mb-1">{exp.title}</h3>
                  <p className="text-neon-cyan text-sm font-medium mb-2">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

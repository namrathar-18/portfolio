import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'MERN Stack Intern',
    organization: 'EY Global Delivery Services',
    period: 'Dec 2024 – Jan 2025',
    description: 'Completed a 6-week internship focused on MERN Stack development. Built a Spotify Clone with MongoDB, Express.js, React.js, Node.js, Clerk authentication, and Spotify API integration.',
    icon: Briefcase,
    color: 'neon-purple',
  },
  {
    type: 'education',
    title: 'Master of Computer Applications',
    organization: 'CHRIST (Deemed to be University), Bangalore',
    period: 'June 2025 – Present',
    description: 'Pursuing advanced studies in computer applications with focus on modern web technologies and software development.',
    icon: GraduationCap,
    color: 'neon-cyan',
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Application',
    organization: 'Presidency College, Bangalore',
    period: 'Aug 2022 – May 2025',
    description: 'Graduated with 94.37% as Gold Medalist. Strong foundation in programming, databases, and web development.',
    icon: Trophy,
    color: 'neon-yellow',
  },
  {
    type: 'leadership',
    title: 'Event Head - IT Fest Kalopsia',
    organization: 'Presidency College, Bangalore',
    period: 'September 2024',
    description: 'Led the organization of college IT fest, managing teams and coordinating technical events.',
    icon: Briefcase,
    color: 'neon-pink',
  },
  {
    type: 'leadership',
    title: 'Event Head - IT Fest Aarohana',
    organization: 'Presidency College, Bangalore',
    period: 'October 2023',
    description: 'Organized and managed various technical competitions and workshops during the annual IT fest.',
    icon: Briefcase,
    color: 'neon-green',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            Experience & <span className="text-gradient-cyan">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-green transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-primary animate-ping opacity-20" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-${exp.color}/20`}>
                      <exp.icon className={`w-5 h-5 text-${exp.color}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold font-space mb-1">{exp.title}</h3>
                  <p className="text-neon-cyan text-sm mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
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

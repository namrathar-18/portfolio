import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: GraduationCap, label: 'MCA @ CHRIST', value: 'GPA 9.32', color: 'text-neon-purple' },
    { icon: Award, label: 'BCA Gold Medalist', value: 'GPA 9.54', color: 'text-neon-yellow' },
    { icon: Code, label: 'Intern @ Adobe', value: 'Tech Consultant', color: 'text-neon-cyan' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm pursuing <span className="text-gradient font-semibold">MCA</span> at 
              CHRIST University, Bangalore, with a strong foundation in computer applications. 
              I graduated as a <span className="text-gradient font-semibold">Gold Medalist</span> with 
              9.5 GPA in my Bachelor's degree from Presidency College.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in <span className="text-gradient font-semibold">Full Stack development</span> and
              system design — building scalable, production-grade applications. Currently working as a{' '}
              <span className="text-gradient font-semibold">Technical Consultant Intern @ Adobe</span>.
              Previously interned at EY Global Delivery Services, where I built Musify, a full-featured music streaming app.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have deep interest in <span className="text-gradient font-semibold">real-time architectures</span>,{' '}
              <span className="text-gradient font-semibold">distributed systems</span>, and backend engineering.
              I've built production projects with Redis pub/sub, WebSockets, Docker, and JWT-based auth systems.
              Beyond code, I've headed multiple college IT fests and thrive in leadership roles.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass p-4 rounded-xl text-center hover:glow-purple transition-all duration-300"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <p className="font-semibold text-sm">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

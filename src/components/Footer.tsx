import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            © 2025 Namratha R. Made with{' '}
            <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" /> and MERN Stack
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            <span className="text-gradient">Full Stack Developer</span> | Bangalore, India
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

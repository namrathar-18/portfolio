import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "@/components/motion/Typewriter";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { profile } from "@/data/profile";

// Three.js is the heaviest dependency — split it out of the critical bundle.
const HeroScene = lazy(() =>
  import("@/components/three/HeroScene").then((m) => ({ default: m.HeroScene })),
);

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Suspense fallback={<div className="bg-halo absolute inset-0" aria-hidden />}>
        <HeroScene />
      </Suspense>

      {/* Aurora wash behind the headline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute left-1/2 top-1/3 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[140px]"
          animate={{ x: ["-52%", "-44%", "-52%"], y: ["-8%", "6%", "-8%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[8%] top-[16%] h-72 w-72 rounded-full bg-accent-soft/[0.07] blur-[110px]"
          animate={{ y: [0, 32, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 py-32 text-center">
        <motion.p
          {...entrance(0.15)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
        >
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to SDE & full-stack roles — {profile.location}
        </motion.p>

        <motion.h1
          {...entrance(0.3)}
          className="text-shine mx-auto max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}
          <span className="text-accent">.</span>
          <span className="mt-4 block text-2xl font-medium tracking-normal text-muted-foreground sm:text-3xl md:text-4xl">
            {profile.headline}
          </span>
        </motion.h1>

        <motion.p {...entrance(0.5)} className="mx-auto mt-8 min-h-7 max-w-2xl text-base text-muted-foreground md:text-lg">
          <Typewriter texts={profile.taglines} />
        </motion.p>

        <motion.div {...entrance(0.65)} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href="#projects" ariaLabel="View my projects">
            View my work
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </MagneticButton>
          <MagneticButton href={profile.resumeUrl} variant="ghost" download ariaLabel="Download resume">
            <FileDown className="h-4 w-4" aria-hidden />
            Download resume
          </MagneticButton>
        </motion.div>

        <motion.ul {...entrance(0.8)} className="mt-12 flex items-center justify-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <motion.a
                href={href}
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={20} aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}

import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const items = [
  { name: "React", icon: `${CDN}/react/react-original.svg` },
  { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
  { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: "Three.js", icon: `${CDN}/threejs/threejs-original.svg`, invert: true },
  { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
  { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
  { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
  { name: "Socket.io", icon: `${CDN}/socketio/socketio-original.svg`, invert: true },
  { name: "Python", icon: `${CDN}/python/python-original.svg` },
  { name: "AWS", icon: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, invert: true },
  { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg`, invert: true },
  { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
];

/** Infinite logo ribbon separating the hero from the content. */
export function TechMarquee() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    >
      <div className={`flex w-max gap-14 pr-14 ${reducedMotion ? "" : "animate-marquee"}`}>
        {[...items, ...items].map((item, i) => (
          <span key={`${item.name}-${i}`} className="flex items-center gap-2.5 text-sm text-muted-foreground/70">
            <img
              src={item.icon}
              alt=""
              width={18}
              height={18}
              loading="lazy"
              className={`h-[18px] w-[18px] object-contain opacity-70 ${item.invert ? "brightness-200 invert" : ""}`}
            />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

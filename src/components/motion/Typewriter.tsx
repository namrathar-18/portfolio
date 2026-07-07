import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

interface TypewriterProps {
  texts: readonly string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}

/** Cycling type-and-delete effect; renders the first line statically for reduced motion. */
export function Typewriter({ texts, typeSpeed = 45, deleteSpeed = 24, holdMs = 2200 }: TypewriterProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = texts[index % texts.length];

  useEffect(() => {
    if (reducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && length === current.length) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => setLength((l) => l + (deleting ? -1 : 1)),
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [length, deleting, current, reducedMotion, texts.length, typeSpeed, deleteSpeed, holdMs]);

  if (reducedMotion) return <span>{texts[0]}</span>;

  return (
    <span aria-label={current}>
      {current.slice(0, length)}
      <span className="animate-pulse text-accent" aria-hidden>
        |
      </span>
    </span>
  );
}

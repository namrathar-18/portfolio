import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

/** Consistent premium section header: eyebrow chip, big title, optional lede. */
export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-14 md:mb-20 ${centered ? "text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-shine mt-5 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base text-muted-foreground md:text-lg ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

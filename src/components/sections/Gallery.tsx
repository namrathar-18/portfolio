import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { gallery, type GalleryItem } from "@/data/gallery";

/** Renders the photo, falling back to a neutral panel if the file isn't present yet. */
function GalleryPhoto({ item }: { item: GalleryItem }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-background-secondary px-6 text-center">
        <ImageIcon className="h-8 w-8 text-muted-foreground/30" aria-hidden />
        <span className="text-xs text-muted-foreground/50">{item.title}</span>
      </div>
    );
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}gallery/${item.file}`}
      alt={item.caption}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      // A missing file is served as the SPA fallback HTML with a 200, so the
      // load "succeeds" with no pixels — catch that too.
      onLoad={(e) => {
        if ((e.currentTarget as HTMLImageElement).naturalWidth === 0) setFailed(true);
      }}
      style={{ objectPosition: item.objectPosition ?? "center" }}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  );
}

export function Gallery() {
  const scroller = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = () => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="moments" className="section-padding relative overflow-hidden">
      <div className="container relative">
        <SectionHeading
          eyebrow="Moments"
          title="Milestones along the way"
          description="The gold medal, the internships, and the stages I've hosted from."
        />
      </div>

      <Reveal className="relative">
        {/* Arrows (desktop) */}
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Scroll gallery left"
          className="glass-strong absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-opacity duration-300 hover:border-accent/40 disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Scroll gallery right"
          className="glass-strong absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-opacity duration-300 hover:border-accent/40 disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>

        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
          aria-hidden
        />

        <ul
          ref={scroller}
          onScroll={updateArrows}
          tabIndex={0}
          aria-label="Photo gallery — scroll horizontally"
          className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 md:px-16"
        >
          {gallery.map((item) => (
            <li
              key={item.file}
              className="group relative w-[78vw] shrink-0 snap-center sm:w-[22rem] lg:w-[24rem]"
            >
              <figure className="card-border-gradient shadow-premium relative h-full overflow-hidden rounded-3xl">
                <div className="aspect-[3/4] overflow-hidden bg-background-secondary">
                  <GalleryPhoto item={item} />
                </div>

                {/* Caption overlay */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-16">
                  <span className="mb-2 inline-block rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-soft backdrop-blur-sm">
                    {item.year}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{item.caption}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

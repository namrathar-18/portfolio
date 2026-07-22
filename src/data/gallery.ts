export interface GalleryItem {
  /** File placed in public/gallery/ */
  file: string;
  title: string;
  caption: string;
  year: string;
  /**
   * Where to anchor the crop inside the frame. Portrait shots read best
   * centred; off-centre subjects need their side of the frame kept.
   */
  objectPosition?: string;
  /** Landscape shots get a wider frame so they aren't cropped to a sliver. */
  wide?: boolean;
}

export const gallery: GalleryItem[] = [
  {
    file: "gold-medal.jpeg",
    title: "Gold Medalist",
    caption: "Graduating first in the batch — BCA, Presidency College, Bangalore",
    year: "2025",
    objectPosition: "center 35%",
  },
  {
    file: "adobe.png",
    title: "Adobe",
    caption: "Technical Consultant Intern at Adobe, Bangalore",
    year: "2026",
    objectPosition: "center",
  },
  {
    file: "ey.png",
    title: "EY Global Delivery Services",
    caption: "MERN stack internship — building Musify end to end",
    year: "2025",
    // Near-square source crops horizontally; bias right so the subject isn't flush to the edge
    objectPosition: "68% 40%",
  },
  {
    file: "kalopsia.png",
    title: "Kalopsia",
    caption: "Event Head for the annual IT fest — 500+ participants",
    year: "2024",
    objectPosition: "center",
    wide: true,
  },
  {
    file: "aarohana.png",
    title: "Aarohana",
    caption: "Event Head — hosting the annual technical fest",
    year: "2023",
    objectPosition: "center 30%",
  },
];

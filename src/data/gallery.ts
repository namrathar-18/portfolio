export interface GalleryItem {
  /** File placed in public/gallery/ */
  file: string;
  title: string;
  caption: string;
  year: string;
  /**
   * Where to anchor the crop inside the frame. Portrait shots read best
   * centred; wide shots need the subject's side of the frame kept.
   */
  objectPosition?: string;
}

export const gallery: GalleryItem[] = [
  {
    file: "gold-medal.jpg",
    title: "Gold Medalist",
    caption: "Graduating first in the batch — BCA, Presidency College, Bangalore",
    year: "2025",
    objectPosition: "center 30%",
  },
  {
    file: "adobe.jpg",
    title: "Adobe",
    caption: "Technical Consultant Intern at Adobe, Bangalore",
    year: "2026",
    objectPosition: "center",
  },
  {
    file: "ey.jpg",
    title: "EY Global Delivery Services",
    caption: "MERN stack internship — building Musify end to end",
    year: "2025",
    objectPosition: "center",
  },
  {
    file: "kalopsia.jpg",
    title: "Kalopsia",
    caption: "Event Head for the annual IT fest — 500+ participants",
    year: "2024",
    // Wide stage shot: keep the right-hand side where the podium sits
    objectPosition: "75% center",
  },
  {
    file: "aarohana.jpg",
    title: "Aarohana",
    caption: "Event Head — hosting the annual technical fest",
    year: "2023",
    objectPosition: "center 25%",
  },
];

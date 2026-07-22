export interface GalleryItem {
  /** File placed in public/gallery/ */
  file: string;
  title: string;
  caption: string;
  year: string;
}

export const gallery: GalleryItem[] = [
  {
    file: "gold-medal.jpg",
    title: "Gold Medalist",
    caption: "Graduating first in the batch — BCA, Presidency College, Bangalore",
    year: "2025",
  },
  {
    file: "adobe.jpg",
    title: "Adobe",
    caption: "Technical Consultant Intern at Adobe, Bangalore",
    year: "2026",
  },
  {
    file: "ey.jpg",
    title: "EY Global Delivery Services",
    caption: "MERN stack internship — building Musify end to end",
    year: "2025",
  },
  {
    file: "kalopsia.jpg",
    title: "Kalopsia",
    caption: "Event Head for the annual IT fest — 500+ participants",
    year: "2024",
  },
  {
    file: "aarohana.jpg",
    title: "Aarohana",
    caption: "Event Head — hosting the annual technical fest",
    year: "2023",
  },
];

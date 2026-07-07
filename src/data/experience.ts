import type { LucideIcon } from "lucide-react";
import { Briefcase, Cpu, Star } from "lucide-react";

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  points?: string[];
  icon: LucideIcon;
  badge: "Current" | "Internship" | "Leadership";
}

export const experience: ExperienceItem[] = [
  {
    title: "Technical Consultant Intern",
    organization: "Adobe",
    period: "Apr 2026 — Present",
    description:
      "Working on enterprise-grade product solutions with cross-functional teams, with hands-on exposure to how software is engineered, consulted on, and shipped at scale.",
    points: [
      "Contribute to enterprise product solution engineering",
      "Collaborate across consulting, engineering, and customer teams",
      "Operate inside world-class delivery and code-quality practices",
    ],
    icon: Briefcase,
    badge: "Current",
  },
  {
    title: "MERN Stack Intern",
    organization: "EY Global Delivery Services",
    period: "Dec 2024 — Jan 2025",
    description:
      "Built Musify, a full-featured music streaming application, over a six-week engagement.",
    points: [
      "Full MERN build: MongoDB, Express, React, Node.js",
      "Clerk authentication and Spotify Web API integration",
      "500+ cached tracks, playlists, likes, preview streaming",
    ],
    icon: Briefcase,
    badge: "Internship",
  },
  {
    title: "Event Head — IT Fest Kalopsia",
    organization: "Presidency College, Bangalore",
    period: "Sep 2024",
    description:
      "Led the college's annual IT fest — coordinated technical events, managed volunteer teams, and delivered a seamless experience for 500+ participants.",
    icon: Star,
    badge: "Leadership",
  },
  {
    title: "Event Head — IT Fest Aarohana",
    organization: "Presidency College, Bangalore",
    period: "Oct 2023",
    description:
      "Owned end-to-end planning and execution of technical competitions, coding challenges, and workshops for the annual IT fest.",
    icon: Star,
    badge: "Leadership",
  },
  {
    title: "Artificial Intelligence Intern",
    organization: "Artifintel × Skill Vertex",
    period: "Feb 2023 — Mar 2023",
    description:
      "Completed live AI projects through Artifintel in association with Skill Vertex, working on applied machine-learning problems end to end. Certificate ID: RA226798.",
    icon: Cpu,
    badge: "Internship",
  },
];

import type { LucideIcon } from "lucide-react";
import { Medal, Briefcase, Users, FolderGit2 } from "lucide-react";

export interface Achievement {
  icon: LucideIcon;
  value: string;
  label: string;
  detail: string;
}

export const achievements: Achievement[] = [
  {
    icon: Medal,
    value: "Gold Medal",
    label: "BCA — Presidency College",
    detail: "Graduated first in the batch across the programme",
  },
  {
    icon: Briefcase,
    value: "Adobe & EY",
    label: "Internship experience",
    detail: "Technical consulting at Adobe; full-stack engineering at EY GDS",
  },
  {
    icon: Users,
    value: "500+",
    label: "Fest participants led",
    detail: "Headed two annual IT fests as Event Head",
  },
  {
    icon: FolderGit2,
    value: "30+",
    label: "Public repositories",
    detail: "Real-time systems, AI products, and full-stack builds",
  },
];

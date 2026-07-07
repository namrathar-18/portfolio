import type { LucideIcon } from "lucide-react";
import { Medal, GraduationCap, Users, FolderGit2 } from "lucide-react";

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
    detail: "Graduated first in the batch with a 9.54 GPA",
  },
  {
    icon: GraduationCap,
    value: "9.32 GPA",
    label: "MCA — CHRIST University",
    detail: "Consistent academic excellence at the master's level",
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

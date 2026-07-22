export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  honors?: string;
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "CHRIST (Deemed to be University), Bangalore",
    period: "2025 — 2027",
    coursework: [
      "Advanced Software Engineering",
      "Distributed Systems",
      "Cloud-Native Architecture",
      "Advanced DBMS",
      "Machine Learning",
    ],
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Presidency College (Autonomous), Bangalore",
    period: "2022 — 2025",
    honors: "Gold Medalist — top of the graduating batch",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
    ],
  },
];

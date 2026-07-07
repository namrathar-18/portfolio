export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    title: "Artificial Intelligence Training & Live Projects",
    issuer: "Artifintel × Skill Vertex",
    date: "Mar 2023",
    credentialId: "RA226798",
    skills: ["Artificial Intelligence", "Machine Learning", "Applied Projects"],
  },
  {
    title: "MERN Stack Internship Program",
    issuer: "EY Global Delivery Services",
    date: "Jan 2025",
    skills: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
  },
];

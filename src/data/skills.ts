const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export interface Skill {
  name: string;
  icon: string;
  /** White-on-dark logos need inverting */
  invert?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
      { name: "Java", icon: `${CDN}/java/java-original.svg` },
      { name: "C", icon: `${CDN}/c/c-original.svg` },
      { name: "SQL", icon: `${CDN}/azuresqldatabase/azuresqldatabase-original.svg` },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: `${CDN}/react/react-original.svg` },
      { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg`, invert: true },
      { name: "Redux", icon: `${CDN}/redux/redux-original.svg` },
      { name: "Tailwind CSS", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: "Three.js", icon: `${CDN}/threejs/threejs-original.svg`, invert: true },
      { name: "HTML5", icon: `${CDN}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${CDN}/css3/css3-original.svg` },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: "Express", icon: `${CDN}/express/express-original.svg`, invert: true },
      { name: "Socket.io", icon: `${CDN}/socketio/socketio-original.svg`, invert: true },
      { name: "REST APIs", icon: `${CDN}/openapi/openapi-original.svg` },
    ],
  },
  {
    title: "AI & Data",
    skills: [
      { name: "OpenAI APIs", icon: `${CDN}/openal/openal-original.svg`, invert: true },
      { name: "LangChain.js", icon: `${CDN}/nodejs/nodejs-plain.svg` },
      { name: "RAG Pipelines", icon: `${CDN}/graphql/graphql-plain.svg` },
      { name: "Python", icon: `${CDN}/python/python-original.svg` },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
      { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, invert: true },
      { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
      { name: "GitHub Actions", icon: `${CDN}/githubactions/githubactions-original.svg` },
      { name: "Vercel", icon: `${CDN}/vercel/vercel-original.svg`, invert: true },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Git", icon: `${CDN}/git/git-original.svg` },
      { name: "GitHub", icon: `${CDN}/github/github-original.svg`, invert: true },
      { name: "Postman", icon: `${CDN}/postman/postman-original.svg` },
      { name: "VS Code", icon: `${CDN}/vscode/vscode-original.svg` },
      { name: "Jest", icon: `${CDN}/jest/jest-plain.svg` },
      { name: "Vitest", icon: `${CDN}/vitest/vitest-original.svg` },
    ],
  },
];

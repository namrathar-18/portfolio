export const profile = {
  name: "Namratha R",
  firstName: "Namratha",
  role: "Full-Stack Engineer",
  headline: "I design and build scalable, real-time web systems.",
  taglines: [
    "Ex-Technical Consultant Intern @ Adobe",
    "Full-Stack Engineer · MERN · Redis · Docker",
    "MCA @ CHRIST University · GPA 9.32",
    "BCA Gold Medalist · GPA 9.54",
    "Building real-time, distributed systems",
  ],
  bio: "Full-stack engineer with a bias for production-grade systems: WebSockets, Redis pub/sub, containerized deployments, and clean, tested TypeScript. Interned as a Technical Consultant at Adobe; now an MCA candidate at CHRIST University, Bangalore.",
  location: "Bangalore, India",
  email: "namrp.18@gmail.com",
  phone: "+91 6360086591",
  phoneHref: "tel:+916360086591",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  github: "https://github.com/namrathar-18",
  githubUsername: "namrathar-18",
  linkedin: "https://www.linkedin.com/in/namratharp18/",
  story: [
    "My path into engineering started at Presidency College, Bangalore, where I graduated top of my batch as the BCA Gold Medalist with a 9.54 GPA. The medal mattered less than the habit it built: going deep on fundamentals like data structures, operating systems, databases, and networks until they stopped being exam topics and became tools.",
    "That depth turned into a fascination with systems that have to work in real time. I've since shipped a production-grade messaging platform on WebSockets and Redis pub/sub, a multiplayer quiz engine that holds 100+ concurrent players per room at sub-120ms latency, and AI-powered products that stream LLM responses over SSE.",
    "Most recently I interned at Adobe as a Technical Consultant, working on enterprise product solutions with cross-functional teams. Today I'm focused on my MCA at CHRIST University (GPA 9.32) and on shipping FleetTwin, RepoVerse, and FraudMesh. I care about the whole craft: architecture, DX, accessibility, and interfaces that feel considered.",
  ],
  philosophy: [
    {
      title: "Systems first",
      text: "A feature is only as good as the architecture underneath it. I design data flow, failure modes, and scaling paths before writing UI.",
    },
    {
      title: "Ship production-grade",
      text: "Auth done right, secrets encrypted, containers reproducible, latency measured. Side projects deserve production discipline too.",
    },
    {
      title: "Details are the product",
      text: "Sub-120ms broadcasts, keyboard navigation, honest empty states. The last 10% is what people actually feel.",
    },
  ],
  interests: [
    "Real-time architectures",
    "Distributed systems",
    "AI-native product engineering",
    "Cloud cost optimization",
    "Developer experience",
  ],
} as const;

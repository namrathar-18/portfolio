import type { LucideIcon } from "lucide-react";
import {
  MessageSquare,
  Zap,
  TrendingUp,
  Leaf,
  Code2,
  Music,
  Sparkles,
  Users,
  Repeat,
  Store,
  Boxes,
  Building2,
  ShieldAlert,
} from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  /** Extra depth shown on featured cards */
  architecture?: string;
  highlights?: string[];
  challenge?: string;
  solution?: string;
  tech: string[];
  icon: LucideIcon;
  /** Omit while the repository is still private / in build */
  github?: string;
  /** Hosted demo URL — renders a "Live demo" button when set */
  live?: string;
  status?: "In build";
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "fleettwin",
    title: "FleetTwin 3D",
    subtitle: "3D digital twin + AI ops copilot",
    description:
      "A real-time 3D digital twin of a warehouse: operational events stream onto a live Three.js scene while ML services forecast demand, flag anomalies, and optimize slotting — and an AI copilot answers questions by calling tools against live data, never fabricating numbers.",
    architecture:
      "Next.js + React Three Fiber twin connected over WebSockets to a Node gateway; Redis Streams fan events to a simulator, an ingest service, and FastAPI ML services. TimescaleDB holds telemetry, MongoDB holds inventory, pgvector powers the copilot's retrieval.",
    highlights: [
      "Live operational events rendered onto a 3D warehouse twin",
      "Forecasting, anomaly detection, and slotting as ML microservices",
      "Tool-calling RAG copilot grounded in live operational data",
    ],
    challenge:
      "Keeping the copilot truthful — an LLM asked about live operations will happily invent inventory counts.",
    solution:
      "Every answer is produced through tool calls against the live stores; the model narrates real query results instead of generating numbers, so answers stay auditable.",
    tech: ["Next.js", "React Three Fiber", "Node.js", "JWT Auth", "Groq LLM", "RAG", "FastAPI", "Redis Streams", "Docker"],
    icon: Boxes,
    github: "https://github.com/namrathar-18/fleet-twin",
    live: "https://fleet-twin.vercel.app",
    featured: true,
  },
  {
    slug: "repoverse",
    title: "RepoVerse 3D",
    subtitle: "Codebases as living 3D cities",
    description:
      "Paste a GitHub repo URL and watch it render as a 3D city — buildings are files, height is complexity, heat is churn, red glow is risk. An AI copilot that has actually read the code answers architecture questions with cited file paths, lighting up the buildings it references.",
    architecture:
      "A Next.js full-stack modular monolith: clone → parse → mine git history → embed pipeline with live progress, an InstancedMesh city holding 60 FPS at ~800 files, and a retrieval-grounded copilot whose every claim traces to a tool result.",
    highlights: [
      "Buildings = files, height = complexity, heat = churn, glow = risk",
      "Copilot cites real file paths — it cannot invent one",
      "Chat and 3D are wired: referenced files pulse in the city",
    ],
    challenge:
      "Making an LLM's answers about an arbitrary codebase verifiable rather than plausible-sounding.",
    solution:
      "The copilot only speaks from retrieved code chunks and static-analysis results; cited paths are validated against the parsed file graph before rendering, and each citation drives the 3D highlight.",
    tech: ["Next.js", "TypeScript", "Three.js", "InstancedMesh", "Embeddings", "RAG", "LLM tool-calling", "Git mining"],
    icon: Building2,
    github: "https://github.com/namrathar-18/repoverse",
    live: "https://repoverse-nu.vercel.app",
    featured: true,
  },
  {
    slug: "fraudmesh",
    title: "FraudMesh",
    subtitle: "Real-time payment fraud detection",
    description:
      "A streaming fraud platform that scores every payment in under 100 ms — rules plus LightGBM over a Redis online feature store — detects fraud rings with graph community detection, explains every block with SHAP, and gives analysts an AI copilot that narrates decisions in plain language.",
    architecture:
      "A simulator fires UPI-like transactions into a Redpanda stream; the scoring service combines rules, a LightGBM model, and rolling Redis features computed by code shared between training and serving. Louvain community detection over the account–device graph surfaces mule rings that feed back into the score.",
    highlights: [
      "p99 scoring latency under 100 ms, proven on a live latency panel",
      "Graph intelligence: Louvain clustering exposes mule rings",
      "Per-decision SHAP values stored and narrated by the copilot",
    ],
    challenge:
      "Fraud models trained offline quietly diverge from what serving computes — train/serve skew silently corrupts scores.",
    solution:
      "One shared feature library computes rolling features in both training and the Redis online store, with TTL semantics — the model always sees features built by the same code path.",
    tech: ["Python", "LightGBM", "Redis", "Redpanda", "FastAPI", "SHAP", "Graph / Louvain", "React"],
    icon: ShieldAlert,
    github: "https://github.com/namrathar-18/fraudmesh",
    status: "In build",
    featured: true,
  },
  {
    slug: "messaging-platform",
    title: "Real-Time Messaging Platform",
    subtitle: "Production-grade chat infrastructure",
    description:
      "A horizontally scalable messaging system with WebSocket transport, Redis pub/sub fan-out across server instances, JWT auth with rotating refresh tokens, and fully containerized deployment.",
    architecture:
      "Socket.io servers scale behind a load balancer; Redis pub/sub bridges instances so any node can broadcast to any room. MongoDB persists history; JWT access + refresh rotation guards every socket handshake.",
    highlights: [
      "Multi-server broadcasting via Redis pub/sub",
      "JWT auth with refresh-token rotation on socket handshake",
      "Dockerized services for reproducible deploys",
    ],
    challenge:
      "Keeping message delivery consistent when users in the same room connect to different server instances.",
    solution:
      "A Redis pub/sub bridge decouples rooms from server affinity — every instance subscribes to room channels, so broadcasts reach all members regardless of which node holds their socket.",
    tech: ["Node.js", "Express", "Socket.io", "Redis", "MongoDB", "React", "TypeScript", "Docker", "JWT"],
    icon: MessageSquare,
    github: "https://github.com/namrathar-18/messaging-platform",
    featured: true,
  },
  {
    slug: "musify",
    title: "Musify",
    subtitle: "Music streaming app — built at EY",
    description:
      "Full-stack music streaming application with 500+ cached Spotify tracks, playlist management, likes, and 30-second preview streaming behind a polished player UI. Built during the EY GDS internship.",
    architecture:
      "MERN stack with Clerk authentication and the Spotify Web API: an Express catalog service caches track metadata in MongoDB, while the React player streams previews with Zustand-managed state.",
    highlights: [
      "500+ cached Spotify tracks with playlist management",
      "Clerk authentication and Spotify Web API integration",
      "Built end-to-end in a six-week internship engagement",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Clerk", "Spotify API", "Zustand"],
    icon: Music,
    github: "https://github.com/namrathar-18/musify",
    featured: true,
  },
  {
    slug: "skillswap-timebank",
    title: "SkillSwap Time Bank",
    subtitle: "Barter skills, trade hours",
    description:
      "A time-banking marketplace where people trade skills using hours as currency — AI-assisted matching, escrowed hour transfers on a double-entry ledger, and an interactive Three.js landing experience.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Three.js", "OpenAI", "Socket.io"],
    icon: Repeat,
    github: "https://github.com/namrathar-18/skillswap-timebank",
    featured: false,
  },
  {
    slug: "ecommerce-platform",
    title: "ShopMesh",
    subtitle: "Multi-vendor commerce engine",
    description:
      "Multi-vendor e-commerce platform with vendor storefronts, atomic order management, row-level-locked checkout to prevent oversells, and role-based dashboards for admins, vendors, and buyers.",
    tech: ["React", "Node.js", "Express", "MySQL", "Prisma", "JWT"],
    icon: Store,
    github: "https://github.com/namrathar-18/ecommerce-platform",
    featured: false,
  },
  {
    slug: "quiz-platform",
    title: "QuizLive",
    subtitle: "Multiplayer quiz engine",
    description:
      "Kahoot-style real-time quiz platform sustaining 100+ concurrent players per room across 20+ simultaneous rooms with sub-120ms broadcast latency. Live leaderboards run on Redis sorted sets.",
    tech: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "JWT", "Zustand"],
    icon: Zap,
    github: "https://github.com/namrathar-18/quiz-platform",
    featured: false,
  },
  {
    slug: "finance-tracker",
    title: "AI Finance Tracker",
    subtitle: "RAG-powered personal finance",
    description:
      "MERN finance tracker with RAG-based Q&A over your own transactions, CSV/PDF bank-statement ingestion, LLM-hybrid categorization, AES-256-GCM encryption at rest, and SSE-streamed answers.",
    tech: ["Node.js", "MongoDB", "React", "OpenAI", "RAG", "AES-256-GCM", "SSE"],
    icon: TrendingUp,
    github: "https://github.com/namrathar-18/finance-tracker",
    featured: false,
  },
  {
    slug: "eco-route",
    title: "EcoRoute",
    subtitle: "Carbon-aware travel planner",
    description:
      "Multi-modal travel planner that optimizes itineraries for carbon footprint using LLMs, a RAG sustainability assistant streamed over SSE, Leaflet maps, and a Recharts emissions dashboard.",
    tech: ["Node.js", "LangChain.js", "OpenAI", "Pinecone", "React", "Leaflet", "Docker"],
    icon: Leaf,
    github: "https://github.com/namrathar-18/eco-route",
    featured: false,
  },
  {
    slug: "devpulse",
    title: "DevPulse",
    subtitle: "AI code-review platform",
    description:
      "Engineering intelligence platform that posts inline AI review comments on PRs, suggests reviewers with ML, indexes PR history for natural-language Q&A, and streams cycle-time metrics in real time.",
    tech: ["Node.js", "OpenAI", "GitHub API", "RAG", "MongoDB", "React", "Socket.io"],
    icon: Code2,
    github: "https://github.com/namrathar-18/devpulse",
    featured: false,
  },
  {
    slug: "auraai-beauty",
    title: "AuraAI Beauty",
    subtitle: "AI skincare advisor",
    description:
      "AI-powered beauty advisor built on Google Gemini — analyzes skin type, recommends personalized routines, and breaks down products at the ingredient level.",
    tech: ["React", "Vite", "Gemini API", "TypeScript", "Tailwind CSS"],
    icon: Sparkles,
    github: "https://github.com/namrathar-18/auraai-beauty",
    featured: false,
  },
  {
    slug: "campus-placement-portal",
    title: "Campus Placement Portal",
    subtitle: "Recruitment platform for campuses",
    description:
      "Full-stack campus recruitment system — centralized job postings, application tracking, real-time notifications, and analytics dashboards for students and placement officers.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API"],
    icon: Users,
    github: "https://github.com/namrathar-18/campus-placement-portal",
    live: "https://campus-placement-portal-drab.vercel.app",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

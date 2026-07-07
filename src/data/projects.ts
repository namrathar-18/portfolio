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
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
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
      "Keeping message delivery consistent when users on the same room connect to different server instances.",
    solution:
      "A Redis pub/sub bridge decouples rooms from server affinity — every instance subscribes to room channels, so broadcasts reach all members regardless of which node holds their socket.",
    tech: ["Node.js", "Express", "Socket.io", "Redis", "MongoDB", "React", "TypeScript", "Docker", "JWT"],
    icon: MessageSquare,
    github: "https://github.com/namrathar-18/messaging-platform",
    featured: true,
  },
  {
    slug: "skillswap-timebank",
    title: "SkillSwap Time Bank",
    subtitle: "Barter skills, trade hours",
    description:
      "A time-banking marketplace where people trade skills using hours as currency — AI-assisted skill matching, escrowed hour transfers, real-time session scheduling, and an interactive 3D landing experience.",
    architecture:
      "MERN core with a double-entry ledger for hour balances, AI-powered match scoring between offered and requested skills, and a Three.js hero scene rendered with react-three-fiber.",
    highlights: [
      "Double-entry hour ledger with escrow on session booking",
      "AI skill-matching and recommendation engine",
      "Interactive Three.js landing experience",
    ],
    challenge:
      "Preventing hour-balance corruption when two users book, cancel, or dispute sessions concurrently.",
    solution:
      "Modeled every transfer as an immutable double-entry ledger record with atomic MongoDB transactions — balances are derived, never mutated, so the ledger is auditable and race-safe.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Three.js", "OpenAI", "JWT", "Socket.io"],
    icon: Repeat,
    github: "https://github.com/namrathar-18/skillswap-timebank",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "ShopMesh — Multi-Vendor Commerce",
    subtitle: "Marketplace engine with vendor storefronts",
    description:
      "A multi-vendor e-commerce platform: vendor onboarding and storefronts, catalog and inventory management, cart and checkout flows, order lifecycle tracking, and role-based dashboards for admins, vendors, and buyers.",
    architecture:
      "React frontend over a Node/Express API with MySQL as the transactional store — normalized schema for vendors, products, variants, orders, and settlements, with role-based access control across three dashboard types.",
    highlights: [
      "Three-role RBAC: admin, vendor, and customer dashboards",
      "Transactional order lifecycle on MySQL",
      "Vendor settlement and inventory tracking",
    ],
    challenge:
      "Keeping inventory truthful during concurrent checkouts across vendors sharing the same catalog tables.",
    solution:
      "Row-level locking inside MySQL transactions at checkout — stock is reserved atomically with the order insert, eliminating oversells without a distributed lock service.",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT", "REST API"],
    icon: Store,
    github: "https://github.com/namrathar-18/ecommerce-platform",
    featured: true,
  },
  {
    slug: "quiz-platform",
    title: "QuizLive",
    subtitle: "Multiplayer quiz engine",
    description:
      "Kahoot-style real-time quiz platform sustaining 100+ concurrent players per room across 20+ simultaneous rooms with sub-120ms broadcast latency. Live leaderboards run on Redis sorted sets.",
    highlights: [
      "Sub-120ms broadcast latency at 100+ players/room",
      "Leaderboards on Redis sorted sets",
      "20+ simultaneous rooms per instance",
    ],
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
    slug: "musify",
    title: "Musify",
    subtitle: "Music streaming app — built at EY",
    description:
      "Full-stack music streaming application with 500+ cached Spotify tracks, playlist management, likes, and 30-second preview streaming behind a polished player UI. Built during the EY GDS internship.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Clerk", "Spotify API", "Zustand"],
    icon: Music,
    github: "https://github.com/namrathar-18/musify",
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
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

<div align="center">

# Namratha R — Portfolio

**A premium, real-time-data portfolio built with React, TypeScript, Three.js & Tailwind CSS.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=0D0D0D)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&labelColor=0D0D0D)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&labelColor=0D0D0D)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r160-000000?logo=threedotjs&logoColor=white&labelColor=0D0D0D)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white&labelColor=0D0D0D)](https://tailwindcss.com)

[Live Demo](https://namratha-r.vercel.app) · [GitHub](https://github.com/namrathar-18) · [LinkedIn](https://www.linkedin.com/in/namratharp18/)

</div>

---

## ✨ Overview

A single-page portfolio designed around a luxury dark theme (`#0D0D0D`) with a single electric-blue accent, frosted-glass surfaces, and a GPU-friendly Three.js particle scene. Content is data-driven — every section reads from typed data modules, so updating the site never means touching component code.

## 🚀 Features

- **Three.js hero** — additive-blended particle constellation with a breathing wireframe sphere and cursor-parallax camera, lazy-loaded off the critical bundle
- **Live GitHub integration** — repositories, language distribution, and a year of contributions fetched from the GitHub API at runtime
- **Lenis smooth scrolling** with anchor handling, plus scroll-triggered reveals via Framer Motion
- **Full section set** — About, Skills, Experience, Featured Projects (architecture / challenge → solution), Research, Education, Achievements, Certifications, Contact
- **Accessibility** — semantic landmarks, skip link, keyboard focus rings, ARIA labels, and full `prefers-reduced-motion` support (the 3D scene renders a static fallback)
- **Performance** — code-split Three.js chunk, lazy images, preconnected origins, 11 runtime dependencies total
- **Responsive** — mobile through ultra-wide with zero horizontal overflow

## 🛠 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 18, TypeScript (strict), Vite 5 |
| Styling | Tailwind CSS, custom design tokens, glassmorphism utilities |
| Motion | Framer Motion, Lenis smooth scroll |
| 3D | Three.js, React Three Fiber |
| Data | TanStack Query (GitHub API) |
| Quality | ESLint, Vitest, Testing Library |

## 📦 Getting Started

```bash
# Clone
git clone https://github.com/namrathar-18/portfolio.git
cd portfolio

# Install
npm install

# Develop (http://localhost:8080)
npm run dev

# Production build + preview
npm run build
npm run preview

# Quality gates
npm run lint
npm test
```

### Contact form backend (optional)

The contact form posts to `VITE_API_URL` when set (see `backend/` for the Express + MongoDB API). Without it, the form gracefully falls back to opening a pre-filled email draft.

```bash
# .env
VITE_API_URL=https://your-api.example.com/api
```

### Resume

Drop your `resume.pdf` into `public/` — the navbar and hero download buttons already point to it.

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── motion/       # Reveal, SectionHeading, MagneticButton, Typewriter
│   ├── sections/     # Hero, About, Skills, Experience, Projects, Research,
│   │                 # Education, Achievements, Certifications, GitHubActivity, Contact
│   └── three/        # HeroScene (particle field, wireframe sphere, camera rig)
├── data/             # All site content as typed modules — edit these to update the site
├── hooks/            # use-lenis, use-github-stats, use-active-section, use-reduced-motion
├── pages/            # Index, NotFound
└── test/             # Vitest setup + tests
```

## 🎨 Customization

1. **Content** — everything lives in `src/data/*.ts` (profile, projects, experience, skills, education, achievements, certifications, research)
2. **Accent color** — change `--accent` in `src/index.css` and the `CHART_COLOR` hex in `GitHubActivity.tsx`
3. **GitHub account** — update `githubUsername` in `src/data/profile.ts`
4. **3D scene** — tune particle count, colors, and motion in `src/components/three/HeroScene.tsx`

## ☁️ Deployment (Vercel)

1. Push the repository to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new) — Vite is auto-detected
3. (Optional) add `VITE_API_URL` under Project → Settings → Environment Variables
4. Deploy — every push to `main` redeploys automatically

## 📄 License

MIT © [Namratha R](https://github.com/namrathar-18)

# Asif Mia — Portfolio

A modern, animated personal portfolio for **Asif Mia**, Full-Stack Developer.
Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

🔗 Live: [miasif.netlify.app](https://miasif.netlify.app)

## Features

- ⚡ Next.js 16 App Router + TypeScript, fully static export-ready
- 🎨 Tailwind CSS v4 with a semantic, theme-aware color system
- 🌗 Light / dark mode toggle (persists to `localStorage`, no flash on load)
- 🦸 Two-column hero with animated gradient name, typewriter tagline,
  stats, and a floating skills orbit
- 🧩 Sections: About, Experience (timeline), Projects (featured + live links),
  Skills, Education, Certifications, Achievements, Contact
- ✉️ Contact form (Formspree-ready) with graceful fallback
- 📄 Resume / CV download
- ♿ Respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Configuration

- **Content** lives in [`lib/data.ts`](lib/data.ts) — profile, experience,
  projects, skills, education, etc.
- **Contact form**: create a free form at [formspree.io](https://formspree.io)
  and add the ID to `.env.local`:

  ```
  NEXT_PUBLIC_FORMSPREE_ID=your_form_id
  ```

## Tech Stack

Next.js · React · TypeScript · Tailwind CSS

---

Built with Next.js & Tailwind CSS.

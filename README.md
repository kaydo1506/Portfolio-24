# Rachael Ify Okedo — Portfolio

My personal portfolio site, built to showcase my skills, experience, and projects as a Frontend Engineer.

**Live site:** https://portfolio-24-ivory.vercel.app

Design inspired by [Brittany Chiang's portfolio](https://v4.brittanychiang.com/).

## Tech Stack

- [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lottie](https://airbnb.io/lottie/) for vector animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Scripts

| Command         | Description                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the local dev server         |
| `npm run build` | Build for production               |
| `npm run start` | Serve the production build         |
| `npm run check` | Check formatting with Prettier     |
| `npm run lint`  | Fix formatting with Prettier       |

## Project Structure

```
src/
├── components/   # Reusable UI components
├── containers/   # Page sections (Hero, About, Skills, Experience, Projects, Contact, ...)
├── context/      # React context (theme)
├── hooks/        # Custom hooks
├── pages/        # Next.js pages
├── styles/       # Global styles
└── utils/        # Site config and content (src/utils/portfolio.ts)
```

Site content (bio, skills, experience, projects) is centralized in [`src/utils/portfolio.ts`](src/utils/portfolio.ts).

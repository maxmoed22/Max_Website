# Max — Career / Project Portfolio Website

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS, inspired by a Figma moodboard exploring a bold "Hello, my name is Max" hero with an image showcase grid.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The page hot-reloads as you edit files.

## Editing content

Most of the text on the site (name, bio, projects, experience, links) lives in one place:

- [src/data/site.ts](src/data/site.ts)

Update the values there to personalize the site without touching component code.

## Structure

- [src/app/page.tsx](src/app/page.tsx) — composes the page from section components.
- [src/components/](src/components) — `Nav`, `Hero`, `About`, `Projects`, `Experience`, `Contact`, `Footer`.
- [src/data/site.ts](src/data/site.ts) — editable profile, project, and experience data.
- [src/app/globals.css](src/app/globals.css) — Tailwind import and CSS theme variables.

## Next steps

- Replace placeholder text in [src/data/site.ts](src/data/site.ts) with your real bio, projects, and experience.
- Add real project screenshots to `public/` and reference them via the `image` field on each project.
- Refine the hero/showcase grid, colors, and typography to match your Figma inspiration board.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

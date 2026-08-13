# Editing Site Content

All editable content for the site lives in one file:

**[src/data/site.ts](../src/data/site.ts)**

You don't need to touch any component code — just edit the values in this file and the site will update automatically (hot-reload) while the dev server is running.

## What each export controls

| Export | What it controls | Where it shows up |
|---|---|---|
| `profile` | Name, role, tagline, location, email, social links | Nav logo, Hero heading/tagline, Contact email + social links, Footer |
| `about` | Heading + bio paragraphs (array — add/remove as needed) | About section |
| `projects` | Array of `{ title, description, tags, href, image }` | Projects/Work grid |
| `experience` | Array of `{ role, company, period, description }` | Experience timeline |
| `navLinks` | Label + anchor href for the nav bar | Nav bar |

## Adding your bio

Edit the `about.paragraphs` array in [src/data/site.ts](../src/data/site.ts) — it's a list of strings, one per paragraph.

```ts
export const about = {
  heading: "About",
  paragraphs: [
    "Your first paragraph here.",
    "Your second paragraph here.",
  ],
};
```

## Adding projects

Add or edit objects in the `projects` array:

```ts
{
  title: "My Project",
  description: "What it does and the problem it solves.",
  tags: ["Next.js", "TypeScript"],
  href: "https://example.com",
  image: "/projects/my-app.png", // optional
}
```

If you have screenshots, drop the image files into [public/](../public) (e.g. public/projects/my-app.png) and reference them via the `image` field.

## Adding work history

Edit the `experience` array, most recent role first:

```ts
{
  role: "Job Title",
  company: "Company Name",
  period: "2024 — Present",
  description: "What you did and the impact you had.",
}
```

## Once you're done

Let us know when you've filled in real content (even partially) so the visual design (typography, spacing, color, hero image grid) can be refined to match your Figma moodboard.

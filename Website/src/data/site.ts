// Central place for editable content.
// Update this file to change the text/links shown across the site.

export const profile = {
  name: "Max",
  fullName: "Max",
  role: "Software Engineer",
  tagline: "I design and build thoughtful digital products.",
  location: "Somewhere, Earth",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Twitter", href: "https://twitter.com/" },
  ],
};

export const about = {
  heading: "About",
  paragraphs: [
    "Placeholder bio — replace with a short introduction about who you are, what you do, and what you care about.",
    "Placeholder — mention your background, current focus, and a few things you enjoy outside of work.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string; // path in /public, e.g. "/projects/example.png"
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Placeholder description of project one and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "Placeholder description of project two and the problem it solves.",
    tags: ["React", "Node.js"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "Placeholder description of project three and the problem it solves.",
    tags: ["Design", "Figma"],
    href: "#",
  },
  {
    title: "Project Four",
    description: "Placeholder description of project four and the problem it solves.",
    tags: ["API", "Cloud"],
    href: "#",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Job Title",
    company: "Company Name",
    period: "2024 — Present",
    description: "Placeholder — describe your responsibilities and impact in this role.",
  },
  {
    role: "Job Title",
    company: "Company Name",
    period: "2022 — 2024",
    description: "Placeholder — describe your responsibilities and impact in this role.",
  },
  {
    role: "Job Title",
    company: "Company Name",
    period: "2020 — 2022",
    description: "Placeholder — describe your responsibilities and impact in this role.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

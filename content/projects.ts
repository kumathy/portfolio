export type Project = {
  slug: string;
  title: string;
  year: string;
  blurb: string;
  stack: string[];
  href?: string;
  source?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "placeholder-one",
    title: "Project One",
    year: "2026",
    blurb: "Short description of the project.",
    stack: ["TypeScript", "Next.js", "Postgres"],
    href: "https://example.com",
    source: "https://github.com/kumathy",
    featured: true,
  },
  {
    slug: "placeholder-two",
    title: "Project Two",
    year: "2025",
    blurb: "Short description of the project.",
    stack: ["Python", "PyTorch"],
    source: "https://github.com/kumathy",
    featured: true,
  },
  {
    slug: "placeholder-three",
    title: "Project Three",
    year: "2025",
    blurb: "Short description of the project.",
    stack: ["React", "Firebase"],
    source: "https://github.com/kumathy",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

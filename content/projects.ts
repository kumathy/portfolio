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
    slug: "modsquad",
    title: "Modsquad",
    year: "2026",
    blurb: "Automated moderation tool for content creation.",
    stack: ["React", "Electron", "FastAPI", "WhisperX"],
    href: "https://example.com",
    source: "https://github.com/kumathy/Modsquad",
    featured: true,
  },
  {
    slug: "quizzical",
    title: "Quizzical",
    year: "2025",
    blurb:
      "Trivia quiz app that pulls questions from the Open Trivia Database API.",
    stack: ["React", "JavaScript"],
    source: "https://github.com/kumathy/react-projects",
    featured: true,
  },
  {
    slug: "fitquest",
    title: "FitQuest",
    year: "2023",
    blurb: "Gamified Android fitness app.",
    stack: ["Kotlin", "Firebase", "Android SDK"],
    source: "https://github.com/kumathy/FitQuest",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

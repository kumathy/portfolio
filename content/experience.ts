export type Role = {
  company: string;
  title: string;
  period: string;
  href?: string;
  notes?: string[];
};

export const experience: Role[] = [
  {
    company: "Company",
    title: "Software Engineering Intern",
    period: "Winter 2026",
    href: "https://example.com",
    notes: ["What I worked on."],
  },
  {
    company: "Earlier Company",
    title: "Software Engineering Intern",
    period: "Summer 2025",
    notes: ["What I worked on."],
  },
];

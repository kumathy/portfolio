export type Role = {
  company: string;
  title: string;
  period: string;
  technologies: string[];
  href?: string;
  notes?: string[];
};

export const experience: Role[] = [
  {
    company: "Sonrai Security",
    title: "Junior SDET (Co-op)",
    period: "Sep 2025 - Apr 2026",
    technologies: [
      "Python",
      "Test Automation",
      "Regression Testing",
      "AWS",
      "GCP",
    ],
    href: "https://sonraisecurity.com/",
    notes: [
      "Automated 3 regression workflows, eliminate 20+ manual test cases — owned 60-70% of regression suite each sprint",
    ],
  },
  {
    company: "Sonrai Security",
    title: "Junior Software Engineer (Co-op)",
    period: "Jan - Apr 2024",
    href: "https://sonraisecurity.com/",
    technologies: ["Python", "Slack API", "Grafana", "AWS", "GCP"],
    notes: [
      "Built production alerting with AWS Lambda querying Grafana and routing to Slack, cut detection of stalled/failed jobs from up to a day to minutes",
    ],
  },
  {
    company: "SpryPoint",
    title: "Software Developer (Co-op)",
    period: "Sep - Dec 2022",
    technologies: ["JavaScript", "KnockoutJS", "Bootstrap", "PostgreSQL"],
    notes: ["Frontend work on Bootstrap UIs with PostgreSQL data"],
  },
];

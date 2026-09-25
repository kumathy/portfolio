export type Award = {
  title: string;
  period: string;
  href?: string;
  note?: string;
};

export const awards: Award[] = [
  {
    title: "1st @ UNB Research Expo Pitch Competition",
    period: "2026",
  },
  {
    title: "Impact Award @ RBC Student Pitch Competition",
    period: "2026",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    period: "Jun 2025",
    href: "https://www.credly.com/badges/03af84e7-7f0c-47e8-9746-660b4ab09b66",
  },
];

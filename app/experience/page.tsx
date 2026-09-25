import type { Metadata } from "next";
import { ExperienceList } from "@/components/experience-list";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6">
      <h1 className="text-lg font-medium">Experience</h1>

      <div className="mt-12">
        <ExperienceList />
      </div>
    </main>
  );
}

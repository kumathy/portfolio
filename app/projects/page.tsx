import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6">
      <h1 className="text-lg font-medium">Projects</h1>

      <div className="mt-12">
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}

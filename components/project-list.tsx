import type { Project } from "@/content/projects";

function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="border-t border-border py-6 first:border-t-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">
          {project.href ? (
            <a
              href={project.href}
              className="underline underline-offset-4 transition-colors hover:text-accent"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted">
          {project.year}
        </span>
      </div>

      <p className="mt-2 text-muted">{project.blurb}</p>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-xs text-muted">
        <span>{project.stack.join(" · ")}</span>
        {project.href ? (
          <a
            href={project.href}
            className="text-accent underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Live demo ↗
          </a>
        ) : null}
        {project.source ? (
          <a
            href={project.source}
            className="transition-colors hover:text-foreground"
          >
            Source ↗
          </a>
        ) : null}
      </div>
    </li>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectItem key={project.slug} project={project} />
      ))}
    </ul>
  );
}

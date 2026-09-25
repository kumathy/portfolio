import { experience } from "@/content/experience";

export function ExperienceList() {
  return (
    <ul className="space-y-6">
      {experience.map((role) => (
        <li
          key={`${role.company}-${role.period}`}
          className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <div>
            <span className="font-medium">
              {role.href ? (
                <a
                  href={role.href}
                  className="underline decoration-border underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
                >
                  {role.company}
                </a>
              ) : (
                role.company
              )}
            </span>
            <span className="text-muted"> — {role.title}</span>
            {role.notes?.map((note) => (
              <p key={note} className="mt-1 text-sm text-muted">
                {note}
              </p>
            ))}
          </div>
          <span className="shrink-0 font-mono text-xs text-muted">
            {role.period}
          </span>
        </li>
      ))}
    </ul>
  );
}

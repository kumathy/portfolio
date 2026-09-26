import { CollapseOnClick } from "@/components/collapse-on-click";
import { experience } from "@/content/experience";

export function ExperienceList() {
  return (
    <ul>
      {experience.map((role) => (
        <li
          key={`${role.company}-${role.period}`}
          className="border-t border-border py-6 first:border-t-0 first:pt-0"
        >
          <details className="group">
            <summary className="group/sum flex cursor-pointer list-none items-baseline justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <h3 className="font-medium">
                <span className="mr-2 inline-block font-mono text-xs text-muted transition group-open:rotate-90 group-hover/sum:text-foreground">
                  &rsaquo;
                </span>
                {role.href ? (
                  <a
                    href={role.href}
                    className="underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    {role.company}
                  </a>
                ) : (
                  role.company
                )}
                <span className="text-muted"> — {role.title}</span>
              </h3>
              <span className="shrink-0 font-mono text-xs text-muted">
                {role.period}
              </span>
            </summary>

            <CollapseOnClick className="cursor-pointer pl-5">
              {role.notes?.length ? (
                <div className="mt-2 space-y-1 text-muted">
                  {role.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              ) : null}

              {role.technologies.length ? (
                <div className="mt-3 font-mono text-xs text-muted">
                  {role.technologies.join(" · ")}
                </div>
              ) : null}
            </CollapseOnClick>
          </details>
        </li>
      ))}
    </ul>
  );
}

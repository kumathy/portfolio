import Link from "next/link";
import { ExperienceList } from "@/components/experience-list";
import { ProjectList } from "@/components/project-list";
import { Section } from "@/components/section";
import { featuredProjects } from "@/content/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6">
      <p className="text-lg leading-relaxed text-balance">
        Hi, I&rsquo;m {site.name}. I graduated from the {site.school} with a
        Bachelor of Computer Science this September, and I&rsquo;m looking for
        full-time work. I like building things that are small, fast, and
        finished.
      </p>

      <Section title="Experience">
        <ExperienceList />
      </Section>

      <Section title="Selected work">
        <ProjectList projects={featuredProjects} />
        <p className="mt-6 text-sm">
          <Link
            href="/work"
            className="text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
          >
            All projects →
          </Link>
        </p>
      </Section>

      <Section title="Elsewhere">
        <p className="text-muted">
          Reach me at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
          >
            {site.email}
          </a>
          , or find me on{" "}
          {site.socials.map((social, i) => (
            <span key={social.href}>
              <a
                href={social.href}
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
              >
                {social.label}
              </a>
              {i < site.socials.length - 1 ? " and " : "."}
            </span>
          ))}
        </p>
      </Section>
    </main>
  );
}

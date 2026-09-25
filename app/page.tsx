import { Section } from "@/components/section";
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

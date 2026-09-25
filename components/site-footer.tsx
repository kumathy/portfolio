import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 pt-20 pb-12">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6 text-sm text-muted">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap gap-5">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
          </li>
          {site.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

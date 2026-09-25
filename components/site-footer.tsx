import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { site } from "@/lib/site";

const socialIcons: Record<string, (props: { className?: string }) => React.ReactNode> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 pt-20 pb-12">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap items-center gap-4">
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="block transition-colors hover:text-foreground"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </li>
          {site.socials.map((social) => {
            const Icon = socialIcons[social.label];

            return (
              <li key={social.href}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="block transition-colors hover:text-foreground"
                >
                  {Icon ? (
                    <Icon className="h-4 w-4" />
                  ) : (
                    <span>{social.label}</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

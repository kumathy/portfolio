import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "home" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/hobbies", label: "hobbies" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-2xl px-6 pt-12 pb-16">
      <nav className="flex gap-5 text-sm text-muted">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={site.resume}
          className="transition-colors hover:text-foreground"
        >
          resume
        </a>
      </nav>
    </header>
  );
}

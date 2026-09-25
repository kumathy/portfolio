import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-2xl items-baseline justify-between gap-6 px-6 pt-12 pb-16">
      <Link
        href="/"
        className="font-medium tracking-tight transition-colors hover:text-accent"
      >
        {site.name}
      </Link>
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
          Résumé
        </a>
      </nav>
    </header>
  );
}

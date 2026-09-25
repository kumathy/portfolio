"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "home" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/hobbies", label: "hobbies" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto w-full max-w-2xl px-6 pt-12 pb-16">
      <nav className="flex gap-5 text-sm text-muted">
        {nav.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`transition-colors ${
                active
                  ? "text-foreground underline underline-offset-4"
                  : "hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
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

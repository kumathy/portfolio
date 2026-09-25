import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `A bit more about ${site.name}.`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6">
      <h1 className="text-lg font-medium">About</h1>

      <div className="mt-8 space-y-5 leading-relaxed text-muted">
        <p>
          I&rsquo;m a software engineer. I graduated from the {site.school}{" "}
          with a Bachelor of Computer Science in September 2026.
        </p>
      </div>
    </main>
  );
}

import { AwardList } from "@/components/award-list";
import { Section } from "@/components/section";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6">
      <h1 className="text-2xl font-medium tracking-tight">{site.name}</h1>

      <p className="mt-4 text-lg leading-relaxed text-balance">
        I&rsquo;m a Computer Science graduate @{" "}
        <a
          href={site.schoolUrl}
          className="underline underline-offset-4 transition-colors hover:text-accent"
        >
          {site.school}
        </a>
        . I previously worked as a junior SDET and software engineer at{" "}
        <a
          href="https://sonraisecurity.com/"
          className="underline underline-offset-4 transition-colors hover:text-accent"
        >
          Sonrai Security
        </a>
        , building test automation and production alerting.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-balance">
        I have a great passion for{" "}
        <a
          href="https://en.wikipedia.org/wiki/Fighting_game"
          className="underline underline-offset-4 transition-colors hover:text-accent"
        >
          fighting games
        </a>{" "}
        and the{" "}
        <a
          href="https://www.youtube.com/watch?v=JzS96auqau0"
          className="underline underline-offset-4 transition-colors hover:text-accent"
        >
          FGC
        </a>
        . During my spare time, I also like to climb colored rocks and lift
        weights!
      </p>

      <p className="mt-4 text-lg leading-relaxed text-balance">
        I am currently open to any full-time software engineer/SDET roles.
      </p>

      <Section title="Awards &amp; certifications">
        <AwardList />
      </Section>
    </main>
  );
}

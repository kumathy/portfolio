import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies",
};

export default function HobbiesPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6">
      <h1 className="text-lg font-medium">Hobbies</h1>

      <div className="mt-8 space-y-5 leading-relaxed text-muted">
        <p>Coming soon.</p>
      </div>
    </main>
  );
}

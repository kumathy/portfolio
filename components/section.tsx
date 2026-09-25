export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-xs tracking-widest text-muted uppercase">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

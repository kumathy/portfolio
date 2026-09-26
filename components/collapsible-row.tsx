"use client";

export function CollapsibleRow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li
      className={className}
      onClick={(event) => {
        const target = event.target as HTMLElement;

        if (target.closest("a")) return;
        if (target.closest("summary")) return;
        if (window.getSelection()?.toString()) return;

        const details = event.currentTarget.querySelector("details");
        if (details) details.open = !details.open;
      }}
    >
      {children}
    </li>
  );
}

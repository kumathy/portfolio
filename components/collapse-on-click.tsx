"use client";

export function CollapseOnClick({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={className}
      onClick={(event) => {
        if (window.getSelection()?.toString()) return;
        event.currentTarget.closest("details")?.removeAttribute("open");
      }}
    >
      {children}
    </div>
  );
}

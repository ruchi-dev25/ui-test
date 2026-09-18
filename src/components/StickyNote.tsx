import type { ReactNode } from "react";

type Tint = "rose" | "mint" | "amber" | "periwinkle" | "cream";

export default function StickyNote({
  tint = "rose",
  rotate = 0,
  label,
  className = "",
  children,
}: {
  tint?: Tint;
  rotate?: number;
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`widget-card widget-${tint} relative p-5 transition-transform duration-300 hover:-translate-y-1.5 ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {label && (
        <span className="ribbon-tag font-display absolute -top-3 -left-2 py-0.5 pl-2.5 text-[0.65rem] text-parchment shadow-[0_4px_10px_-4px_rgba(54,42,74,0.5)]" style={{ backgroundColor: "var(--color-ink)" }}>
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

export default function RibbonTag({
  children,
  color = "var(--color-rose)",
  rotate = -2,
  className = "",
}: {
  children: ReactNode;
  color?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={`ribbon-tag font-display inline-flex items-center py-1 pl-3 text-xs whitespace-nowrap text-parchment shadow-[0_4px_10px_-4px_rgba(54,42,74,0.5)] ${className}`}
      style={{ backgroundColor: color, rotate: `${rotate}deg` }}
    >
      {children}
    </span>
  );
}

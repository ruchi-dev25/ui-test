import type { ReactNode } from "react";

type WidgetTint = "rose" | "mint" | "amber" | "periwinkle" | "cream";

export default function WidgetCard({
  tint = "cream",
  rotate = 0,
  className = "",
  children,
}: {
  tint?: WidgetTint;
  rotate?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`widget-card widget-${tint} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {children}
    </div>
  );
}

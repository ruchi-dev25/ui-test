import type { ReactNode } from "react";

export default function StickyNote({
  color,
  rotate = 0,
  className = "",
  children,
}: {
  color: string;
  rotate?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative transition-transform duration-300 hover:-translate-y-1.5 ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-ink/20 shadow-[0_2px_3px_rgba(43,36,64,0.35)]"
        style={{
          background: `radial-gradient(circle at 35% 30%, white, ${color} 70%)`,
        }}
      />
      <div
        className="rounded-sm p-5 shadow-[0_10px_20px_-8px_rgba(43,36,64,0.35)]"
        style={{ backgroundColor: color }}
      >
        {children}
      </div>
    </div>
  );
}

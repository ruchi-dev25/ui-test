import type { ReactNode } from "react";

export default function GinghamFrame({
  children,
  rotate = 0,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`gingham-frame ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <div className="gingham-inner">{children}</div>
    </div>
  );
}

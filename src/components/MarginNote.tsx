import type { ReactNode } from "react";

export default function MarginNote({
  children,
  tilt = "left",
  className = "",
}: {
  children: ReactNode;
  tilt?: "left" | "right";
  className?: string;
}) {
  return (
    <p
      className={`font-hand text-2xl leading-snug text-sage ${
        tilt === "left" ? "-rotate-2" : "rotate-2"
      } ${className}`}
    >
      {children}
    </p>
  );
}

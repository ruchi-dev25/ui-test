import type { ReactNode } from "react";

export default function PhotoCorner({
  children,
  caption,
  tilt = "none",
  className = "",
}: {
  children: ReactNode;
  caption?: string;
  tilt?: "left" | "right" | "none";
  className?: string;
}) {
  const rotation =
    tilt === "left" ? "-rotate-1" : tilt === "right" ? "rotate-1" : "";

  return (
    <figure className={`inline-block ${rotation} ${className}`}>
      <div className="relative border-8 border-parchment bg-parchment shadow-[0_8px_24px_-8px_rgba(43,36,64,0.35)]">
        {children}
        {["-top-1 -left-1 rotate-0", "-top-1 -right-1 rotate-90", "-bottom-1 -left-1 -rotate-90", "-bottom-1 -right-1 rotate-180"].map(
          (pos) => (
            <span
              key={pos}
              className={`absolute ${pos} h-4 w-4 border-t-2 border-l-2 border-deepink/40`}
            />
          ),
        )}
      </div>
      {caption && (
        <figcaption className="font-hand mt-2 text-center text-xl text-deepink/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

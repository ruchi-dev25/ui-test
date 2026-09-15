import type { ReactElement } from "react";

type DoodleVariant = "star" | "moon" | "sage-elder" | "heart" | "cane";

const paths: Record<DoodleVariant, ReactElement> = {
  star: (
    <path
      d="M12 2 L14.2 9.2 L21.5 9.5 L15.6 14 L17.8 21.2 L12 16.8 L6.2 21.2 L8.4 14 L2.5 9.5 L9.8 9.2 Z"
      strokeLinejoin="round"
    />
  ),
  moon: (
    <path
      d="M15.5 3.5c-4.6.7-8 4.7-8 9.5 0 5.2 4.3 9.5 9.5 9.5 1.6 0 3.1-.4 4.4-1.1-2.9-.2-6-2.4-7.4-5.6-1.7-3.8-.6-8.4 1.5-11.3-.4-.3-1.3-.6-1.9-1z"
      strokeLinejoin="round"
    />
  ),
  // small robed elder, walking with a cane — an original, abstracted silhouette
  "sage-elder": (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 3.2c-1.3 0-2.4 1.2-2.4 2.6 0 .9.4 1.6 1 2.1-2.6.9-4.4 3.5-4.4 6.5v3.8h11.6v-3.8c0-3-1.8-5.6-4.4-6.5.6-.5 1-1.2 1-2.1 0-1.4-1.1-2.6-2.4-2.6z" />
      <path d="M6.4 18.2c-.6 1.1-.9 2.3-.9 2.3M17.6 18.2c.6 1.1.9 2.3.9 2.3" />
      <path d="M17.8 14.5l2.6 1.4" />
      <circle cx="10.4" cy="8.4" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="13.6" cy="8.4" r="0.5" fill="currentColor" stroke="none" />
    </g>
  ),
  heart: (
    <path
      d="M12 21s-7.5-4.6-10-9.3C.4 8.6 2 5 5.4 5c2 0 3.5 1.1 4.6 2.7C11.1 6.1 12.6 5 14.6 5 18 5 19.6 8.6 22 11.7 19.5 16.4 12 21 12 21z"
      strokeLinejoin="round"
    />
  ),
  cane: (
    <path d="M9 21c0-4 1-13 1-15a2 2 0 1 1 4 0c0 .8-.5 1.4-1.2 1.7" strokeLinecap="round" />
  ),
};

export default function Doodle({
  variant,
  className = "",
  strokeWidth = 1.4,
}: {
  variant: DoodleVariant;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      {paths[variant]}
    </svg>
  );
}

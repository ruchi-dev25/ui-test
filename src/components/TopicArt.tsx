export type Topic =
  | "checkout"
  | "onboarding"
  | "trust"
  | "teardown"
  | "notebook";

const topicTint: Record<Topic, { fg: string; a: string; b: string }> = {
  checkout: { fg: "var(--color-sage)", a: "var(--color-sage-soft)", b: "white" },
  onboarding: { fg: "var(--color-lavender)", a: "var(--color-lavender-soft)", b: "white" },
  trust: { fg: "var(--color-coral)", a: "var(--color-rose)", b: "white" },
  teardown: { fg: "var(--color-amber)", a: "var(--color-amber)", b: "white" },
  notebook: { fg: "var(--color-periwinkle)", a: "var(--color-periwinkle)", b: "white" },
};

function Art({ topic, fg }: { topic: Topic; fg: string }) {
  switch (topic) {
    case "checkout":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 30h44l-6 26H27z" />
          <path d="M18 30l-4-8H8" />
          <circle cx="33" cy="64" r="3.4" />
          <circle cx="53" cy="64" r="3.4" />
          <path d="M30 42h30" strokeDasharray="2 4" />
        </g>
      );
    case "onboarding":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="36" cy="36" r="22" />
          <path d="M36 14v8M36 50v8M14 36h8M50 36h8" />
          <path d="M44 28l-6 10-10 6 6-10z" fill={fg} stroke="none" />
        </g>
      );
    case "trust":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M36 10l22 8v16c0 16-9.5 27-22 32-12.5-5-22-16-22-32V18z" />
          <path d="M28 36l6 6 12-13" />
        </g>
      );
    case "teardown":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="30" cy="30" r="16" />
          <path d="M41 41l14 14" />
          <path d="M23 30h14M30 23v14" />
        </g>
      );
    case "notebook":
    default:
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="10" width="40" height="52" rx="4" />
          <path d="M16 20h40M24 10v52" />
          <path d="M34 34h14M34 42h10" strokeDasharray="2 4" />
        </g>
      );
  }
}

export default function TopicArt({
  topic,
  className = "",
}: {
  topic: Topic;
  className?: string;
}) {
  const { fg, a, b } = topicTint[topic];
  return (
    <div
      className={`flex items-center justify-center rounded-2xl shadow-[0_10px_22px_-12px_rgba(54,42,74,0.4)] ${className}`}
      style={{ background: `linear-gradient(155deg, color-mix(in srgb, ${a} 55%, ${b}) 0%, ${b} 120%)` }}
    >
      <svg
        viewBox="0 0 72 72"
        fill="none"
        stroke={fg}
        strokeWidth="2.5"
        className="h-[62%] w-[62%]"
        aria-hidden="true"
      >
        <Art topic={topic} fg={fg} />
      </svg>
    </div>
  );
}

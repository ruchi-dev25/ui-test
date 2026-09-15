export type Topic =
  | "checkout"
  | "onboarding"
  | "trust"
  | "teardown"
  | "notebook";

const topicColor: Record<Topic, string> = {
  checkout: "var(--color-punch-green)",
  onboarding: "var(--color-punch-violet)",
  trust: "var(--color-punch-pink)",
  teardown: "var(--color-punch-gold)",
  notebook: "var(--color-punch-violet)",
};

function Art({ topic }: { topic: Topic }) {
  switch (topic) {
    case "checkout":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 30h44l-6 26H27z" />
          <path d="M18 30l-4-8H8" />
          <circle cx="33" cy="64" r="3.4" />
          <circle cx="53" cy="64" r="3.4" />
          <path d="M30 42h30" strokeDasharray="2 4" />
          <path d="M60 20l6 6-6 6" />
        </g>
      );
    case "onboarding":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="36" cy="36" r="22" />
          <path d="M36 14v8M36 50v8M14 36h8M50 36h8" />
          <path d="M44 28l-6 10-10 6 6-10z" fill="currentColor" stroke="none" />
          <path d="M56 56l6 6" />
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
          <rect x="16" y="10" width="40" height="52" rx="2" />
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
  const tint = topicColor[topic];
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full opacity-50 blur-2xl"
        style={{ background: `radial-gradient(circle, ${tint} 0%, transparent 72%)` }}
      />
      <svg
        viewBox="0 0 72 72"
        fill="none"
        stroke={tint}
        strokeWidth="2"
        className="h-full w-full"
        aria-hidden="true"
      >
        <Art topic={topic} />
      </svg>
    </div>
  );
}

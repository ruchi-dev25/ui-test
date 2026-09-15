import { motion, useReducedMotion } from "framer-motion";

const moodTint: Record<string, string> = {
  research: "var(--color-lavender)",
  strategy: "var(--color-sage)",
  build: "var(--color-amber)",
  measure: "var(--color-rose)",
};

export default function PipMascot({
  mode = "research",
  className = "",
}: {
  mode?: keyof typeof moodTint;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const tint = moodTint[mode] ?? "var(--color-sage)";

  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* ink-drop body */}
      <path
        d="M32 6c9 12 16 21 16 30a16 16 0 1 1-32 0c0-9 7-18 16-30z"
        fill="var(--color-parchment)"
        stroke={tint}
        strokeWidth="2"
      />
      {/* soft highlight */}
      <ellipse cx="25" cy="30" rx="4" ry="6" fill={tint} opacity="0.18" />

      {/* eyes */}
      <motion.g
        animate={
          reduceMotion
            ? undefined
            : { scaleY: [1, 1, 0.1, 1, 1] }
        }
        transition={{
          duration: 3.6,
          repeat: Infinity,
          times: [0, 0.85, 0.9, 0.95, 1],
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "32px 38px" }}
      >
        <circle cx="26" cy="38" r="2.6" fill="var(--color-ink)" />
        <circle cx="38" cy="38" r="2.6" fill="var(--color-ink)" />
      </motion.g>

      {/* blush */}
      <circle cx="21" cy="43" r="2.2" fill={tint} opacity="0.35" />
      <circle cx="43" cy="43" r="2.2" fill={tint} opacity="0.35" />

      {/* smile */}
      <path
        d="M27 46c1.6 1.8 3.4 2.6 5 2.6s3.4-.8 5-2.6"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* tiny quill tucked at the side */}
      <path
        d="M46 24l6-6M52 18l-1.6 5-3.4 1"
        fill="none"
        stroke={tint}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

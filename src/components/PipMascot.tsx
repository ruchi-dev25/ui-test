import { useState } from "react";
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
  interactive = true,
}: {
  mode?: keyof typeof moodTint;
  className?: string;
  interactive?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const tint = moodTint[mode] ?? "var(--color-sage)";
  const [delighted, setDelighted] = useState(false);

  return (
    <motion.svg
      viewBox="0 0 80 92"
      className={`${className} ${interactive ? "cursor-pointer" : ""}`}
      role={interactive ? "button" : undefined}
      aria-label={interactive ? "Poke Pip" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={
        interactive
          ? () => {
              setDelighted(true);
              window.setTimeout(() => setDelighted(false), 550);
            }
          : undefined
      }
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                setDelighted(true);
                window.setTimeout(() => setDelighted(false), 550);
              }
            }
          : undefined
      }
      animate={
        reduceMotion
          ? undefined
          : delighted
            ? { y: [0, -10, 0], rotate: [0, -6, 6, 0] }
            : { y: [0, -3, 0] }
      }
      transition={
        delighted
          ? { duration: 0.55, ease: "easeOut" }
          : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {/* ground shadow */}
      <ellipse cx="40" cy="86" rx="18" ry="3.5" fill="var(--color-ink)" opacity="0.12" />

      {/* cape */}
      <path
        d="M20 46c-4 10-6 20-4 30 6-4 10-5 14-4-2-9-2-18 2-27z"
        fill={tint}
        opacity="0.85"
      />
      <path
        d="M60 46c4 10 6 20 4 30-6-4-10-5-14-4 2-9 2-18-2-27z"
        fill={tint}
        opacity="0.85"
      />

      {/* body / robe */}
      <path
        d="M40 30c11 0 20 9 20 22 0 12-3 22-20 26-17-4-20-14-20-26 0-13 9-22 20-22z"
        fill="var(--color-parchment)"
        stroke={tint}
        strokeWidth="2.5"
      />

      {/* hat */}
      <path
        d="M40 4L27 34c4-2 8-3 13-3s9 1 13 3z"
        fill={tint}
      />
      <ellipse cx="40" cy="34" rx="15" ry="4" fill={tint} />
      <path
        d="M40 4l2.4 5.4L48 12l-5.6 2.6L40 20l-2.4-5.4L32 12l5.6-2.6z"
        fill="var(--color-amber)"
        opacity="0.9"
      />

      {/* blush */}
      <circle cx="27" cy="54" r="3" fill={tint} opacity="0.4" />
      <circle cx="53" cy="54" r="3" fill={tint} opacity="0.4" />

      {/* eyes */}
      {delighted ? (
        <g stroke="var(--color-ink)" strokeWidth="2.4" strokeLinecap="round" fill="none">
          <path d="M27 49q4 -5 8 0" />
          <path d="M45 49q4 -5 8 0" />
        </g>
      ) : (
        <motion.g
          animate={reduceMotion ? undefined : { scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            times: [0, 0.85, 0.9, 0.95, 1],
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "40px 49px" }}
        >
          <circle cx="31" cy="49" r="3.4" fill="var(--color-ink)" />
          <circle cx="49" cy="49" r="3.4" fill="var(--color-ink)" />
          <circle cx="32.1" cy="47.8" r="1" fill="var(--color-parchment)" />
          <circle cx="50.1" cy="47.8" r="1" fill="var(--color-parchment)" />
        </motion.g>
      )}

      {/* smile */}
      <path
        d={delighted ? "M33 58q7 6 14 0" : "M34 57c2 2.2 4 3.2 6 3.2s4-1 6-3.2"}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* tiny wand */}
      <g transform="translate(56 40) rotate(25)">
        <line x1="0" y1="0" x2="0" y2="16" stroke={tint} strokeWidth="2" strokeLinecap="round" />
        <path
          d="M0 -3l1.4 3-1.4 3-1.4-3z"
          fill="var(--color-amber)"
        />
      </g>
    </motion.svg>
  );
}

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
      viewBox="0 0 80 84"
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
            : { y: [0, -4, 0] }
      }
      transition={
        delighted
          ? { duration: 0.55, ease: "easeOut" }
          : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {/* ground shadow */}
      <ellipse cx="40" cy="78" rx="20" ry="3.5" fill="var(--color-ink)" opacity="0.1" />

      {/* round, chibi body — big head, tiny stub arms */}
      <circle cx="40" cy="42" r="30" fill="white" stroke={tint} strokeWidth="2.5" />
      <path
        d="M12 44a28 28 0 0 0 56 0"
        fill={tint}
        opacity="0.16"
      />

      {/* little arms */}
      <circle cx="12" cy="46" r="5.5" fill={tint} opacity="0.85" />
      <circle cx="68" cy="46" r="5.5" fill={tint} opacity="0.85" />

      {/* fringe / tuft of hair */}
      <path
        d="M28 16c2-6 6-9 12-9s10 3 12 9c-4-2-8-3-12-3s-8 1-12 3z"
        fill={tint}
      />
      <circle cx="40" cy="7.5" r="3.2" fill="var(--color-amber)" />

      {/* blush */}
      <circle cx="24" cy="48" r="4.2" fill={tint} opacity="0.35" />
      <circle cx="56" cy="48" r="4.2" fill={tint} opacity="0.35" />

      {/* eyes */}
      {delighted ? (
        <g stroke="var(--color-ink)" strokeWidth="2.6" strokeLinecap="round" fill="none">
          <path d="M28 41q4.5 -5.5 9 0" />
          <path d="M43 41q4.5 -5.5 9 0" />
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
          style={{ transformOrigin: "40px 41px" }}
        >
          <circle cx="32" cy="41" r="3.6" fill="var(--color-ink)" />
          <circle cx="48" cy="41" r="3.6" fill="var(--color-ink)" />
          <circle cx="33.2" cy="39.6" r="1.1" fill="white" />
          <circle cx="49.2" cy="39.6" r="1.1" fill="white" />
        </motion.g>
      )}

      {/* smile */}
      <path
        d={delighted ? "M33 50q7 6.5 14 0" : "M34.5 49c1.8 2.4 3.6 3.4 5.5 3.4s3.7-1 5.5-3.4"}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* tiny wand */}
      <g transform="translate(62 30) rotate(20)">
        <line x1="0" y1="0" x2="0" y2="14" stroke={tint} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M0 -3.2l1.6 3.2-1.6 3.2-1.6-3.2z" fill="var(--color-amber)" />
      </g>
    </motion.svg>
  );
}

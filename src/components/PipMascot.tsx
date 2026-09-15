import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const moodTint: Record<string, string> = {
  research: "var(--color-punch-violet)",
  strategy: "var(--color-punch-green)",
  build: "var(--color-punch-gold)",
  measure: "var(--color-punch-pink)",
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
  const tint = moodTint[mode] ?? "var(--color-punch-green)";
  const [delighted, setDelighted] = useState(false);

  const poke = () => {
    setDelighted(true);
    window.setTimeout(() => setDelighted(false), 550);
  };

  return (
    <motion.svg
      viewBox="0 0 80 92"
      className={`${className} ${interactive ? "cursor-pointer" : ""}`}
      role={interactive ? "button" : undefined}
      aria-label={interactive ? "Poke Pip" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? poke : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") poke();
            }
          : undefined
      }
      animate={
        reduceMotion
          ? undefined
          : delighted
            ? { y: [0, -10, 0], rotate: [0, -5, 5, 0] }
            : { y: [0, -3, 0] }
      }
      transition={
        delighted
          ? { duration: 0.55, ease: "easeOut" }
          : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {/* ground shadow */}
      <ellipse cx="40" cy="87" rx="16" ry="3.2" fill="black" opacity="0.15" />

      {/* aura */}
      <circle cx="40" cy="46" r="30" fill={tint} opacity="0.14" />

      {/* cane */}
      <path
        d="M56 58c1-8 2-14 3-17"
        stroke="#8a6a4a"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* robe */}
      <path
        d="M24 58c-3 9-5 17-4 27h40c1-10-1-18-4-27-4 6-9 9-16 9s-12-3-16-9z"
        fill="#8a6a4a"
      />
      <path
        d="M24 58c-3 9-5 17-4 27h6c-1-9 0-18 3-26z"
        fill="#7a5c40"
      />
      {/* belt + clasp */}
      <path d="M27 66c4 3 9 4.5 13 4.5s9-1.5 13-4.5" stroke="#5c4530" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="68.5" r="2.6" fill={tint} stroke="#5c4530" strokeWidth="1" />

      {/* ears (behind head) */}
      <path
        d="M22 38c-9-2-15 2-17 8 6 2 12 1 17-3z"
        fill="#8faa5e"
      />
      <path
        d="M58 38c9-2 15 2 17 8-6 2-12 1-17-3z"
        fill="#8faa5e"
      />
      <path d="M22 38c-9-2-15 2-17 8" fill="none" stroke="#748c4a" strokeWidth="1" opacity="0.6" />
      <path d="M58 38c9-2 15 2 17 8" fill="none" stroke="#748c4a" strokeWidth="1" opacity="0.6" />

      {/* head */}
      <ellipse cx="40" cy="42" rx="17" ry="16" fill="#9cb96b" />
      <ellipse cx="40" cy="42" rx="17" ry="16" fill="none" stroke="#7e9852" strokeWidth="1.5" opacity="0.5" />

      {/* forehead wrinkles */}
      <path d="M29 33c4-2 8-2.5 11-2.5s7 .5 11 2.5" stroke="#7e9852" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M31 37c3-1.4 6-1.8 9-1.8s6 .4 9 1.8" stroke="#7e9852" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* eyes */}
      {delighted ? (
        <g stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <path d="M31 44q4 -5 8 0" />
          <path d="M45 44q4 -5 8 0" />
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
          style={{ transformOrigin: "40px 44px" }}
        >
          <circle cx="34.5" cy="44" r="2.8" fill="var(--color-ink)" />
          <circle cx="49.5" cy="44" r="2.8" fill="var(--color-ink)" />
          <circle cx="35.4" cy="43" r="0.9" fill="white" />
          <circle cx="50.4" cy="43" r="0.9" fill="white" />
        </motion.g>
      )}

      {/* nose + mouth */}
      <path d="M39.3 47.5c.5 1 1.2 1.6 2 1.6" stroke="#5f7a3a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path
        d={delighted ? "M35 53q5 4 10 0" : "M35.5 52.5c1.6 1.6 3.2 2.3 4.8 2.3s3.2-.7 4.8-2.3"}
        fill="none"
        stroke="#4a3a1f"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

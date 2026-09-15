import { useState, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PipMascot from "./PipMascot";
import StatBar from "./StatBar";
import { companion, type CompanionMode } from "../data/profile";

const modeOrder: CompanionMode[] = ["research", "strategy", "build", "measure"];

const modeColor: Record<CompanionMode, string> = {
  research: "var(--color-punch-violet)",
  strategy: "var(--color-punch-green)",
  build: "var(--color-punch-gold)",
  measure: "var(--color-punch-pink)",
};

const modeIcon: Record<CompanionMode, ReactElement> = {
  research: (
    <>
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.2 13.2L18 18" strokeLinecap="round" />
    </>
  ),
  strategy: (
    <>
      <path d="M12 3v6M12 21v-4" strokeLinecap="round" />
      <path d="M8 5h8l-2 4h-4z" />
      <path d="M9 17h6" strokeLinecap="round" />
    </>
  ),
  build: (
    <>
      <path d="M14 6l4 4-9 9-4-1-1-4z" />
      <path d="M13 7l4 4" strokeLinecap="round" />
    </>
  ),
  measure: (
    <>
      <path d="M5 19V10M12 19V5M19 19v-7" strokeLinecap="round" />
    </>
  ),
};

export default function CompanionCard({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<CompanionMode>("research");
  const active = companion.modes[mode];
  const tint = modeColor[mode];

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full opacity-30 blur-3xl transition-colors duration-500"
        style={{ background: `radial-gradient(circle, ${tint} 0%, transparent 70%)` }}
      />

      <div className="rotate-1 rounded-2xl border-[3px] border-night-deep bg-parchment-dim p-3 shadow-[0_18px_40px_-14px_rgba(36,28,61,0.5)] sm:p-4">
        {/* HUD bar */}
        <div className="flex items-center justify-between px-1 pb-2 text-[0.7rem] text-ink/70">
          <span className="flex items-center gap-1 font-display">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-punch-pink"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.6 2 5 5.4 5c2 0 3.5 1.1 4.6 2.7C11.1 6.1 12.6 5 14.6 5 18 5 19.6 8.6 22 11.7 19.5 16.4 12 21 12 21z"/></svg>
            LVL 4 companion
          </span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-punch-green opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-punch-green" />
            </span>
            ready
          </span>
        </div>

        {/* Scene */}
        <div className="night-sky pixel-corners relative h-44 overflow-hidden">
          <span className="twinkle absolute top-4 left-6 h-1 w-1 rounded-full bg-white" style={{ animationDelay: "0.2s" }} />
          <span className="twinkle absolute top-8 right-8 h-1.5 w-1.5 rounded-full bg-white" style={{ animationDelay: "1s" }} />
          <span className="twinkle absolute top-14 left-14 h-1 w-1 rounded-full bg-white" style={{ animationDelay: "1.8s" }} />
          <span className="twinkle absolute top-6 right-20 h-1 w-1 rounded-full bg-white" style={{ animationDelay: "0.6s" }} />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-10"
            style={{ background: "linear-gradient(180deg, transparent, color-mix(in srgb, var(--color-night-deep) 70%, transparent))" }}
          />
          <PipMascot mode={mode} className="absolute bottom-1 left-1/2 h-32 w-32 -translate-x-1/2" />
        </div>
        <p className="mt-1.5 text-center text-[0.65rem] text-ink/40">tap Pip to say hi</p>

        {/* Speech bubble */}
        <div className="pixel-corners mt-3 min-h-[76px] border-2 border-night-deep bg-parchment p-3">
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.25 }}
              className="font-display text-[0.9rem] leading-snug text-ink italic"
            >
              "{active.quote}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Mode nav, arcade-icon style */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {modeOrder.map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)} className="flex flex-col items-center gap-1">
              <span
                className="arcade-btn flex h-11 w-11 items-center justify-center rounded-lg transition-transform"
                data-active={mode === m}
                style={{
                  backgroundColor: modeColor[m],
                  transform: mode === m ? "scale(1.08)" : undefined,
                }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2">
                  {modeIcon[m]}
                </svg>
              </span>
              <span className="text-[0.62rem] text-ink/70">{companion.modes[m].label}</span>
            </button>
          ))}
        </div>

        <dl className="mt-4 space-y-2 border-y border-dashed border-deepink/15 py-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ink/55">Current quest</dt>
            <dd className="text-right text-ink/85">{companion.quest}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink/55">Standing</dt>
            <dd className="text-right text-ink/85">{companion.standing}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink/55">Artifacts</dt>
            <dd className="text-right text-ink/85">{companion.artifacts}</dd>
          </div>
        </dl>

        <div className="mt-4 space-y-4 px-1 pb-1">
          {companion.stats.map((s) => (
            <StatBar key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

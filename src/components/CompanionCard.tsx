import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PipMascot from "./PipMascot";
import StatBar from "./StatBar";
import { companion, type CompanionMode } from "../data/profile";

const modeOrder: CompanionMode[] = ["research", "strategy", "build", "measure"];

const modeColor: Record<CompanionMode, string> = {
  research: "var(--color-lavender)",
  strategy: "var(--color-sage)",
  build: "var(--color-amber)",
  measure: "var(--color-rose)",
};

export default function CompanionCard({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<CompanionMode>("research");
  const active = companion.modes[mode];
  const tint = modeColor[mode];

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-full opacity-40 blur-3xl transition-colors duration-500"
        style={{
          background: `radial-gradient(circle, ${tint} 0%, transparent 70%)`,
        }}
      />
      <div className="rotate-1 rounded-md border border-deepink/15 bg-parchment-dim/95 p-6 shadow-[0_14px_36px_-16px_rgba(43,36,64,0.35)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-parchment transition-colors duration-500"
              style={{ borderColor: tint }}
            >
              <PipMascot mode={mode} className="h-8 w-8" />
            </span>
            <div>
              <p className="font-display text-sm text-ink">{companion.name}</p>
              <p className="text-xs text-ink/60">{companion.role}</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-sage/15 px-2.5 py-1 text-[0.7rem] text-sage">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
            </span>
            ready to synthesize
          </span>
        </div>

        <div className="mt-5 min-h-[92px] rounded-sm border border-deepink/10 bg-parchment p-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="font-display text-[1.05rem] leading-snug text-ink italic"
            >
              "{active.quote}"
            </motion.p>
          </AnimatePresence>
        </div>

        <dl className="mt-5 space-y-2 border-y border-dashed border-deepink/15 py-4 text-sm">
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

        <div className="mt-5 grid grid-cols-4 gap-1.5">
          {modeOrder.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded-md border px-2 py-1.5 text-xs transition-colors ${
                mode === m
                  ? ""
                  : "border-deepink/15 text-ink/60 hover:border-sage/50 hover:text-ink"
              }`}
              style={
                mode === m
                  ? {
                      borderColor: modeColor[m],
                      backgroundColor: modeColor[m],
                      color: "var(--color-parchment)",
                    }
                  : undefined
              }
            >
              {companion.modes[m].label}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {companion.stats.map((s) => (
            <StatBar key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

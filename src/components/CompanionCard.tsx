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
      <div className="rotate-1 rounded-md border border-deepink/15 bg-parchment-dim/95 p-5 shadow-[0_14px_36px_-16px_rgba(43,36,64,0.35)] sm:p-6">
        <div className="grid gap-5 sm:grid-cols-[9rem_1fr]">
          {/* Scene */}
          <div
            className="relative flex flex-col items-center justify-end overflow-hidden rounded-md border transition-colors duration-500"
            style={{
              borderColor: `color-mix(in srgb, ${tint} 45%, transparent)`,
              background: `linear-gradient(180deg, color-mix(in srgb, ${tint} 14%, var(--color-parchment)) 0%, var(--color-parchment) 75%)`,
            }}
          >
            <span className="twinkle absolute top-3 left-4 h-1 w-1 rounded-full" style={{ background: tint, animationDelay: "0.2s" }} />
            <span className="twinkle absolute top-6 right-5 h-1.5 w-1.5 rounded-full" style={{ background: tint, animationDelay: "1s" }} />
            <span className="twinkle absolute top-10 left-8 h-1 w-1 rounded-full" style={{ background: tint, animationDelay: "1.8s" }} />
            <PipMascot mode={mode} className="h-28 w-28" />
            <p className="mb-2 text-[0.65rem] tracking-wide text-ink/40">tap to poke</p>
          </div>

          {/* Info */}
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-display text-sm text-ink">{companion.name}</p>
                <p className="text-xs text-ink/60">{companion.role}</p>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-sage/15 px-2.5 py-1 text-[0.7rem] whitespace-nowrap text-sage">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
                </span>
                ready
              </span>
            </div>

            <div className="mt-3 min-h-[80px] rounded-sm border border-deepink/10 bg-parchment p-3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={mode}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-[0.95rem] leading-snug text-ink italic"
                >
                  "{active.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {modeOrder.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  data-active={mode === m}
                  className="pixel-btn rounded-sm bg-parchment px-2 py-1.5 text-xs text-ink/70"
                  style={mode === m ? { backgroundColor: modeColor[m], color: "var(--color-parchment)" } : undefined}
                >
                  {companion.modes[m].label}
                </button>
              ))}
            </div>
          </div>
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

        <div className="mt-5 space-y-4">
          {companion.stats.map((s) => (
            <StatBar key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

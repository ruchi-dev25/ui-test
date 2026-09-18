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
      <div className="widget-card widget-cream rotate-1 p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-[9rem_1fr]">
          {/* Scene */}
          <div
            className="relative flex flex-col items-center justify-end overflow-hidden rounded-2xl transition-colors duration-500"
            style={{
              background: `linear-gradient(180deg, color-mix(in srgb, ${tint} 22%, white) 0%, white 78%)`,
            }}
          >
            <span className="twinkle absolute top-3 left-4 h-1 w-1 rounded-full" style={{ background: tint, animationDelay: "0.2s" }} />
            <span className="twinkle absolute top-6 right-5 h-1.5 w-1.5 rounded-full" style={{ background: tint, animationDelay: "1s" }} />
            <span className="twinkle absolute top-10 left-8 h-1 w-1 rounded-full" style={{ background: tint, animationDelay: "1.8s" }} />
            <PipMascot mode={mode} className="h-20 w-20" />
            <p className="mb-2 text-[0.65rem] tracking-wide text-ink/40">tap to poke</p>
          </div>

          {/* Info */}
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-display text-sm text-ink">{companion.name}</p>
                <p className="text-xs text-ink/60">{companion.role}</p>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-sage/20 px-2.5 py-1 text-[0.7rem] whitespace-nowrap text-sage">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
                </span>
                ready
              </span>
            </div>

            <div className="mt-3 min-h-[56px] rounded-xl bg-white/60 p-3">
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
                  className="rounded-full bg-white/70 px-2 py-1.5 text-xs text-ink/70 shadow-[0_2px_6px_-2px_rgba(54,42,74,0.35)] transition-transform hover:-translate-y-0.5"
                  style={mode === m ? { backgroundColor: modeColor[m], color: "white" } : undefined}
                >
                  {companion.modes[m].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-dashed border-deepink/15 pt-4">
          {companion.stats.map((s) => (
            <StatBar key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

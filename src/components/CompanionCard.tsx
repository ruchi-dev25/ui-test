import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Doodle from "./Doodle";
import StatBar from "./StatBar";
import { companion, type CompanionMode } from "../data/profile";

const modeOrder: CompanionMode[] = ["research", "strategy", "build", "measure"];

export default function CompanionCard({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<CompanionMode>("research");
  const active = companion.modes[mode];

  return (
    <div
      className={`rotate-1 rounded-md border border-deepink/15 bg-parchment-dim p-6 shadow-[0_14px_36px_-16px_rgba(43,36,64,0.35)] ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/40 bg-parchment">
            <Doodle variant="sage-elder" className="h-6 w-6 text-sage" />
          </span>
          <div>
            <p className="font-display text-sm text-ink">{companion.name}</p>
            <p className="text-xs text-ink/55">{companion.role}</p>
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
          <dt className="text-ink/50">Current quest</dt>
          <dd className="text-right text-ink/85">{companion.quest}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink/50">Standing</dt>
          <dd className="text-right text-ink/85">{companion.standing}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink/50">Artifacts</dt>
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
                ? "border-sage bg-sage text-parchment"
                : "border-deepink/15 text-ink/60 hover:border-sage/50 hover:text-ink"
            }`}
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
  );
}

import { useState, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PipMascot from "./PipMascot";
import StatBar from "./StatBar";
import { companion, type CompanionMode } from "../data/profile";

const modeOrder: CompanionMode[] = ["research", "strategy", "build", "measure"];

const modeStyle: Record<CompanionMode, { bg: string; ink: string }> = {
  research: { bg: "var(--color-mint-bg)", ink: "var(--color-mint-ink)" },
  strategy: { bg: "var(--color-blush-bg)", ink: "var(--color-blush-ink)" },
  build: { bg: "var(--color-sky-bg)", ink: "var(--color-sky-ink)" },
  measure: { bg: "var(--color-lilac-bg)", ink: "var(--color-lilac-ink)" },
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
  const style = modeStyle[mode];
  const expPct = 94;

  return (
    <div className={`quest-card overflow-hidden rounded-lg ${className}`}>
      {/* HUD bar */}
      <div className="bg-parchment-dim px-4 py-2.5">
        <div className="mono-label flex items-center justify-between text-[0.68rem] text-ink/70">
          <span>
            LVL 4 APM <span className="text-blush-ink">♥</span> EXP: 940/1000
          </span>
          <span className="flex items-center gap-2">
            <span className="rounded-md bg-mint-bg px-2 py-0.5 text-mint-ink">Ready</span>
            <span className="flex h-2.5 w-4 items-center rounded-[2px] border border-ink/40 p-[1px]">
              <span className="h-full w-3/4 rounded-[1px] bg-mint-ink" />
            </span>
          </span>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-ink/10">
          <div className="h-full rounded-full bg-punch-violet" style={{ width: `${expPct}%` }} />
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-md border transition-colors duration-500"
              style={{ borderColor: style.ink, backgroundColor: style.bg }}
            >
              <PipMascot mode={mode} className="h-6 w-6" />
            </span>
            <div>
              <p className="mono-label text-xs text-ink">Pip // PM companion</p>
              <p className="text-[0.68rem] text-ink/50">Status: ready to synthesize</p>
            </div>
          </div>
        </div>

        <div className="quest-card mt-4 min-h-[76px] rounded-md p-3.5">
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.25 }}
              className="font-display text-[0.92rem] leading-snug text-ink italic"
            >
              "{active.quote}"
            </motion.p>
          </AnimatePresence>
        </div>

        <dl className="mono-label mt-4 space-y-2 border-y border-dashed border-ink/15 py-3.5 text-[0.7rem]">
          <div className="flex justify-between gap-4">
            <dt className="text-ink/45">Current quest:</dt>
            <dd className="text-right text-ink/80 normal-case">{companion.quest}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink/45">Class / role:</dt>
            <dd className="text-right text-ink/80 normal-case">{companion.standing}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink/45">Core artifacts:</dt>
            <dd className="text-right text-ink/80 normal-case">{companion.artifacts}</dd>
          </div>
        </dl>

        <p className="mono-label mt-4 text-[0.68rem] text-ink/50">Select mode to query Pip:</p>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {modeOrder.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className="flex flex-col items-center gap-1 rounded-md border py-2.5 transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: modeStyle[m].bg,
                borderColor: mode === m ? modeStyle[m].ink : "transparent",
              }}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke={modeStyle[m].ink} strokeWidth="2">
                {modeIcon[m]}
              </svg>
              <span className="mono-label text-[0.6rem]" style={{ color: modeStyle[m].ink }}>
                {companion.modes[m].label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-3.5">
          {companion.stats.map((s) => (
            <StatBar key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

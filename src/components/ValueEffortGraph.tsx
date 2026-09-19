type Point = {
  label: string;
  quadrant: "quick-win" | "big-bet" | "fill-in" | "time-sink";
  rationale: string;
};

const quadrantStyle: Record<
  Point["quadrant"],
  { pos: string; border: string; tint: string }
> = {
  "quick-win": {
    pos: "col-start-2 row-start-1",
    border: "border-r-2 border-b-2",
    tint: "var(--color-sage-soft)",
  },
  "big-bet": {
    pos: "col-start-3 row-start-1",
    border: "border-b-2",
    tint: "var(--color-periwinkle)",
  },
  "fill-in": {
    pos: "col-start-2 row-start-2",
    border: "border-r-2",
    tint: "var(--color-amber)",
  },
  "time-sink": {
    pos: "col-start-3 row-start-2",
    border: "",
    tint: "var(--color-rose)",
  },
};

export default function ValueEffortGraph({
  points,
  valueLabel = "value",
}: {
  points: Point[];
  valueLabel?: string;
}) {
  const byQuadrant = (q: Point["quadrant"]) => points.filter((p) => p.quadrant === q);

  return (
    <div className="py-4">
      <div className="mx-auto w-full max-w-2xl">
        <span className="font-display block text-center text-sm text-ink italic">
          high {valueLabel}
        </span>

        {/* one flat grid — label columns share the exact same row tracks as the quadrants, so
            "low/high effort" lock to the true row boundary (the x-axis) no matter how tall either row grows */}
        <div className="mt-2 grid grid-cols-[auto_1fr_1fr_auto]">
          <span className="font-display relative col-start-1 row-start-2 -translate-y-1/2 self-start pr-2 text-sm whitespace-nowrap text-ink italic sm:pr-4">
            low effort
          </span>

          {(["quick-win", "big-bet", "fill-in", "time-sink"] as const).map((q) => {
            const style = quadrantStyle[q];
            return (
              <div
                key={q}
                className={`flex min-h-[11rem] flex-col justify-start gap-4 border-dashed border-ink/25 p-5 sm:p-7 ${style.pos} ${style.border}`}
                style={{
                  background: `linear-gradient(155deg, color-mix(in srgb, ${style.tint} 16%, transparent) 0%, color-mix(in srgb, ${style.tint} 5%, transparent) 100%)`,
                }}
              >
                {byQuadrant(q).map((p) => (
                  <div key={p.label}>
                    <p className="font-display text-base leading-snug text-ink">{p.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{p.rationale}</p>
                  </div>
                ))}
              </div>
            );
          })}

          <span className="font-display relative col-start-4 row-start-2 -translate-y-1/2 self-start pl-2 text-sm whitespace-nowrap text-ink italic sm:pl-4">
            high effort
          </span>
        </div>

        <span className="font-display mt-2 block text-center text-sm text-ink italic">
          low {valueLabel}
        </span>
      </div>
    </div>
  );
}

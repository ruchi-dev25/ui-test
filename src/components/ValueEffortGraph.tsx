type Point = {
  label: string;
  quadrant: "quick-win" | "big-bet" | "fill-in" | "time-sink";
  rationale: string;
};

const quadrantOrder = ["quick-win", "big-bet", "fill-in", "time-sink"] as const;

const quadrantStyle: Record<
  Point["quadrant"],
  { pos: string; border: string; tint: string; effort: string; value: "high" | "low" }
> = {
  "quick-win": {
    pos: "col-start-2 row-start-1",
    border: "border-r-2 border-b-2",
    tint: "var(--color-sage-soft)",
    effort: "low",
    value: "high",
  },
  "big-bet": {
    pos: "col-start-3 row-start-1",
    border: "border-b-2",
    tint: "var(--color-periwinkle)",
    effort: "high",
    value: "high",
  },
  "fill-in": {
    pos: "col-start-2 row-start-2",
    border: "border-r-2",
    tint: "var(--color-amber)",
    effort: "low",
    value: "low",
  },
  "time-sink": {
    pos: "col-start-3 row-start-2",
    border: "",
    tint: "var(--color-rose)",
    effort: "high",
    value: "low",
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
      {/* mobile: a real 2D graph doesn't fit a phone screen — stack quadrants as tagged cards in priority order */}
      <div className="space-y-4 sm:hidden">
        {quadrantOrder.map((q) => {
          const items = byQuadrant(q);
          if (items.length === 0) return null;
          const style = quadrantStyle[q];
          return (
            <div
              key={q}
              className="widget-card p-5"
              style={{
                background: `linear-gradient(155deg, color-mix(in srgb, ${style.tint} 30%, white) 0%, color-mix(in srgb, ${style.tint} 12%, white) 100%)`,
              }}
            >
              <span className="font-display inline-block rounded-full bg-white/70 px-2.5 py-1 text-xs text-ink/70 italic">
                {style.effort} effort · {style.value} {valueLabel}
              </span>
              <div className="mt-3 space-y-3">
                {items.map((p) => (
                  <div key={p.label}>
                    <p className="font-display text-base leading-snug text-ink">{p.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{p.rationale}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* sm+: the real axis-cross graph */}
      <div className="mx-auto hidden w-full max-w-2xl sm:block">
        <span className="font-display block text-center text-sm text-ink italic">
          high {valueLabel}
        </span>

        {/* one flat grid — label columns share the exact same row tracks as the quadrants, so
            "low/high effort" lock to the true row boundary (the x-axis) no matter how tall either row grows */}
        <div className="mt-2 grid grid-cols-[auto_1fr_1fr_auto]">
          <span className="font-display relative col-start-1 row-start-2 -translate-y-1/2 self-start pr-2 text-sm whitespace-nowrap text-ink italic sm:pr-4">
            low effort
          </span>

          {quadrantOrder.map((q) => {
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

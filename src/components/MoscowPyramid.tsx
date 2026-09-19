type Tier = {
  title: string;
  tint: "mint" | "periwinkle" | "amber" | "rose" | "cream";
  items: string[];
  rationale: string;
};

// Widths shrink from Must-have (the wide foundation) up to Won't-have (the narrow tip) —
// a MoSCoW priority pyramid, not a two-axis matrix.
const widths = ["100%", "80%", "60%", "42%"];

export default function MoscowPyramid({ tiers }: { tiers: Tier[] }) {
  const ordered = [...tiers].reverse();

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-3">
      {ordered.map((tier, i) => {
        const width = widths[tiers.length - 1 - i];
        return (
          <div
            key={tier.title}
            className={`widget-card widget-${tier.tint} w-full px-5 py-4 text-center`}
            style={{ width, rotate: `${i % 2 === 0 ? -0.4 : 0.4}deg` }}
          >
            <p className="font-display text-sm text-ink">{tier.title}</p>
            <p className="mt-1.5 text-xs leading-snug text-ink/80">
              {tier.items.join(" · ")}
            </p>
            <p className="mt-2 text-xs leading-snug text-ink/60 italic">{tier.rationale}</p>
          </div>
        );
      })}
    </div>
  );
}

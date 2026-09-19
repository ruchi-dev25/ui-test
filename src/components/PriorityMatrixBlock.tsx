import RibbonTag from "./RibbonTag";
import WidgetCard from "./WidgetCard";

type Quadrant = {
  title: string;
  tint: "mint" | "periwinkle" | "amber" | "rose" | "cream";
  items: string[];
  rationale: string;
};

export default function PriorityMatrixBlock({ quadrants }: { quadrants: Quadrant[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {quadrants.map((q, i) => (
        <WidgetCard key={q.title} tint={q.tint} rotate={i % 2 === 0 ? -0.6 : 0.6} className="p-5">
          <RibbonTag color="var(--color-ink)" rotate={-2}>
            {q.title}
          </RibbonTag>
          <ul className="mt-3 space-y-1.5">
            {q.items.map((item) => (
              <li key={item} className="text-sm leading-snug text-ink/85">
                • {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-ink/70 italic">{q.rationale}</p>
        </WidgetCard>
      ))}
    </div>
  );
}

import RibbonTag from "./RibbonTag";

const tints = ["mint", "periwinkle", "amber"] as const;

export default function TalkTrack({ items }: { items: { label: string; text: string }[] }) {
  return (
    <div className="space-y-5">
      {items.map((item, i) => (
        <div key={item.label} className={`widget-card widget-${tints[i % tints.length]} p-5`}>
          <RibbonTag color="var(--color-ink)" rotate={-2}>
            {item.label}
          </RibbonTag>
          <p className="mt-3 leading-relaxed text-ink/85 italic">"{item.text}"</p>
        </div>
      ))}
    </div>
  );
}

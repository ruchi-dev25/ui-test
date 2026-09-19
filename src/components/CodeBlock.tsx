import RibbonTag from "./RibbonTag";

export default function CodeBlock({
  label,
  code,
}: {
  label: string;
  code: string;
}) {
  return (
    <div className="relative">
      <RibbonTag color="var(--color-ink)" rotate={-2} className="absolute -top-3 left-4 z-10">
        {label}
      </RibbonTag>
      <pre className="overflow-x-auto rounded-2xl bg-ink px-5 pt-7 pb-5 text-[0.8rem] leading-relaxed text-parchment/90 shadow-[0_20px_40px_-24px_rgba(54,42,74,0.6)]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

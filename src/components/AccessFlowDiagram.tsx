function Box({
  title,
  detail,
  tint,
  className = "",
}: {
  title: string;
  detail?: string;
  tint: "mint" | "periwinkle" | "amber" | "rose" | "cream";
  className?: string;
}) {
  return (
    <div className={`widget-card widget-${tint} px-4 py-3 text-center ${className}`}>
      <p className="font-display text-sm leading-snug text-ink">{title}</p>
      {detail && <p className="mt-1 text-[0.7rem] leading-snug text-ink/60">{detail}</p>}
    </div>
  );
}

const stem = "mx-auto h-6 w-px border-l-2 border-dashed border-ink/25";

export default function AccessFlowDiagram() {
  return (
    <div className="widget-card widget-cream px-4 py-8 sm:px-8">
      <Box title="Student Data Schema" tint="periwinkle" className="mx-auto max-w-xs" />
      <div className={stem} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Box
            title="Private Academic Layer"
            detail="Marks · Backlogs · NPTEL"
            tint="rose"
          />
          <div className={stem} />
          <div className="grid grid-cols-2 gap-3">
            <Box
              title="Permanent Mentor"
              detail="Full read/write, entire 3-year tenure"
              tint="cream"
            />
            <Box
              title="Rotating Active CC"
              detail="Read/write scoped to active term & division"
              tint="cream"
            />
          </div>
        </div>

        <div>
          <Box
            title="Public Talent Directory"
            detail="Achievements · Hackathons"
            tint="mint"
          />
          <div className={stem} />
          <Box
            title="All Department Faculty"
            detail="Read-only scouting for projects & research"
            tint="cream"
          />
        </div>
      </div>

      <p className="font-hand mt-6 text-center text-lg text-sage">
        + HOD: full audit authority across both layers
      </p>
    </div>
  );
}

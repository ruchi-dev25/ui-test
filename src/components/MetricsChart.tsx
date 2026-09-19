import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export type MetricRow = {
  metric: string;
  method: string;
  baselineLabel: string;
  baselinePct: number;
  targetLabel: string;
  targetPct: number;
};

export default function MetricsChart({ rows }: { rows: MetricRow[] }) {
  return (
    <div className="widget-card widget-cream p-5 sm:p-7">
      <div className="flex flex-wrap items-center gap-4 text-xs">
        <span className="flex items-center gap-1.5 text-ink/60">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-coral)" }} />
          baseline
        </span>
        <span className="flex items-center gap-1.5 text-ink/60">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-sage)" }} />
          target
        </span>
      </div>

      <div style={{ width: "100%", height: rows.length * 78 }} className="mt-2">
        <ResponsiveContainer>
          <BarChart
            data={rows}
            layout="vertical"
            margin={{ top: 8, right: 60, left: 8, bottom: 8 }}
            barCategoryGap={28}
            barGap={4}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="metric"
              width={150}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--color-ink)", fontSize: 12, fontFamily: "var(--font-display)" }}
            />
            <Bar dataKey="baselinePct" radius={6} maxBarSize={16}>
              {rows.map((r) => (
                <Cell key={r.metric} fill="var(--color-coral)" fillOpacity={0.55} />
              ))}
              <LabelList
                dataKey="baselineLabel"
                position="right"
                fill="var(--color-ink)"
                fontSize={11}
              />
            </Bar>
            <Bar dataKey="targetPct" radius={6} maxBarSize={16}>
              {rows.map((r) => (
                <Cell key={r.metric} fill="var(--color-sage)" />
              ))}
              <LabelList
                dataKey="targetLabel"
                position="right"
                fill="var(--color-ink)"
                fontSize={11}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ul className="mt-4 space-y-2 border-t border-dashed border-ink/15 pt-4">
        {rows.map((r) => (
          <li key={r.metric} className="text-xs leading-relaxed text-ink/60">
            <span className="font-display text-ink/80">{r.metric}:</span> {r.method}
          </li>
        ))}
      </ul>
    </div>
  );
}

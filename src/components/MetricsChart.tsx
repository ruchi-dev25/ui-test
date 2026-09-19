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

function Legend() {
  return (
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
  );
}

export default function MetricsChart({ rows }: { rows: MetricRow[] }) {
  return (
    <div className="widget-card widget-cream p-5 sm:p-7">
      {/* mobile: plain stacked bars per metric — a dense recharts bar chart can't fit labels on a phone screen */}
      <div className="sm:hidden">
        <Legend />
        <div className="mt-4 space-y-5">
          {rows.map((r) => (
            <div key={r.metric}>
              <p className="font-display text-sm text-ink">{r.metric}</p>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${r.baselinePct}%`, background: "var(--color-coral)" }}
                    />
                  </div>
                  <span className="w-28 shrink-0 text-xs text-ink/70">{r.baselineLabel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${r.targetPct}%`, background: "var(--color-sage)" }}
                    />
                  </div>
                  <span className="w-28 shrink-0 text-xs text-ink/70">{r.targetLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* sm+: the recharts bar chart */}
      <div className="hidden sm:block">
        <Legend />
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

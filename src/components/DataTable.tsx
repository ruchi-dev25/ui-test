export default function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <>
      {/* mobile: each row as its own stacked card, label/value pairs — a real table doesn't fit a phone screen */}
      <div className="space-y-3 sm:hidden">
        {rows.map((row, i) => (
          <div key={i} className="widget-card widget-cream p-4">
            <p className="font-display text-ink">{row[0]}</p>
            <dl className="mt-2 space-y-2">
              {columns.slice(1).map((c, j) => (
                <div key={c}>
                  <dt className="text-xs text-ink/50">{c}</dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-ink/80">{row[j + 1]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* sm+: real table */}
      <div className="widget-card widget-cream hidden overflow-x-auto p-1.5 sm:block">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr>
              {columns.map((c) => (
                <th
                  key={c}
                  className="font-display border-b-2 border-ink/15 px-4 py-3 text-left text-ink"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-dashed border-ink/10 last:border-0">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 align-top leading-relaxed text-ink/80 ${
                      j === 0 ? "font-display text-ink" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

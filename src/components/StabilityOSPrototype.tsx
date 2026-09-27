
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  Check,
  ChevronRight,
  Clock3,
  FileUp,
  Search,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { useState } from "react";





const tabs = ["Risk health", "Pre-hold warnings", "Case tracker", "Cash flow"];

const drivers = [
  { name: "Dispute rate", value: "0.84%", note: "Threshold 0.90%", weight: 38, action: "Review disputes" },
  { name: "Velocity spike", value: "+142% / 7d", note: "Volume vs. 30-day average", weight: 27, action: "Set ticket cap" },
  { name: "Missing verification docs", value: "1 pending", note: "Beneficial ownership", weight: 19, action: "Upload docs" },
];

const playbook = [
  { title: "Enable 3DS on high-risk countries", meta: "Radar rule · takes 1 minute" },
  { title: "Lower single-charge cap to $750", meta: "Temporary · 14 days" },
  { title: "Upload fulfillment evidence", meta: "2 of 3 documents received" },
];

const timeline = [
  { label: "Case opened", meta: "Sep 24 · automated risk signal", done: true },
  { label: "Documents requested", meta: "Sep 24 · 3 items", done: true },
  { label: "Documents received", meta: "Sep 25 · 2 of 3", done: true },
  { label: "First review by Risk Ops", meta: "Within 24–48h · 28h 14m remaining", done: false },
  { label: "Decision + funds released", meta: "Pending review", done: false },
];

export default function StabilityOSPrototype() {
  const [tab, setTab] = useState(0);
  const [doneActions, setDoneActions] = useState<number[]>([]);
  const [advance, setAdvance] = useState(false);

  const toggleAction = (i: number) =>
    setDoneActions((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <main className="stripe-ui min-h-screen">
      <div className="su-nav">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <span className="flex items-center gap-2 text-sm font-bold">
            <ShieldCheck className="size-4" /> stripe
          </span>
          <div className="hidden min-w-0 flex-1 items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-[13px] text-white/70 sm:flex">
            <Search className="size-3.5" /> Search or jump to…
          </div>
          <span className="ml-auto rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">
            Test mode
          </span>
          <Bell className="size-4 text-white/70" />
          <span className="text-[13px] font-semibold">Kite Studio</span>
        </div>
      </div>

      <div className="border-b bg-white su-line" style={{ borderBottomWidth: 1 }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((t, i) => (
              <button key={t} className="su-tab whitespace-nowrap" data-active={tab === i} onClick={() => setTab(i)}>
                {t}
              </button>
            ))}
          </div>
          <Link to="/teardowns/stripe-stability-os" className="hidden items-center gap-1.5 text-[13px] font-semibold su-brand sm:flex">
            <ArrowLeft className="size-3.5" /> Back to teardown
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[13px] font-semibold su-muted">Stability OS</div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Risk &amp; fund release</h1>
          </div>
          <span className="su-pill su-pill-grey">Prototype · illustrative data</span>
        </div>

        {tab === 0 && (
          <div className="grid gap-5 lg:grid-cols-[19rem_1fr]">
            <div className="su-card p-6">
              <div className="text-[13px] font-semibold su-muted">Risk Health Score</div>
              <div className="mt-5 grid place-items-center">
                <div
                  className="grid size-40 place-items-center rounded-full"
                  style={{
                    background: `conic-gradient(var(--su-brand) 0 62%, #eef1f6 62% 100%)`,
                  }}
                >
                  <div className="grid size-32 place-items-center rounded-full bg-white text-center">
                    <div>
                      <div className="text-4xl font-bold">62</div>
                      <div className="text-[12px] font-semibold su-muted">of 100</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="su-pill su-pill-amber">
                  <AlertTriangle className="size-3" /> Needs attention
                </span>
                <span className="flex items-center gap-1 text-[13px] font-bold" style={{ color: "var(--su-red)" }}>
                  <TrendingDown className="size-3.5" /> 8 pts this week
                </span>
              </div>
              <p className="mt-4 text-[13px] leading-6 su-muted">
                Bands and directional drivers only. Scores are risk indicators, not final findings.
              </p>
            </div>

            <div className="su-card p-6">
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-semibold su-muted">Top 3 drivers</div>
                <span className="text-[12px] su-muted">Updated 4 min ago</span>
              </div>
              <div className="mt-2">
                {drivers.map((d, i) => (
                  <div key={d.name} className="grid gap-3 border-b py-4 su-line sm:grid-cols-[1.4fr_1fr_auto] sm:items-center" style={{ borderBottomWidth: 1 }}>
                    <div>
                      <div className="flex items-center gap-2 text-[15px] font-semibold">
                        <span className="su-pill su-pill-grey">{i + 1}</span>
                        {d.name}
                      </div>
                      <div className="mt-1 text-[13px] su-muted">{d.note}</div>
                    </div>
                    <div>
                      <div className="text-[15px] font-bold">{d.value}</div>
                      <div className="su-meter mt-2">
                        <span style={{ width: `${d.weight}%` }} />
                      </div>
                    </div>
                    <button className="su-btn-ghost justify-self-start sm:justify-self-end" onClick={() => setTab(1)}>
                      {d.action}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button className="su-btn" onClick={() => setTab(1)}>
                  Open prevention playbook <ChevronRight className="inline size-3.5" />
                </button>
                <span className="text-[13px] su-muted">3 recommended actions</span>
              </div>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
            <div className="su-card overflow-hidden">
              <div
                className="flex gap-3 p-5"
                style={{ background: "var(--su-amber-soft)", borderBottom: "1px solid var(--su-line)" }}
              >
                <AlertTriangle className="mt-0.5 size-5 shrink-0" style={{ color: "var(--su-amber)" }} />
                <div>
                  <div className="text-[15px] font-bold">Your risk is rising.</div>
                  <p className="mt-1 text-[14px] su-muted">
                    Do these 3 things to avoid a hold. Completing them before Oct 2 avoids a 30% rolling reserve.
                  </p>
                </div>
              </div>
              <div className="p-5">
                {playbook.map((p, i) => {
                  const done = doneActions.includes(i);
                  return (
                    <button
                      key={p.title}
                      onClick={() => toggleAction(i)}
                      className="flex w-full items-center gap-3 border-b py-4 text-left su-line"
                      style={{ borderBottomWidth: 1 }}
                    >
                      <span
                        className={cn("grid size-5 shrink-0 place-items-center rounded-full border")}
                        style={{
                          borderColor: done ? "var(--su-green)" : "var(--su-line)",
                          background: done ? "var(--su-green)" : "#fff",
                          color: "#fff",
                        }}
                      >
                        {done && <Check className="size-3" />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={cn("block text-[15px] font-semibold", done && "line-through opacity-60")}>
                          {p.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] su-muted">{p.meta}</span>
                      </span>
                      <span className={cn("su-pill", done ? "su-pill-green" : "su-pill-brand")}>
                        {done ? "Done" : "Do it"}
                      </span>
                    </button>
                  );
                })}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[13px] su-muted">{doneActions.length} of 3 completed</span>
                  <button className="su-btn-ghost" onClick={() => setDoneActions([])}>
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="su-card p-6">
              <div className="text-[13px] font-semibold su-muted">Projected score</div>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-4xl font-bold">{62 + doneActions.length * 7}</span>
                <span className="su-pill su-pill-green">
                  +{doneActions.length * 7} pts if completed
                </span>
              </div>
              <div className="su-meter mt-4" style={{ height: 10 }}>
                <span style={{ width: `${62 + doneActions.length * 7}%` }} />
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-md p-4" style={{ background: "var(--su-brand-soft)" }}>
                <FileUp className="mt-0.5 size-4 shrink-0 su-brand" />
                <p className="text-[13px] leading-6">
                  Drop verification documents here. Stability OS routes them straight to the open review case.
                </p>
              </div>
              <p className="mt-5 text-[13px] leading-6 su-muted">
                Projection is directional. Exact thresholds are never exposed, to prevent gaming the score.
              </p>
            </div>
          </div>
        )}

        {tab === 2 && (
          <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <div className="su-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[13px] su-muted">Case</div>
                  <div className="text-[17px] font-bold">case_risk_8912</div>
                </div>
                <span className="su-pill su-pill-amber">Under review</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  ["Owner", "Stripe Risk Ops"],
                  ["ETA", "First review within 24–48h"],
                  ["Funds on hold", "$41,200"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-[12px] su-muted">{k}</div>
                    <div className="mt-1 text-[14px] font-semibold">{v}</div>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 flex items-center gap-2 rounded-md p-3 text-[13px] font-semibold"
                style={{ background: "var(--su-brand-soft)", color: "var(--su-brand)" }}
              >
                <Clock3 className="size-4" /> SLA countdown · 28h 14m remaining
              </div>
              <div className="mt-6">
                {timeline.map((t) => (
                  <div key={t.label} className="grid grid-cols-[auto_1fr] gap-3 pb-5">
                    <span
                      className="mt-0.5 grid size-5 place-items-center rounded-full border"
                      style={{
                        borderColor: t.done ? "var(--su-green)" : "var(--su-line)",
                        background: t.done ? "var(--su-green)" : "#fff",
                        color: "#fff",
                      }}
                    >
                      {t.done && <Check className="size-3" />}
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold">{t.label}</div>
                      <div className="text-[13px] su-muted">{t.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="su-card p-6">
              <div className="text-[13px] font-semibold su-muted">Required documents</div>
              {[
                ["Business registration", true],
                ["Bank statement", true],
                ["Fulfillment evidence", false],
              ].map(([name, ok]) => (
                <div
                  key={String(name)}
                  className="flex items-center justify-between border-b py-4 su-line"
                  style={{ borderBottomWidth: 1 }}
                >
                  <span className="text-[14px] font-semibold">{name}</span>
                  <span className={cn("su-pill", ok ? "su-pill-green" : "su-pill-amber")}>
                    {ok ? "Received" : "Needed"}
                  </span>
                </div>
              ))}
              <button className="su-btn mt-5 w-full">Upload fulfillment evidence</button>
              <p className="mt-4 text-[13px] leading-6 su-muted">
                SLA covers review speed, not a guaranteed release. Partner steps appear in this tracker.
              </p>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
            <div className="su-card p-6">
              <div className="text-[13px] font-semibold su-muted">Cash-flow options</div>
              <h2 className="mt-2 text-xl font-bold">Keep operating while the review completes</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ["Insured escrow", "Held funds move into an insured escrow account with a published release date."],
                  ["Partner-backed advance", "Eligible merchants can draw against held volume at a fixed fee."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-md border p-4 su-line" style={{ borderWidth: 1 }}>
                    <div className="text-[14px] font-bold">{t}</div>
                    <p className="mt-1.5 text-[13px] leading-6 su-muted">{d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Fee", "0.8% fixed factor"],
                  ["Repayment", "Automatic on release"],
                  ["Impact on score", "None"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-md p-4" style={{ background: "#f7fafc" }}>
                    <div className="text-[12px] su-muted">{k}</div>
                    <div className="mt-1 text-[14px] font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="su-card p-6">
              <div className="text-[13px] font-semibold su-muted">Advance offered</div>
              <div className="mt-2 text-4xl font-bold">$24,800</div>
              <div className="mt-2 text-[13px] su-muted">Based on $41,200 currently held</div>
              <div className="su-meter mt-5">
                <span style={{ width: "60%" }} />
              </div>
              <div className="mt-2 flex justify-between text-[12px] su-muted">
                <span>Available now</span>
                <span>60% of held funds</span>
              </div>
              {advance ? (
                <div
                  className="mt-6 flex items-start gap-3 rounded-md p-4"
                  style={{ background: "var(--su-green-soft)", color: "var(--su-green)" }}
                >
                  <Check className="mt-0.5 size-4 shrink-0" />
                  <p className="text-[13px] font-semibold leading-6">
                    Advance requested. Funds arrive in your linked bank account within 1 business day.
                  </p>
                </div>
              ) : (
                <button className="su-btn mt-6 w-full" onClick={() => setAdvance(true)}>
                  Request $24,800 advance
                </button>
              )}
              <p className="mt-4 text-[13px] leading-6 su-muted">
                Prototype only — no real funds, fees, or eligibility decisions are involved.
              </p>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t bg-white su-line" style={{ borderTopWidth: 1 }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-[13px] su-muted sm:px-6">
          <span>Stability OS MVP prototype — illustrative interface, not affiliated with Stripe.</span>
          <Link to="/teardowns/stripe-stability-os" className="font-semibold su-brand">
            Back to the teardown ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}

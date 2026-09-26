import { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import RibbonTag from "./RibbonTag";
import Doodle from "./Doodle";

const flow = [
  {
    step: "01",
    name: "Buyer",
    actor: "Cardholder",
    desc: "Customer initiates checkout; order details and card payload are sent to Stripe.",
    risk: "First fraud signals captured here (card velocity, IP geolocation, 3DS check).",
  },
  {
    step: "02",
    name: "Stripe",
    actor: "Auth & Capture",
    desc: "Radar evaluates 100+ machine-learning features in under 100ms; gateway fires capture call.",
    risk: "High-risk chargebacks score above threshold; account-level velocity counter increments.",
  },
  {
    step: "03",
    name: "Settlement Pool",
    actor: "Stripe Treasury",
    desc: "Acquiring networks settle gross funds into Stripe's custodial reserve accounts.",
    risk: "⚡ THE CRITICAL CHOKEPOINT: Risk ops models flag accounts here before release to payout rail.",
  },
  {
    step: "04",
    name: "Payout Rail",
    actor: "T+2 Schedule",
    desc: "Scheduled batch pushes net balance via ACH / Faster Payments to the merchant's bank.",
    risk: "If an unexpected hold is triggered, funds freeze here for 60 to 180+ days.",
  },
  {
    step: "05",
    name: "Merchant Bank",
    actor: "Operating Account",
    desc: "Funds clear for merchant payroll, supplier bills, and working capital.",
    risk: "A surprise freeze creates an immediate insolvency / payroll crisis.",
  },
];

const riskActions = [
  {
    title: "Allow full payout",
    tag: "Standard T+2",
    badge: "bg-sage/20 text-sage",
    detail: "Account telemetry stays within normal variance bands. Full payout clears on standard schedule.",
  },
  {
    title: "Apply rolling reserve",
    tag: "e.g. 25–35%",
    badge: "bg-amber/20 text-amber",
    detail: "Stripe withholds 25–35% of rolling volume for chargeback protection while allowing remaining cash to flow.",
  },
  {
    title: "Freeze / hold all funds",
    tag: "60–180+ Days",
    badge: "bg-rose/20 text-rose",
    detail: "Complete payout suspension triggered by opaque risk flags. This is the #1 merchant pain point on Stripe.",
  },
];

const solutions = [
  {
    id: "health-score",
    title: "Risk Health Score",
    subtitle: "0–100 score with transparent directional drivers",
    tag: "Proactive Telemetry",
    tint: "mint",
  },
  {
    id: "warnings",
    title: "Pre-Hold Warnings",
    subtitle: "In-product & email alerts before holds trigger",
    tag: "Actionable Prevention",
    tint: "amber",
  },
  {
    id: "tracker",
    title: "SLA Case Tracker",
    subtitle: "Guaranteed 24–48h response & dedicated owner",
    tag: "Operational Trust",
    tint: "periwinkle",
  },
  {
    id: "escrow",
    title: "Cash-Flow Escrow",
    subtitle: "Partner liquidity advance during review",
    tag: "Liquidity Safety Net",
    tint: "rose",
  },
];

const timelinePhases = [
  {
    phase: "Weeks 0–4",
    title: "Risk Health Score v1 + Dashboard Widget",
    goal: "Unify Radar & telemetry signals; validate score comprehension with a 15-merchant cohort.",
    gate: "Score explains itself without support tickets in a 5-merchant cognitive walkthrough.",
  },
  {
    phase: "Weeks 5–8",
    title: "Pre-Hold Warnings + Case Tracker v1",
    goal: "Trigger early remediation flows; publish case status, dedicated owner, and document checklist.",
    gate: "Warning → Action completion rate surpasses 40% before hold threshold is breached.",
  },
  {
    phase: "Weeks 9–12",
    title: "SLA Publishing + Pilot Cash-Flow Escrow",
    goal: "Commit to public 24–48h first review SLA; pilot partner-backed liquidity advances.",
    gate: "90%+ compliance with first-review SLA on all flagged accounts.",
  },
];

const risksList = [
  {
    title: "Gaming the score",
    mitigation: "Publish directional risk bands and top 3 drivers rather than exact numerical threshold formulas.",
  },
  {
    title: "Risk Ops team burden",
    mitigation: "Automate document verification pipelines and prioritize high-volume merchants with dedicated queues.",
  },
  {
    title: "Legal exposure",
    mitigation: "Frame telemetry as 'risk indicators & compliance guidelines', not final determinations; provide explicit disclaimers.",
  },
  {
    title: "Banking partner constraints",
    mitigation: "Guarantee review speed SLA, not unconditional release; expose partner clearing steps transparently in the tracker.",
  },
];

export default function StabilityOSTeardown() {
  const [activeFlowStep, setActiveFlowStep] = useState(2);
  const [activeRiskAction, setActiveRiskAction] = useState(2);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [openRisk, setOpenRisk] = useState<number | null>(0);

  const selectedStep = flow[activeFlowStep] ?? flow[0];

  return (
    <div className="mx-auto max-w-4xl px-6 pt-14 pb-24 sm:pt-20">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-hand text-xl text-sage">
          <Link to="/" className="flex items-center gap-1.5 hover:text-ink">
            <span>←</span> home
          </Link>
          <span className="text-ink/30">/</span>
          <Link to="/teardowns" className="hover:text-ink">
            back to teardowns
          </Link>
        </div>
        <Doodle variant="sage-elder" className="h-6 w-6 text-sage/70" />
      </div>

      {/* Hero Header */}
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
        <BrandLogo brand="stripe" className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <RibbonTag color="var(--color-sage)" rotate={-2}>
              would ship this
            </RibbonTag>
            <span className="rounded-full border border-sage/40 bg-sage/10 px-3 py-1 text-xs font-medium text-sage">
              Product Spec & Teardown
            </span>
          </div>
          <h1 className="font-display mt-3 text-3xl font-medium leading-tight text-ink sm:text-5xl">
            Stripe: Stability OS
          </h1>
          <p className="font-hand mt-1 text-2xl text-sage">
            proactive risk & fund-release transparency for Stripe
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            A risk cockpit + release engine that prevents surprise holds, explains risk in plain language, and gives merchants SLA-backed visibility and cash-flow options.
          </p>
        </div>
      </div>

      {/* Pull quote */}
      <blockquote className="font-display mt-8 border-l-2 border-lavender pl-5 text-xl leading-snug text-deepink italic">
        "Merchants shouldn't discover their account risk status when payroll bounces. Trust is built by showing the speedometer, not just the speeding ticket."
      </blockquote>

      {/* Snapshot Cards */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { val: "60–180+", label: "days worst-case hold reported", tint: "rose" },
          { val: "25–35%", label: "typical rolling reserve applied", tint: "amber" },
          { val: "#1", label: "merchant pain point in public reviews", tint: "periwinkle" },
          { val: "T+2", label: "expected standard payout timeline", tint: "mint" },
        ].map((c) => (
          <div key={c.label} className={`widget-card widget-${c.tint} p-4 text-center`}>
            <div className="font-display text-2xl font-bold text-ink sm:text-3xl">{c.val}</div>
            <div className="mt-1 text-xs text-ink/70">{c.label}</div>
          </div>
        ))}
      </div>

      {/* SECTION 1: The Problem & Merchant Impact */}
      <section className="mt-16">
        <p className="font-hand text-2xl text-sage">01 // the merchant pain point</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
          Why sudden holds break platform trust
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="widget-card widget-cream p-6">
            <h3 className="font-display text-lg font-medium text-ink">Core Failure Modes</h3>
            <div className="mt-4 space-y-3">
              {[
                "Merchants experience sudden freezes with 60–180+ day delays and 25–35% rolling reserves with zero advance warning.",
                "Risk communication is opaque and automated, leaving honest founders in cash-flow crises without clear resolution checklists.",
                "Reviews across Trustpilot, Reddit, and Twitter consistently rank account holds as Stripe's single highest churn driver.",
              ].map((p, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="font-display flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/20 text-xs font-bold text-deepink">
                    0{idx + 1}
                  </span>
                  <p className="text-xs leading-relaxed text-ink/80">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="widget-card widget-rose p-6">
            <h3 className="font-display text-lg font-medium text-ink">Cash Runway Shock</h3>
            <p className="mt-2 text-xs text-ink/70">
              When a freeze hits the settlement pool unexpectedly, operating cash drops to zero overnight:
            </p>
            {/* Cash curve SVG diagram */}
            <svg viewBox="0 0 400 160" className="mt-4 w-full" aria-label="Cash runway curve after hold">
              <path d="M 20 140 H 380 M 20 100 H 380 M 20 60 H 380 M 20 20 H 380" stroke="rgba(54,42,74,0.1)" strokeDasharray="3,3" />
              <path
                d="M 20 35 C 90 40, 130 50, 180 55 L 205 130 C 260 134, 320 138, 380 140"
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth="2.5"
              />
              <path
                d="M 20 35 C 90 40, 130 50, 180 55 L 205 130 C 260 134, 320 138, 380 140 L 380 150 L 20 150 Z"
                fill="rgba(240,145,109,0.25)"
              />
              <line x1="195" y1="15" x2="195" y2="145" stroke="#e0625a" strokeWidth="2" strokeDasharray="4,4" />
              <text x="205" y="30" className="font-display text-[11px] font-bold fill-deepink">
                ⚠️ SUDDEN HOLD TRIGGERED
              </text>
              <text x="25" y="152" className="text-[10px] fill-ink/60">Healthy Runway</text>
              <text x="290" y="152" className="text-[10px] fill-ink/60">Insolvency Risk</text>
            </svg>
            <p className="font-hand mt-2 text-center text-sm text-sage">
              "Without early warning, risk enforcement becomes a fatal event."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Money Flow */}
      <section className="mt-16">
        <p className="font-hand text-2xl text-sage">02 // where holds happen</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
          Interactive Stripe Payout Architecture
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Click through each stage of the money rail to inspect where Stability OS introduces transparency:
        </p>

        <div className="mt-6 rounded-2xl border border-deepink/15 bg-white/80 p-6 shadow-sm">
          {/* Horizontal Step Tabs */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {flow.map((st, i) => (
              <button
                key={st.step}
                type="button"
                onClick={() => setActiveFlowStep(i)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  activeFlowStep === i
                    ? "border-ink bg-ink text-parchment shadow-sm"
                    : "border-deepink/15 bg-white/60 text-ink hover:border-deepink/40"
                }`}
              >
                <span className={`text-[10px] font-bold ${activeFlowStep === i ? "text-sage" : "text-deepink"}`}>
                  STAGE {st.step}
                </span>
                <div className="font-display mt-1 text-sm font-semibold">{st.name}</div>
                <div className={`text-[10px] ${activeFlowStep === i ? "text-parchment/70" : "text-ink/50"}`}>
                  {st.actor}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="mt-5 rounded-xl border border-dashed border-deepink/20 bg-parchment/50 p-4">
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-semibold text-ink">
                Stage {selectedStep.step}: {selectedStep.name} ({selectedStep.actor})
              </span>
              <span className="rounded-full bg-sage/20 px-2.5 py-0.5 text-xs font-semibold text-sage">
                Interactive Inspector
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink/80">{selectedStep.desc}</p>
            <div className="mt-3 flex items-start gap-2 rounded-lg bg-rose/10 p-2.5 text-xs text-deepink">
              <span className="font-bold">Risk Context:</span>
              <span>{selectedStep.risk}</span>
            </div>
          </div>

          {/* Risk Layer Actions */}
          <div className="mt-6 border-t border-deepink/10 pt-5">
            <span className="font-hand text-lg text-sage">the 3 possible risk engine outcomes:</span>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {riskActions.map((ra, idx) => (
                <button
                  key={ra.title}
                  type="button"
                  onClick={() => setActiveRiskAction(idx)}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    activeRiskAction === idx
                      ? "border-ink bg-parchment ring-2 ring-ink/20 shadow-sm"
                      : "border-deepink/15 bg-white/60 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-ink">{ra.title}</span>
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${ra.badge}`}>
                      {ra.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-ink/70">{ra.detail}</p>
                </button>
              ))}
            </div>

            {activeRiskAction === 2 && (
              <div className="mt-3 rounded-xl border border-rose/40 bg-rose/15 p-3 text-xs text-deepink">
                <strong>💡 Stability OS Intervention:</strong> Instead of executing a blackout freeze, Stability OS intercepts the settlement rail to issue pre-hold warnings, score transparency, and SLA-backed review tracking.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: The 4 Interactive Solution Blocks */}
      <section className="mt-16" id="solution">
        <p className="font-hand text-2xl text-sage">03 // the intervention blueprint</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
          The 4 Solution Pillars
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Select any solution card to simulate the merchant dashboard experience:
        </p>

        {/* Tab Cards */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {solutions.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSolutionTab(idx)}
              className={`widget-card widget-${s.tint} p-4 text-left transition-all ${
                activeSolutionTab === idx ? "ring-2 ring-ink scale-[1.02]" : "opacity-80 hover:opacity-100"
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-ink/60">{s.tag}</span>
              <div className="font-display mt-1 text-base font-bold text-ink">{s.title}</div>
              <p className="mt-1 text-[11px] text-ink/70">{s.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Simulated Detail Panel for Active Tab */}
        <div className="mt-4 rounded-2xl border border-ink/20 bg-white p-6 shadow-sm">
          {activeSolutionTab === 0 && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-deepink/10 pb-3">
                <div>
                  <span className="font-hand text-xl text-sage">telemetry cockpit</span>
                  <h3 className="font-display text-xl font-bold text-ink">Risk Health Score: 62 / 100</h3>
                </div>
                <span className="rounded-full border border-amber/50 bg-amber/20 px-3 py-1 text-xs font-semibold text-amber">
                  ⚠️ Elevated Risk Band
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-[1fr_1.2fr]">
                <div className="rounded-xl bg-parchment/60 p-4">
                  <span className="text-xs font-bold text-ink/70">Historical Trend (Last 12 Weeks)</span>
                  <svg viewBox="0 0 300 100" className="mt-2 w-full">
                    <path d="M 10 70 C 60 75, 90 60, 140 65 S 200 45, 250 30 S 280 20, 290 15" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" />
                    <circle cx="290" cy="15" r="4" fill="var(--color-rose)" />
                  </svg>
                  <div className="flex justify-between text-[10px] text-ink/60">
                    <span>Week 1 (88 Normal)</span>
                    <span className="font-bold text-rose">Week 12 (62 Elevated)</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-ink/70">Top 3 Primary Risk Drivers:</span>
                  <div className="mt-2 space-y-2">
                    {[
                      { factor: "Dispute Rate: 0.82%", limit: "Threshold: 0.90%", status: "Approaching standard cap", icon: "⚡" },
                      { factor: "Volume Velocity: +140% WoW", limit: "Unusual sales spike", status: "Spike requires inventory verification", icon: "📈" },
                      { factor: "Director ID Refresh", limit: "KYC doc outdated", status: "Missing beneficial ownership refresh", icon: "📄" },
                    ].map((d) => (
                      <div key={d.factor} className="rounded-lg border border-deepink/10 bg-white p-2.5 text-xs">
                        <div className="flex items-center justify-between font-bold text-ink">
                          <span>{d.icon} {d.factor}</span>
                          <span className="text-[10px] font-normal text-rose">{d.limit}</span>
                        </div>
                        <div className="mt-0.5 text-[11px] text-ink/60">{d.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSolutionTab === 1 && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-deepink/10 pb-3">
                <div>
                  <span className="font-hand text-xl text-sage">automated proactive notice</span>
                  <h3 className="font-display text-xl font-bold text-ink">Pre-Hold Alert Preview</h3>
                </div>
                <span className="rounded-full bg-rose/20 px-3 py-1 text-xs font-semibold text-deepink">
                  7 Days Remaining Before Reserve
                </span>
              </div>

              <div className="rounded-xl border border-rose/30 bg-rose/10 p-4">
                <p className="font-display text-sm font-bold text-ink">
                  "Your dispute velocity has increased by 0.28% this week. Take these 3 steps to avoid an account reserve:"
                </p>
                <div className="mt-3 space-y-2">
                  {[
                    { act: "1. Turn on 3D Secure dynamic enforcement for orders > $150", gain: "-35% dispute liability instantly" },
                    { act: "2. Temporarily set max single-transaction checkout limit to $500", gain: "Caps outlier velocity risk" },
                    { act: "3. Upload latest supplier invoices for current batch fulfillment", gain: "Clears inventory fulfillment proof" },
                  ].map((st) => (
                    <div key={st.act} className="flex items-center justify-between rounded-lg bg-white/80 p-2.5 text-xs text-ink">
                      <span className="font-medium">{st.act}</span>
                      <span className="rounded bg-sage/20 px-2 py-0.5 text-[10px] font-semibold text-sage">{st.gain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSolutionTab === 2 && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-deepink/10 pb-3">
                <div>
                  <span className="font-hand text-xl text-sage">transparency SLA</span>
                  <h3 className="font-display text-xl font-bold text-ink">Case Review Tracker #ST-88291</h3>
                </div>
                <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-sage">
                  First Review within 24h (Guaranteed)
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 text-xs">
                <div className="rounded-xl border border-deepink/10 bg-parchment/40 p-3">
                  <span className="text-ink/60">Current Status:</span>
                  <div className="font-display mt-1 text-sm font-bold text-ink">Under Document Review</div>
                </div>
                <div className="rounded-xl border border-deepink/10 bg-parchment/40 p-3">
                  <span className="text-ink/60">Assigned Team:</span>
                  <div className="font-display mt-1 text-sm font-bold text-ink">Stripe EMEA Risk Ops</div>
                </div>
                <div className="rounded-xl border border-deepink/10 bg-parchment/40 p-3">
                  <span className="text-ink/60">Guaranteed Decision ETA:</span>
                  <div className="font-display mt-1 text-sm font-bold text-sage">Tomorrow, 4:00 PM GMT</div>
                </div>
              </div>

              <div className="rounded-xl bg-parchment/50 p-3 text-xs">
                <span className="font-bold text-ink">Live Submission Checklist:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-md bg-white px-2.5 py-1 text-sage border border-sage/30">✅ Business Registration ID</span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-sage border border-sage/30">✅ 3 Months Bank Statements</span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-amber border border-amber/30">⏳ Supplier Fulfillment Proof (Uploaded)</span>
                </div>
              </div>
            </div>
          )}

          {activeSolutionTab === 3 && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-deepink/10 pb-3">
                <div>
                  <span className="font-hand text-xl text-sage">emergency liquidity</span>
                  <h3 className="font-display text-xl font-bold text-ink">Partner Escrow & Cash-Flow Option</h3>
                </div>
                <span className="rounded-full bg-periwinkle/20 px-3 py-1 text-xs font-semibold text-deepink">
                  Instant Clearing Available
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-[1.2fr_1fr] sm:items-center">
                <p className="text-xs leading-relaxed text-ink/80">
                  When a compliance review is underway, eligible merchants can unlock up to 80% of pending funds through an insured partner escrow pool. This guarantees payroll and supply chain continuity without shifting fraud loss onto Stripe.
                </p>
                <div className="widget-card widget-mint p-4 text-center">
                  <span className="text-[11px] font-medium text-ink/70">Approved Liquidity Advance</span>
                  <div className="font-display mt-1 text-3xl font-bold text-ink">$24,800 USD</div>
                  <button type="button" className="font-display mt-3 rounded-md bg-ink px-4 py-1.5 text-xs text-parchment">
                    Accept & Disburse to Bank →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: Success Metrics */}
      <section className="mt-16">
        <p className="font-hand text-2xl text-sage">04 // measuring outcome</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
          Success Metrics & Impact Model
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            { val: "-40%", label: "Surprise account holds", tint: "mint" },
            { val: "-25%", label: "Median hold duration", tint: "periwinkle" },
            { val: "+20 pts", label: "Merchant NPS in risk segment", tint: "amber" },
            { val: "-20%", label: "Support ticket volume", tint: "rose" },
            { val: "Flat / 0%", label: "Fraud loss rate (Guardrail)", tint: "cream" },
          ].map((m) => (
            <div key={m.label} className={`widget-card widget-${m.tint} p-4 text-center`}>
              <div className="font-display text-2xl font-bold text-ink">{m.val}</div>
              <div className="mt-1 text-xs text-ink/70">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: MVP Rollout Timeline */}
      <section className="mt-16">
        <p className="font-hand text-2xl text-sage">05 // 90-day execution plan</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
          MVP Phased Rollout
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {timelinePhases.map((tp, idx) => (
            <button
              key={tp.phase}
              type="button"
              onClick={() => setActivePhase(idx)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                activePhase === idx
                  ? "border-ink bg-parchment shadow-md ring-2 ring-ink/20"
                  : "border-deepink/15 bg-white/70 hover:bg-white"
              }`}
            >
              <span className="font-hand text-lg text-sage">{tp.phase}</span>
              <h3 className="font-display mt-1 text-base font-bold text-ink">{tp.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/70">{tp.goal}</p>
              <div className="mt-4 rounded-lg bg-sage/10 p-2.5 text-[11px] text-deepink">
                <strong>Gate:</strong> {tp.gate}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 6: Risks & Mitigations */}
      <section className="mt-16">
        <p className="font-hand text-2xl text-sage">06 // critical evaluation</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
          Risks & Mitigations
        </h2>

        <div className="mt-6 space-y-3">
          {risksList.map((rk, idx) => (
            <div key={rk.title} className="rounded-xl border border-deepink/15 bg-white p-4">
              <button
                type="button"
                onClick={() => setOpenRisk(openRisk === idx ? null : idx)}
                className="flex w-full items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs text-parchment">
                    {idx + 1}
                  </span>
                  <span className="font-display text-base font-medium text-ink">{rk.title}</span>
                </div>
                <span className="font-hand text-lg text-sage">{openRisk === idx ? "− close" : "+ read"}</span>
              </button>
              {openRisk === idx && (
                <div className="mt-3 border-t border-dashed border-deepink/10 pt-3 text-xs leading-relaxed text-ink/80">
                  <strong className="text-sage">Mitigation Strategy:</strong> {rk.mitigation}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final PM Takeaway */}
      <div className="widget-card widget-cream mt-16 p-8">
        <p className="font-hand text-2xl text-sage">the PM takeaway</p>
        <h3 className="font-display mt-2 text-xl font-bold text-ink">
          The best risk infrastructure protects platform integrity without weaponizing opacity against legitimate businesses.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          Stability OS proves that risk operations can be transformed from a high-churn cost center into a retention engine. By giving merchants continuous visibility and actionable off-ramps, Stripe protects its loss rate while cementing lifelong developer and merchant trust.
        </p>
      </div>
    </div>
  );
}

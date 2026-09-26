
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import RibbonTag from "./RibbonTag";
import { ArrowDown, ArrowRight, Check, ChevronDown, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";






const flow = [
  ["Buyer", "The buyer submits a card payment to the merchant."],
  ["Stripe (auth/capture)", "Stripe authorizes the payment and captures approved funds."],
  ["Settlement pool", "Captured funds settle while risk signals continue to update."],
  ["Payout (T+2)", "Available funds are scheduled for payout, typically in two days."],
  ["Merchant bank", "Released funds arrive in the merchant’s linked bank account."],
];

const actions = ["Allow full payout", "Apply reserve (e.g., 30%)", "Freeze/hold all funds for review"];
const solutions = [
  ["01", "Risk Health Score", "0–100 score with trend and top 3 drivers (e.g., high dispute rate, velocity spike, missing docs)."],
  ["02", "Pre-hold warnings", "In-product + email alerts: ‘Your risk is rising. Do these 3 things to avoid a hold.’"],
  ["03", "Case tracker (SLA-backed)", "Status, owner, ETA, and required docs for risk reviews."],
  ["04", "Cash-flow options", "Insured escrow or partner-backed advance for eligible merchants."],
];

const risks = [
  ["Gaming the score", "Show bands + directional drivers, not exact thresholds."],
  ["Ops burden", "Automate doc collection; start with high-impact merchants."],
  ["Legal exposure", "Frame as ‘risk indicators’, not final findings; add disclaimers."],
  ["Partner constraints", "SLA on review speed, not guaranteed release; communicate partner steps in tracker."],
];

function DoodleFlower({ className }: { className?: string }) {
  return <span className={cn("doodle-flower", className)} aria-hidden="true">✿</span>;
}

function PaperTitle({ children, note }: { children: React.ReactNode; note?: string }) {
  return <div className="mb-5 flex items-end gap-4"><h2 className="font-hand text-3xl font-bold text-ink sm:text-4xl">{children}</h2><span className="mb-1 h-px flex-1 border-t border-dashed border-sketch" />{note && <span className="hidden font-note text-sm text-note sm:block">{note}</span>}</div>;
}

function Detail({ active }: { active: number }) {
  if (active === 0) return <div className="grid gap-5 md:grid-cols-[11rem_1fr]"><div className="score-dial mx-auto grid size-36 place-items-center rounded-full"><div className="grid size-24 place-items-center rounded-full bg-paper text-center"><div><b className="font-hand text-4xl">62</b><span className="block font-note text-sm text-alert">↓ 8 pts</span></div></div></div><div><p className="font-note text-lg text-note">What moved the score?</p>{["High dispute rate", "Velocity spike", "Missing verification docs"].map((x,i)=><div className="mt-2 flex items-center justify-between border-b border-dashed border-sketch py-2 text-sm" key={x}><span>{i+1}. {x}</span><span className="font-note text-alert">needs attention</span></div>)}</div></div>;
  if (active === 1) return <div className="torn-note bg-butter p-5"><p className="font-hand text-2xl">Your risk is rising.</p><p className="mt-1 text-sm">Do these 3 things to avoid a hold.</p><div className="mt-4 grid gap-2 sm:grid-cols-3">{["Enable 3DS", "Lower ticket cap", "Upload docs"].map(x=><div className="flex items-center gap-2 border border-sketch bg-paper/70 px-3 py-2 text-sm" key={x}><Check className="size-4 text-sage" />{x}</div>)}</div></div>;
  if (active === 2) return <div className="grid gap-6 md:grid-cols-2"><div className="space-y-3 text-sm"><p><span className="font-note text-note">Status / </span><b>Under review</b></p><p><span className="font-note text-note">Owner / </span><b>Stripe Risk Ops</b></p><p><span className="font-note text-note">ETA / </span><b>First review within 24–48h</b></p></div><div>{["Business registration", "Bank statement", "Fulfillment evidence"].map((x,i)=><div className="flex items-center gap-2 border-b border-dashed border-sketch py-2 text-sm" key={x}><span className={cn("grid size-5 place-items-center rounded-full border border-ink",i<2&&"bg-sage text-paper")} >{i<2&&<Check className="size-3"/>}</span>{x}</div>)}</div></div>;
  return <div className="grid gap-5 md:grid-cols-[1fr_15rem] md:items-center"><p className="text-sm leading-6">Insured escrow or partner-backed advance for eligible merchants.</p><div className="rounded-[2rem] border border-ink bg-blue p-5 text-center shadow-paper"><span className="font-note text-sm">Advance offered</span><strong className="mt-1 block font-hand text-3xl">$24,800</strong><span className="text-xs">Available now</span></div></div>;
}

export default function StabilityOSTeardown() {
  const [activeFlow, setActiveFlow] = useState(2);
  const [activeAction, setActiveAction] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);
  const [phase, setPhase] = useState(0);
  const [openRisk, setOpenRisk] = useState(0);
  const selectedFlow = flow[activeFlow] ?? flow[0];

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-24 sm:px-6 sm:pt-14">
      {/* Portfolio Header & Navigation */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-hand text-2xl text-sage">
        <Link to="/" className="flex items-center gap-1.5 hover:text-ink">
          <span>&larr;</span> home
        </Link>
        <span className="text-ink/30">/</span>
        <Link to="/teardowns" className="hover:text-ink">
          back to teardowns
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
        <BrandLogo brand="stripe" className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
        <div>
          <RibbonTag color="var(--color-sage)" rotate={-1}>
            Must-steal pattern
          </RibbonTag>
          <h1 className="font-display mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Stripe &mdash; Stability OS
          </h1>
          <p className="mt-1 text-sm font-medium text-ink/60">
            Proactive risk health score, transparent fund release, and merchant cash-flow visibility.
          </p>
        </div>
      </div>

      {/* Torn Notebook Paper Sheet containing the EXACT teardown layout */}
      <div className="relative mt-10 rounded-3xl border border-ink/20 bg-paper shadow-[0_20px_45px_-15px_rgba(54,42,74,0.15),0_2px_8px_rgba(54,42,74,0.06)] overflow-hidden">
        {/* Top torn decorative strip */}
        <div className="h-3.5 w-full bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--sketch)_20%,transparent)_0px,color-mix(in_oklab,var(--sketch)_20%,transparent)_10px,transparent_10px,transparent_20px)] border-b border-ink/15" />

        <div className="paper-sheet relative overflow-hidden bg-paper px-4 pb-12 pt-5 sm:px-8 lg:px-12 text-ink">
        <DoodleFlower className="absolute -left-2 top-44 text-5xl text-peach" />
        <DoodleFlower className="absolute right-3 top-24 text-4xl text-blue-strong" />

        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-dashed border-sketch pb-4">
          <div className="flex min-w-0 items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink bg-butter"><ShieldCheck className="size-5" /></span><div className="min-w-0"><b className="block truncate font-hand text-xl">Stability OS</b><span className="block truncate text-[10px] uppercase tracking-widest text-note">PM New Grad Accelerator — [Your Name]</span></div></div>
          <Link to="/original" className="font-note text-sm text-note underline decoration-wavy">view v1 ↗</Link> <Link to="/scrapbook" className="font-note text-sm text-note underline decoration-wavy">scrapbook ↗</Link>
        </header>

        <section className="grid gap-5 py-9 lg:grid-cols-[1.2fr_.8fr] lg:items-stretch">
          <div className="irregular-panel bg-blush p-6 sm:p-8">
            <span className="font-note text-base text-note">product teardown / 01</span>
            <h1 className="mt-2 font-hand text-5xl font-bold leading-none sm:text-7xl">Stability OS</h1>
            <p className="mt-4 max-w-3xl font-hand text-2xl leading-tight">Proactive risk &amp; fund-release transparency for Stripe</p>
            <p className="mt-5 max-w-3xl text-sm leading-6 sm:text-base">A risk cockpit + release engine that prevents surprise holds, explains risk in plain language, and gives merchants SLA-backed visibility and cash-flow options.</p>
            <Button onClick={() => document.getElementById("solution")?.scrollIntoView({behavior:"smooth"})} className="mt-6 rounded-full border border-ink bg-ink px-5 text-paper shadow-paper hover:bg-ink/90">See how it works <ArrowDown /></Button>
          </div>
          <div className="widget-panel bg-lavender p-5 sm:p-7">
            <div className="flex items-center justify-between"><span className="font-note text-lg">merchant risk pulse</span><span className="rounded-full bg-ink px-3 py-1 text-xs text-paper">LIVE</span></div>
            <svg viewBox="0 0 520 190" className="mt-4 w-full" role="img" aria-label="Risk score rising over twelve weeks">
              <path d="M25 155H500M25 110H500M25 65H500M25 20H500" className="chart-grid" />
              <path d="M25 142 C70 138 85 110 125 121 S185 145 220 105 S280 92 310 102 S355 52 398 64 S445 22 498 38" className="chart-line" />
              <path d="M25 142 C70 138 85 110 125 121 S185 145 220 105 S280 92 310 102 S355 52 398 64 S445 22 498 38 L498 170 L25 170Z" className="chart-fill" />
              {[25,125,220,310,398,498].map((x,i)=><circle key={x} cx={x} cy={[142,121,105,102,64,38][i]} r="5" className="chart-dot" />)}
            </svg>
            <div className="grid grid-cols-3 gap-2 text-center"><div><b className="font-hand text-3xl">62</b><span className="block text-[10px]">health score</span></div><div><b className="font-hand text-3xl text-alert">↑ 31%</b><span className="block text-[10px]">risk signal</span></div><div><b className="font-hand text-3xl">T+2</b><span className="block text-[10px]">target payout</span></div></div>
            <p className="mt-4 -rotate-1 font-note text-base text-note">↳ rising risk should never become a surprise hold</p>
          </div>
        </section>

        <section className="grid gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {[["60–180+", "days, worst-case hold", "bg-peach"], ["25–35%", "reserve applied to volume", "bg-butter"], ["#1", "merchant pain point on Stripe", "bg-blue"], ["T+2", "payout merchants expect", "bg-sage-soft"]].map(([v, l, bg]) => (
            <div className={cn("metric-scrap p-5", bg)} key={l as string}>
              <b className="font-hand text-4xl leading-none">{v}</b>
              <span className="mt-3 block text-xs leading-5">{l}</span>
            </div>
          ))}
        </section>


        <section className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <article className="irregular-panel bg-cream p-6"><PaperTitle note="signal → impact">The problem</PaperTitle><div className="space-y-4">{[
            "Merchants face sudden account holds/freezes and 60–180+ day payout delays, often with 25–35% reserves.",
            "Communication is opaque and slow, creating cash-flow crises and churn.",
            "Public reviews consistently flag this as the #1 merchant pain point on Stripe.",
          ].map((x,i)=><div className="grid grid-cols-[2rem_1fr] gap-2" key={x}><span className="font-hand text-xl text-coral">0{i+1}</span><p className="text-sm leading-6">{x}</p></div>)}</div><div className="mt-6 -rotate-1 border-2 border-ink bg-peach p-4 text-center shadow-paper"><strong className="font-hand text-4xl">60–180+</strong><span className="block font-note text-lg">day holds reported</span></div></article>
          <article className="widget-panel bg-blue-soft p-6"><PaperTitle note="merchant impact model">Why this matters</PaperTitle><div className="grid gap-5 sm:grid-cols-[1fr_12rem]"><div><svg viewBox="0 0 500 200" className="w-full" role="img" aria-label="Cash available falls sharply after a hold"><path d="M25 170H480M25 120H480M25 70H480M25 20H480" className="chart-grid"/><path d="M25 35 C110 40 145 52 205 60 L230 145 C310 150 395 157 480 164" className="cash-line"/><path d="M25 35 C110 40 145 52 205 60 L230 145 C310 150 395 157 480 164 L480 180 L25 180Z" className="cash-fill"/><line x1="218" y1="18" x2="218" y2="178" className="hold-line"/><text x="230" y="34" className="chart-label">HOLD APPLIED</text></svg><div className="flex justify-between text-[10px] text-note"><span>healthy cash position</span><span>operating runway at risk</span></div></div><div className="space-y-2">{[["25–35%","reserve"],["#1","pain point"],["slow","support loop"]].map(([v,l])=><div className="rounded-[1.5rem] border border-ink bg-paper/70 p-3 text-center" key={l}><b className="font-hand text-2xl">{v}</b><span className="block text-[10px] uppercase">{l}</span></div>)}</div></div></article>
        </section>

        <section className="mt-8 widget-panel bg-paper p-5 sm:p-7">
          <PaperTitle note="click each stage">Where holds happen</PaperTitle>
          <div className="grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">{flow.map(([title],i)=><div className="contents" key={title}><button onClick={()=>setActiveFlow(i)} className={cn("flow-pill min-h-20 p-3 text-left",activeFlow===i&&"is-active")}><span className="font-note text-xs">0{i+1}</span><b className="mt-2 block text-sm">{title}</b></button>{i<4&&<ArrowRight className="mx-auto hidden size-4 lg:block"/>}</div>)}</div>
          <p className="mt-3 border-l-2 border-coral bg-blush/60 px-4 py-3 font-note text-base">↳ {selectedFlow?.[1]}</p>
          <div className="mt-6 rounded-[2rem] border border-ink bg-lavender p-4"><div className="mb-3 font-hand text-xl">Risk layer (Radar + Ops)</div><div className="grid gap-2 md:grid-cols-3">{actions.map((a,i)=><button onClick={()=>setActiveAction(i)} className={cn("rounded-full border border-ink bg-paper px-4 py-3 text-sm transition-transform hover:-translate-y-0.5",activeAction===i&&i===2?"bg-coral text-paper":activeAction===i?"bg-blue":"")} key={a}>{a}</button>)}</div>{activeAction===2&&<div className="mx-auto mt-4 w-fit -rotate-1 bg-butter px-4 py-2 font-note text-lg text-alert">This is where Stability OS intervenes. ↑</div>}</div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <article className="widget-panel bg-cream p-6 sm:p-7">
            <PaperTitle note="illustrative $100k month">Money flow &amp; settlement math</PaperTitle>
            <svg viewBox="0 0 520 240" className="w-full" role="img" aria-label="Waterfall of captured volume reduced by disputes and reserve before release">
              <line x1="30" y1="200" x2="505" y2="200" className="axis-line" />
              {[["Captured", 100, "bar-a", "$100.0k"], ["Disputes", 3.2, "bar-b", "-$3.2k"], ["Reserve held", 29, "bar-b", "-$29.0k"], ["Released now", 67.8, "bar-c", "$67.8k"]].map(([label, val, cls, money], i) => {
                const h = (val as number) * 1.55;
                return (
                  <g key={label as string}>
                    <rect x={45 + i * 118} y={200 - h} width="74" height={h} className={cn(cls as string, "bar-ink")} rx="6" />
                    <text x={82 + i * 118} y={195 - h} textAnchor="middle" className="value-text">{money}</text>
                    <text x={82 + i * 118} y="222" textAnchor="middle" className="tick-text">{label}</text>
                  </g>
                );
              })}
            </svg>
            <p className="mt-2 -rotate-1 font-note text-base text-note">↳ a 30% reserve removes a third of the month’s cash before any dispute is proven</p>
          </article>
          <article className="widget-panel bg-mist p-6 sm:p-7">
            <PaperTitle note="payout composition">Where the cash sits</PaperTitle>
            <svg viewBox="0 0 420 230" className="w-full" role="img" aria-label="Weekly payout split between released, reserved and frozen funds">
              <line x1="34" y1="190" x2="405" y2="190" className="axis-line" />
              {[[60, 25, 15], [52, 28, 20], [40, 30, 30], [28, 32, 40]].map((parts, i) => {
                let y = 190;
                return (
                  <g key={i}>
                    {parts.map((p, j) => {
                      const h = p * 1.45;
                      y -= h;
                      return <rect key={j} x={50 + i * 90} y={y} width="62" height={h} className={cn(["bar-c", "bar-d", "bar-b"][j], "bar-ink")} />;
                    })}
                    <text x={81 + i * 90} y="212" textAnchor="middle" className="tick-text">W{i + 1}</text>
                  </g>
                );
              })}
            </svg>
            <div className="mt-3 flex flex-wrap gap-3 font-note text-base">
              {[["bg-sage-soft", "released"], ["bg-lavender", "reserved"], ["bg-coral", "frozen"]].map(([bg, l]) => (
                <span className="flex items-center gap-2" key={l}><span className={cn("size-3 rounded-sm border border-ink", bg)} />{l}</span>
              ))}
            </div>
          </article>
        </section>


        <section id="solution" className="mt-8 scroll-mt-4 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="widget-panel bg-butter p-5"><PaperTitle note="click a module">Solution</PaperTitle><div className="space-y-2">{solutions.map(([n,t,d],i)=><button onClick={()=>setActiveSolution(i)} key={t} className={cn("w-full rounded-[1.6rem] border border-ink bg-paper/70 p-4 text-left transition-transform hover:translate-x-1",activeSolution===i&&"translate-x-1 bg-peach shadow-paper")}><span className="font-note text-sm text-note">{n}</span><b className="ml-3 font-hand text-xl">{t}</b><p className="mt-1 text-xs leading-5 text-note">{d}</p></button>)}</div></div>
          <div className="widget-panel bg-mist p-6"><div className="mb-6 flex items-center justify-between"><span className="font-note text-lg">inside the product</span><span className="font-hand text-xl">{solutions[activeSolution]?.[1]}</span></div><Detail active={activeSolution}/><p className="mt-7 rotate-1 text-right font-note text-base text-note">designed to turn uncertainty into next actions ↗</p></div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="widget-panel bg-blush p-6 sm:p-7">
            <PaperTitle note="what drives a hold">Risk analysis</PaperTitle>
            <svg viewBox="0 0 430 210" className="w-full" role="img" aria-label="Relative weight of the top risk drivers">
              {[["Dispute rate", 38], ["Velocity spike", 27], ["Missing docs", 19], ["Refund ratio", 16]].map(([label, v], i) => (
                <g key={label as string}>
                  <text x="0" y={28 + i * 48} className="tick-text">{label}</text>
                  <rect x="0" y={36 + i * 48} width="380" height="16" className="bar-track" rx="8" />
                  <rect x="0" y={36 + i * 48} width={(v as number) * 8.6} height="16" className={cn(i === 0 ? "bar-b" : "bar-a", "bar-ink")} rx="8" />
                  <text x="392" y={50 + i * 48} className="value-text">{v}%</text>
                </g>
              ))}
            </svg>
          </article>
          <article className="widget-panel bg-blue-soft p-6 sm:p-7">
            <PaperTitle note="today’s hold durations">How long merchants wait</PaperTitle>
            <svg viewBox="0 0 430 210" className="w-full" role="img" aria-label="Distribution of hold durations in days">
              <line x1="20" y1="170" x2="418" y2="170" className="axis-line" />
              {[["0–30", 18], ["31–60", 34], ["61–90", 26], ["91–180", 15], ["180+", 7]].map(([label, v], i) => {
                const h = (v as number) * 3.6;
                return (
                  <g key={label as string}>
                    <rect x={36 + i * 76} y={170 - h} width="54" height={h} className={cn(i >= 2 ? "bar-b" : "bar-a", "bar-ink")} rx="5" />
                    <text x={63 + i * 76} y={165 - h} textAnchor="middle" className="value-text">{v}%</text>
                    <text x={63 + i * 76} y="192" textAnchor="middle" className="tick-text">{label}</text>
                  </g>
                );
              })}
            </svg>
            <p className="mt-2 font-note text-base text-note">↳ 48% of held merchants wait more than 60 days for a decision</p>
          </article>
        </section>


        <section className="mt-8 widget-panel bg-blush p-6 sm:p-7"><PaperTitle note="north stars + guardrail">Success metrics</PaperTitle><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{[["-40%","surprise holds"],["-25%","median hold duration"],["+15–25 pts","merchant NPS (risk-hit segments)"],["-20%","support tickets (payout hold/freeze)"],["flat or down","Fraud loss rate: flat or down (guardrail)"]].map(([v,l],i)=><div className={cn("metric-scrap p-4",["bg-blue","bg-butter","bg-lavender","bg-peach","bg-sage-soft"][i])} key={l}><span className="font-hand text-3xl font-bold">{v}</span><span className="mt-2 block text-xs leading-5">{l}</span><svg viewBox="0 0 100 28" className="mt-4 h-7 w-full"><path d={i===4?"M2 15 C20 15 35 13 50 15 S80 14 98 14":"M2 24 C20 20 27 22 39 16 S60 15 70 9 S88 8 98 3"} className="mini-line"/></svg></div>)}</div>
          <div className="mt-7 rounded-[2rem] border border-ink bg-paper/70 p-5">
            <p className="font-note text-lg">baseline vs. 90-day target</p>
            <svg viewBox="0 0 520 210" className="mt-2 w-full" role="img" aria-label="Baseline compared with target for holds, duration and tickets">
              <line x1="24" y1="170" x2="505" y2="170" className="axis-line" />
              {[["Surprise holds", 100, 60], ["Median hold days", 100, 75], ["Support tickets", 100, 80]].map(([label, base, target], i) => (
                <g key={label as string}>
                  <rect x={50 + i * 160} y={170 - (base as number) * 1.3} width="48" height={(base as number) * 1.3} className="bar-a bar-ink" rx="5" />
                  <rect x={104 + i * 160} y={170 - (target as number) * 1.3} width="48" height={(target as number) * 1.3} className="bar-c bar-ink" rx="5" />
                  <text x={128 + i * 160} y={164 - (target as number) * 1.3} textAnchor="middle" className="value-text">{(target as number) - 100}%</text>
                  <text x={101 + i * 160} y="192" textAnchor="middle" className="tick-text">{label}</text>
                </g>
              ))}
            </svg>
            <div className="flex flex-wrap gap-4 font-note text-base"><span className="flex items-center gap-2"><span className="size-3 rounded-sm border border-ink bg-blue-strong/60" />today</span><span className="flex items-center gap-2"><span className="size-3 rounded-sm border border-ink bg-sage/60" />after Stability OS</span></div>
          </div>
        </section>


        <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <article className="widget-panel bg-blue-soft p-6 sm:p-7"><PaperTitle note="90 day build plan">MVP (90 days)</PaperTitle><div className="grid gap-3 sm:grid-cols-3">{[["Weeks 0–4","Risk Health Score v1 + Dashboard widget","Unify risk signals; test score comprehension."],["Weeks 5–8","Pre-hold warnings + Case tracker v1","Trigger actions; show status, owner, and ETA."],["Weeks 9–12","SLA publishing + Pilot cash-flow option","Publish review speed; pilot partner option."]].map(([w,t,d],i)=><button key={w} onClick={()=>setPhase(i)} className={cn("timeline-note border border-ink bg-paper p-4 text-left",phase===i&&"bg-lavender shadow-paper")}><span className="font-note text-sm text-note">{w}</span><b className="mt-2 block font-hand text-lg leading-tight">{t}</b>{phase===i&&<p className="mt-3 border-t border-dashed border-sketch pt-3 text-xs leading-5">{d}</p>}</button>)}</div>
            <svg viewBox="0 0 520 170" className="mt-6 w-full" role="img" aria-label="Timeline bars across twelve weeks">
              {[0, 1, 2].map((i) => <line key={i} x1={40 + i * 150} y1="18" x2={40 + i * 150} y2="140" className="matrix-cell" />)}
              {[["Score v1", 0, 150], ["Warnings + tracker", 150, 150], ["SLA + pilot", 300, 190]].map(([label, x, w], i) => (
                <g key={label as string}>
                  <rect x={40 + (x as number)} y={28 + i * 38} width={w as number} height="26" className={cn(["bar-a", "bar-d", "bar-c"][i], "bar-ink")} rx="13" onClick={() => setPhase(i)} />
                  <text x={52 + (x as number)} y={46 + i * 38} className="tick-text">{label}</text>
                </g>
              ))}
              {["W0", "W4", "W8", "W12"].map((t, i) => <text key={t} x={40 + i * 150} y="160" textAnchor="middle" className="tick-text">{t}</text>)}
            </svg>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[["Ship gate", "Score explains itself in a 5-merchant comprehension test."], ["Ship gate", "Warning → action completion rate above 40%."], ["Ship gate", "Published first-review SLA met on 90% of cases."]].map(([k, v], i) => (
                <div className="rounded-[1.4rem] border border-ink bg-paper/70 p-3" key={i}>
                  <span className="font-note text-sm text-note">{k}</span>
                  <p className="mt-1 text-xs leading-5">{v}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="widget-panel bg-cream p-6 sm:p-7"><PaperTitle note="what could break">Risks &amp; mitigations</PaperTitle>{risks.map(([r,m],i)=><div className="border-b border-dashed border-sketch" key={r}><button onClick={()=>setOpenRisk(openRisk===i?-1:i)} className="grid w-full grid-cols-[1fr_auto] items-center gap-3 py-3 text-left"><b className="font-hand text-lg">{r}</b><ChevronDown className={cn("size-4 transition-transform",openRisk===i&&"rotate-180")}/></button>{openRisk===i&&<p className="pb-4 text-sm leading-6 text-note">→ {m}</p>}</div>)}
            <svg viewBox="0 0 300 210" className="mt-6 w-full" role="img" aria-label="Risks plotted by likelihood and impact">
              <rect x="46" y="14" width="230" height="150" className="matrix-cell" />
              <line x1="161" y1="14" x2="161" y2="164" className="matrix-cell" />
              <line x1="46" y1="89" x2="276" y2="89" className="matrix-cell" />
              {[["1", 100, 50], ["2", 210, 60], ["3", 90, 130], ["4", 225, 120]].map(([n, x, y], i) => (
                <g key={n as string}>
                  <circle cx={x as number} cy={y as number} r="13" className={cn(i < 2 ? "bar-b" : "bar-a", "bar-ink")} />
                  <text x={x as number} y={(y as number) + 6} textAnchor="middle" className="value-text">{n}</text>
                </g>
              ))}
              <text x="161" y="186" textAnchor="middle" className="tick-text">likelihood →</text>
              <text x="24" y="95" textAnchor="middle" transform="rotate(-90 24 95)" className="tick-text">impact →</text>
            </svg>
            <p className="font-note text-base text-note">1 gaming · 2 ops burden · 3 legal · 4 partner constraints</p>
          </article>
        </section>


        <section className="mt-8 irregular-panel bg-lavender p-6 text-center sm:p-9"><DoodleFlower className="mx-auto block text-4xl"/><h2 className="mt-2 font-hand text-3xl font-bold">The product promise</h2><p className="mx-auto mt-3 max-w-2xl text-sm leading-6">Explain risk before it becomes a crisis. Show the path to resolution. Protect Stripe’s loss rate while giving good merchants time, clarity, and options.</p><a href="mailto:your@email.com" className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-5 py-2 text-sm shadow-paper"><Mail className="size-4"/> Contact</a></section>

        <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-dashed border-sketch pt-5 text-center text-xs text-note sm:flex-row sm:text-left"><span>Built for Stripe PM New Grad Accelerator — [Your Name] — [LinkedIn/GitHub]</span><span className="font-note text-base">made with research, not guesswork ✿</span></footer>
        </div>
        {/* Bottom torn decorative strip */}
        <div className="h-3.5 w-full bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--sketch)_20%,transparent)_0px,color-mix(in_oklab,var(--sketch)_20%,transparent)_10px,transparent_10px,transparent_20px)] border-t border-ink/15" />
      </div>

      {/* Bottom Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-ink/10 pt-8">
        <Link to="/teardowns" className="font-hand text-2xl text-sage hover:text-ink">
          &larr; All Teardowns
        </Link>
        <Link to="/teardowns/linear-mobile" className="text-right font-display text-ink/70 hover:text-ink">
          Next teardown
          <span className="mt-0.5 block text-sm text-sage">Linear Mobile App &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
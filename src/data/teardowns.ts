import type { Topic } from "../components/TopicArt";
import type { Brand } from "../components/BrandLogo";

export type Verdict = "love" | "mixed" | "pass";

export type TeardownPillar = {
  title: string;
  desc: string;
  action: string;
};

export type Teardown = {
  slug: string;
  product: string;
  category: string;
  verdict: Verdict;
  tagline: string;
  topic: Topic;
  brand: Brand;
  whatWorks: string[];
  whatMisses: string[];
  takeaway: string;
  pillars?: TeardownPillar[];
  metrics?: { label: string; value: string }[];
};

export const verdictLabel: Record<Verdict, string> = {
  love: "would ship this",
  mixed: "mixed feelings",
  pass: "would rethink this",
};

export const teardowns: Teardown[] = [
  {
    slug: "stripe-stability-os",
    product: "Stripe: Stability OS",
    category: "fintech · risk infrastructure",
    verdict: "love",
    tagline:
      "A risk cockpit + release engine that prevents surprise merchant account holds and explains risk in plain language.",
    topic: "trust",
    brand: "stripe",
    whatWorks: [
      "Replaces sudden 60–180 day freeze shocks with a continuous 0–100 Risk Health Score and directional pre-hold warnings, letting honest merchants self-correct before catastrophic liquidity lockups.",
      "Introduces SLA-backed case tracking (first review within 24–48h) and partner-backed escrow advance pilots, preserving merchant cash flow while compliance reviews conclude.",
    ],
    whatMisses: [
      "Banding risk scores directionally rather than publishing raw numerical thresholds requires precise UX copy so bad actors cannot reverse-engineer radar limits.",
      "Operations team burden must be mitigated by automated document verification pipelines to prevent SLA breaches during high-velocity spikes.",
    ],
    takeaway:
      "The best risk infrastructure protects platform integrity without weaponizing opacity against legitimate businesses.",
    pillars: [
      {
        title: "Risk Health Score",
        desc: "0–100 score tracking dispute rates, velocity spikes, and doc freshness.",
        action: "Directional indicators with top 3 driver diagnosis",
      },
      {
        title: "Pre-Hold Warnings",
        desc: "In-product & email alerts giving 3 concrete steps before holds trigger.",
        action: "Enable 3DS, lower ticket caps, upload KYC docs",
      },
      {
        title: "SLA Case Tracker",
        desc: "Transparent queue with assigned risk ops owner and guaranteed response ETAs.",
        action: "First review in 24–48h + live checklist",
      },
      {
        title: "Cash-Flow Escrow",
        desc: "Insured escrow and partner liquidity advances for eligible merchants under review.",
        action: "Preserves payroll and operations during reviews",
      },
    ],
    metrics: [
      { label: "Surprise account holds", value: "-40%" },
      { label: "Median hold duration", value: "-25%" },
      { label: "Merchant NPS in risk cohort", value: "+20 pts" },
      { label: "Support ticket volume", value: "-20%" },
    ],
  },
];

export function getTeardown(slug: string) {
  return teardowns.find((t) => t.slug === slug);
}


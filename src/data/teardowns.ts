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
  {
    slug: "duolingo-streak-freeze",
    product: "Duolingo: streak freeze",
    category: "consumer · edtech",
    verdict: "love",
    tagline:
      "A paid feature that quietly protects the habit loop instead of monetizing guilt.",
    topic: "trust",
    brand: "duolingo",
    whatWorks: [
      "It sells insurance against a bad day, not against the product's own friction: the difference between monetizing anxiety and monetizing life happening.",
      "Framing it as a 'freeze' instead of a 'pause' keeps the streak metaphor intact instead of admitting the mechanic is fragile.",
    ],
    whatMisses: [
      "Free users only get one freeze at a time. The one moment they'd most want a second is right after they've just used their first.",
    ],
    takeaway:
      "The best retention mechanics protect the user's story about themselves, not just the company's metric.",
  },
  {
    slug: "notion-ai-autofill",
    product: "Notion AI: autofill",
    category: "productivity · B2B",
    verdict: "mixed",
    tagline:
      "Genuinely useful for first drafts, genuinely disorienting for anyone who didn't ask for one.",
    topic: "notebook",
    brand: "notion",
    whatWorks: [
      "Keeping the suggestion inline, in the same font and cursor position, makes it feel like a continuation of your own thought rather than an interruption.",
    ],
    whatMisses: [
      "There's no visible 'off' switch in the moment. You discover you can dismiss it by accident, not because the UI told you.",
      "It fires on any pause, including the pause where you're just thinking, which quietly changes how it feels to write slowly.",
    ],
    takeaway:
      "An assist feature earns trust by being easy to refuse, not just easy to accept.",
  },
  {
    slug: "linkedin-open-to-work",
    product: "LinkedIn: Open to Work banner",
    category: "social · careers",
    verdict: "pass",
    tagline:
      "Solves discovery for recruiters and creates a public signal the job-seeker can't fully control.",
    topic: "onboarding",
    brand: "linkedin",
    whatWorks: [
      "The recruiter-only visibility option is the right default and should have been the only option.",
    ],
    whatMisses: [
      "The green ring reads, to a lot of people who see it, as 'this person got let go,' a stigma the feature does nothing to soften.",
      "Turning it on is one tap. Understanding who can see it takes three menus, which is backwards for a decision this public.",
    ],
    takeaway:
      "If a feature broadcasts something vulnerable, the privacy controls need to be at least as visible as the broadcast itself.",
  },
];

export function getTeardown(slug: string) {
  return teardowns.find((t) => t.slug === slug);
}

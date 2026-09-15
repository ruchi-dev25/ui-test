export type Section = {
  heading: string;
  body: string[];
  marginNote?: string;
  pullQuote?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeframe: string;
  tags: string[];
  teaser: string;
  marginTease: string;
  metrics: { value: string; label: string }[];
  sections: Section[];
  reflection: string;
};

export const projects: Project[] = [
  {
    slug: "checkout-friction",
    title: "The checkout that lost a third of its buyers",
    subtitle:
      "Rebuilding checkout for a mid-market marketplace after discovering drop-off was a design problem wearing a payments costume.",
    role: "Lead PM, Checkout & Payments",
    timeframe: "Jan – Jun 2024",
    tags: ["0→1 discovery", "payments", "growth"],
    teaser:
      "Everyone blamed the payment gateway. The gateway was fine — the form asked for a shipping address twice.",
    marginTease: "found this on page 4 of a support ticket export",
    metrics: [
      { value: "34%", label: "cart abandonment at final step" },
      { value: "+18%", label: "completed purchases post-launch" },
      { value: "6 wks", label: "from first ticket to shipped fix" },
    ],
    sections: [
      {
        heading: "The ticket that started it",
        body: [
          "Support had been quietly logging the same complaint for months: 'paid, then it asked me to pay again.' Nobody escalated it because the payment logs looked clean — money moved, orders were created. It read like user error.",
          "I pulled 40 of those tickets and watched five checkout sessions on repeat. The pattern wasn't payment failure. It was a shipping-address field that reset itself when a promo code failed validation, silently returning buyers to step one after they'd already entered card details.",
        ],
        marginNote: "the gateway was innocent the whole time",
      },
      {
        heading: "Why this wasn't a bug ticket",
        body: [
          "Engineering could have patched the field reset in a day. I asked to hold the patch and spend a week first, because a UI bug that survived four months of tickets meant our funnel instrumentation wasn't telling us the truth either.",
          "We added step-level event tracking before touching the form. That surfaced a second, bigger issue: 22% of mobile users were abandoning at a step that didn't even have a bug — the address form simply required scrolling past a sticky promo banner that covered the 'continue' button.",
        ],
        pullQuote: "The first bug was a symptom. The real defect was that we couldn't see our own funnel.",
      },
      {
        heading: "What we shipped, in order",
        body: [
          "1. Step-level funnel events, so this class of problem would surface in a dashboard instead of a ticket queue.",
          "2. Fixed the address-reset defect and removed the sticky banner overlap on mobile.",
          "3. Collapsed a 5-step checkout into 3 steps, merging shipping and billing for the ~70% of orders where they matched.",
          "We shipped in that order deliberately — visibility first, so every later change had a number attached to it before and after.",
        ],
      },
      {
        heading: "What I'd do differently",
        body: [
          "I sat on the visibility work for a week while abandonment kept happening. In hindsight I'd have shipped the address-field patch same-day as a hotfix, then done the instrumentation work in parallel — the two weren't actually sequential, I just treated them that way.",
        ],
      },
    ],
    reflection:
      "The lesson that stuck: when a metric looks fine but the anecdotes keep coming, trust the anecdotes and go verify the metric.",
  },
  {
    slug: "onboarding-rewrite",
    title: "Teaching a B2B tool to introduce itself",
    subtitle:
      "New workspace activation was stuck at 41% for two years. The fix wasn't a better tutorial — it was admitting most tutorials were being built for a user who no longer existed.",
    role: "Senior PM, Activation",
    timeframe: "Sep 2023 – Feb 2024",
    tags: ["activation", "B2B SaaS", "research"],
    teaser:
      "We had built four onboarding tours for a persona that made up 12% of new signups.",
    marginTease: "the persona doc was from 2021. nobody had re-run it since.",
    metrics: [
      { value: "41% → 63%", label: "workspace activation within 7 days" },
      { value: "-2 steps", label: "removed from setup entirely" },
      { value: "9", label: "customer interviews before writing a line of copy" },
    ],
    sections: [
      {
        heading: "Starting from the complaint, not the solution",
        body: [
          "The brief that landed on my desk said 'improve onboarding tour completion.' I asked to reframe it as 'why do 6 in 10 new workspaces go quiet in the first week' — completion of a tour and activation of an account aren't the same thing, and optimizing the tour would have hit a vanity metric.",
          "Nine interviews later, the picture was different from what the roadmap assumed. Our onboarding was written for a solo operator setting up their own workspace. Most new signups in 2023 were actually the third or fourth person joining a workspace someone else had already configured — they didn't need a tour, they needed to know what their teammates had already decided.",
        ],
        marginNote: "we were onboarding the wrong person",
      },
      {
        heading: "The decision to cut instead of add",
        body: [
          "The instinct on the team was to add a role-detection step so we could branch the tour. I pushed back — every added step is a chance to lose someone, and we didn't yet know if branching would even help.",
          "Instead we cut: removed the 6-screen product tour for anyone joining an existing workspace, and replaced it with a single screen — 'here's what your team has already set up' — populated with real data from their own workspace.",
        ],
        pullQuote: "Every screen we add is a bet that the user wants to be taught. Most of the time they want to be oriented.",
      },
      {
        heading: "Rolling it out without breaking what worked",
        body: [
          "We A/B tested against the existing flow for four weeks, segmented by whether the signup was joining an existing workspace or starting fresh. The new single-screen flow only shipped for the 'joining' segment — the original tour stayed untouched for solo starters, since that group was already activating at 74%.",
        ],
      },
    ],
    reflection:
      "The biggest unlock wasn't a design change, it was re-running a persona study that everyone assumed was still true. It hadn't been true for two years.",
  },
  {
    slug: "trust-signals",
    title: "Building trust without adding a single badge",
    subtitle:
      "A peer-to-peer marketplace asked for 'more trust signals' on listings. What buyers actually needed was fewer, better-timed ones.",
    role: "PM, Trust & Safety",
    timeframe: "Apr – Aug 2024",
    tags: ["trust & safety", "marketplace", "experimentation"],
    teaser:
      "We had 11 trust badges on one listing page. Buyers trusted the page less than a page with three.",
    marginTease: "more isn't reassuring, it's suspicious",
    metrics: [
      { value: "-8", label: "trust elements removed from listing pages" },
      { value: "+11%", label: "buyer-to-message conversion" },
      { value: "22", label: "moderated listing sessions reviewed" },
    ],
    sections: [
      {
        heading: "The request versus the problem",
        body: [
          "Support and sales both asked for 'more trust signals' after a competitor launched a verified-seller badge. The easy answer was to ship a badge. I asked for two weeks to understand what buyers were actually hesitating on before we designed anything.",
          "Session recordings showed buyers scrolling past most of our existing badges without pausing — seller-verified, ID-checked, response-time, dispute-protection, and seven more, all stacked in a row. The one thing buyers did pause on, consistently, was the seller's most recent review, read in full.",
        ],
      },
      {
        heading: "A smaller, sharper set of signals",
        body: [
          "We removed eight of eleven badges and kept three: identity verification, a single most-relevant recent review shown inline, and response time — the three that mapped to real questions buyers had in interviews ('is this a real person', 'did this go well for someone like me', 'will they actually reply').",
          "The badges we cut weren't wrong, they were just competing with each other for attention that only had room for one or two signals at a time.",
        ],
        pullQuote: "A badge wall doesn't say 'trust us.' It says 'we know you're worried, and here are eleven reasons.'",
      },
      {
        heading: "Proving it wasn't a fluke",
        body: [
          "Before rolling out broadly, we ran the reduced set against the original on 50% of listings for three weeks. Buyer-to-message conversion rose 11%, and — the number that mattered most to the trust & safety team — reported disputes didn't move, meaning we hadn't traded honesty for a cleaner layout.",
        ],
      },
    ],
    reflection:
      "Trust isn't additive. Past a certain point, every extra badge asks the buyer to do more evaluating, not less.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

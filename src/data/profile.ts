export const profile = {
  name: "Ruchi Madankar",
  title: "Aspiring Product Manager",
  standing: "Final-year CS · APM candidate",
  email: "ruchi.madankar@example.com",
  linkedin: "https://linkedin.com",
  availability: "Open to APM roles · 2027 grad",
  compass:
    "What if we stopped accepting ‘that’s just how it works’?",
  bio: [
    "I collect problems. Then I get unreasonably curious about them.",
    "A Computer Engineering student exploring product management, one user, one product, and one questionable workflow at a time.",
  ],
  tools: [
    { name: "Notion", key: "notion" },
    { name: "Tableau", key: "tableau" },
    { name: "Excel", key: "excel" },
    { name: "SQL", key: "sql" },
    { name: "Python", key: "python" },
    { name: "Mixpanel", key: "mixpanel" },
    { name: "Jira", key: "jira" },
    { name: "Postman", key: "postman" },
    { name: "Figma", key: "figma" },
  ] satisfies { name: string; key: import("../components/ToolIcon").ToolKey }[],
  aiTools: [
    { name: "ChatGPT", key: "chatgpt" },
    { name: "Claude", key: "claude" },
    { name: "Perplexity", key: "perplexity" },
    { name: "Cursor", key: "cursor" },
    { name: "Midjourney", key: "midjourney" },
  ] satisfies { name: string; key: import("../components/ToolIcon").ToolKey }[],
};

export const skills = [
  {
    name: "Talking to users before touching a dashboard",
    note: "Interviews come first, always. If a metric looks fine but the anecdotes keep coming, I trust the anecdotes and go verify the metric — that instinct is what the checkout case study came out of.",
  },
  {
    name: "Turning ambiguity into a PRD",
    note: "Somewhere between a hallway idea and a sprint, someone has to write the thing down clearly enough for people to disagree with it. I like being that someone — it's where most of the real thinking happens.",
  },
  {
    name: "Enough SQL to trust my own numbers",
    note: "Not a data scientist, but I can pull my own cohorts, sanity-check a funnel, and ask an analyst a sharper question because I've already looked at the raw rows myself.",
  },
  {
    name: "Shipping in small, reversible steps",
    note: "I'd rather launch a rough version to five real users this week than a polished one to nobody next month. Most of my case studies exist because I killed my own first idea partway through.",
  },
];

export const skillGroups = [
  {
    category: "Product Execution & Strategy",
    tint: "sage" as const,
    items: [
      "0→1 Product Scoping",
      "User Interviews & Stakeholder Discovery",
      "PRD Writing",
      "Feature Prioritization (Impact vs. Effort)",
      "Sprint Tracking (Linear/Jira)",
      "QA & Handoff Verification",
    ],
  },
  {
    category: "Technical Literacy",
    tint: "periwinkle" as const,
    items: [
      "REST APIs",
      "JSON Formatting",
      "Postman (API Testing)",
      "Basic SQL (Queries & Filters)",
      "Web Performance Basics (Lighthouse, Page Speed)",
    ],
  },
  {
    category: "Product Analytics",
    tint: "amber" as const,
    items: [
      "Mixpanel (Event Telemetry, Funnels, Drop-offs)",
      "Google Analytics",
      "Tableau (Dashboards & Reporting)",
      "Excel / Google Sheets",
    ],
  },
];

export type CompanionMode = "research" | "strategy" | "build" | "measure";

export const companion = {
  name: "Pip",
  role: "notebook companion",
  quest: "Acad: Student–Mentor Platform",
  standing: "Associate Product Manager, in training",
  artifacts: "PRDs, wireframes, SQL telemetry",
  stats: [
    { label: "Technical fluency", value: 7 },
    { label: "User empathy & inquiry", value: 9 },
    { label: "Quantitative rigor", value: 6 },
    { label: "Bias for action", value: 8 },
  ],
  modes: {
    research: {
      label: "Research",
      quote:
        "Little by little, interview by interview, the real problem shows up in someone else's words, not mine.",
    },
    strategy: {
      label: "Strategy",
      quote:
        "A roadmap is just a bet with a date on it. I want to know which bets we're placing, and why.",
    },
    build: {
      label: "Build",
      quote:
        "I'd rather ship a rough version to five real users than a polished one to nobody.",
    },
    measure: {
      label: "Measure",
      quote:
        "If I can't point to the number that moved, I don't fully believe the change worked yet.",
    },
  } satisfies Record<CompanionMode, { label: string; quote: string }>,
};

export const letter = {
  salutation: "Dear fellow explorer,",
  paragraphs: [
    "I came into a Computer Engineering degree writing code, wiring up databases, and getting things to work. I was never the strongest at it — but somewhere in the process of debugging, I got far more curious about a question beyond raw syntax: who is this for, and does it truly solve their friction?",
    "That question pulled me toward product. I don't pause pure engineering — I'm actively learning what tools I build with. What I do possess is a strong grounding to sit in a room with engineers and ask the uncomfortable questions, obsessing over the why behind the architecture. Are we solving a genuine pain point? How does this telemetry map back to human intent?",
    "When I'm not drafting PRDs or reading retention cohorts, you'll find me strategizing in Clash of Clans, wandering typography archives, or picking apart early-stage consumer startups.",
  ],
  pullQuote:
    "Code showed me how complex systems survive under load. Product taught me why systems exist in the first place — for humans.",
  stickyNote: "Experience compounds. Mine is small right now, but it's compounding on real problems, not tutorials.",
  signoff: "Warmly, and in build mode,",
};

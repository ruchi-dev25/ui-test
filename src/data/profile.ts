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
  tools: ["Python", "SQL", "Notion", "Tableau", "Excel"],
};

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

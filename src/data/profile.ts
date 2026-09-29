export const profile = {
  name: "Ruchi Madankar",
  title: "Aspiring Product & Program Manager",
  standing: "Final-year Computer Engineering · 2027 Grad",
  location: "Navi Mumbai, India",
  phone: "+91-9321297184",
  email: "madankar.ruchi@gmail.com",
  linkedin: "https://www.linkedin.com/in/ruchi-madankar-42aabb28a",
  portfolio: "https://ruchi-portfolio.nekostack.com",
  availability: "Open to Product & Program Management Roles · 2027 Grad",
  summary:
    "Final-year Computer Engineering student who has shipped two real products end to end, most recently a faculty-facing platform now used by 10 mentors and the HOD at my college. I move comfortably between requirements, documentation, and the people a product is actually built for. Looking for a Product or Program Management internship to keep building at that intersection.",
  education: {
    degree: "Bachelor of Engineering — Computer Engineering",
    institution: "Ramrao Institute of Technology",
    minor: "Minor — Artificial Intelligence",
    graduation: "Expected Graduation: 2027",
    cgpa: "9.1/10",
  },
  compass:
    "What if we stopped accepting ‘that’s just how it works’?",
  bio: [
    "I collect problems. Then I get unreasonably curious about them.",
    "A Computer Engineering student exploring product management, one user, one product, and one questionable workflow at a time.",
  ],
  certifications: [
    "CS50: Introduction to Programming with Python (Harvard)",
    "AWS Academy Graduate — Cloud Foundations",
    "NPTEL — Data Science for Engineers (Elite)",
    "NPTEL — Design, Technology and Innovation (Elite)",
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
    { name: "Antigravity", key: "antigravity" },
    { name: "Perplexity", key: "perplexity" },
    { name: "Stitch", key: "stitch" },
    { name: "Lovable", key: "lovable" },
  ] satisfies { name: string; key: import("../components/ToolIcon").ToolKey }[],
};

export const resumeExperiences = [
  {
    title: "Pixn — AI Website & Inbound Lead Builder",
    role: "Product Management Intern",
    date: "June 2026–July 2026",
    link: "/work/pixn-ai-website-builder",
    bullets: [
      "Took an unshippable, abstract concept (“business OS”) and narrowed it to one sellable version: prompt in, live website out, with a working leads/RSVP inbox. Kept the team on one task at a time so half-finished features didn’t pile up.",
      "Worked with 2 engineers to swap an unreliable HTML-streaming approach for a structured JSON schema. Generation time dropped from 6+ minutes to about 41 seconds.",
      "Ran Lighthouse audits on staging pages and traced a slow mobile load time to blocking fonts. Load time went from 3.4s to 1.8s once that was fixed.",
      "Before calling anything done, I checked it live: a script confirmed leads were reaching the database on real preview URLs before sign-off.",
    ],
  },
  {
    title: "Academic Records & Mentorship Platform",
    role: "Product Manager & Builder — 4-Week Solo Sprint",
    date: "Deployed with 10 Faculty Mentors & HOD",
    link: "/work/academic-mentorship-platform",
    bullets: [
      "Interviewed 10 faculty members across three roles (mentors, class counsellors, HOD). The existing process ran through Google Forms, spreadsheets, and WhatsApp; those conversations turned into a scoped MVP and a PRD, including NEP compliance requirements (2 required NPTEL certifications by Semester 6).",
      "Built and shipped the whole thing solo over 4 weeks: a student portal for marksheets and NPTEL proof, a roll-number search, and a directory the HOD could use to find students for research. Manual form circulation went away entirely.",
      "Designed a 4-tier database with PostgreSQL row-level security, so mentor records stayed private while class counsellors could still see what they needed.",
      "Set up an alert that flags students who haven’t registered for NPTEL 7 days before the deadline, so there’s time to fix it before it becomes a problem.",
      "Since it went live, lookup time for class counsellors dropped from 15–30 minutes to under 10 seconds, and mentors’ weekly admin work dropped from 2–4 hours to under 15 minutes.",
    ],
  },
  {
    title: "Stripe — Stability OS",
    role: "Self-Directed Product Teardown & Prototype",
    date: "Published Interactive Teardown & Prototype",
    link: "/teardowns/stripe-stability-os",
    bullets: [
      "Researched Stripe’s most-reported merchant complaint (60–180 day payout holds, 25–35% reserves) from public reviews and forums, then designed and prototyped a proactive fix: a live risk score, pre-hold warnings, and an SLA-backed case tracker.",
      "Set target metrics (a 40% cut in surprise holds, a 25-point NPS lift) and a 90-day rollout plan, and wrote up real risks, like the scorecard being gamed, before proposing mitigations.",
    ],
  },
];

export const skills = [
  {
    name: "Talking to users before touching a dashboard",
    note: "Interviews come first, always. That instinct is what took the academic mentorship platform from 'improve compliance tracking' to a real 4-tier access model. The spreadsheets looked fine until I asked mentors to walk me through one.",
  },
  {
    name: "Turning ambiguity into a PRD",
    note: "Somewhere between a hallway idea and a sprint, someone has to write the thing down clearly enough for people to disagree with it. I like being that someone, it's where most of the real thinking happens.",
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
    category: "Product Management",
    tint: "sage" as const,
    items: [
      "Product Discovery",
      "PRD Writing",
      "Stakeholder Interviews",
      "MVP Scoping",
      "Feature Prioritization",
      "Regulatory / Compliance Roadmapping",
    ],
  },
  {
    category: "Program & Project Delivery",
    tint: "periwinkle" as const,
    items: [
      "Agile/Scrum Execution",
      "Sprint Planning",
      "Milestone Tracking",
      "Technical Risk Mitigation",
      "Cross-Functional Alignment",
      "SDLC Delivery",
    ],
  },
  {
    category: "Technical & Data Stack",
    tint: "amber" as const,
    items: [
      "SQL",
      "JSON Schema",
      "Tableau",
      "REST APIs",
      "Spreadsheets (Google Sheets/Excel, Pivot Tables)",
      "Python",
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
    "I came into a Computer Engineering degree writing code, wiring up databases, and getting things to work. I was never the strongest at it, but somewhere in the process of debugging, I got far more curious about a question beyond raw syntax: who is this for, and does it truly solve their friction?",
    "That question pulled me toward product. I don't pause pure engineering, I'm actively learning what tools I build with. What I do possess is a strong grounding to sit in a room with engineers and ask the uncomfortable questions, obsessing over the why behind the architecture. Are we solving a genuine pain point? How does this telemetry map back to human intent?",
    "When I'm not drafting PRDs or reading retention cohorts, you'll find me strategizing in Clash of Clans, wandering typography archives, or picking apart early-stage consumer startups.",
  ],
  pullQuote:
    "Code showed me how complex systems survive under load. Product taught me why systems exist in the first place: for humans.",
  stickyNote: "Experience compounds. Mine is small right now, but it's compounding on real problems, not tutorials.",
  signoff: "Warmly, and in build mode,",
};


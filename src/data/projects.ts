import type { Topic } from "../components/TopicArt";
import type { MetricRow } from "../components/MetricsChart";

type Tint = "mint" | "periwinkle" | "amber" | "rose" | "cream";

export type TextSection = {
  kind?: "text";
  heading: string;
  body: string[];
  marginNote?: string;
  pullQuote?: string;
};

export type TableSection = {
  kind: "table";
  heading: string;
  intro?: string;
  columns: string[];
  rows: string[][];
};

export type DiagramSection = {
  kind: "diagram";
  heading: string;
  intro?: string;
};

export type CodeSection = {
  kind: "code";
  heading: string;
  intro?: string;
  label: string;
  code: string;
  note?: string;
};

export type MatrixSection = {
  kind: "matrix";
  heading: string;
  intro?: string;
  quadrants: { title: string; tint: Tint; items: string[]; rationale: string }[];
};

export type MoscowSection = {
  kind: "moscow";
  heading: string;
  intro?: string;
  tiers: { title: string; tint: Tint; items: string[]; rationale: string }[];
};

export type ValueEffortSection = {
  kind: "value-effort";
  heading: string;
  intro?: string;
  valueLabel?: string;
  points: {
    label: string;
    quadrant: "quick-win" | "big-bet" | "fill-in" | "time-sink";
    rationale: string;
  }[];
};

export type ChartSection = {
  kind: "chart";
  heading: string;
  intro?: string;
  rows: MetricRow[];
};

export type TalkTrackSection = {
  kind: "talktrack";
  heading: string;
  intro?: string;
  items: { label: string; text: string }[];
};

export type Section =
  | TextSection
  | TableSection
  | DiagramSection
  | CodeSection
  | MatrixSection
  | MoscowSection
  | ValueEffortSection
  | ChartSection
  | TalkTrackSection;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeframe: string;
  status?: string;
  tags: string[];
  teaser: string;
  marginTease: string;
  topic: Topic;
  metrics: { value: string; label: string }[];
  sections: Section[];
  reflection: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "academic-mentorship-platform",
    topic: "academic",
    title: "AcadFlow: Centralized Academic Mentorship & NEP Compliance Platform",
    subtitle:
      "A national policy made two certifications mandatory for graduation. Ten faculty were tracking compliance across disconnected spreadsheets, finding the misses during final degree audits, when it was already too late.",
    role: "Solo Technical PM & Engineer",
    timeframe: "4 Weeks · Next.js, Supabase, Postgres RLS, Tailwind",
    status: "V1 shipped · active pilot with 10 faculty members",
    tags: ["0→1 build", "EdTech", "Postgres RLS"],
    teaser:
      "10 faculty, 25–30 students each, zero shared records, and a national policy that could quietly block a student's degree over a missed registration window.",
    marginTease: "V1 shipped in 4 weeks. Now in active pilot with all 10 faculty.",
    metrics: [
      { value: "75% → 100%", label: "on-time NPTEL registration" },
      { value: "15–30 min → <10 sec", label: "to find a student's mentor" },
      { value: "2–4 hrs → <15 min", label: "faculty admin time, per week" },
    ],
    sections: [
      {
        heading: "Problem context: the NEP compliance breakdown",
        body: [
          "Under National Education Policy guidelines, every student must clear two NPTEL certifications (one in Semester 5, one in Semester 6) to graduate, choosing from roughly two elective course options per semester. Missing the registration deadline barred students from that semester's exam entirely; failing the exam created a backlog that had to be resolved in the final year.",
          "Because the tracking data lived in personal spreadsheets, mentors typically discovered a missed registration or a live backlog during the final degree audit, by which point there was no time left to fix it without delaying graduation. AcadFlow exists to move that discovery earlier, from audit day to registration week.",
          "Ten faculty interviews surfaced four compounding breakdowns:",
          "• Isolated spreadsheets: each mentor tracked 25–30 mentees in a disconnected 40-column sheet, with no departmental view. (0 of 10 mentors had a shared view → 1 unified record after launch.)",
          "• The \"zero-context\" CC handover: mentors follow students for 3 years, but Class Counsellors rotate every semester and inherit nothing. Finding the right mentor meant broadcasting roll numbers over WhatsApp. (15–30 minutes per lookup → under 10 seconds today.)",
          "• Manual chasing overhead: faculty re-circulated Google Forms every term, then spent 2–4 hours a week cross-referencing entries and calling parents. (2–4 hours a week → under 15 minutes a week today.)",
          "• Siloed achievements: research wins and competition results sat in one mentor's private notes, invisible to faculty scouting for projects. (0% cross-department visibility → 100% via the new talent directory.)",
        ],
        marginNote: "the audit was always the first time anyone saw the full picture",
      },
      {
        kind: "table",
        heading: "Stakeholder discovery: 10 in-depth interviews",
        intro:
          "A finding only made the cut if it was independently confirmed by more than one stakeholder group.",
        columns: ["Role", "Operational scope", "Observed bottleneck", "Core feature requirement"],
        rows: [
          [
            "Faculty Mentors (6 interviewed)",
            "Permanent mentorship of ~25–30 students, 2nd year through graduation.",
            "Manual tracking of NPTEL registrations, backlogs, repeated Google Forms.",
            "Roll-number search, automated exception queues, legacy Excel import.",
          ],
          [
            "Class Counsellors (3 interviewed)",
            "Division oversight (~70 students); rotates every semester.",
            "Zero inherited records; ad-hoc WhatsApp broadcasts to find a mentor.",
            "Universal roll-number directory with instant mentor/CC lookup.",
          ],
          [
            "Head of Department (1 interviewed)",
            "Governance, compliance, graduation clearance audits.",
            "No aggregated view of branch-wide NPTEL completion or at-risk students.",
            "Executive dashboard with department-wide drill-down.",
          ],
          [
            "Project & Research Faculty (cross-cutting)",
            "Recruiting for competitions, sponsored projects, research.",
            "Talent discovery is word-of-mouth only, outside their own mentees.",
            "Department talent directory of achievements & certifications.",
          ],
        ],
      },
      {
        heading: "Problem statement",
        body: [
          "I framed the problem this way before writing a line of code:",
        ],
        pullQuote:
          "Under NEP guidelines, faculty mentors lose 2–4 hours weekly manually reconciling NPTEL compliance across fragmented spreadsheets, while rotating Class Counsellors operate without historical data. The department lacks a unified, role-aware system of record to prevent missed registration deadlines, monitor exam remediation, and securely share student records without manual administrative chasing.",
      },
      {
        kind: "diagram",
        heading: "System architecture: 4-tier access control",
        intro:
          "Standard enterprise permission models fail here because access runs along two independent axes: longitudinal ownership (4-year mentorship) and ephemeral ownership (1-semester counselling), while academic records need to stay private and achievements need to stay visible department-wide.",
      },
      {
        kind: "code",
        heading: "Database security implementation",
        intro:
          "Access control is enforced inside Postgres itself via Supabase Row Level Security, so unauthorized access is impossible regardless of what the frontend does or doesn't check.",
        label: "Postgres · Row Level Security policy",
        code: `-- Axis 1: Permanent Mentor (all 4 years, any division)
CREATE POLICY "Private_Academic_Record_Access"
ON public.student_records
FOR SELECT TO authenticated
USING (
  mentor_id = auth.uid()

  -- Axis 2: Ephemeral CC, scoped to active semester & division
  OR EXISTS (
    SELECT 1 FROM class_counselor_assignments cca
    WHERE cca.faculty_id = auth.uid()
      AND cca.division = student_records.division
      AND cca.current_semester = student_records.semester
      AND cca.is_active = true
  )

  -- Axis 3: Department leadership, full audit authority
  OR (auth.jwt() ->> 'role') = 'HOD'
);

-- Public layer: open to all faculty for project & research scouting
CREATE POLICY "Public_Talent_Directory_Access"
ON public.student_achievements
FOR SELECT TO authenticated
USING (true);`,
        note: "When a semester ends and a CC rotates, updating one row in class_counselor_assignments revokes their division access immediately. Mentorship history stays intact.",
      },
      {
        heading: "Core platform capabilities",
        body: [
          "1. Student self-service portal: replaces recurring Google Forms with a profile students maintain themselves.",
          "• Semester progression: upload SGPA marksheets and select enrolled electives each term.",
          "• NPTEL lifecycle tracking: upload Sem 5/6 enrollment proof on registration, then the final certificate and score.",
          "• Achievement portfolio: certifications, publications, and competition awards, auto-routed to the public talent directory.",
          "2. Automated exception queuing: mentors stop scanning spreadsheets; the system computes real-time exception views.",
          "• Registration deadline alerts: flags Sem 5/6 students missing proof 7 days before the portal closes.",
          "• Backlog remediation queue: isolates final-years who failed an earlier attempt and must re-register to graduate.",
          "• Pending information audits: surfaces students missing emergency contacts or verified marksheets.",
          "3. Legacy spreadsheet migration engine: mentors upload their existing Excel trackers directly. The platform parses column headers, maps fields to the schema, and creates student stubs ready for self-verification.",
        ],
      },
      {
        kind: "value-effort",
        heading: "Tradeoffs & prioritization (impact vs. effort)",
        intro:
          "I deliberately skipped numerical RICE scoring. Applying decimal weights to qualitative interview data creates false precision. Prioritization ran on an Impact vs. Effort graph instead.",
        valueLabel: "impact",
        points: [
          {
            label: "Shipped in V1",
            quadrant: "quick-win",
            rationale:
              "Single roll-number search, mentor & CC directory, student self-entry portal, automated NPTEL exception flags, public talent directory: eliminates the top administrative risks.",
          },
          {
            label: "Scoped & shipped in V1",
            quadrant: "big-bet",
            rationale:
              "Legacy Excel spreadsheet importer, dual-axis Postgres RLS engine: non-negotiable for adoption. Mentors refused manual re-entry; RLS was the only acceptable privacy guarantee.",
          },
          {
            label: "Pushed to V2",
            quadrant: "big-bet",
            rationale:
              "Bulk CSV transaction rollback, inter-semester CC handover notes: standard column mapping already works in V1, so rollback was deferred to protect the 4-week delivery window.",
          },
          {
            label: "Killed",
            quadrant: "time-sink",
            rationale:
              "Autonomous AI chatbot copilot, automated OCR certificate parsing, full exam grading suite: chatbots failed discovery across all 10 interviews; NPTEL certificate formats vary too widely for OCR to skip manual verification.",
          },
        ],
      },
      {
        heading: "What's next",
        body: [
          "V1 is intentionally narrow. It solves the compliance-visibility problem, not every problem the pilot surfaced. Two items are already scoped for V2: bulk CSV transaction rollback, so a bad import can be undone instead of manually cleaned up, and inter-semester CC handover notes, so incoming counsellors inherit context, not just records.",
          "OCR certificate parsing and the AI chatbot stay off the roadmap for now. The first needs NPTEL providers to standardize formats, the second never had a real user problem behind it. Both get revisited only if the underlying constraint changes, not because the idea is appealing.",
        ],
      },
      {
        kind: "chart",
        heading: "Evaluation metrics & pilot validation",
        intro: "Tracked against an active pilot with all 10 faculty members.",
        rows: [
          {
            metric: "Regulatory compliance",
            method: "% of Sem 5/6 students registered before portal close.",
            baselineLabel: "75% on-time",
            baselinePct: 75,
            targetLabel: "100% on-time",
            targetPct: 100,
          },
          {
            metric: "CC handover velocity",
            method: "Time for a new CC to locate a flagged student's mentor.",
            baselineLabel: "15–30 min (WhatsApp)",
            baselinePct: 20,
            targetLabel: "< 10 seconds",
            targetPct: 100,
          },
          {
            metric: "Administrative overhead",
            method: "Faculty hours/week spent chasing forms & spreadsheets.",
            baselineLabel: "2–4 hrs / week",
            baselinePct: 25,
            targetLabel: "< 15 min / week",
            targetPct: 100,
          },
          {
            metric: "Data boundary integrity",
            method: "Postgres audit logs for cross-division access attempts.",
            baselineLabel: "unmonitored before",
            baselinePct: 10,
            targetLabel: "zero violations",
            targetPct: 100,
          },
        ],
      },
      {
        kind: "talktrack",
        heading: "Interview talk track (90-second walkthrough)",
        items: [
          {
            label: "1. Problem",
            text: "When National Education Policy guidelines made passing two NPTEL certifications mandatory for graduation, our college faculty hit a compliance wall. Mentors tracked electives and exam backlogs across private spreadsheets, rotating semester Class Counsellors had zero student records, and students were missing registration deadlines, putting degrees at risk.",
          },
          {
            label: "2. Discovery & pivot",
            text: "I interviewed 10 faculty members and the HOD. I scrapped my initial idea of an AI chatbot when discovery proved faculty didn't need conversational summaries; they needed relational structure. I built a unified records system where students self-report marksheets and NPTEL receipts, and mentors receive automated exception lists of who is at risk.",
          },
          {
            label: "3. Engineering & execution",
            text: "The technical challenge was academic access hierarchy: faculty hold permanent 4-year mentorship roles while rotating as 1-semester Class Counsellors. I implemented a 4-tier access model using PostgreSQL Row Level Security to balance private academic records with an open department talent directory. AcadFlow's V1 prototype shipped in 4 weeks with legacy Excel migration and is currently in active faculty pilot.",
          },
        ],
      },
    ],
    reflection:
      "The hardest part was not the platform execution. It was me resisting the assumption that professors might need another fancy AI chatbot, until discovery made it clear they needed structure, not conversation.",
  },
  {
    slug: "pixn-ai-website-builder",
    topic: "builder",
    title: "Pixn: 0→1 AI Website Builder & Lead Engine",
    subtitle:
      "Two strong engineers, an AI page generator, and a classic 0→1 problem: scope kept sprawling into multi-tenant admin systems before the core generator even worked reliably.",
    role: "Student · Aspiring Associate PM, with 2 technical co-founders",
    timeframe: "0→1 build · staging",
    status: "Active in-development · staging only, zero paid customers or live revenue",
    tags: ["0→1 build", "AI product", "scope control"],
    teaser:
      "The engineers had the systems knowledge to build anything, which was the problem. My job was helping them decide what not to build yet.",
    marginTease: "generation time: 6+ minutes → ~41 seconds",
    metrics: [
      { value: "6+ min → 41 sec", label: "AI page generation time" },
      { value: "3.4s → 1.8s", label: "mobile Largest Contentful Paint" },
      { value: "20", label: "prompt scenarios in every QA pass" },
    ],
    sections: [
      {
        heading: "Project context & current status",
        body: [
          "Pixn is an early-stage tool built by two software engineering co-founders. The goal: let someone type a description of their business and get a working webpage with a pre-configured, functioning contact form.",
          "Where the project actually stood when I joined: the site wasn't launched for external clients and the team wasn't onboarding paying users. Payment gateway integration (Cashfree) was still being configured and tested. There was no paid MRR or active customer count to point to. The build lived on internal staging links, where we were still testing mobile layouts, generation consistency, and database wiring.",
          "The two founders had strong development and systems knowledge, which is exactly what let them run into a classic 0→1 trap: reaching for full account administration, complex organization settings, and multi-tenant architecture before the simplest path worked smoothly.",
          "My job wasn't to manage the team or act like an experienced exec. I joined as a student PM to learn by doing: organizing tasks, testing staging builds, running user conversations, and keeping our weekly focus on one functional workflow.",
        ],
        marginNote: "the risk wasn't bad engineering, it was too much of it, too early",
      },
      {
        kind: "talktrack",
        heading: "Organic user discovery: what we actually heard",
        intro:
          "No formal enterprise surveys, just casual, open-ended conversations with 7 local service owners (a home baker, a mobile car detailer, a fitness trainer) and 5 friends planning their weddings, asking things like \"when was the last time you tried updating your website?\" and \"where do customer inquiries actually go?\"",
        items: [
          {
            label: "Home baker, Pune",
            text: "I pay a local agency every year just to keep the site running. Every time I want to change a price or my phone number, I have to call them and wait.",
          },
          {
            label: "Mobile car detailer, Bengaluru",
            text: "I tried Wix, but connecting the contact box to my email was too confusing. I had a pretty page, but I missed three customer enquiries.",
          },
          {
            label: "Bride-to-be, Jaipur",
            text: "Our wedding site still showed the old RSVP link on the morning of the wedding, guests were messaging me on WhatsApp asking where to park.",
          },
        ],
      },
      {
        heading: "Key takeaways for the team",
        body: [
          "The \"broken wiring\" problem: creating visual blocks is rarely where non-technical users quit. They get stuck when the form doesn't connect to a real inbox or SMS. If it doesn't work automatically, the site gets abandoned.",
          "Positioning confusion: calling Pixn an \"all-in-one operating system\" in early conversations confused people; they assumed it was a project-management app. Rephrased as \"you write what your business does, and you get a live page with a contact inbox,\" people understood immediately.",
        ],
      },
      {
        kind: "moscow",
        heading: "Prioritization framework A: MoSCoW for staging scope",
        intro:
          "The engineers were shipping AI-generated code fast, fast enough that without tight priorities, the product would sprawl. We sat down as a team and sorted every incoming idea into four priority tiers, from the non-negotiable foundation up to what we explicitly weren't building.",
        tiers: [
          {
            title: "Must-have: required for staging",
            tint: "mint",
            items: ["Text prompt → simple layout", "Working contact form to database", "5-minute preview generation"],
            rationale: "The non-negotiable core: without these, there's no product to test.",
          },
          {
            title: "Should-have: before real users",
            tint: "periwinkle",
            items: ["Payment gateway integration", "Mobile font-load optimization", "Basic leads dashboard table"],
            rationale: "Needed before we'd trust a real customer on the site, not before that.",
          },
          {
            title: "Could-have: later upgrades",
            tint: "amber",
            items: ["Custom domain mapping (CNAME)", "In-app layout reordering", "Multiple template variations"],
            rationale: "Nice, but none of it changes whether the core workflow works.",
          },
          {
            title: "Won't-have: deferred / non-goals",
            tint: "rose",
            items: ["Full brand redesign", "Native photo file uploads", "SMS / WhatsApp alerts"],
            rationale: "The features most likely to eat the whole timeline for the least validation.",
          },
        ],
      },
      {
        kind: "value-effort",
        heading: "Prioritization framework B: value vs. effort on the generation engine",
        intro:
          "The AI generation engine took 6+ minutes to output a single page. We had to decide how to fix it without disappearing into a multi-month rebuild.",
        points: [
          {
            label: "Structured JSON schema hydration",
            quadrant: "quick-win",
            rationale:
              "The decision: constrain the model to a validated JSON structure that populates pre-built, responsive components, instead of letting it write raw code.",
          },
          {
            label: "Fine-tuning a custom, private LLM",
            quadrant: "big-bet",
            rationale: "High long-term upside, but high ongoing maintenance risk for a team our size at this stage.",
          },
          {
            label: "Adding 20 more static templates",
            quadrant: "fill-in",
            rationale: "Cheap, but doesn't fix the actual generation-speed problem.",
          },
          {
            label: "Full custom drag-and-drop canvas",
            quadrant: "time-sink",
            rationale: "The trap. Impressive scope, but months of work before it would beat the simpler fix.",
          },
        ],
      },
      {
        heading: "Explaining the technical improvements simply",
        body: [
          "Generation speed. What went wrong: the prototype asked the AI to generate an entire HTML and CSS stylesheet line by line. That took minutes, frequently hit model token cutoffs, and left broken closing tags that rendered a blank preview.",
          "The fix: stop letting the model write raw code. Give it a strict JSON schema instead. It only fills in the blanks (business name, tagline, services, contact info) while our pre-built templates handle all the visual styling.",
          "Mobile page loading. The investigation: previews felt slow on mobile, and the engineers assumed complex layout animations were the cause. A Lighthouse audit on an actual Android device showed JavaScript execution was fine (0ms Total Blocking Time). The page was just waiting 2+ seconds to download external font files from Google's servers before showing any text.",
          "The fix: host clean, compressed font files directly alongside the site instead of pulling them from an external server on every load.",
        ],
      },
      {
        kind: "chart",
        heading: "The two fixes, before and after",
        intro: "Both measured on the actual staging build, not a local dev environment.",
        rows: [
          {
            metric: "AI page generation time",
            method: "Time from prompt submit to rendered preview.",
            baselineLabel: "6+ minutes",
            baselinePct: 12,
            targetLabel: "~41 seconds",
            targetPct: 100,
          },
          {
            metric: "Mobile Largest Contentful Paint",
            method: "Google Lighthouse audit, real Android device.",
            baselineLabel: "3.4 seconds",
            baselinePct: 40,
            targetLabel: "1.8 sec · 100 perf score",
            targetPct: 100,
          },
        ],
      },
      {
        heading: "Practical AI evaluation: how a student PM tests LLM output",
        body: [
          "Early-stage AI products don't need an enterprise eval platform. Two accessible tiers covered it:",
          "Tier 1, automated rule checks: does the output parse as valid JSON? Are mandatory fields (business name, services, email) present? Did generation finish inside the 45-second target?",
          "Tier 2, human-in-the-loop smoke testing: does the generated copy sound natural for the vertical? Did the model hallucinate services nobody typed? Are the contact forms actually linked and functional?",
          "The automated layer used schema validation as a safety net. An invalid layout or missing contact field triggered fallback logic before it ever reached the user as an error. The manual layer was a spreadsheet of 20 fixed prompt scenarios (\"mobile dog groomer,\" \"artisan sourdough bakery,\" \"independent wedding DJ\") re-run on every major prompt change, checked for tone, formatting, and factual accuracy.",
        ],
      },
      {
        kind: "table",
        heading: "Real-world trade-offs & decisions",
        columns: ["Decision encountered", "Proposed path", "What we chose", "Why it matters"],
        rows: [
          [
            "Branding vs. functionality",
            "Spend two weeks rebranding with custom logos and landing copy.",
            "Froze the brand as-is; focused only on testing the builder workflow.",
            "Prevented wasted engineering time. Brand polish can wait until the core generator is stable.",
          ],
          [
            "Third-party messaging",
            "Integrate Twilio for automated SMS notifications on form submissions.",
            "Deferred to Phase 2; leads stored in a simple database table instead.",
            "Avoided a recurring API subscription and integration complexity during early testing.",
          ],
          [
            "Media attachments",
            "Let users upload their own high-res photos and PDFs to the builder.",
            "Kept out of scope; used curated icon and image presets instead.",
            "Avoided building file storage, compression, and quota logic into a prototype.",
          ],
        ],
      },
      {
        kind: "table",
        heading: "Current milestone vs. next 30 days",
        columns: ["What works today (staging)", "What we're doing next"],
        rows: [
          [
            "Prompt-to-preview builder works in ~41 seconds on text links.",
            "Finish Cashfree payment gateway clearance to enable test checkouts.",
          ],
          [
            "Contact form routes cleanly to an internal test database.",
            "Run live usability sessions with 5 local service owners.",
          ],
          [
            "9 responsive base templates ready for initial testing.",
            "Monitor user drop-off points during initial site creation.",
          ],
        ],
      },
      {
        heading: "What I learned as an aspiring product manager",
        body: [
          "Founders don't need bureaucracy, they need focus. Working with engineering founders taught me a PM's job isn't writing long, complex documents. It's helping the team decide what not to build so the main feature can reach a stable state.",
          "\"It runs on my laptop\" isn't a valid test. A feature that works locally can still fail on a real device under worse network conditions. Testing staging links on an actual phone caught font-blocking and layout issues a local dev environment never would.",
          "Transparency builds credibility. An honest, in-progress staging build with real trade-offs and zero vanity metrics is more compelling to founders and hiring managers than pretending an early prototype is a mature product.",
        ],
      },
      {
        kind: "talktrack",
        heading: "2-minute interview walkthrough",
        items: [
          {
            label: "Interview walkthrough",
            text: "I worked as a student product manager on Pixn, collaborating with two engineering co-founders building an AI website builder for small service businesses. The project is currently in staging as we refine the core experience. When I joined, the team had strong engineering momentum but was spreading effort across too many platform features, describing the product as a complex 'business operating system.' Through informal conversations with local service owners, I realized users weren't confused by the builder, they were confused by that language; they just wanted a clean webpage where customer messages reliably reached their inbox. I helped bring structure to the build: introduced simple MoSCoW prioritization to keep our work focused on the core generator, organized the backlog so we tackled one task at a time, and managed testing across mobile devices. When mobile previews felt sluggish, I ran Lighthouse audits that pinpointed slow font downloads, helping the founders drop mobile LCP from 3.4s to 1.8s. This gave me a hands-on foundation in 0→1 product management: managing scope creep in a fast-paced technical team, evaluating AI output with structured rules and smoke tests, and why testing on live staging URLs matters more than theoretical documentation.",
          },
        ],
      },
    ],
    reflection:
      "The founders didn't need someone to write more documentation. They needed someone willing to say 'not yet' to good ideas so the one essential workflow could actually ship.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

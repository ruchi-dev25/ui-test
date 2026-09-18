import Doodle from "../components/Doodle";
import GinghamFrame from "../components/GinghamFrame";
import RibbonTag from "../components/RibbonTag";
import ToolIcon from "../components/ToolIcon";
import { letter, profile, skillGroups, skills } from "../data/profile";

function ToolRow({ tools }: { tools: { name: string; key: import("../components/ToolIcon").ToolKey }[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-3">
      {tools.map((tool, i) => (
        <div
          key={tool.name}
          style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 1.4}deg` }}
          className="flex flex-col items-center gap-1"
        >
          <div className="sketch-tile flex h-12 w-12 items-center justify-center shadow-[0_8px_14px_-9px_rgba(54,42,74,0.45)] transition-transform hover:-translate-y-1">
            <ToolIcon tool={tool.key} className="h-7 w-7" />
          </div>
          <span className="text-xs text-ink/70">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

const principles = [
  {
    title: "Go read the ticket first",
    body: "Dashboards tell you what happened. Support tickets tell you why it felt bad. I read both, in that order.",
  },
  {
    title: "Cut before you add",
    body: "Most onboarding, trust, and UX problems get worse with more elements, not fewer. My first instinct is subtraction.",
  },
  {
    title: "Instrument before you optimize",
    body: "If I can't measure a step, I don't trust my opinion about it — including my own.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-24 sm:pt-20">
      <p className="font-hand text-2xl text-sage">origin story & operational code</p>
      <h1 className="font-display mt-1 text-4xl leading-tight text-ink sm:text-5xl">
        My story…
      </h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">
        {/* Letter */}
        <div className="relative -rotate-1">
          <span className="wax-seal absolute -top-5 right-10 z-10 flex h-14 w-14 -rotate-6 items-center justify-center rounded-full">
            <span className="font-display text-xl text-white italic">R</span>
          </span>
          <span className="absolute top-4 left-5 z-10 flex h-12 w-10 -rotate-3 items-center justify-center border border-dashed border-deepink/30 bg-parchment/70">
            <Doodle variant="star" className="h-5 w-5 text-lavender" />
          </span>

          <GinghamFrame>
            <div className="aged-paper relative px-8 py-14">
              <p className="font-hand text-2xl text-deepink">{letter.salutation}</p>

              <blockquote className="font-display mt-6 border-l-2 border-lavender pl-5 text-lg leading-snug text-deepink italic">
                {letter.pullQuote}
              </blockquote>

              <div className="mt-6 space-y-4 text-ink/80">
                {letter.paragraphs.map((p) => (
                  <p key={p} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="widget-card widget-mint mt-6 rotate-1 p-4">
                <p className="font-hand text-xl text-sage">sticky note // operating principle</p>
                <p className="font-display mt-1 text-ink italic">{letter.stickyNote}</p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Doodle variant="heart" className="h-6 w-6 shrink-0 text-rose" />
                <div>
                  <p className="text-sm text-ink/60">{letter.signoff}</p>
                  <p className="font-display italic text-ink">{profile.name}</p>
                </div>
              </div>
            </div>
          </GinghamFrame>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="widget-card widget-cream p-6 text-sm">
            <p className="text-ink/50">Standing</p>
            <p className="font-display mt-1 text-ink">{profile.standing}</p>
            <p className="mt-4 text-ink/50">Available for</p>
            <p className="font-display mt-1 text-ink">{profile.availability}</p>
          </div>
        </div>
      </div>

      <hr className="stitch-divider my-16" />

      <section>
        <p className="font-hand text-2xl text-sage">the specifics</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
          Skills
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`widget-card widget-${group.tint} p-5`}
              style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 0.8}deg` }}
            >
              <RibbonTag color="var(--color-ink)" rotate={-2}>
                {group.category}
              </RibbonTag>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-snug text-ink/80">
                    <Doodle variant="star" className="mt-0.5 h-3 w-3 shrink-0 text-ink/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="stitch-divider my-16" />

      <div className="grid gap-14 lg:grid-cols-2">
        <section>
          <p className="font-hand text-2xl text-sage">what I'm good at</p>
          <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
            A few pages on how I think
          </h2>
          <div className="mt-10 space-y-10 border-l-2 border-dashed border-sage/40 pl-8">
            {skills.map((s) => (
              <div key={s.name} className="relative">
                <Doodle
                  variant="star"
                  className="absolute top-1 -left-[2.6rem] h-3.5 w-3.5 text-sage"
                />
                <h3 className="font-display text-xl text-ink">{s.name}</h3>
                <p className="mt-1 text-ink/70">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="font-hand text-2xl text-sage">what's on my desk</p>
          <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
            Toolkit
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <p className="font-hand text-lg text-ink/60">the usual suspects</p>
              <div className="mt-3">
                <ToolRow tools={profile.tools} />
              </div>
            </div>
            <div>
              <p className="font-hand text-lg text-ink/60">and the new co-pilots</p>
              <div className="mt-3">
                <ToolRow tools={profile.aiTools} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="stitch-divider my-16" />

      <section>
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          A few things I keep coming back to
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

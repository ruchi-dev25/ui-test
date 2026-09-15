import Doodle from "../components/Doodle";
import PipMascot from "../components/PipMascot";
import StatBar from "../components/StatBar";
import { companion, letter, profile } from "../data/profile";

const timeline = [
  {
    when: "2018 – 2020",
    what: "Started in support and ops",
    detail:
      "Answered tickets, then started asking why the same three complaints kept coming back. Ended up building the internal tools nobody had time to build.",
  },
  {
    when: "2020 – 2022",
    what: "Associate PM, first real ownership",
    detail:
      "Owned a feature area nobody wanted — the settings page. Learned that unglamorous surfaces are where trust is won or lost quietly.",
  },
  {
    when: "2022 – 2024",
    what: "PM, growth & activation",
    detail:
      "Moved into funnels and onboarding. Got comfortable killing my own ideas when the data disagreed with them.",
  },
  {
    when: "2024 – now",
    what: "Senior PM, product & trust",
    detail:
      "Working across checkout, activation, and trust — the parts of a product that don't get a launch party but decide whether people come back.",
  },
];

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
            <span className="font-display text-xl text-parchment/90 italic">R</span>
          </span>
          <span className="absolute top-4 left-5 z-10 flex h-12 w-10 -rotate-3 items-center justify-center border border-dashed border-deepink/30 bg-parchment/70">
            <Doodle variant="star" className="h-5 w-5 text-lavender" />
          </span>

          <div className="deckle-edge aged-paper relative px-8 py-14 shadow-[0_16px_40px_-20px_rgba(43,36,64,0.35)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-1/3 h-px rotate-[0.3deg] bg-deepink/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-2/3 h-px -rotate-[0.2deg] bg-deepink/10"
            />

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

            <div className="mt-6 rotate-1 rounded-sm border border-dashed border-sage/50 bg-parchment/80 p-4">
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
        </div>

        {/* Sidebar: companion attributes */}
        <div className="space-y-6">
          <div className="rounded-md border border-deepink/15 bg-parchment-dim p-6">
            <div className="flex items-center gap-2">
              <PipMascot className="h-9 w-9" interactive={false} />
              <p className="font-display text-sm text-ink">
                {companion.name}'s read on {profile.name.split(" ")[0]}
              </p>
            </div>
            <div className="mt-5 space-y-4">
              {companion.stats.map((s) => (
                <StatBar key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
          <div className="rounded-md border border-deepink/15 bg-parchment-dim p-6 text-sm">
            <p className="text-ink/50">Standing</p>
            <p className="font-display mt-1 text-ink">{profile.standing}</p>
            <p className="mt-4 text-ink/50">Available for</p>
            <p className="font-display mt-1 text-ink">{profile.availability}</p>
          </div>
        </div>
      </div>

      <hr className="stitch-divider my-16" />

      <section>
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          How I got here
        </h2>
        <div className="mt-10 space-y-10 border-l-2 border-dashed border-lavender/40 pl-8">
          {timeline.map((item) => (
            <div key={item.when} className="relative">
              <span className="absolute top-1.5 -left-[2.35rem] h-3 w-3 rounded-full bg-lavender" />
              <span className="font-hand text-xl text-sage">{item.when}</span>
              <h3 className="font-display mt-1 text-xl text-ink">
                {item.what}
              </h3>
              <p className="mt-1 max-w-xl text-ink/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

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

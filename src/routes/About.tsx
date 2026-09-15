import Doodle from "../components/Doodle";
import MarginNote from "../components/MarginNote";

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
      <div className="grid gap-12 sm:grid-cols-[1.3fr_0.7fr] sm:gap-16">
        <div>
          <p className="font-hand text-2xl text-sage">about this notebook</p>
          <h1 className="font-display mt-2 text-4xl leading-tight text-ink sm:text-5xl">
            I used to work in support. It shows.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-ink/75">
            Most of what I know about product came from reading complaints
            before I ever wrote a spec. I still start every project the same
            way — find the person who's annoyed, and ask them exactly what
            went wrong, in their words, not a survey's.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink/75">
            I care about the parts of a product that don't get a launch
            announcement: the empty state, the second time someone uses a
            feature, the moment a form resets itself for no visible reason.
            That's usually where the real work is.
          </p>
        </div>
        <div className="flex justify-center sm:justify-end">
          <div className="w-full max-w-[240px] rotate-2 rounded-sm border border-deepink/15 bg-parchment-dim p-6 shadow-[0_10px_28px_-10px_rgba(43,36,64,0.3)]">
            <Doodle variant="sage-elder" className="h-10 w-10 text-sage" />
            <MarginNote className="mt-4" tilt="left">
              "size matters not" — neither does the size of the roadmap slide
            </MarginNote>
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

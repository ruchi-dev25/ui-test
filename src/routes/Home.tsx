import { Link } from "react-router-dom";
import Doodle from "../components/Doodle";
import MarginNote from "../components/MarginNote";
import { projects } from "../data/projects";

const tools = [
  "Discovery interviews",
  "Funnel instrumentation",
  "Roadmap tradeoffs",
  "A/B experiment design",
  "Stakeholder narratives",
  "SQL, just enough",
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <Doodle
          variant="moon"
          className="absolute -top-2 right-2 h-10 w-10 text-lavender-soft sm:right-8"
        />
        <p className="font-hand text-2xl text-sage sm:text-3xl">
          Day 1 of this notebook —
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.1] font-medium text-ink sm:text-6xl">
          I write down why a product decision was made, not just what shipped.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          I'm Hritik, a product manager who reads support tickets before
          dashboards and treats a shipped feature as the start of the
          argument, not the end of it. This is a notebook of the products
          I've worked on — the reasoning included.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/work"
            className="font-display rounded-md bg-ink px-6 py-3 text-parchment transition-colors hover:bg-deepink"
          >
            Read the case studies
          </Link>
          <Link
            to="/about"
            className="font-display text-ink/70 underline decoration-lavender decoration-2 underline-offset-4 hover:text-ink"
          >
            How I got here
          </Link>
        </div>
      </section>

      <hr className="stitch-divider" />

      {/* Featured case studies */}
      <section className="py-16 sm:py-20">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          A few pages worth flipping to
        </h2>
        <div className="mt-10 space-y-14">
          {featured.map((p, i) => (
            <Link
              to={`/work/${p.slug}`}
              key={p.slug}
              className={`group block ${i % 2 === 1 ? "sm:pl-10" : "sm:pr-10"}`}
            >
              <div
                className={`flex flex-col gap-4 border-b border-deepink/10 pb-10 sm:flex-row sm:items-start sm:gap-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0 sm:w-40">
                  <span className="font-hand text-xl text-sage">
                    {p.timeframe}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink transition-colors group-hover:text-deepink sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-ink/70">{p.teaser}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-sage/40 px-3 py-1 text-xs text-sage"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="stitch-divider" />

      {/* Tools / how I work */}
      <section className="py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              What's in the toolbox
            </h2>
            <p className="mt-4 max-w-md text-ink/70">
              Less about frameworks, more about habits: talk to users before
              opening Figma, instrument before you optimize, and write the
              one-pager before the roadmap slide.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {tools.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-deepink/15 bg-parchment-dim px-3 py-1.5 text-sm text-ink/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-start justify-center pt-4 sm:justify-end">
            <div className="max-w-[220px] -rotate-2 rounded-sm border border-deepink/15 bg-parchment-dim p-5 shadow-[0_6px_20px_-6px_rgba(43,36,64,0.25)]">
              <Doodle variant="sage-elder" className="h-8 w-8 text-sage" />
              <MarginNote className="mt-3" tilt="right">
                "the notebook remembers what the roadmap forgets"
              </MarginNote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

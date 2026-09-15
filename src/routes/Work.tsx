import { Link } from "react-router-dom";
import TopicArt from "../components/TopicArt";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-24 sm:pt-20">
      <p className="font-hand text-2xl text-sage">table of contents</p>
      <h1 className="font-display mt-2 max-w-2xl text-4xl leading-tight text-ink sm:text-5xl">
        Case studies, kept in order
      </h1>
      <p className="mt-5 max-w-xl text-ink/70">
        Each entry is written the way I'd actually explain the project to a
        teammate: the problem as it first looked, why the obvious fix
        wasn't the right one, and what the numbers said afterward.
      </p>

      <div className="mt-16 divide-y divide-deepink/10">
        {projects.map((p, i) => (
          <Link
            to={`/work/${p.slug}`}
            key={p.slug}
            className="group grid grid-cols-[64px_1fr] gap-5 py-10 transition-transform hover:-translate-y-0.5 sm:grid-cols-[72px_120px_1fr] sm:items-start sm:gap-8"
          >
            <TopicArt topic={p.topic} className="h-14 w-14 transition-transform group-hover:scale-105 sm:h-16 sm:w-16" />
            <span className="hidden font-hand text-xl text-sage sm:block">
              {p.timeframe}
            </span>
            <div>
              <span className="inline-block w-fit rounded-full border border-lavender/40 px-2.5 py-1 text-xs text-lavender">
                Quest {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display mt-2 text-2xl text-ink transition-colors group-hover:text-deepink">
                {p.title}
              </h2>
              <p className="mt-2 max-w-xl text-ink/70">{p.subtitle}</p>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

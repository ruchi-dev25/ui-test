import { Link } from "react-router-dom";
import TopicArt from "../components/TopicArt";
import { teardowns, verdictLabel, type Verdict } from "../data/teardowns";

const verdictColor: Record<Verdict, string> = {
  love: "border-sage/50 text-sage",
  mixed: "border-amber/60 text-amber",
  pass: "border-rose/60 text-rose",
};

export default function Teardowns() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-24 sm:pt-20">
      <p className="font-hand text-2xl text-sage">margin notes on other people's products</p>
      <h1 className="font-display mt-2 max-w-2xl text-4xl leading-tight text-ink sm:text-5xl">
        Product teardowns
      </h1>
      <p className="mt-5 max-w-xl text-ink/70">
        Short, opinionated reads on features I didn't build — what the team
        got right, what I'd push back on, and the one idea worth stealing.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {teardowns.map((t) => (
          <Link
            to={`/teardowns/${t.slug}`}
            key={t.slug}
            className="group flex gap-5 rounded-md border border-deepink/12 bg-parchment-dim p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_-18px_rgba(43,36,64,0.35)]"
          >
            <TopicArt topic={t.topic} className="h-16 w-16 shrink-0" />
            <div>
              <span
                className={`inline-block rounded-full border px-2.5 py-0.5 text-[0.7rem] ${verdictColor[t.verdict]}`}
              >
                {verdictLabel[t.verdict]}
              </span>
              <h2 className="font-display mt-2 text-lg text-ink transition-colors group-hover:text-deepink">
                {t.product}
              </h2>
              <p className="mt-1 text-xs text-ink/50">{t.category}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {t.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

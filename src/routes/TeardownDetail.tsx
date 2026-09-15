import { Link, Navigate, useParams } from "react-router-dom";
import TopicArt from "../components/TopicArt";
import { getTeardown, teardowns, verdictLabel, type Verdict } from "../data/teardowns";

const verdictStyle: Record<Verdict, { bg: string; text: string }> = {
  love: { bg: "var(--color-punch-green)", text: "white" },
  mixed: { bg: "var(--color-punch-gold)", text: "var(--color-night-deep)" },
  pass: { bg: "var(--color-punch-pink)", text: "white" },
};

export default function TeardownDetail() {
  const { slug } = useParams();
  const teardown = getTeardown(slug ?? "");

  if (!teardown) return <Navigate to="/teardowns" replace />;

  const index = teardowns.findIndex((t) => t.slug === teardown.slug);
  const next = teardowns[(index + 1) % teardowns.length];

  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-24 sm:pt-20">
      <Link to="/teardowns" className="font-hand text-xl text-sage hover:text-ink">
        ← back to teardowns
      </Link>

      <div className="mt-8 flex items-start gap-6">
        <TopicArt topic={teardown.topic} className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
        <div>
          <span
            className="inline-block rounded-full px-3 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: verdictStyle[teardown.verdict].bg,
              color: verdictStyle[teardown.verdict].text,
            }}
          >
            {verdictLabel[teardown.verdict]}
          </span>
          <h1 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">
            {teardown.product}
          </h1>
          <p className="mt-1 text-sm text-ink/50">{teardown.category}</p>
        </div>
      </div>

      <p className="font-display mt-8 max-w-xl border-l-2 border-lavender pl-5 text-xl leading-snug text-deepink italic">
        {teardown.tagline}
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg text-sage">What works</h2>
          <ul className="mt-3 space-y-3">
            {teardown.whatWorks.map((point) => (
              <li key={point} className="border-l-2 border-sage/40 pl-4 text-ink/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg text-rose">What I'd push back on</h2>
          <ul className="mt-3 space-y-3">
            {teardown.whatMisses.map((point) => (
              <li key={point} className="border-l-2 border-rose/40 pl-4 text-ink/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="washi-tape mt-14 rounded-sm border border-deepink/15 bg-parchment-dim p-8">
        <p className="font-hand text-2xl text-sage">the takeaway —</p>
        <p className="font-display mt-3 text-xl leading-relaxed text-ink">
          {teardown.takeaway}
        </p>
      </div>

      <div className="mt-16 flex items-center justify-end border-t border-deepink/10 pt-8">
        <Link to={`/teardowns/${next.slug}`} className="font-display text-right text-ink/70 hover:text-ink">
          Next teardown
          <span className="mt-0.5 block text-sm text-sage">{next.product}</span>
        </Link>
      </div>
    </div>
  );
}

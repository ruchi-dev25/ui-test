import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import RibbonTag from "../components/RibbonTag";
import { teardowns, verdictLabel, type Verdict } from "../data/teardowns";

const verdictColor: Record<Verdict, string> = {
  love: "var(--color-sage)",
  mixed: "var(--color-amber)",
  pass: "var(--color-rose)",
};

const verdictWidget: Record<Verdict, "mint" | "amber" | "rose"> = {
  love: "mint",
  mixed: "amber",
  pass: "rose",
};

export default function Teardowns() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-24 sm:pt-20">
      <p className="font-hand text-2xl text-sage">margin notes on other people's products</p>
      <h1 className="font-display mt-2 max-w-2xl text-[1.85rem] leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
        Product teardowns
      </h1>
      <p className="mt-5 max-w-xl text-ink/70">
        Short, opinionated reads on features I didn't build: what the team
        got right, what I'd push back on, and the one idea worth stealing.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {teardowns.map((t, i) => (
          <Link
            to={`/teardowns/${t.slug}`}
            key={t.slug}
            className="group block"
          >
            <div
              className={`widget-card widget-${verdictWidget[t.verdict]} flex gap-5 p-6 transition-all group-hover:-translate-y-1`}
              style={{ rotate: `${i % 2 === 0 ? -0.6 : 0.6}deg` }}
            >
              <BrandLogo brand={t.brand} className="h-16 w-16 shrink-0" />
              <div>
                <RibbonTag color={verdictColor[t.verdict]} rotate={-2}>
                  {verdictLabel[t.verdict]}
                </RibbonTag>
                <h2 className="font-display mt-2 text-lg text-ink transition-colors group-hover:text-deepink">
                  {t.product}
                </h2>
                <p className="mt-1 text-xs text-ink/50">{t.category}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t.tagline}
                </p>
                <p className="font-hand mt-2 flex items-center gap-1.5 text-sage transition-transform group-hover:translate-x-1">
                  Read the teardown
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

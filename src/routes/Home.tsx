import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import CompanionCard from "../components/CompanionCard";
import CountUp from "../components/CountUp";
import StickyNote from "../components/StickyNote";
import TopicArt from "../components/TopicArt";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { teardowns } from "../data/teardowns";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { to: 3, suffix: "", label: "quests logged", color: "var(--color-punch-green)", rotate: -4 },
  { to: 3, suffix: "", label: "teardowns written", color: "var(--color-punch-violet)", rotate: 3 },
  { to: 41, suffix: "%", label: "best funnel lift shipped", color: "var(--color-punch-pink)", rotate: -2 },
  { to: 1, suffix: "", label: "companion, always awake", color: "var(--color-punch-gold)", rotate: 4 },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const featured = projects.slice(0, 3);
  const featuredTeardowns = teardowns.slice(0, 2);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="hero-wash relative pt-16 pb-20 sm:pt-20 sm:pb-28">
        <span className="font-hand absolute top-2 left-0 text-lg text-punch-violet/70" aria-hidden="true">
          ✦ ✧
        </span>

        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          transition={{ staggerChildren: 0.09 }}
          className="grid gap-14 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"
        >
          <div>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap items-center gap-3">
              <span className="mono-label flex items-center gap-1.5 rounded-md border border-ink/15 bg-white px-2.5 py-1 text-[0.68rem] text-ink/70">
                <span className="h-1.5 w-1.5 rounded-full bg-punch-violet" />
                Player specification // {profile.standing.split("·")[1]?.trim() ?? "APM candidate"}
              </span>
              <span className="font-hand text-xl text-ink/60">hello, I am —</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display mt-4 text-4xl leading-[1.05] font-semibold text-ink sm:text-5xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mono-label mt-2 text-xs text-ink/50"
            >
              {profile.title}
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="relative mt-7 max-w-xl">
              <span className="font-hand absolute -top-5 right-0 text-lg text-ink/45">
                ~ my operating compass
              </span>
              <blockquote className="quest-card rounded-md px-5 py-4">
                <p className="font-display text-xl leading-snug text-ink italic">
                  {profile.compass}
                </p>
              </blockquote>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-6 max-w-xl space-y-3">
              {profile.bio.map((line) => (
                <p key={line} className="leading-relaxed text-ink/75">
                  {line}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/work"
                className="mono-label rounded-md bg-ink px-5 py-2.5 text-xs text-parchment transition-all hover:-translate-y-0.5 hover:bg-deepink"
              >
                Explore quest log ↓
              </Link>
              <a
                href="/resume.pdf"
                className="mono-label quest-card rounded-md px-5 py-2.5 text-xs text-ink/80 transition-all hover:-translate-y-0.5"
              >
                Inspect dossier ↗
              </a>
              <Link
                to="/about"
                className="mono-label rounded-md border border-mint-ink/40 bg-mint-bg px-5 py-2.5 text-xs text-mint-ink transition-all hover:-translate-y-0.5"
              >
                Wise sage +
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="mono-label text-xs text-ink/50">Key tooling & stack</p>
                <span className="font-hand text-lg text-ink/45">data-informed product craft</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.tools.map((tool) => (
                  <span
                    key={tool}
                    className="quest-card mono-label inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs text-ink/80 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-punch-green" />
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
            <CompanionCard />
          </motion.div>
        </motion.div>
      </section>

      <hr className="stitch-divider" />

      {/* Featured case studies */}
      <section className="py-16 sm:py-20">
        <p className="mono-label text-xs text-ink/50">flagship quest log ✦ 0-to-1 build & experiments</p>
        <h2 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
          Product Case Studies
        </h2>
        <div className="mt-8 space-y-4">
          {featured.map((p, i) => (
            <Link to={`/work/${p.slug}`} key={p.slug} className="quest-card group flex items-center gap-5 rounded-md p-5 transition-transform hover:-translate-y-0.5">
              <TopicArt topic={p.topic} className="h-12 w-12 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="mono-label rounded-md bg-ink px-2 py-0.5 text-[0.65rem] text-parchment">
                    Quest {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-hand text-lg text-mint-ink">✓ deployed & shipping</span>
                </div>
                <h3 className="font-display mt-2 text-lg text-ink transition-colors group-hover:text-deepink sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-ink/65">{p.teaser}</p>
              </div>
              <span className="font-mono hidden shrink-0 text-xs text-ink/40 sm:block">{p.timeframe}</span>
            </Link>
          ))}
        </div>
      </section>

      <hr className="stitch-divider" />

      {/* Teardowns teaser */}
      <section className="py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono-label text-xs text-ink/50">side quests</p>
            <h2 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
              I also tear down other people's products
            </h2>
          </div>
          <Link to="/teardowns" className="mono-label text-xs text-ink/60 underline decoration-2 underline-offset-4 hover:text-ink">
            Read the teardowns ↗
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {featuredTeardowns.map((t) => (
            <Link
              to={`/teardowns/${t.slug}`}
              key={t.slug}
              className="quest-card group flex gap-4 rounded-md p-5 transition-all hover:-translate-y-1"
            >
              <TopicArt topic={t.topic} className="h-12 w-12 shrink-0" />
              <div>
                <h3 className="font-display text-base text-ink transition-colors group-hover:text-deepink">
                  {t.product}
                </h3>
                <p className="mt-1 text-sm text-ink/65">{t.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="stitch-divider" />

      {/* Notebook stats, pinned like a corkboard */}
      <section className="py-16 sm:py-24">
        <p className="mono-label text-xs text-ink/50">pinned to the corkboard</p>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-x-6 gap-y-10 sm:gap-x-10">
          {stats.map((s) => (
            <StickyNote
              key={s.label}
              color={`color-mix(in srgb, ${s.color} 62%, white)`}
              rotate={s.rotate}
              className="w-36 text-center"
            >
              <div className="font-display text-3xl text-ink">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-sm text-ink/70">{s.label}</p>
            </StickyNote>
          ))}
          <StickyNote
            color="color-mix(in srgb, var(--color-periwinkle) 55%, white)"
            rotate={-3}
            className="w-56"
          >
            <p className="font-hand text-2xl leading-snug text-ink/85">
              "the notebook remembers what the roadmap forgets"
            </p>
          </StickyNote>
        </div>
      </section>
    </div>
  );
}

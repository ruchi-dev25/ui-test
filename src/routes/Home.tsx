import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Doodle from "../components/Doodle";
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
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-24 -z-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-lavender-soft) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 -left-20 -z-10 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-sage-soft) 0%, transparent 70%)",
          }}
        />
        <Doodle
          variant="moon"
          className="absolute -top-2 right-2 h-10 w-10 text-lavender-soft sm:right-8"
        />
        <span className="twinkle absolute top-16 right-24 hidden h-1.5 w-1.5 bg-rose sm:block" style={{ animationDelay: "0.4s" }} />
        <span className="twinkle absolute top-32 right-40 hidden h-1 w-1 bg-amber sm:block" style={{ animationDelay: "1.3s" }} />
        <span className="twinkle absolute top-6 right-52 hidden h-1 w-1 bg-sage sm:block" style={{ animationDelay: "2s" }} />

        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          transition={{ staggerChildren: 0.09 }}
          className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-hand text-2xl text-sage sm:text-3xl"
            >
              hello, I am —
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display mt-2 text-4xl leading-[1.08] font-medium text-ink sm:text-5xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-1 text-lg text-ink/60"
            >
              {profile.title} · {profile.standing}
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display mt-7 max-w-xl border-l-2 border-lavender pl-5 text-xl leading-snug text-deepink italic"
            >
              {profile.compass}
            </motion.blockquote>

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
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/work"
                className="font-display rounded-md bg-ink px-6 py-3 text-parchment transition-all hover:-translate-y-0.5 hover:bg-deepink"
              >
                See the case studies
              </Link>
              <a
                href="/resume.pdf"
                className="font-display text-ink/70 underline decoration-lavender decoration-2 underline-offset-4 hover:text-ink"
              >
                Read my dossier
              </a>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-10">
              <p className="text-sm text-ink/50">tools in the kit</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.tools.map((tool, i) => (
                  <span
                    key={tool}
                    style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 1.5}deg` }}
                    className="inline-block rounded-md border border-deepink/15 bg-parchment-dim px-3 py-1.5 text-sm text-ink/80 transition-transform hover:-translate-y-0.5 hover:border-sage/50 hover:text-ink"
                  >
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
        <p className="font-hand text-xl text-sage">flagship quest log</p>
        <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
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
                className={`flex flex-col gap-4 border-b border-deepink/10 pb-10 transition-transform group-hover:-translate-y-0.5 sm:flex-row sm:items-start sm:gap-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="flex shrink-0 items-center gap-4 sm:w-40 sm:flex-col sm:items-start">
                  <TopicArt topic={p.topic} className="h-14 w-14" />
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

      {/* Teardowns teaser */}
      <section className="py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-hand text-xl text-sage">side quests</p>
            <h2 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
              I also tear down other people's products
            </h2>
          </div>
          <Link
            to="/teardowns"
            className="font-display text-sm text-ink/70 underline decoration-lavender decoration-2 underline-offset-4 hover:text-ink"
          >
            Read the teardowns
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {featuredTeardowns.map((t) => (
            <Link
              to={`/teardowns/${t.slug}`}
              key={t.slug}
              className="group flex gap-4 rounded-md border border-deepink/12 bg-parchment-dim p-5 transition-all hover:-translate-y-1 hover:shadow-[0_14px_28px_-16px_rgba(43,36,64,0.3)]"
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
        <p className="font-hand text-xl text-sage">pinned to the corkboard</p>
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

import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Doodle from "../components/Doodle";
import MarginNote from "../components/MarginNote";
import CompanionCard from "../components/CompanionCard";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const featured = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <Doodle
          variant="moon"
          className="absolute -top-2 right-2 h-10 w-10 text-lavender-soft sm:right-8"
        />

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
              <p className="text-xs text-ink/50">tools in the kit</p>
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

      {/* Personal aside */}
      <section className="py-16 sm:py-20">
        <div className="flex justify-center">
          <div className="max-w-[260px] -rotate-2 rounded-sm border border-deepink/15 bg-parchment-dim p-6 shadow-[0_6px_20px_-6px_rgba(43,36,64,0.25)]">
            <Doodle variant="star" className="h-6 w-6 text-rose" />
            <MarginNote className="mt-3" tilt="right">
              "the notebook remembers what the roadmap forgets"
            </MarginNote>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link, Navigate, useParams } from "react-router-dom";
import Doodle from "../components/Doodle";
import MarginNote from "../components/MarginNote";
import Stamp from "../components/Stamp";
import TopicArt from "../components/TopicArt";
import WidgetCard from "../components/WidgetCard";
import RibbonTag from "../components/RibbonTag";
import { getProject, projects } from "../data/projects";

const chapterTint = ["mint", "periwinkle", "amber", "rose"] as const;

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug ?? "");

  if (!project) return <Navigate to="/work" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-24 sm:pt-20">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-hand text-xl text-sage">
        <Link to="/" className="flex items-center gap-1.5 hover:text-ink">
          <span aria-hidden="true">←</span> home
        </Link>
        <span className="text-ink/30">/</span>
        <Link to="/work" className="hover:text-ink">
          back to the table of contents
        </Link>
      </div>

      <div className="mt-8 flex items-start gap-6">
        <TopicArt topic={project.topic} className="hidden h-24 w-24 shrink-0 sm:block" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Stamp label={project.timeframe} />
            <span className="text-sm text-ink/60">{project.role}</span>
          </div>

          <h1 className="font-display mt-4 text-4xl leading-[1.1] text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            {project.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
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

      {/* Metrics */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {project.metrics.map((m, i) => (
          <WidgetCard
            key={m.label}
            tint={chapterTint[i % chapterTint.length]}
            rotate={i % 2 === 0 ? -1 : 1}
            className="px-5 py-6 text-center"
          >
            <div className="font-display text-2xl text-ink sm:text-3xl">
              {m.value}
            </div>
            <div className="mt-1 text-xs text-ink/70">{m.label}</div>
          </WidgetCard>
        ))}
      </div>

      {/* Story, told chapter by chapter */}
      <div className="mt-16 space-y-16">
        {project.sections.map((section, i) => (
          <section key={section.heading} className="relative">
            <div className="flex items-center gap-3">
              <RibbonTag color={`var(--color-${["sage", "periwinkle", "amber", "rose"][i % 4]})`} rotate={-2}>
                Chapter {String(i + 1).padStart(2, "0")}
              </RibbonTag>
            </div>
            <h2 className="font-display mt-3 text-2xl text-ink">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.body.map((para, j) => (
                <p key={j} className="leading-relaxed text-ink/80">
                  {para}
                </p>
              ))}
            </div>
            {section.pullQuote && (
              <div className="widget-card widget-periwinkle mt-6 max-w-xl px-6 py-5">
                <p className="font-display text-xl leading-snug text-ink italic">
                  {section.pullQuote}
                </p>
              </div>
            )}
            {section.marginNote && (
              <MarginNote
                tilt={i % 2 === 0 ? "left" : "right"}
                className="mt-6"
              >
                {section.marginNote}
              </MarginNote>
            )}
          </section>
        ))}
      </div>

      <div className="widget-card widget-cream mt-20 px-8 py-10">
        <p className="font-hand text-2xl text-sage">looking back —</p>
        <p className="font-display mt-3 text-xl leading-relaxed text-ink">
          {project.reflection}
        </p>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-deepink/10 pt-8">
        <Doodle variant="cane" className="h-6 w-6 text-sage/60" />
        <Link
          to={`/work/${next.slug}`}
          className="font-display text-right text-ink/70 hover:text-ink"
        >
          Next entry
          <span className="mt-0.5 block text-sm text-sage">{next.title}</span>
        </Link>
      </div>
    </div>
  );
}

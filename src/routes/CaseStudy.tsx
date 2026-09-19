import { Link, Navigate, useParams } from "react-router-dom";
import Doodle from "../components/Doodle";
import MarginNote from "../components/MarginNote";
import Stamp from "../components/Stamp";
import TopicArt from "../components/TopicArt";
import WidgetCard from "../components/WidgetCard";
import RibbonTag from "../components/RibbonTag";
import DataTable from "../components/DataTable";
import AccessFlowDiagram from "../components/AccessFlowDiagram";
import CodeBlock from "../components/CodeBlock";
import PriorityMatrixBlock from "../components/PriorityMatrixBlock";
import MoscowPyramid from "../components/MoscowPyramid";
import ValueEffortGraph from "../components/ValueEffortGraph";
import MetricsChart from "../components/MetricsChart";
import TalkTrack from "../components/TalkTrack";
import ChapterNav from "../components/ChapterNav";
import DemoVideo from "../components/DemoVideo";
import { getProject, projects } from "../data/projects";

const chapterTint = ["mint", "periwinkle", "amber", "rose"] as const;

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug ?? "");

  if (!project) return <Navigate to="/work" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const chapterItems = project.sections.map((s, i) => ({
    id: `chapter-${i + 1}`,
    label: s.heading,
  }));

  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-24 sm:pt-20">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-hand text-xl text-sage">
        <Link to="/" className="flex items-center gap-1.5 hover:text-ink">
          <span aria-hidden="true">←</span> home
        </Link>
        <span className="text-ink/30">/</span>
        <Link to="/work" className="hover:text-ink">
          back to the table of contents
        </Link>
      </div>

      <div className="mt-8 flex max-w-3xl items-start gap-6">
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

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-sage/40 px-3 py-1 text-xs text-sage"
              >
                {t}
              </span>
            ))}
            {project.status && (
              <span className="flex items-center gap-1.5 rounded-full bg-sage/15 px-3 py-1 text-xs text-sage">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
                </span>
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
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

      {project.videoUrl && (
        <div className="mt-10 max-w-3xl">
          <DemoVideo url={project.videoUrl} />
        </div>
      )}

      {/* Story, told chapter by chapter */}
      <div className="mt-16 lg:grid lg:grid-cols-[180px_1fr] lg:gap-14">
        <ChapterNav items={chapterItems} className="sticky top-24 hidden self-start lg:block" />

        <div className="space-y-16">
          {project.sections.map((section, i) => {
            const tint = ["mint", "periwinkle", "amber", "rose"][i % 4] as
              | "mint"
              | "periwinkle"
              | "amber"
              | "rose";

            return (
              <section id={`chapter-${i + 1}`} key={section.heading} className="relative max-w-3xl scroll-mt-24">
                <RibbonTag color={`var(--color-${tint === "mint" ? "sage" : tint})`} rotate={-2}>
                  Chapter {String(i + 1).padStart(2, "0")}
                </RibbonTag>
                <h2 className="font-display mt-3 text-2xl text-ink">{section.heading}</h2>
                {"intro" in section && section.intro && (
                  <p className="mt-4 leading-relaxed text-ink/80">{section.intro}</p>
                )}

                {(section.kind === undefined || section.kind === "text") && (
                  <>
                    <div className="mt-4 space-y-3">
                      {section.body.map((para, j) => (
                        <p key={j} className="leading-relaxed text-ink/80">
                          {para}
                        </p>
                      ))}
                    </div>
                    {section.pullQuote && (
                      <div className="widget-card widget-periwinkle mt-6 px-6 py-5">
                        <p className="font-display text-xl leading-snug text-ink italic">
                          {section.pullQuote}
                        </p>
                      </div>
                    )}
                    {section.marginNote && (
                      <MarginNote tilt={i % 2 === 0 ? "left" : "right"} className="mt-6">
                        {section.marginNote}
                      </MarginNote>
                    )}
                  </>
                )}

                {section.kind === "table" && (
                  <div className="mt-6">
                    <DataTable columns={section.columns} rows={section.rows} />
                  </div>
                )}

                {section.kind === "diagram" && (
                  <div className="mt-6">
                    <AccessFlowDiagram />
                  </div>
                )}

                {section.kind === "code" && (
                  <div className="mt-6 space-y-4">
                    <CodeBlock label={section.label} code={section.code} />
                    {section.note && (
                      <p className="font-hand text-lg text-sage">{section.note}</p>
                    )}
                  </div>
                )}

                {section.kind === "matrix" && (
                  <div className="mt-6">
                    <PriorityMatrixBlock quadrants={section.quadrants} />
                  </div>
                )}

                {section.kind === "moscow" && (
                  <div className="mt-6">
                    <MoscowPyramid tiers={section.tiers} />
                  </div>
                )}

                {section.kind === "value-effort" && (
                  <div className="mt-6">
                    <ValueEffortGraph points={section.points} valueLabel={section.valueLabel} />
                  </div>
                )}

                {section.kind === "chart" && (
                  <div className="mt-6">
                    <MetricsChart rows={section.rows} />
                  </div>
                )}

                {section.kind === "talktrack" && (
                  <div className="mt-6">
                    <TalkTrack items={section.items} />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>

      <div className="widget-card widget-cream mt-20 max-w-3xl px-8 py-10">
        <p className="font-hand text-2xl text-sage">looking back</p>
        <p className="font-display mt-3 text-xl leading-relaxed text-ink">
          {project.reflection}
        </p>
      </div>

      <div className="mt-16 flex max-w-3xl items-center justify-between border-t border-deepink/10 pt-8">
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

import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, Mail, MapPin } from "lucide-react";
import Doodle from "../components/Doodle";
import { profile, resumeExperiences, skillGroups } from "../data/profile";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:pt-16">
      {/* Top Controls (Hidden during print) */}
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-deepink/10 pb-6">
        <Link
          to="/"
          className="font-hand inline-flex items-center gap-1.5 text-xl text-sage transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Notebook
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="font-display inline-flex items-center gap-2 rounded-md border border-deepink/25 bg-white/80 px-4 py-2 text-sm font-medium text-ink shadow-sm transition hover:bg-white hover:text-deepink"
          >
            Print Resume
          </button>
          <a
            href="/resume.pdf"
            download="Ruchi_Madankar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-parchment shadow-sm transition hover:-translate-y-0.5 hover:bg-deepink"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>
      </div>

      {/* Resume Container / Document */}
      <div className="resume-sheet aged-paper relative rounded-xl border border-deepink/20 p-8 shadow-md sm:p-12 print:border-0 print:p-0 print:shadow-none">
        {/* Header */}
        <header className="border-b border-deepink/15 pb-6 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {profile.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-ink/75 sm:text-sm">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-sage" /> {profile.location}
            </span>
            <span className="text-ink/30">•</span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1 underline decoration-lavender underline-offset-2 hover:text-deepink"
            >
              <Mail className="h-3.5 w-3.5 text-sage" /> {profile.email}
            </a>
            <span className="text-ink/30">•</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-lavender underline-offset-2 hover:text-deepink"
            >
              linkedin.com/in/ruchi-madankar-42aabb28a
            </a>
            <span className="text-ink/30">•</span>
            <a
              href={profile.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-lavender underline-offset-2 hover:text-deepink"
            >
              ruchi-portfolio.nekostack.com
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6 border-b border-deepink/10 pb-6">
          <h2 className="font-display text-xs font-bold tracking-widest text-sage uppercase">
            Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/85 sm:text-[15px]">
            {profile.summary}
          </p>
        </section>

        {/* Education */}
        <section className="mt-6 border-b border-deepink/10 pb-6">
          <h2 className="font-display text-xs font-bold tracking-widest text-sage uppercase">
            Education
          </h2>
          <div className="mt-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <div>
              <h3 className="font-display text-base font-bold text-ink">
                {profile.education.degree}
              </h3>
              <p className="text-sm text-ink/70">{profile.education.institution}</p>
              <p className="text-xs font-medium text-sage">{profile.education.minor}</p>
            </div>
            <div className="text-left text-xs text-ink/65 sm:text-right sm:text-sm">
              <p>{profile.education.graduation}</p>
              <p className="font-semibold text-ink">CGPA: {profile.education.cgpa}</p>
            </div>
          </div>
        </section>

        {/* Product & Real-World Technical Projects */}
        <section className="mt-6 border-b border-deepink/10 pb-6">
          <h2 className="font-display text-xs font-bold tracking-widest text-sage uppercase">
            Product &amp; Real-World Technical Projects
          </h2>

          <div className="mt-5 space-y-6">
            {resumeExperiences.map((exp) => (
              <article key={exp.title} className="relative">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-sage">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink/60 sm:text-right">
                    <span>{exp.date}</span>
                    {exp.link && (
                      <Link
                        to={exp.link}
                        className="no-print inline-flex items-center gap-0.5 rounded bg-sage/15 px-1.5 py-0.5 text-[11px] font-semibold text-sage hover:bg-sage/25"
                      >
                        Deep dive <ExternalLink className="h-2.5 w-2.5" />
                      </Link>
                    )}
                  </div>
                </div>

                <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-ink/80 sm:text-sm">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-sage select-none">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6 border-b border-deepink/10 pb-6">
          <h2 className="font-display text-xs font-bold tracking-widest text-sage uppercase">
            Skills
          </h2>
          <div className="mt-3 space-y-2.5 text-xs text-ink/80 sm:text-sm">
            {skillGroups.map((group) => (
              <p key={group.category} className="leading-relaxed">
                <strong className="font-semibold text-ink">{group.category}:</strong>{" "}
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-6">
          <h2 className="font-display text-xs font-bold tracking-widest text-sage uppercase">
            Certifications
          </h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink/85 sm:text-sm">
            {profile.certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 rounded-md border border-deepink/15 bg-white/60 px-2.5 py-1 text-xs"
              >
                <Doodle variant="star" className="h-3 w-3 text-sage" />
                {cert}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

import Doodle from "../components/Doodle";
import { profile } from "../data/profile";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ruchimadankar",
    href: profile.linkedin,
  },
  {
    label: "Resume",
    value: "download as PDF",
    href: "/resume.pdf",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-24 sm:pt-20">
      <Doodle variant="heart" className="h-8 w-8 text-rose" />
      <p className="font-hand mt-4 text-2xl text-sage">last page —</p>
      <h1 className="font-display mt-2 text-4xl leading-tight text-ink sm:text-5xl">
        Say hello, or just ask a question about one of the case studies
      </h1>
      <p className="mt-6 max-w-lg leading-relaxed text-ink/75">
        No forms to fill out here — just write to me directly. I read
        everything that comes in and reply from the same inbox.
      </p>

      <div className="mt-14 space-y-6 border-t border-deepink/10 pt-10">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="group flex items-baseline gap-4 border-b border-dashed border-deepink/15 pb-4 transition-transform hover:translate-x-1"
          >
            <span className="font-hand w-28 shrink-0 text-xl text-sage">
              {l.label}
            </span>
            <span className="font-display text-lg text-ink/80 transition-colors group-hover:text-ink">
              {l.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

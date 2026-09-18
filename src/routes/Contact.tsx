import { useState } from "react";
import Doodle from "../components/Doodle";
import GinghamFrame from "../components/GinghamFrame";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Hello from ${name || "your notebook"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-24 sm:pt-20">
      <Doodle variant="heart" className="h-8 w-8 text-rose" />
      <p className="font-hand mt-4 text-2xl text-sage">last page —</p>
      <h1 className="font-display mt-2 text-4xl leading-tight text-ink sm:text-5xl">
        Say hello, or just ask a question about one of the case studies
      </h1>
      <p className="mt-6 max-w-lg leading-relaxed text-ink/75">
        Leave a note below, or reach me directly through the links underneath.
        I read everything that comes in and reply from the same inbox.
      </p>

      <GinghamFrame className="mt-12" rotate={-0.6}>
        <form onSubmit={handleSubmit} className="aged-paper space-y-5 px-7 py-9 sm:px-9">
          <div>
            <label htmlFor="name" className="font-hand text-lg text-sage">
              your name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Whoever's reading this,"
              required
              className="font-display mt-1 w-full border-0 border-b border-dashed border-deepink/30 bg-transparent py-1.5 text-ink placeholder:text-ink/35 focus:border-sage focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-hand text-lg text-sage">
              your email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="so I can write back"
              required
              className="font-display mt-1 w-full border-0 border-b border-dashed border-deepink/30 bg-transparent py-1.5 text-ink placeholder:text-ink/35 focus:border-sage focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-hand text-lg text-sage">
              your note
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write whatever's on your mind…"
              required
              rows={5}
              className="font-display mt-1 w-full resize-none border-0 border-b border-dashed border-deepink/30 bg-transparent py-1.5 leading-relaxed text-ink placeholder:text-ink/35 focus:border-sage focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="font-display rounded-md bg-ink px-6 py-3 text-parchment transition-all hover:-translate-y-0.5 hover:bg-deepink"
          >
            Send the note
          </button>
          <p className="text-xs text-ink/45">
            Opens your email app with this note ready to send — nothing leaves your device until you hit send there.
          </p>
        </form>
      </GinghamFrame>

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

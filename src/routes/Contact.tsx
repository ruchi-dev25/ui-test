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
    value: "linkedin.com/in/ruchi-madankar-42aabb28a",
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          message,
          _subject: `New Note from Portfolio: ${name || "Visitor"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.message || "Failed to deliver the note.");
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMsg(
        err?.message || "Something went wrong sending the note. You can also send directly via email below."
      );
    }
  };

  const handleMailtoFallback = () => {
    const subject = `Hello from ${name || "your notebook"}`;
    const body = `${message}\n\nFrom, ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-24 sm:pt-20">
      <Doodle variant="heart" className="h-8 w-8 text-rose" />
      <p className="font-hand mt-4 text-2xl text-sage">last page</p>
      <h1 className="font-display mt-2 text-[1.85rem] leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
        Say hello, or just ask a question about one of the case studies
      </h1>
      <p className="mt-6 max-w-lg leading-relaxed text-ink/75">
        Leave a note below, or reach me directly through the links underneath.
        I read everything that comes in and reply from the same inbox.
      </p>

      <GinghamFrame className="mt-12" rotate={-0.6}>
        <div className="aged-paper px-7 py-9 sm:px-9">
          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage/20 text-2xl">
                💌
              </div>
              <p className="font-hand text-3xl text-sage">note delivered!</p>
              <p className="font-display mt-2 text-lg text-ink">
                Thank you for writing. Your message went straight to my inbox ({profile.email}).
              </p>
              <p className="mt-2 text-sm text-ink/70">
                I'll read it and get back to you as soon as I can.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="font-display mt-6 rounded-md bg-ink px-5 py-2.5 text-sm text-parchment transition-all hover:-translate-y-0.5 hover:bg-deepink"
              >
                Write another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  disabled={status === "sending"}
                  className="font-display mt-1 w-full border-0 border-b border-dashed border-deepink/30 bg-transparent py-1.5 text-ink placeholder:text-ink/35 focus:border-sage focus:outline-none disabled:opacity-60"
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
                  disabled={status === "sending"}
                  className="font-display mt-1 w-full border-0 border-b border-dashed border-deepink/30 bg-transparent py-1.5 text-ink placeholder:text-ink/35 focus:border-sage focus:outline-none disabled:opacity-60"
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
                  disabled={status === "sending"}
                  className="font-display mt-1 w-full resize-none border-0 border-b border-dashed border-deepink/30 bg-transparent py-1.5 leading-relaxed text-ink placeholder:text-ink/35 focus:border-sage focus:outline-none disabled:opacity-60"
                />
              </div>

              {status === "error" && (
                <div className="rounded-md border border-rose/40 bg-rose/10 p-3 text-sm text-ink/90">
                  <p>{errorMsg}</p>
                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="mt-2 text-xs font-semibold text-deepink underline hover:text-ink"
                  >
                    Click here to send via your email client instead →
                  </button>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-display flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-parchment transition-all hover:-translate-y-0.5 hover:bg-deepink disabled:pointer-events-none disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-parchment border-t-transparent" />
                      Sealing and sending note…
                    </>
                  ) : (
                    "Send the note"
                  )}
                </button>
              </div>

              <p className="text-xs text-ink/50">
                Delivers directly to {profile.email}. I reply to every thoughtful note.
              </p>
            </form>
          )}
        </div>
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

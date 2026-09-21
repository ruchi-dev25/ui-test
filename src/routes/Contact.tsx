import { useState } from "react";
import Doodle from "../components/Doodle";
import GinghamFrame from "../components/GinghamFrame";
import { profile } from "../data/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedNote, setCopiedNote] = useState(false);

  const getSubject = () => `Note from ${name || "Notebook Visitor"}`;
  const getBody = () => `${message}\n\nFrom,\n${name || "Visitor"}${email ? ` (${email})` : ""}`;

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
        const msg = data.message || "Unable to send note directly.";
        throw new Error(msg);
      }
    } catch (err: any) {
      console.error("Form submission notice:", err);
      setStatus("error");
      setErrorMsg(
        err?.message?.includes("Activation")
          ? "Form is awaiting one-time email activation from the owner. You can send your note directly using Gmail or your email app below:"
          : (err?.message || "Something went wrong sending the note.")
      );
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleCopyNote = async () => {
    try {
      await navigator.clipboard.writeText(getBody());
      setCopiedNote(true);
      setTimeout(() => setCopiedNote(false), 2500);
    } catch {
      // fallback
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent(getSubject())}&body=${encodeURIComponent(getBody())}`;

  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}`;

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    getSubject()
  )}&body=${encodeURIComponent(getBody())}`;

  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-24 sm:pt-20">
      <Doodle variant="heart" className="h-8 w-8 text-rose" />
      <p className="font-hand mt-4 text-2xl text-sage">last page</p>
      <h1 className="font-display mt-2 text-[1.85rem] leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
        Say hello, or just ask a question about one of the case studies
      </h1>
      <p className="mt-6 max-w-lg leading-relaxed text-ink/75">
        Leave a note below, or reach me directly through email or LinkedIn.
        I read everything that comes in and reply promptly.
      </p>

      <GinghamFrame className="mt-12" rotate={-0.6}>
        <div className="aged-paper px-7 py-9 sm:px-9">
          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage/20 text-3xl">
                💌
              </div>
              <p className="font-hand text-3xl text-sage">note delivered!</p>
              <p className="font-display mt-2 text-lg text-ink">
                Thank you for writing. Your message has been dispatched to my inbox ({profile.email}).
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
                <div className="rounded-xl border border-rose/50 bg-rose/15 p-4 text-sm text-ink/90">
                  <p className="font-semibold text-deepink">{errorMsg}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display inline-flex items-center gap-1.5 rounded-md bg-ink px-3 py-1.5 text-xs text-parchment hover:bg-deepink"
                    >
                      <span>✉️</span> Open in Gmail (pre-filled)
                    </a>
                    <a
                      href={mailtoUrl}
                      className="font-display inline-flex items-center gap-1.5 rounded-md border border-deepink/30 bg-white/60 px-3 py-1.5 text-xs text-ink hover:bg-white"
                    >
                      <span>📬</span> Mail App
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyNote}
                      className="font-display inline-flex items-center gap-1.5 rounded-md border border-deepink/30 bg-white/60 px-3 py-1.5 text-xs text-ink hover:bg-white"
                    >
                      <span>{copiedNote ? "✅ Copied!" : "📋 Copy note text"}</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
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
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display inline-flex items-center gap-1.5 rounded-md border border-deepink/20 px-4 py-3 text-sm text-ink/80 transition-all hover:bg-white/50 hover:text-ink"
                >
                  <span>✉️</span> Or send via Gmail
                </a>
              </div>

              <p className="text-xs text-ink/50">
                Delivers directly to {profile.email}. I reply to every note that lands in my inbox.
              </p>
            </form>
          )}
        </div>
      </GinghamFrame>

      {/* Direct Contact Links */}
      <div className="mt-14 space-y-6 border-t border-deepink/10 pt-10">
        {/* Email Row */}
        <div className="flex flex-col gap-2 border-b border-dashed border-deepink/15 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-hand w-28 shrink-0 text-xl text-sage">Email</span>
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-lg text-ink/90 underline decoration-lavender decoration-2 underline-offset-4 hover:text-deepink"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-2 pl-32 sm:pl-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="rounded border border-deepink/20 bg-white/70 px-2.5 py-1 text-xs text-ink/80 transition hover:bg-white hover:text-ink"
            >
              {copiedEmail ? "Copied! ✨" : "Copy email"}
            </button>
            <a
              href={directGmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-deepink/20 bg-white/70 px-2.5 py-1 text-xs text-ink/80 transition hover:bg-white hover:text-ink"
            >
              Open Gmail ↗
            </a>
          </div>
        </div>

        {/* LinkedIn Row */}
        <div className="flex items-baseline gap-4 border-b border-dashed border-deepink/15 pb-4">
          <span className="font-hand w-28 shrink-0 text-xl text-sage">LinkedIn</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg text-ink/80 underline decoration-lavender decoration-2 underline-offset-4 transition-colors hover:text-deepink"
          >
            linkedin.com/in/ruchi-madankar-42aabb28a ↗
          </a>
        </div>

        {/* Resume Row */}
        <div className="flex items-baseline gap-4 border-b border-dashed border-deepink/15 pb-4">
          <span className="font-hand w-28 shrink-0 text-xl text-sage">Resume</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg text-ink/80 underline decoration-lavender decoration-2 underline-offset-4 transition-colors hover:text-deepink"
          >
            download as PDF ↗
          </a>
        </div>
      </div>
    </div>
  );
}

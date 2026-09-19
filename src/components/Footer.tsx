import Doodle from "./Doodle";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-deepink/15">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-hand text-2xl text-sage">
              end of this page, more in the notebook
            </p>
            <p className="mt-1 text-sm text-ink/60">
              © {new Date().getFullYear()} {profile.name}. Built page by page.
            </p>
          </div>
          <div className="flex items-center gap-5 font-display text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-ink/70 underline decoration-lavender decoration-2 underline-offset-4 hover:text-ink"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              className="text-ink/70 underline decoration-lavender decoration-2 underline-offset-4 hover:text-ink"
            >
              LinkedIn
            </a>
            <Doodle
              variant="sage-elder"
              className="h-6 w-6 text-sage/70 transition-transform hover:rotate-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

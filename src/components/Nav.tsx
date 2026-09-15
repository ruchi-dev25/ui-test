import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Quests" },
  { to: "/work", label: "Work" },
  { to: "/teardowns", label: "Teardowns" },
  { to: "/about", label: "Mindset" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <NavLink to="/" className="flex shrink-0 items-center gap-2 whitespace-nowrap">
          <span className="h-2 w-2 bg-ink" aria-hidden="true" />
          <span className="font-mono text-xs tracking-wide text-ink">
            {profile.name.split(" ")[0].toUpperCase()} / PRODUCT QUEST
          </span>
          <span className="mono-label hidden rounded-md border border-ink/15 px-2 py-0.5 text-[0.65rem] text-ink/60 sm:inline-block">
            {profile.standing.split("·")[0].trim()}
          </span>
        </NavLink>

        <ul className="flex shrink-0 flex-wrap items-center gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `mono-label rounded-md px-2.5 py-2 text-xs transition-colors ${
                    isActive ? "text-ink underline decoration-2 underline-offset-4" : "text-ink/50 hover:text-ink/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <span className="mono-label hidden shrink-0 items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-[0.65rem] whitespace-nowrap text-mint-ink sm:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-ink opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-ink" />
          </span>
          {profile.availability}
        </span>
      </nav>
    </header>
  );
}

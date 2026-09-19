import { useState } from "react";
import { NavLink } from "react-router-dom";
import Doodle from "./Doodle";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/teardowns", label: "Teardowns" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavLinkItem({ to, label, onNavigate }: { to: string; label: string; onNavigate?: () => void }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onNavigate}
      className={({ isActive }) =>
        `relative rounded-md px-2 py-2 font-display text-[0.9rem] transition-colors sm:px-2.5 ${
          isActive ? "text-ink" : "text-ink/55 hover:text-ink/80"
        }`
      }
    >
      {({ isActive }: { isActive: boolean }) => (
        <span className="relative">
          {label}
          {isActive && (
            <svg
              viewBox="0 0 40 6"
              className="absolute -bottom-1 left-0 h-1.5 w-full text-sage"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M1 4 C 8 1, 14 5, 20 3 S 32 1, 39 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      )}
    </NavLink>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-deepink/15 bg-parchment/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="font-display flex shrink-0 items-center gap-2 text-base font-medium whitespace-nowrap text-ink sm:text-lg"
        >
          <Doodle variant="star" className="h-4 w-4 text-rose" />
          {profile.name}
        </NavLink>

        <ul className="hidden shrink-0 items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLinkItem to={link.to} label={link.label} />
            </li>
          ))}
        </ul>

        <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-sage/40 px-3 py-1 text-xs whitespace-nowrap text-sage xl:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
          </span>
          {profile.availability}
        </span>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md sm:hidden"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-5 rounded-full bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-deepink/15 bg-parchment px-6 py-4 sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLinkItem to={link.to} label={link.label} onNavigate={() => setOpen(false)} />
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export default function ChapterNav({
  items,
  className = "",
}: {
  items: Item[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={className}>
      <p className="font-hand text-lg text-sage">table of contents</p>
      <ul className="mt-3 space-y-2 border-l-2 border-dashed border-ink/15 pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm leading-snug transition-colors ${
                activeId === item.id ? "font-display text-ink" : "text-ink/45 hover:text-ink/70"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

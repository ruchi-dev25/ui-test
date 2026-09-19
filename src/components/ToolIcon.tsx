export type ToolKey =
  | "python"
  | "sql"
  | "notion"
  | "tableau"
  | "excel"
  | "mixpanel"
  | "jira"
  | "postman"
  | "figma"
  | "chatgpt"
  | "claude"
  | "perplexity"
  | "cursor"
  | "midjourney"
  | "antigravity"
  | "stitch"
  | "lovable";

function Mark({ tool }: { tool: ToolKey }) {
  switch (tool) {
    case "python":
      return (
        <g>
          <path
            d="M12 3c-4.4 0-4.2 1.9-4.2 1.9v2h4.3v.6H5.9S3 7.1 3 11.6s2.5 4.3 2.5 4.3H7v-2.3S6.9 11 9.3 11h4.2s2.3 0 2.3-2.2V5.2S16.1 3 12 3z"
            fill="#3B82F6"
          />
          <path
            d="M12 21c4.4 0 4.2-1.9 4.2-1.9v-2h-4.3v-.6h6.2S21 12.9 21 8.4s-2.5-4.3-2.5-4.3H17v2.3s.1 2.6-2.3 2.6h-4.2S8.2 9 8.2 11.2v3.6S7.9 17 12 21z"
            fill="#F2C94C"
          />
          <circle cx="9.6" cy="5.4" r="0.8" fill="white" />
          <circle cx="14.4" cy="18.6" r="0.8" fill="white" />
        </g>
      );
    case "sql":
      return (
        <g fill="none" stroke="#3E7CB1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="7" ry="2.6" />
          <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
          <path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" />
        </g>
      );
    case "notion":
      return (
        <g>
          <rect x="4" y="4" width="16" height="16" rx="3" fill="white" stroke="#1F1F1F" strokeWidth="1.4" />
          <path
            d="M8 8.4h1.7l4.6 6.3V8.4H16v7.2h-1.7l-4.6-6.3v6.3H8z"
            fill="#1F1F1F"
          />
        </g>
      );
    case "tableau":
      return (
        <g fill="#0176D3">
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="11.15"
              y="2.6"
              width="1.7"
              height="4.6"
              rx="0.7"
              transform={`rotate(${i * 45} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="1.5" fill="#0176D3" />
        </g>
      );
    case "excel":
      return (
        <g>
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#1E7145" />
          <path
            d="M9 8.5l2.3 3.5-2.4 3.5h1.9l1.5-2.4 1.5 2.4H15l-2.4-3.6 2.3-3.4h-1.9l-1.4 2.3-1.4-2.3z"
            fill="white"
          />
        </g>
      );
    case "mixpanel":
      return (
        <g>
          <rect x="4" y="4" width="16" height="16" rx="8" fill="#7856FF" />
          <path
            d="M8 15V9l4 3.4L16 9v6"
            fill="none"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "jira":
      return (
        <g>
          <path d="M12 4l7 7-3.5 3.5L12 11z" fill="#2684FF" />
          <path d="M12 11l3.5 3.5L12 18l-3.5-3.5z" fill="#2684FF" opacity="0.75" />
          <path d="M8.5 7.5L12 11l-3.5 3.5L5 11z" fill="#2684FF" opacity="0.55" />
        </g>
      );
    case "postman":
      return (
        <g>
          <circle cx="12" cy="12" r="8" fill="#FF6C37" />
          <path
            d="M15.5 8.5a4.2 4.2 0 0 0-6 0l-.7.7a1 1 0 0 0 1.4 1.4l.7-.7a2.2 2.2 0 0 1 3.2 0 2.2 2.2 0 0 1 0 3.2l-3 3a1 1 0 0 0 1.4 1.4l3-3a4.2 4.2 0 0 0 0-6z"
            fill="white"
          />
          <circle cx="9.3" cy="14.7" r="1" fill="white" />
        </g>
      );
    case "chatgpt":
      return (
        <g fill="#10A37F">
          {Array.from({ length: 6 }).map((_, i) => (
            <rect
              key={i}
              x="10.9"
              y="3.2"
              width="2.2"
              height="6.6"
              rx="1.1"
              transform={`rotate(${i * 60} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="2.2" fill="white" />
        </g>
      );
    case "claude":
      return (
        <g fill="#DA7756">
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="11.35"
              y={i % 2 === 0 ? "2.6" : "4"}
              width="1.3"
              height={i % 2 === 0 ? "6.4" : "5"}
              rx="0.65"
              transform={`rotate(${i * 45} 12 12)`}
            />
          ))}
        </g>
      );
    case "perplexity":
      return (
        <g fill="none" stroke="#20808D" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M12 4l6.5 4v8L12 20l-6.5-4V8z" />
          <path d="M12 4v16M5.5 8l13 8M18.5 8l-13 8" strokeWidth="1.1" opacity="0.7" />
        </g>
      );
    case "cursor":
      return (
        <g>
          <path
            d="M6 4l12 6.4-5 1.4-1.4 5z"
            fill="var(--color-ink)"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>
      );
    case "midjourney":
      return (
        <g fill="none" stroke="#1C1C1C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 15.5c2-5.5 5-8.5 8.5-8.5s6.5 3 8.5 8.5" />
          <path d="M6.5 15.5c1.4-3.4 3.2-5 5.5-5s4.1 1.6 5.5 5" />
        </g>
      );
    case "antigravity":
      return (
        <g fill="none" stroke="#3C4043" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7.2" />
          <path d="M12 15V9M12 9l-2.6 2.6M12 9l2.6 2.6" />
        </g>
      );
    case "stitch":
      return (
        <g fill="none" stroke="#4285F4" strokeWidth="1.6" strokeLinecap="round">
          <path d="M4 12h3M9 12h3M15 12h3M20 12h1" strokeDasharray="2.2 2.2" />
          <circle cx="4" cy="12" r="1.3" fill="#4285F4" stroke="none" />
          <circle cx="20" cy="12" r="1.3" fill="#4285F4" stroke="none" />
        </g>
      );
    case "lovable":
      return (
        <path
          d="M12 19.5s-7-4.2-9.2-8.6C1.4 8 3 4.8 6 4.8c2 0 3.4 1.2 4.4 2.7C11.4 6 12.8 4.8 14.8 4.8c3 0 4.6 3.2 3.2 6.1-2.2 4.4-9.2 8.6-9.2 8.6z"
          fill="#FF6B6B"
        />
      );
    case "figma":
    default:
      return (
        <g>
          <path d="M9 4h3v4H9a2 2 0 1 1 0-4z" fill="#F24E1E" />
          <path d="M12 4h3a2 2 0 1 1 0 4h-3z" fill="#FF7262" />
          <path d="M12 8h3a2 2 0 1 1 0 4h-3z" fill="#A259FF" />
          <path d="M9 8h3v4H9a2 2 0 1 1 0-4z" fill="#1ABCFE" />
          <path d="M9 12h3v4a2 2 0 1 1-4 0v-2a2 2 0 0 1 1-1.7z" fill="#0ACF83" />
        </g>
      );
  }
}

export default function ToolIcon({
  tool,
  className = "",
}: {
  tool: ToolKey;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <Mark tool={tool} />
    </svg>
  );
}

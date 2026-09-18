export type Brand = "duolingo" | "notion" | "linkedin";

const brandBg: Record<Brand, string> = {
  duolingo: "#58CC02",
  notion: "#FFFFFF",
  linkedin: "#0A66C2",
};

function Mark({ brand }: { brand: Brand }) {
  switch (brand) {
    case "duolingo":
      return (
        <g>
          <circle cx="17" cy="16" r="4.2" fill="#58CC02" stroke="white" strokeWidth="1.6" />
          <circle cx="31" cy="16" r="4.2" fill="#58CC02" stroke="white" strokeWidth="1.6" />
          <ellipse cx="24" cy="26" rx="15" ry="14" fill="white" />
          <circle cx="18.5" cy="24" r="3.4" fill="#3C3C3C" />
          <circle cx="29.5" cy="24" r="3.4" fill="#3C3C3C" />
          <circle cx="17.3" cy="22.8" r="1.1" fill="white" />
          <circle cx="28.3" cy="22.8" r="1.1" fill="white" />
          <path d="M21 31l3 2.4 3-2.4" fill="none" stroke="#FF9600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "notion":
      return (
        <g>
          <rect x="9" y="9" width="30" height="30" rx="4" fill="white" stroke="#1F1F1F" strokeWidth="1.8" />
          <path d="M15 15h3.2l8.6 11.8V15H30v18h-3.2l-8.6-11.8V33H15z" fill="#1F1F1F" />
        </g>
      );
    case "linkedin":
    default:
      return (
        <g>
          <rect x="14" y="19" width="4.4" height="14" fill="white" />
          <circle cx="16.2" cy="14" r="2.6" fill="white" />
          <path
            d="M22 19h4.2v2c1-1.6 2.7-2.5 4.9-2.5 4 0 6.1 2.6 6.1 7.3V33h-4.4v-6.4c0-2.5-.9-4-3-4-2 0-3.2 1.4-3.2 4V33H22z"
            fill="white"
          />
        </g>
      );
  }
}

export default function BrandLogo({
  brand,
  className = "",
}: {
  brand: Brand;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl shadow-[0_10px_22px_-12px_rgba(54,42,74,0.4)] ${className}`}
      style={{ background: brandBg[brand] }}
    >
      <svg viewBox="0 0 48 48" className="h-[68%] w-[68%]" aria-hidden="true">
        <Mark brand={brand} />
      </svg>
    </div>
  );
}

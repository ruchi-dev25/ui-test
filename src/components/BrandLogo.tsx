export type Brand = "duolingo" | "notion" | "linkedin" | "stripe";

const brandBg: Record<Brand, string> = {
  duolingo: "#58CC02",
  notion: "#FFFFFF",
  linkedin: "#0A66C2",
  stripe: "#635BFF",
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
    case "stripe":
      return (
        <g>
          <path
            d="M21.5 20.8c0-1.8 1.5-2.6 3.9-2.6 3.5 0 7.2 1.2 9.8 2.8l1.8-6.1c-2.8-1.5-6.9-2.5-11.6-2.5-9.3 0-15.5 4.9-15.5 13.1 0 12.8 17.6 10.7 17.6 16.3 0 2.1-1.9 2.9-4.5 2.9-4.1 0-8.7-1.7-11.9-3.7l-1.9 6.2c3.4 1.9 8.3 3.1 13.8 3.1 9.8 0 16.2-4.8 16.2-13.4C40.7 23.3 21.5 25.8 21.5 20.8z"
            fill="white"
          />
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

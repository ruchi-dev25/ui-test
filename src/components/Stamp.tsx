export default function Stamp({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border-2 border-dashed border-lavender px-4 py-2 -rotate-3 ${className}`}
    >
      <span className="font-display text-sm tracking-wide text-lavender">
        {label}
      </span>
    </div>
  );
}

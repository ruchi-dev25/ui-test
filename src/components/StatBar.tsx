import { motion, useReducedMotion } from "framer-motion";

export default function StatBar({
  label,
  value,
  max = 10,
}: {
  label: string;
  value: number;
  max?: number;
}) {
  const reduceMotion = useReducedMotion();
  const pct = Math.round((value / max) * 100);

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-ink/70">{label}</span>
        <span className="font-hand text-lg text-sage">
          {value}/{max}
        </span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-deepink/10">
        <motion.div
          className="h-full rounded-full bg-sage"
          initial={{ width: reduceMotion ? `${pct}%` : 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

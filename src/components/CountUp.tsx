import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function CountUp({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

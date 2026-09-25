"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1.6,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const isNumeric = /^([^\d]*)(\d+)([^\d]*)$/.test(value);
  const [displayValue, setDisplayValue] = useState<string>(() => (isNumeric ? "0" : value));

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
    if (!match) return;

    const prefix = match[1] || "";
    const targetNumber = parseInt(match[2], 10);
    const suffix = match[3] || "";

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetNumber);

      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, isNumeric, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

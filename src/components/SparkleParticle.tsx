"use client";

import { motion } from "motion/react";

interface SparkleParticleProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "emerald" | "teal" | "purple" | "amber" | "white";
  variant?: "four-point" | "four-point-soft" | "diamond";
  delay?: number;
  duration?: number;
}

const sizeMap = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const colorMap = {
  emerald: "text-emerald-500 fill-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]",
  teal: "text-teal-400 fill-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]",
  purple: "text-purple-400 fill-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]",
  amber: "text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",
  white: "text-white fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]",
};

export default function SparkleParticle({
  className = "",
  size = "md",
  color = "emerald",
  variant = "four-point",
  delay = 0,
  duration = 3.5,
}: SparkleParticleProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0.3, scale: 0.8, rotate: 0 }}
      animate={{
        opacity: [0.25, 0.95, 0.25],
        scale: [0.85, 1.15, 0.85],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className={`${sizeMap[size]} ${colorMap[color]}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === "diamond" ? (
          <polygon points="12,2 22,12 12,22 2,12" />
        ) : variant === "four-point-soft" ? (
          <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
        ) : (
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        )}
      </svg>
    </motion.div>
  );
}

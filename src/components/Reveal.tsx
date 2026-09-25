"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  amount?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directions[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: offset.y,
        x: offset.x,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger child
export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const offset = directions[direction];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: offset.y,
          x: offset.x,
          filter: "blur(4px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const trailRef = useRef<HTMLDivElement>(null);

  // Spring-smoothed values for the trailing ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window || (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)) {
      const timer = setTimeout(() => setIsHidden(true), 0);
      return () => clearTimeout(timer);
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='pointer']"
      );
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (isHidden) return null;

  return (
    <>
      {/* Inner dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isClicking ? 6 : isHovering ? 0 : 8,
            height: isClicking ? 6 : isHovering ? 0 : 8,
            x: isClicking ? -3 : isHovering ? 0 : -4,
            y: isClicking ? -3 : isHovering ? 0 : -4,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Outer ring — follows with spring lag */}
      <motion.div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
        }}
      >
        <motion.div
          className="rounded-full border-[1.5px] border-white"
          animate={{
            width: isClicking ? 28 : isHovering ? 48 : 36,
            height: isClicking ? 28 : isHovering ? 48 : 36,
            x: isClicking ? -14 : isHovering ? -24 : -18,
            y: isClicking ? -14 : isHovering ? -24 : -18,
            opacity: isHovering ? 0.6 : 0.35,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}

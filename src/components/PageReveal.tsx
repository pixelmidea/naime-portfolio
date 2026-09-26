"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function PageReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Small delay to let the paint settle, then reveal
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isRevealed && (
        <>
          {/* Top curtain */}
          <motion.div
            key="curtain-top"
            className="fixed inset-x-0 top-0 h-1/2 bg-slate-950 z-[9990] origin-top"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1] as const,
              delay: 0.3,
            }}
          >
            {/* Center logo mark during reveal */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-2xl shadow-emerald-500/40 border-2 border-emerald-400">
                <Image
                  src="/images/naime-portrait.png"
                  alt="Naime"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 15%" }}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom curtain */}
          <motion.div
            key="curtain-bottom"
            className="fixed inset-x-0 bottom-0 h-1/2 bg-slate-950 z-[9990] origin-bottom"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1] as const,
              delay: 0.3,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

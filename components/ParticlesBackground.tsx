"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
}

export default function ParticlesBackground() {
  const sparkles = useMemo<Sparkle[]>(() => {
    return Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_2px_rgba(240,114,155,0.5)]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

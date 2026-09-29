"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.4 };
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 120 });
  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest("a, button, [data-cursor], input, textarea")
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* soft ambient glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          width: isPointer ? 220 : 140,
          height: isPointer ? 220 : 140,
          background:
            "radial-gradient(circle, rgba(240,114,155,0.25) 0%, rgba(201,182,255,0.12) 45%, transparent 70%)",
          opacity: visible ? 1 : 0,
          transition: "width 0.35s ease, height 0.35s ease, opacity 0.3s ease",
        }}
      />
      {/* precise dot */}
      <motion.div
        className="absolute rounded-full border border-rose-500/70"
        style={{
          left: dotX,
          top: dotY,
          x: "-50%",
          y: "-50%",
          width: isPointer ? 44 : 16,
          height: isPointer ? 44 : 16,
          backgroundColor: isPointer
            ? "rgba(240,114,155,0.15)"
            : "rgba(240,114,155,0.9)",
          opacity: visible ? 1 : 0,
          transition: "width 0.25s ease, height 0.25s ease, background-color 0.25s ease",
        }}
      />
    </div>
  );
}

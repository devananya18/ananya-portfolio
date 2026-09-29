"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  variant = "primary",
  href,
  onClick,
  type = "button",
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * strength, y: y * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-rose-500 text-white shadow-glow hover:bg-rose-600"
      : "glass-strong text-plum-900 hover:bg-white/90";

  const Tag = href ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
      data-cursor
    >
      <Tag
        href={href}
        type={!href ? type : undefined}
        onClick={onClick}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

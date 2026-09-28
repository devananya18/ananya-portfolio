"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    setPreviewPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      data-cursor
      className="group relative"
    >
      {/* ambient glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.55 : 0 }}
        transition={{ duration: 0.4 }}
        className={`pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br ${project.gradient} blur-2xl`}
      />

      <motion.div
        whileHover={{ scale: 1.045, y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative glass-strong overflow-hidden rounded-[1.75rem] shadow-soft"
      >
        {/* image / gradient header */}
        <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <motion.span
            animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 6 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl drop-shadow-lg"
          >
            {project.emoji}
          </motion.span>
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-plum-800/70">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-blush-100 px-3 py-1 text-[11px] font-medium text-plum-800/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={project.demoUrl}
              className="inline-flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Live Demo <FiExternalLink size={12} />
            </a>
            <a
              href={project.detailsUrl}
              className="inline-flex items-center gap-1 text-xs font-semibold text-plum-800/80 link-underline"
            >
              Details <FiArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* cursor-following preview pop-up */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              left: previewPos.x,
              top: previewPos.y,
            }}
            className="pointer-events-none absolute z-30 hidden w-56 -translate-x-1/2 -translate-y-[125%] rounded-2xl glass-strong p-4 shadow-soft lg:block"
          >
            <p className="text-xs font-semibold text-rose-500">Quick preview</p>
            <p className="mt-1 text-sm font-medium">{project.title}</p>
            <p className="mt-1 text-[11px] leading-snug text-plum-800/60 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-plum-800/70">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

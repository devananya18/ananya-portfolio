"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { HiOutlineCodeBracket, HiOutlineAcademicCap } from "react-icons/hi2";
import MagneticButton from "./MagneticButton";
import { socials } from "@/lib/data";

export default function Hero() {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 18,
  });
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 120,
    damping: 20,
  });
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-14, 14]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = imgWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 font-display italic text-lg text-rose-600">Hi, I&apos;m</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance">
            Ananya Gupta
          </h1>
          <p className="mt-5 text-base sm:text-lg text-plum-800/80 max-w-md">
            MCA Student · Full Stack Developer · Problem Solver
          </p>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-plum-800/70">
            I build modern, scalable web applications with clean code and
            thoughtful interfaces — turning real operational problems into
            software people actually enjoy using.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects" variant="primary">
              View My Projects <FiArrowRight />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
          </div>

          <div className="mt-10 flex items-center gap-4 text-plum-800/70">
            {[
              { icon: FiGithub, href: socials.github },
              { icon: FiLinkedin, href: socials.linkedin },
              { icon: FiMail, href: `mailto:${socials.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                data-cursor
                whileHover={{ y: -4, scale: 1.1, color: "#E14E82" }}
                className="flex h-11 w-11 items-center justify-center rounded-full glass"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: floating image with parallax tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex justify-center"
        >
          <div
            ref={imgWrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{ perspective: 900 }}
            className="relative h-[340px] w-[300px] sm:h-[420px] sm:w-[380px]"
          >
            {/* glowing blob */}
            <motion.div
              animate={{ borderRadius: ["60% 40% 55% 45%/55% 45% 60% 40%", "45% 55% 40% 60%/50% 55% 45% 50%", "60% 40% 55% 45%/55% 45% 60% 40%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-rose-300 via-peach-300 to-lavender-300 blur-[2px] opacity-80"
            />
            <motion.div
              className="absolute -inset-6 rounded-full bg-rose-400/30 blur-3xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              style={{ rotateX, rotateY, x: translateX, y: translateY }}
              className="group absolute inset-4 overflow-hidden rounded-[45%_55%_60%_40%/50%_45%_55%_50%] border-4 border-white/70 shadow-soft"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full"
              >
                <img
                  src="/photo/photo.jpeg"
                  alt="Ananya Gupta"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            </motion.div>

            {/* floating badge: Full Stack Developer */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="glass-strong absolute -right-6 top-8 max-w-[190px] rounded-2xl p-4 shadow-soft sm:-right-10"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-plum-900 text-white">
                <HiOutlineCodeBracket size={16} />
              </div>
              <p className="text-sm font-semibold">Full Stack Developer</p>
              <p className="text-xs text-plum-800/60">Laravel · React · Next.js</p>
            </motion.div>

            {/* floating badge: Currently Pursuing MCA */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glass-strong absolute -left-6 bottom-6 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-soft sm:-left-12"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white">
                <HiOutlineAcademicCap size={16} />
              </div>
              <div>
                <p className="text-xs text-plum-800/60">Currently Pursuing</p>
                <p className="text-sm font-semibold">MCA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

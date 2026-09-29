"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { navLinks } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`w-full max-w-6xl flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#home" data-cursor className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white text-sm">
            AG
          </span>
          <span className="hidden sm:inline">Ananya Gupta</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-plum-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} data-cursor className="link-underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton href="/resume.pdf" variant="secondary" className="!py-2.5 !px-5 text-xs">
            <FiDownload /> Download CV
          </MagneticButton>
        </div>

        <button
          data-cursor
          aria-label="Toggle menu"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full glass"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-plum-900 transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-plum-900 transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 w-[92%] glass-strong rounded-3xl p-6 md:hidden shadow-soft"
        >
          <ul className="flex flex-col gap-4 text-center text-plum-800 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

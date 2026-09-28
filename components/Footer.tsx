"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/50 px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-plum-800/50 sm:flex-row">
        <p>© 2025 Ananya Gupta. All rights reserved.</p>
        <p>Made with ♡ and lots of coffee</p>
      </div>

      <motion.a
        href="#home"
        data-cursor
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-white shadow-glow"
        aria-label="Back to top"
      >
        <FiArrowUp size={16} />
      </motion.a>
    </footer>
  );
}

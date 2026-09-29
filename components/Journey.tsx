"use client";

import { motion } from "framer-motion";
import { HiOutlineComputerDesktop, HiOutlineSquares2X2, HiOutlineSparkles } from "react-icons/hi2";
import { journey } from "@/lib/data";

const whatIDo = [
  {
    icon: HiOutlineComputerDesktop,
    title: "Web Development",
    subtitle: "Full stack — backend & frontend",
  },
  {
    icon: HiOutlineSquares2X2,
    title: "Build Responsive UI",
    subtitle: "Modern frameworks, every screen size",
  },
  {
    icon: HiOutlineSparkles,
    title: "Solve Real Problems",
    subtitle: "Clean, scalable code",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500"
        >
          Education &amp; Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl font-semibold"
        >
          My <span className="italic text-rose-500">Journey</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* timeline */}
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-rose-400 via-rose-200 to-transparent" />
            <div className="space-y-12">
              {journey.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 15, delay: i * 0.15 + 0.1 }}
                    className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 shadow-glow ring-4 ring-blush-100"
                  />
                  <p className="font-display text-2xl font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-rose-500">
                    {item.period}
                  </p>
                  <p className="mt-2 max-w-sm text-sm text-plum-800/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* what I do card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="glass-strong rounded-3xl p-8 shadow-soft"
          >
            <p className="mb-6 font-display text-xl font-semibold">What I Do</p>
            <div className="space-y-6">
              {whatIDo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blush-100 text-rose-500">
                    <item.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.title}</span>
                    <span className="block text-xs text-plum-800/55">{item.subtitle}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

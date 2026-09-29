"use client";

import { motion } from "framer-motion";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { TbServer, TbDatabase, TbTools } from "react-icons/tb";
import { skillGroups } from "@/lib/data";

const iconMap = {
  frontend: HiOutlineCodeBracket,
  backend: TbServer,
  database: TbDatabase,
  tools: TbTools,
};

const colorMap: Record<string, string> = {
  frontend: "bg-rose-500",
  backend: "bg-emerald-400",
  database: "bg-sky-400",
  tools: "bg-violet-400",
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500"
            >
              My Skills
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl font-semibold"
            >
              Technologies I <span className="italic text-rose-500">Work With</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                data-cursor
                className="group relative rounded-3xl glass-strong p-6 shadow-soft"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-glow ${colorMap[group.icon]}`}
                >
                  <Icon size={22} />
                </motion.div>
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-plum-800/65">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-rose-300/60 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

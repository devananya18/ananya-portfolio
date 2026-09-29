"use client";

import { motion } from "framer-motion";
import { HiOutlineUser, HiOutlineAcademicCap, HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { FiFileText, FiDownload, FiEye } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

const facts = [
  { icon: HiOutlineUser, label: "Name", value: "Ananya Gupta" },
  { icon: HiOutlineAcademicCap, label: "Qualification", value: "Pursuing MCA" },
  { icon: HiOutlineMapPin, label: "Location", value: "India" },
  { icon: HiOutlineEnvelope, label: "Email", value: "ananyagupta18032005@gmail.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500"
        >
          About Me
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl font-semibold"
        >
          Who I <span className="italic text-rose-500">Am</span>
        </motion.h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* decorative doodle */}
          <motion.span
            className="pointer-events-none absolute -left-6 top-24 hidden font-display italic text-sm text-plum-800/40 lg:block"
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            Small steps, ♡ big goals
          </motion.span>

          {/* Left: text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5 text-plum-800/75 leading-relaxed"
          >
            <p>
              I&apos;m currently pursuing my MCA and I&apos;m passionate
              about building real-world web applications that solve practical
              problems. I have hands-on experience developing systems like
              Hotel Management Systems and CRM platforms using Laravel, PHP
              and MySQL.
            </p>
            <p>
              I enjoy working across both backend logic and frontend design,
              paying close attention to performance, scalability and clean
              user experience. I&apos;m always eager to learn new
              technologies and grow as a developer.
            </p>
            <MagneticButton variant="primary" href="#projects" className="mt-2">
              Know More
            </MagneticButton>
          </motion.div>

          {/* Right: quick facts */}
          <div className="relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-strong rounded-3xl p-7 shadow-soft"
            >
              <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-plum-900">
                <HiOutlineUser className="text-rose-500" /> Quick Facts
              </p>
              <ul className="space-y-4">
                {facts.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush-100 text-rose-500">
                      <f.icon size={16} />
                    </span>
                    <span>
                      <span className="block text-xs text-plum-800/50">{f.label}</span>
                      <span className="text-sm font-medium">{f.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* resume card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="glass-strong absolute -right-4 -bottom-14 w-52 rounded-2xl p-4 shadow-soft sm:-right-8 sm:w-56"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white shadow-glow">
                  <FiFileText size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold">My Resume</p>
                  <p className="text-[11px] text-plum-800/60">PDF · Ananya Gupta</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white/80 px-3 py-2 text-[11px] font-semibold text-plum-900 hover:bg-white"
                >
                  <FiEye size={12} /> View
                </a>
                <a
                  href="/resume.pdf"
                  download="Ananya-Gupta-Resume.pdf"
                  data-cursor
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-rose-500 px-3 py-2 text-[11px] font-semibold text-white hover:bg-rose-600"
                >
                  <FiDownload size={12} /> Download
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

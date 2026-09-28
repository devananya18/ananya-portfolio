"use client";

import { motion } from "framer-motion";
import { HiOutlineUser, HiOutlineAcademicCap, HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { FiPlay } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

const facts = [
  { icon: HiOutlineUser, label: "Name", value: "Ananya Gupta" },
  { icon: HiOutlineAcademicCap, label: "Qualification", value: "Pursuing MCA" },
  { icon: HiOutlineMapPin, label: "Location", value: "India" },
  { icon: HiOutlineEnvelope, label: "Email", value: "ananyagupta@gmail.com" },
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

          {/* Right: quick facts + video card */}
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

            {/* mini video/photo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              data-cursor
              className="glass-strong absolute -right-4 -bottom-10 w-40 rounded-2xl p-2 shadow-soft sm:-right-8 sm:w-48"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="C:\xampp\htdocs\ananya-portfolio\photo\photo.jpeg"
                  alt="A little about me"
                  className="h-28 w-full object-cover sm:h-32"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-plum-900/20">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-rose-500 shadow-soft">
                    <FiPlay size={14} />
                  </span>
                </div>
              </div>
              <p className="mt-2 px-1 text-[11px] font-medium text-plum-800/70">
                A little about me · 1:32
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

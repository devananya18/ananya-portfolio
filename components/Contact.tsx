"use client";

import { useState, FormEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck, FiX } from "react-icons/fi";
import { socials } from "@/lib/data";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

function FloatingField({
  label,
  type = "text",
  textarea = false,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        type={!textarea ? type : undefined}
        rows={textarea ? 4 : undefined}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full resize-none rounded-2xl border border-white/70 bg-white/50 px-4 pb-2.5 pt-5 text-sm outline-none transition-colors focus:border-rose-400 focus:bg-white/80"
      />
      <motion.label
        animate={{
          top: active ? 8 : textarea ? 18 : "50%",
          fontSize: active ? 11 : 14,
          y: active ? 0 : textarea ? 0 : "-50%",
          color: focused ? "#C6396C" : "rgba(43,27,46,0.5)",
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none absolute left-4 font-medium"
      >
        {label}
      </motion.label>
    </div>
  );
}

export default function Contact() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Let&apos;s Work <span className="italic text-rose-500">Together</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-plum-800/70">
            I&apos;m open to internship and full-time opportunities. If you
            have any questions, opportunities or collaboration ideas, feel
            free to reach out.
          </p>

          <div className="mt-8 flex items-center gap-4">
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
                whileHover={{ y: -4, scale: 1.1 }}
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-plum-800/70 hover:text-rose-500"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-strong relative rounded-3xl p-7 shadow-soft sm:p-9"
        >
          <p className="mb-1 font-display text-xl font-semibold">Send Me a Message</p>
          <p className="mb-6 text-xs text-plum-800/55">I&apos;ll get back to you as soon as possible.</p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FloatingField label="Your Name *" />
            <FloatingField label="Your Email *" type="email" />
          </div>
          <div className="mt-5">
            <FloatingField label="Message *" textarea />
          </div>

          <button
            type="submit"
            data-cursor
            onClick={addRipple}
            className="relative mt-7 inline-flex items-center gap-2 overflow-hidden rounded-full bg-rose-500 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
          >
            Send Message <FiSend size={14} />
            {ripples.map((r) => (
              <motion.span
                key={r.id}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ left: r.x, top: r.y }}
                className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70"
              />
            ))}
          </button>
        </motion.form>
      </div>

      {/* success toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="glass-strong fixed bottom-8 right-6 z-[9997] flex w-72 items-start gap-3 rounded-2xl p-4 shadow-soft"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-white">
              <FiCheck size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">Message Sent!</p>
              <p className="text-xs text-plum-800/60">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              data-cursor
              className="text-plum-800/40 hover:text-plum-800"
              aria-label="Dismiss"
            >
              <FiX size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

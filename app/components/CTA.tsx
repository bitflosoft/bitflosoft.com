"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[2.5rem] border border-zinc-200 bg-gradient-to-b from-slate-100 to-white dark:border-white/[0.08] dark:bg-gradient-to-b dark:from-[#0f0f1a] dark:to-[#0a0a10] p-14 sm:p-20 overflow-hidden text-center"
        >
          {/* Top glow orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-300/15 dark:bg-indigo-600/20 blur-[80px] pointer-events-none" />

          <span className="relative text-xs font-medium text-zinc-400 dark:text-zinc-500 tracking-widest uppercase block mb-4">
            Follow our journey
          </span>

          <h2 className="relative font-display font-bold text-4xl sm:text-5xl md:text-6xl text-zinc-900 dark:text-white tracking-tight mb-6 leading-tight">
            Be first to experience
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              what we&apos;re building.
            </span>
          </h2>

          <p className="relative text-zinc-500 dark:text-zinc-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            We&apos;re an independent studio that builds apps we believe in — no
            client work, just products we&apos;re proud of. Sign up for early
            access to{" "}
            <strong className="text-zinc-700 dark:text-zinc-300 font-semibold">
              int:act
            </strong>{" "}
            and stay ahead of what comes next.
          </p>

          <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@bitflosoft.com"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all duration-300 shadow-[0_4px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_40px_rgba(0,0,0,0.22)] dark:shadow-[0_4px_32px_rgba(255,255,255,0.12)] dark:hover:shadow-[0_4px_40px_rgba(255,255,255,0.22)] hover:scale-[1.02]"
            >
              Get early access
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 font-medium">
              <Mail size={14} />
              hello@bitflosoft.com
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

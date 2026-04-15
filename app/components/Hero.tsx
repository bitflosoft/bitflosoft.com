"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-20 w-[700px] h-[700px] rounded-full bg-indigo-300/20 dark:bg-indigo-600/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 -left-20 w-[800px] h-[800px] rounded-full bg-violet-300/10 dark:bg-violet-600/15 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-fuchsia-300/[0.07] dark:bg-fuchsia-500/10 blur-[100px] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-16"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse inline-block" />
            Mobile App Studio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.93] tracking-tight mb-8"
        >
          <span className="block text-zinc-900 dark:text-white">We craft apps</span>
          <span className="block bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
            that define
          </span>
          <span className="block text-zinc-900 dark:text-white">tomorrow.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Bitflosoft is an independent mobile app studio. We design, build, and
          ship apps we believe in — starting with{" "}
          <strong className="text-zinc-700 dark:text-zinc-300 font-semibold">
            int:act
          </strong>
          , our AI-powered goal planner.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#products"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm hover:from-indigo-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02]"
          >
            Explore our apps
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="mailto:hello@bitflosoft.com"
            className="group flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.1] transition-all duration-300"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-24 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

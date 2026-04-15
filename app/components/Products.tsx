"use client";

import { motion } from "framer-motion";
import { Zap, RefreshCw, Clock, Lightbulb, FileText, BarChart3, Smartphone, Lock } from "lucide-react";

const featureGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const featureItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const INT_ACT_FEATURES = [
  {
    label: "Intention → Actions in < 60s",
    desc: "Speak or type a goal; AI generates 5–15 ranked, concrete next steps with effort estimates.",
    icon: <Zap size={15} />,
  },
  {
    label: "Adaptive AI Planning",
    desc: "Plans evolve as you do. Block an action and AI re-prioritises the backlog automatically.",
    icon: <RefreshCw size={15} />,
  },
  {
    label: "Daily Check-In & Momentum",
    desc: "A quick daily prompt surfaces your single best next action with an AI-written rationale.",
    icon: <Clock size={15} />,
  },
  {
    label: "Per-Action AI Coaching",
    desc: "Every action exposes Refine, Break Down, Estimate, Improve SMART, Research, and more.",
    icon: <Lightbulb size={15} />,
  },
  {
    label: "Notes as First-Class Citizens",
    desc: "Attach decisions, blockers, risks, and learnings directly to any goal or action.",
    icon: <FileText size={15} />,
  },
  {
    label: "Progress Dashboard",
    desc: "Action completion %, weekly velocity, streak tracker, and AI-generated reflections.",
    icon: <BarChart3 size={15} />,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 px-6 bg-slate-50/80 dark:bg-[#070710]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 tracking-widest uppercase mb-4 block">
            Our Products
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-900 dark:text-white tracking-tight mb-4">
            One product.{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              A bold start.
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 text-base max-w-md mx-auto leading-relaxed">
            We're building <strong className="text-zinc-700 dark:text-zinc-300 font-semibold">int:act</strong> — an AI-powered mobile planner
            that turns vague intentions into real, measurable progress.
          </p>
        </motion.div>

        {/* int:act — featured card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <div className="relative rounded-3xl bg-white border border-zinc-200 dark:bg-[#0c0c14] dark:border-white/[0.06] overflow-hidden hover:border-indigo-200 dark:hover:border-indigo-500/25 hover:shadow-[0_8px_60px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_0_80px_rgba(99,102,241,0.12)] transition-all duration-500 p-8 sm:p-12">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/[0.04] blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row gap-12">
              {/* Left: identity */}
              <div className="flex-shrink-0 lg:w-72">
                {/* App icon */}
                <img src="/images/products/intact-light.svg" alt="int:act" className="block dark:hidden w-16 h-16 object-cover mb-6 shadow-indigo-500/25" />
                <img src="/images/products/intact-dark.svg" alt="int:act" className="hidden dark:block w-16 h-16 object-cover mb-6 shadow-indigo-500/25" />

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-700 font-medium dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse" />
                    In Development
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 font-medium uppercase tracking-wider">
                    AI · Productivity
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-2 tracking-tight">
                  int:act
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  "Start with your intention. End with real progress."
                </p>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">
                  A mobile-first AI planner that converts vague goals into structured, ranked actions — and adapts your plan as life changes.
                </p>

                {/* Platform */}
                <div className="mt-8 flex items-center gap-2">
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 font-medium">Coming to</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.06] text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                    <Smartphone size={10} />
                    iOS
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.06] text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                    <Smartphone size={10} />
                    Android
                  </span>
                </div>
              </div>

              {/* Right: feature grid */}
              <div className="flex-1">
                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-5">
                  Core Features
                </p>
                <motion.div
                  variants={featureGrid}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {INT_ACT_FEATURES.map((f) => (
                    <motion.div
                      key={f.label}
                      variants={featureItem}
                      className="flex gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 dark:bg-white/[0.02] dark:border-white/[0.04] hover:border-indigo-200 dark:hover:border-indigo-500/20 transition-colors duration-300"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/15 flex items-center justify-center text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5">
                        {f.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                          {f.label}
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two mystery cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {["Project 02", "Project 03"].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative p-7 rounded-3xl bg-white border border-zinc-200 dark:bg-[#0c0c14] dark:border-white/[0.04] hover:border-zinc-300 dark:hover:border-white/[0.08] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                  <span className="font-display font-black text-[9rem] text-zinc-900 dark:text-white select-none">?</span>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.05] flex items-center justify-center mb-5">
                    <Lock size={18} className="text-zinc-400 dark:text-zinc-600" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 dark:bg-white/[0.04] dark:border-white/[0.06] text-xs text-zinc-400 dark:text-zinc-500 font-medium mb-3 block w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 inline-block" />
                    In Exploration
                  </span>
                  <h4 className="font-display font-semibold text-zinc-700 dark:text-zinc-400 text-lg mb-1">{name}</h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600">Something exciting is taking shape. Details coming soon.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Early access */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-zinc-400 dark:text-zinc-600 text-sm"
        >
          Interested in early access to int:act?{" "}
          <a
            href="mailto:hello@bitflosoft.com"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors font-medium"
          >
            hello@bitflosoft.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}

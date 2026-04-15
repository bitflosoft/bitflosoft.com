"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: <Zap size={20} />,
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    iconBorder: "border border-indigo-100 dark:border-indigo-500/[0.15]",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    borderHover: "hover:border-indigo-300 dark:hover:border-indigo-500/25",
    title: "Native Performance",
    description:
      "We build with performance as a first-class citizen. Buttery smooth 60 fps animations, instant responses, zero compromise.",
  },
  {
    icon: <Sparkles size={20} />,
    iconBg: "bg-violet-50 dark:bg-violet-500/10",
    iconBorder: "border border-violet-100 dark:border-violet-500/[0.15]",
    iconColor: "text-violet-600 dark:text-violet-400",
    borderHover: "hover:border-violet-300 dark:hover:border-violet-500/25",
    title: "Design-First",
    description:
      "Every pixel is intentional. Every interaction meaningful. We obsess over the details so users never have to.",
  },
  {
    icon: <Layers size={20} />,
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
    iconBorder: "border border-fuchsia-100 dark:border-fuchsia-500/[0.15]",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-300 dark:hover:border-fuchsia-500/25",
    title: "Built to Scale",
    description:
      "From zero to a million users — we engineer architecture that holds firm under real-world pressure, no compromises.",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 tracking-widest uppercase mb-4 block">
            What we stand for
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-900 dark:text-white tracking-tight">
            Built different,{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              built better.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }}
            >
              <div
                className={`group h-full p-8 rounded-3xl bg-white border border-zinc-200 dark:bg-[#101018] dark:border-white/[0.06] ${feat.borderHover} transition-all duration-500 hover:shadow-[0_8px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_48px_rgba(0,0,0,0.6)]`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${feat.iconBg} ${feat.iconBorder} flex items-center justify-center mb-6 ${feat.iconColor}`}
                >
                  {feat.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

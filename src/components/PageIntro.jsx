"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";
  const copyWidth = align === "center" ? "mx-auto" : "";

  return (
    <SectionShell noPadding className="pt-40 lg:pt-48 pb-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className={`flex flex-col max-w-4xl ${alignClass}`}
      >
        {eyebrow && (
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-zinc-600 shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:bg-zinc-900/40 dark:text-zinc-400 dark:shadow-none"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500"></span>
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          variants={fadeInUp}
          className={`mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-5xl ${copyWidth}`}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={fadeInUp}
            className={`mt-5 max-w-2xl text-[17px] leading-relaxed text-zinc-600 dark:text-zinc-400 ${copyWidth}`}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </SectionShell>
  );
}

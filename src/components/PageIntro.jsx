"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";
import { display } from "../lib/fonts";

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
    <SectionShell noPadding className="pb-10 pt-36 sm:pt-44 lg:pt-52 lg:pb-12">
      <motion.div
        initial={false}
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className={`flex flex-col max-w-4xl ${alignClass}`}
      >
        {eyebrow && (
          <motion.div
            variants={fadeInUp}
            className="theme-pill"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500"></span>
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          variants={fadeInUp}
          className={`${display.className} mt-6 max-w-3xl text-[1.95rem] font-medium leading-[1] text-[#241913] dark:text-[#fff7ec] sm:mt-8 sm:text-[3.15rem] lg:text-[4rem] ${copyWidth}`}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={fadeInUp}
            className={`theme-copy mt-4 max-w-2xl text-[0.9rem] leading-6 sm:mt-6 sm:text-[1.02rem] sm:leading-8 ${copyWidth}`}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </SectionShell>
  );
}

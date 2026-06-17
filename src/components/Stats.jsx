"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const STATS = [
  { num: "12", sup: "M+", label: "Impressions driven" },
  { num: "4.8", sup: "x", label: "Average engagement lift" },
  { num: "80", sup: "+", label: "Brands grown" },
  { num: "98", sup: "%", label: "Client retention" },
];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Stats() {
  return (
    <SectionShell noPadding className="pb-12 pt-2 sm:pb-24 sm:pt-8">
      <motion.div
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {STATS.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <BentoCard className="flex h-full rotate-[-0.6deg] flex-col justify-center p-5 text-center sm:p-8">
              <div className="font-display text-[2.65rem] leading-none text-[#241913] dark:text-[#fff7ec] sm:text-[3.35rem]">
                {stat.num}
                <span className="text-brand-500">{stat.sup}</span>
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6c57] dark:text-[#a99478]">
                {stat.label}
              </p>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

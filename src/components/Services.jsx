"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const SERVICES = [
  {
    title: "Full-funnel community growth",
    desc: "Build Reddit proof and X momentum together so both channels reinforce the same buying narrative.",
    features: ["Cross-platform strategy", "Audience mapping", "Narrative planning"],
  },
  {
    title: "Reddit community management",
    desc: "Native participation, AMA support, and trust-first positioning that can survive skeptical threads.",
    features: ["Subreddit research", "Comment strategy", "AMA coordination"],
  },
  {
    title: "X authority systems",
    desc: "Founder voice, threads, reply loops, and conversion paths designed for visible authority.",
    features: ["Thread writing", "Reply systems", "Founder positioning"],
  },
  {
    title: "Precision ads management",
    desc: "Subreddit-targeted campaigns with sharper messaging and lower waste than generic paid social.",
    features: ["Campaign setup", "Creative testing", "Intent reporting"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <SectionShell id="services" noPadding className="pt-40 pb-20 lg:pt-48 lg:pb-28">
      <SectionHeading
        eyebrow="What we do"
        title="Focused systems. Real traction."
        description="No generic marketing menu. Just specialized Reddit and X systems for trust, authority, and demand."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-20 grid gap-6 lg:mt-24 md:grid-cols-2"
      >
        {SERVICES.map((service) => (
          <motion.article key={service.title} variants={cardVariants}>
            <BentoCard className="flex h-full flex-col p-8">
              <h3 className="font-display text-2xl font-bold leading-tight text-zinc-950 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.desc}
              </p>
              <div className="mt-8 flex-1 space-y-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-[15px] font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

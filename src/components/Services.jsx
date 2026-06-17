"use client";

import { motion } from "framer-motion";
import { Megaphone, MessageCircleMore, PenSquare, Target } from "lucide-react";
import { display } from "../lib/fonts";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const SERVICES = [
  {
    title: "Full-funnel community growth",
    desc: "Build Reddit proof and X momentum together so both channels reinforce the same buying narrative.",
    features: ["Cross-platform strategy", "Audience mapping", "Narrative planning"],
    icon: Megaphone,
    className: "lg:col-span-4 lg:row-span-2",
    cardClassName: "min-h-[320px] sm:min-h-[430px] sm:p-10",
  },
  {
    title: "Reddit community management",
    desc: "Native participation, AMA support, and trust-first positioning that can survive skeptical threads.",
    features: ["Subreddit research", "Comment strategy", "AMA coordination"],
    icon: MessageCircleMore,
    className: "lg:col-span-2",
    cardClassName: "min-h-[230px] sm:min-h-[260px]",
  },
  {
    title: "X authority systems",
    desc: "Founder voice, threads, reply loops, and conversion paths designed for visible authority.",
    features: ["Thread writing", "Reply systems", "Founder positioning"],
    icon: PenSquare,
    className: "lg:col-span-2",
    cardClassName: "min-h-[230px] sm:min-h-[260px]",
  },
  {
    title: "Precision ads management",
    desc: "Subreddit-targeted campaigns with sharper messaging and lower waste than generic paid social.",
    features: ["Campaign setup", "Creative testing", "Intent reporting"],
    icon: Target,
    className: "md:col-span-2 lg:col-span-6",
    cardClassName: "min-h-[220px] sm:min-h-[240px] lg:min-h-0",
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
    <SectionShell id="services" noPadding className="pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-32 lg:pt-52">
      <SectionHeading
        eyebrow="What we do"
        title="Focused systems. Real traction."
        description="No generic marketing menu. Just specialized Reddit and X systems for trust, authority, and demand."
      />

      <motion.div
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-16 grid auto-rows-[minmax(210px,auto)] gap-4 sm:gap-6 lg:mt-28 md:grid-cols-2 lg:grid-cols-6"
      >
        {SERVICES.map((service) => (
          <motion.article
            key={service.title}
            variants={cardVariants}
            className={service.className}
          >
            <BentoCard className={`flex h-full flex-col p-5 sm:p-8 ${service.cardClassName}`}>
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#ddccba] bg-[#f7ede0] text-brand-500 transition group-hover:border-brand-500/30 group-hover:bg-brand-500/10 dark:border-[#3a2c21] dark:bg-[#201813]">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-[#dfcebb] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a6c57] dark:border-[#3a2c21] dark:text-[#a99478]">
                  {service.features.length} parts
                </span>
              </div>
              <h3 className={`${display.className} mt-5 max-w-xl text-[1.65rem] leading-tight text-[#241913] dark:text-[#fff7ec] sm:mt-6 sm:text-[2rem] ${service.title === "Full-funnel community growth" ? "sm:text-[2.6rem]" : ""}`}>
                {service.title}
              </h3>
              <p className="theme-copy mt-4 max-w-2xl text-[15px] leading-relaxed">
                {service.desc}
              </p>
              <div className={`mt-7 flex-1 ${service.title === "Precision ads management" ? "grid gap-3 sm:grid-cols-3" : "space-y-3 sm:space-y-4"}`}>
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-full border border-[#eadccd] bg-[#fff8ef]/70 px-3 py-2 text-sm font-medium text-[#5f4c3d] dark:border-[#3a2c21] dark:bg-[#19130f]/70 dark:text-[#d9ccb9] sm:px-4 sm:text-[15px]"
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

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const PREVIEWS = [
  {
    href: "/services",
    label: "Services",
    title: "Community growth systems built for Reddit and X.",
    body: "Positioning, creative rhythm, founder voice, community management, and platform-native campaign execution.",
  },
  {
    href: "/results",
    label: "Results",
    title: "Proof that strategy turns into demand.",
    body: "See the traffic lifts, cheaper acquisition, and authority gains that come from sharper conversation design.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    title: "Straightforward retainers for focused execution.",
    body: "Clear scopes built around momentum, visibility, and conversion quality.",
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

export default function HomeOverview() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Explore RedSheel"
        title="Move through the system by decision."
        description="Each page clarifies one part of how we build trust, momentum, and demand across platforms."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-20 grid gap-6 lg:mt-24 lg:grid-cols-3"
      >
        {PREVIEWS.map((item) => (
          <motion.div key={item.href} variants={cardVariants}>
            <BentoCard href={item.href} className="h-full p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-500">
                {item.label}
              </p>
              <h2 className="mt-5 font-display text-2xl font-bold leading-snug text-zinc-950 dark:text-zinc-50">
                {item.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
              <div className="mt-8 flex items-center text-sm font-bold text-zinc-950 dark:text-zinc-50">
                View page 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

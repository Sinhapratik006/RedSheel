"use client";

import { motion } from "framer-motion";
import {
  FaDiscord,
  FaHackerNews,
  FaLinkedinIn,
  FaRedditAlien,
  FaXTwitter,
} from "react-icons/fa6";
import { display } from "../lib/fonts";
import SectionShell from "./SectionShell";

const PLATFORMS = [
  {
    name: "Reddit",
    note: "Questions and proof",
    Icon: FaRedditAlien,
    accent: "text-[#ff4500]",
  },
  {
    name: "X",
    note: "Updates and replies",
    Icon: FaXTwitter,
    accent: "text-[#241913] dark:text-[#fff7ec]",
  },
  {
    name: "Hacker News",
    note: "Builder feedback",
    Icon: FaHackerNews,
    accent: "text-[#f97316]",
  },
  {
    name: "Discord",
    note: "Community support",
    Icon: FaDiscord,
    accent: "text-[#5865f2]",
  },
  {
    name: "LinkedIn",
    note: "Founder credibility",
    Icon: FaLinkedinIn,
    accent: "text-[#0a66c2]",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Communities() {
  return (
    <SectionShell id="communities" noPadding className="py-14 sm:py-24 lg:py-28">
      <motion.div
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <p className="theme-pill">
            Communities
          </p>
          <h2 className={`${display.className} mx-auto mt-4 max-w-2xl text-[1.55rem] leading-[1.02] text-[#241913] dark:text-[#fff7ec] sm:mt-5 sm:text-[2.55rem]`}>
            We show up where people already talk.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[0.82rem] leading-5 text-[#6f5947] dark:text-[#b7a28a] sm:mt-4 sm:text-sm sm:leading-6">
            No fake hype. Just useful answers, clear timing, and better handoffs.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="community-marquee flex w-max items-center gap-3">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map(({ name, note, Icon, accent }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-[#dfcebb] bg-[#fffaf3]/88 p-3 text-left shadow-[0_10px_28px_rgba(74,39,21,0.05)] dark:border-[#3a2c21] dark:bg-[#19130f]/84 sm:min-w-[210px]"
                aria-hidden={index >= PLATFORMS.length}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e4d4c2] bg-[#f7ede0] dark:border-[#3d3024] dark:bg-[#241c16]">
                  <Icon className={`h-5 w-5 ${accent}`} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#241913] dark:text-[#fff7ec]">
                    {name}
                  </span>
                  <span className="mt-0.5 block text-xs text-[#8a6c57] dark:text-[#a99478]">
                    {note}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

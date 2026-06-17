"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fraunces } from "../lib/fonts";
import SectionShell from "./SectionShell";

const FAQS = [
  [
    "What do you actually do?",
    "We find useful conversations, help write replies, and show what is working.",
  ],
  [
    "Do you post from our accounts?",
    "Only if you want that. We can also prepare drafts for your team.",
  ],
  [
    "Which platforms come first?",
    "Usually Reddit and X. The rest depends on where your buyers already talk.",
  ],
  [
    "How soon do we see signal?",
    "Most teams see useful patterns in two to four weeks.",
  ],
];

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell id="faq" noPadding className="py-20 sm:py-24 lg:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
          <p className="theme-pill">
            FAQ
          </p>
          <h2 className={`${fraunces.className} mt-3 text-[2.25rem] leading-none text-[#241913] dark:text-[#fff7ec] sm:text-[3rem]`}>
            Quick answers
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-10 divide-y divide-[#dfcebb] border-y border-[#dfcebb] dark:divide-[#3a2c21] dark:border-[#3a2c21]"
        >
          {FAQS.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question} className="py-5 text-left sm:py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-[15px] font-semibold text-[#241913] transition hover:text-brand-500 dark:text-[#fff7ec] dark:hover:text-brand-300 sm:text-base"
                  aria-expanded={isOpen}
                >
                {question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 transition dark:bg-brand-400/12 dark:text-brand-300">
                  <Plus
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </span>
                </button>

                <motion.div
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: { height: "auto", opacity: 1, marginTop: 12 },
                    closed: { height: 0, opacity: 0, marginTop: 0 },
                  }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl text-sm leading-6 text-[#7a614d] dark:text-[#a99478]">
                    {answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

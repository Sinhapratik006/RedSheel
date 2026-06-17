"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { SITE_TAGLINE } from "../config";
import { fraunces } from "../lib/fonts";
import Button from "./Button";
import SectionShell from "./SectionShell";

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const SIGNALS = [
  ["Find conversations", "Reddit, X, HN", "Where buyers ask, compare, and complain"],
  ["Write useful replies", "Founder voice", "Helpful answers your team can approve"],
  ["Route next steps", "Sales notes", "Calls, demos, waitlists, and follow-ups"],
];

const WEEK = [
  ["Mon", "Listen"],
  ["Tue", "Draft"],
  ["Wed", "Reply"],
  ["Thu", "Track"],
  ["Fri", "Report"],
];

export default function Hero() {
  return (
    <SectionShell id="hero" noPadding className="pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-48">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-7xl flex-col items-center text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="relative w-full px-4 text-center sm:px-10 lg:px-14"
        >
          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.div
              variants={fadeInUp}
              className="theme-pill"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {SITE_TAGLINE}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className={`${fraunces.className} mx-auto mt-10 max-w-[56rem] text-balance text-[2.7rem] font-medium leading-[1.02] text-[#241913] dark:text-[#fff7ec] sm:text-[3.45rem] lg:text-[4.15rem]`}
            >
              The better way to turn community conversations into demand.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="theme-copy mx-auto mt-8 max-w-2xl text-base leading-8 sm:text-[1.08rem]"
            >
              RedSheel helps brands find high-intent Reddit and X conversations,
              respond with authority, and route the best signals into pipeline.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" className="h-12 px-8 text-base">
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/results"
                variant="secondary"
                className="h-12 px-8 text-base"
              >
                See results
              </Button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-sm text-[#8a6c57] dark:text-[#a99478]"
            >
              No long pitch. Just a clear look at fit, timing, and upside.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative z-10 mt-24 w-full max-w-[72rem] px-2"
        >
          <div className="rounded-[28px] border border-[#d6c7b4] bg-[#fff9f1] p-3 shadow-[0_18px_45px_rgba(74,39,21,0.08)] dark:border-[#4a392b] dark:bg-[#241c16] dark:shadow-[0_22px_60px_rgba(0,0,0,0.28)] sm:p-4">
            <div className="overflow-hidden rounded-[22px] bg-[#fffaf3] text-left shadow-[inset_0_0_0_1px_rgba(222,206,188,0.9)] dark:bg-[#1b1511] dark:shadow-[inset_0_0_0_1px_rgba(75,56,40,0.9)]">
              <div className="flex items-center gap-2 px-5 pt-5 sm:px-8">
                <span className="h-3 w-3 rounded-full bg-[#f25f57]" />
                <span className="h-3 w-3 rounded-full bg-[#f5bd4f]" />
                <span className="h-3 w-3 rounded-full bg-[#57c84d]" />
              </div>
              <div className="grid gap-0 pt-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-[#decebc] p-6 pt-0 dark:border-[#4b3928] sm:p-8 sm:pt-0 lg:border-b-0 lg:border-r">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8d7658]">
                      Conversation system
                    </p>
                    <h2 className={`${fraunces.className} mt-3 text-[1.8rem] font-medium leading-[0.98] text-[#241913] dark:text-[#fff7ec] sm:text-[2.35rem]`}>
                      Find the right conversations, then answer well.
                    </h2>
                  </div>
                  <div className="inline-flex w-fit shrink-0 rounded-full border border-brand-500/20 bg-brand-500/8 px-3 py-1.5 text-xs text-brand-600 dark:text-[#f3d7db]">
                    Live workflow
                  </div>
                </div>

                <div className="mt-8 space-y-1 rounded-[20px] border border-[#eadccd] bg-[#fff8ef]/70 p-2 dark:border-[#34271e] dark:bg-[#19130f]/70">
                  {SIGNALS.map(([label, value, detail], index) => (
                    <div
                      key={label}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-[16px] p-3 transition hover:bg-white/60 dark:hover:bg-white/[0.03] sm:grid-cols-[2.5rem_1fr_auto] sm:items-center"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5eadc] text-brand-500 dark:bg-[#241c16] dark:text-brand-400">
                        {index === 0 ? (
                          <MessageSquare className="h-4 w-4" />
                        ) : index === 1 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-[1.05rem] font-medium text-[#241913] dark:text-[#f6ecde]">{label}</p>
                        <p className="mt-1 text-[0.98rem] leading-5 text-[#7a614d] dark:text-[#9d886f]">{detail}</p>
                      </div>
                      <p className="col-start-2 w-fit rounded-full bg-[#f0e1d0] px-3 py-1.5 text-xs leading-5 text-[#7a614d] dark:bg-[#241c16] dark:text-[#a99478] sm:col-start-auto sm:max-w-[8rem] sm:text-right">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 sm:p-8 sm:pt-0 lg:pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8d7658]">
                      Weekly cadence
                    </p>
                    <p className="mt-2 text-[0.98rem] leading-6 text-[#7a614d] dark:text-[#9d886f]">
                      A simple loop for listening, replying, and learning what people care about.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[20px] border border-[#eadccd] bg-[#fff8ef]/70 p-2 dark:border-[#34271e] dark:bg-[#19130f]/70">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-1 xl:grid-cols-5">
                  {WEEK.map(([day, task], index) => (
                    <div
                      key={day}
                      className={`flex min-h-[68px] flex-col items-center justify-center rounded-[14px] px-3 py-3 text-center transition ${
                        index === 2
                          ? "bg-brand-500 text-white shadow-[0_12px_24px_rgba(243,68,81,0.16)]"
                          : "text-[#74624f] hover:bg-white/60 dark:text-[#a99478] dark:hover:bg-white/[0.03]"
                      }`}
                    >
                    <p className="font-mono text-[11px] font-medium">
                      {day}
                    </p>
                    <p className="mt-2 text-xs">
                      {task}
                    </p>
                    </div>
                  ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="min-h-[112px] rounded-[18px] border border-[#eadccd] bg-[#fff8ef]/70 p-5 dark:border-[#34271e] dark:bg-[#19130f]/70">
                    <p className="text-[1.1rem] font-medium leading-none text-[#241913] dark:text-[#fff7ec]">Weekly notes</p>
                    <p className="mt-3 text-sm leading-6 text-[#8d7658]">What people asked, liked, and pushed back on.</p>
                  </div>
                  <div className="min-h-[112px] rounded-[18px] border border-[#eadccd] bg-[#fff8ef]/70 p-5 dark:border-[#34271e] dark:bg-[#19130f]/70">
                    <p className="text-[1.1rem] font-medium leading-none text-[#241913] dark:text-[#fff7ec]">Next actions</p>
                    <p className="mt-3 text-sm leading-6 text-[#8d7658]">Replies to send, threads to watch, leads to follow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </motion.div>

      </motion.div>
    </SectionShell>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { SITE_TAGLINE } from "../config";
import { display } from "../lib/fonts";
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
    <SectionShell id="hero" noPadding className="pb-14 pt-28 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-48">
      <motion.div
        initial={false}
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-7xl flex-col items-center text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="relative w-full px-0 text-center sm:px-8 lg:px-14"
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
              className={`${display.className} mx-auto mt-7 w-full max-w-none text-balance text-[1.85rem] font-medium leading-[1.04] text-[#241913] dark:text-[#fff7ec] sm:mt-10 sm:text-[3.25rem] lg:text-[4.15rem]`}
            >
              The better way to turn community conversations into demand.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="theme-copy mx-auto mt-5 max-w-[21rem] text-[0.86rem] leading-6 sm:mt-8 sm:max-w-2xl sm:text-[1.08rem] sm:leading-8"
            >
              RedSheel helps brands find high-intent Reddit and X conversations,
              respond with authority, and route the best signals into pipeline.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-col justify-center gap-2.5 sm:mt-11 sm:flex-row sm:gap-3">
              <Button href="/contact" variant="primary" className="h-11 w-full px-4 text-[0.88rem] sm:h-12 sm:w-auto sm:px-8 sm:text-base">
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/results"
                variant="secondary"
                className="h-11 w-full px-4 text-[0.88rem] sm:h-12 sm:w-auto sm:px-8 sm:text-base"
              >
                See results
              </Button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-5 max-w-[19rem] text-[0.82rem] leading-6 text-[#8a6c57] dark:text-[#a99478] sm:mt-6 sm:max-w-none sm:text-sm"
            >
              No long pitch. Just a clear look at fit, timing, and upside.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative z-10 mt-12 w-full max-w-[72rem] px-0 sm:mt-20 lg:mt-24 sm:px-2"
        >
          <div className="rounded-[22px] border border-[#d6c7b4] bg-[#fff9f1] p-2 shadow-[0_18px_45px_rgba(74,39,21,0.08)] dark:border-[#4a392b] dark:bg-[#241c16] dark:shadow-[0_22px_60px_rgba(0,0,0,0.28)] sm:rounded-[28px] sm:p-4">
            <div className="overflow-hidden rounded-[18px] bg-[#fffaf3] text-left shadow-[inset_0_0_0_1px_rgba(222,206,188,0.9)] dark:bg-[#1b1511] dark:shadow-[inset_0_0_0_1px_rgba(75,56,40,0.9)] sm:rounded-[22px]">
              <div className="flex items-center gap-2 px-4 pt-4 sm:px-8 sm:pt-5">
                <span className="h-3 w-3 rounded-full bg-[#f25f57]" />
                <span className="h-3 w-3 rounded-full bg-[#f5bd4f]" />
                <span className="h-3 w-3 rounded-full bg-[#57c84d]" />
              </div>
              <div className="grid gap-0 pt-5 sm:pt-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-[#decebc] p-3.5 pt-0 dark:border-[#4b3928] sm:p-8 sm:pt-0 lg:border-b-0 lg:border-r">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8d7658] sm:text-xs sm:tracking-[0.18em]">
                      Conversation system
                    </p>
                    <h2 className={`${display.className} mt-2.5 text-[1.38rem] font-medium leading-[1.02] text-[#241913] dark:text-[#fff7ec] sm:mt-3 sm:text-[2.35rem]`}>
                      Find the right conversations, then answer well.
                    </h2>
                  </div>
                  <div className="inline-flex w-fit shrink-0 rounded-full border border-brand-500/20 bg-brand-500/8 px-3 py-1.5 text-[11px] text-brand-600 dark:text-[#f3d7db] sm:text-xs">
                    Live workflow
                  </div>
                </div>

                <div className="mt-5 space-y-1 rounded-[18px] border border-[#eadccd] bg-[#fff8ef]/70 p-1.5 dark:border-[#34271e] dark:bg-[#19130f]/70 sm:mt-8 sm:rounded-[20px] sm:p-2">
                  {SIGNALS.map(([label, value, detail], index) => (
                    <div
                      key={label}
                      className="grid grid-cols-[2.1rem_1fr] gap-2.5 rounded-[14px] p-2 transition hover:bg-white/60 dark:hover:bg-white/[0.03] sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:gap-4 sm:rounded-[16px] sm:p-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f5eadc] text-brand-500 dark:bg-[#241c16] dark:text-brand-400 sm:h-10 sm:w-10">
                        {index === 0 ? (
                          <MessageSquare className="h-4 w-4" />
                        ) : index === 1 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-[0.9rem] font-medium text-[#241913] dark:text-[#f6ecde] sm:text-[1.05rem]">{label}</p>
                        <p className="mt-1 text-[0.8rem] leading-5 text-[#7a614d] dark:text-[#9d886f] sm:text-[0.98rem]">{detail}</p>
                      </div>
                      <p className="col-start-2 w-fit rounded-full bg-[#f0e1d0] px-2.5 py-1 text-[11px] leading-5 text-[#7a614d] dark:bg-[#241c16] dark:text-[#a99478] sm:col-start-auto sm:max-w-[8rem] sm:px-3 sm:py-1.5 sm:text-right sm:text-xs">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 pt-0 sm:p-8 sm:pt-0 lg:pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8d7658] sm:text-xs sm:tracking-[0.18em]">
                      Weekly cadence
                    </p>
                    <p className="mt-2 text-[0.82rem] leading-5 text-[#7a614d] dark:text-[#9d886f] sm:text-[0.98rem] sm:leading-6">
                      A simple loop for listening, replying, and learning what people care about.
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-[18px] border border-[#eadccd] bg-[#fff8ef]/70 p-1.5 dark:border-[#34271e] dark:bg-[#19130f]/70 sm:mt-8 sm:rounded-[20px] sm:p-2">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-1 xl:grid-cols-5">
                  {WEEK.map(([day, task], index) => (
                    <div
                      key={day}
                      className={`flex min-h-[52px] flex-col items-center justify-center rounded-[13px] px-2 py-2.5 text-center transition sm:min-h-[68px] sm:rounded-[14px] sm:px-3 sm:py-3 ${
                        index === 2
                          ? "bg-brand-500 text-white shadow-[0_12px_24px_rgba(243,68,81,0.16)]"
                          : "text-[#74624f] hover:bg-white/60 dark:text-[#a99478] dark:hover:bg-white/[0.03]"
                      }`}
                    >
                    <p className="font-mono text-[10px] font-medium sm:text-[11px]">
                      {day}
                    </p>
                    <p className="mt-1.5 text-[11px] sm:mt-2 sm:text-xs">
                      {task}
                    </p>
                    </div>
                  ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="min-h-[92px] rounded-[16px] border border-[#eadccd] bg-[#fff8ef]/70 p-3.5 dark:border-[#34271e] dark:bg-[#19130f]/70 sm:min-h-[112px] sm:rounded-[18px] sm:p-5">
                    <p className="text-[0.92rem] font-medium leading-none text-[#241913] dark:text-[#fff7ec] sm:text-[1.1rem]">Weekly notes</p>
                    <p className="mt-2.5 text-[0.8rem] leading-5 text-[#8d7658] sm:mt-3 sm:text-sm sm:leading-6">What people asked, liked, and pushed back on.</p>
                  </div>
                  <div className="min-h-[92px] rounded-[16px] border border-[#eadccd] bg-[#fff8ef]/70 p-3.5 dark:border-[#34271e] dark:bg-[#19130f]/70 sm:min-h-[112px] sm:rounded-[18px] sm:p-5">
                    <p className="text-[0.92rem] font-medium leading-none text-[#241913] dark:text-[#fff7ec] sm:text-[1.1rem]">Next actions</p>
                    <p className="mt-2.5 text-[0.8rem] leading-5 text-[#8d7658] sm:mt-3 sm:text-sm sm:leading-6">Replies to send, threads to watch, leads to follow.</p>
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

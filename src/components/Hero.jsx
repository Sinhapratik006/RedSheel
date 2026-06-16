"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, TrendingUp } from "lucide-react";
import { SITE_TAGLINE } from "../config";
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

const PLATFORM_NAMES = ["Reddit", "X", "Hacker News", "Discord", "LinkedIn"];

const SIGNALS = [
  ["Problem threads", "214", "Live objections and buying triggers"],
  ["Warm replies", "68", "Founder-led conversations worth tracking"],
  ["Qualified paths", "19", "Calls, demos, waitlists, and sales handoffs"],
];

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Hero() {
  return (
    <SectionShell id="hero" noPadding className="pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {SITE_TAGLINE}
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] text-zinc-950 dark:text-white sm:text-5xl lg:text-[3.75rem]"
        >
          The better way to turn community conversations into demand
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg"
        >
          RedSheel helps brands find high-intent Reddit and X conversations,
          respond with authority, and route the best signals into pipeline.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" className="h-11 rounded-lg px-5">
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/results" variant="secondary" className="h-11 rounded-lg px-5">
            See results
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-[0_22px_70px_rgba(24,24,27,0.08)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none"
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
              Demand sprint preview
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-zinc-200 p-5 dark:border-zinc-800 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-500">
                    Conversation map
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight text-zinc-950 dark:text-white">
                    High-intent threads, sorted by buying signal.
                  </h2>
                </div>
                <div className="hidden rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white sm:block">
                  82% fit
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {SIGNALS.map(([label, value, detail], index) => (
                  <div
                    key={label}
                    className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-t border-zinc-100 pt-3 first:border-t-0 first:pt-0 dark:border-zinc-800"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                      {index === 0 ? (
                        <MessageSquare className="h-4 w-4" />
                      ) : index === 1 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-950 dark:text-white">{label}</p>
                      <p className="mt-1 text-sm leading-5 text-zinc-500 dark:text-zinc-500">{detail}</p>
                    </div>
                    <p className="text-2xl font-semibold text-zinc-950 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-500">
                    Weekly cadence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Find, reply, hand off, and measure without turning the team into a content factory.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-2">
                {WEEK.map((day) => (
                  <p key={day} className="text-center text-[11px] font-medium text-zinc-400">
                    {day}
                  </p>
                ))}
                {Array.from({ length: 28 }, (_, index) => {
                  const active = [2, 4, 8, 11, 15, 18, 22, 25].includes(index);
                  const strong = [4, 15, 25].includes(index);

                  return (
                    <div
                      key={index}
                      className={`flex aspect-square items-center justify-center rounded-md border text-xs ${
                        active
                          ? strong
                            ? "border-brand-500 bg-brand-500 text-white"
                            : "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                          : "border-zinc-200 bg-zinc-50 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <p className="text-2xl font-semibold text-zinc-950 dark:text-white">4.8x</p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">Average engagement lift</p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <p className="text-2xl font-semibold text-zinc-950 dark:text-white">98%</p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">Client retention</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 grid w-full gap-4 border-y border-zinc-200 py-5 dark:border-zinc-800 sm:grid-cols-[13rem_1fr]"
        >
          <p className="text-left text-xs leading-5 text-zinc-500 dark:text-zinc-500">
            Driving authority across high-signal communities
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-zinc-500 dark:text-zinc-500">
            {PLATFORM_NAMES.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

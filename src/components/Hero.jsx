"use client";

import { motion } from "framer-motion";
import { MessageCircle, Repeat, Heart, ArrowUp, ArrowDown, MessageSquare, Share, ArrowRight } from "lucide-react";
import { SITE_TAGLINE } from "../config";
import Button from "./Button";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const PLATFORM_NAMES = ["Reddit", "X", "Hacker News", "Discord", "LinkedIn"];

const HERO_SIGNALS = [
  { label: "Audience fit", value: "High-signal communities only" },
  { label: "Reply rhythm", value: "Daily conversation coverage" },
  { label: "Conversion path", value: "Clear next step in every thread" },
];

export default function Hero() {
  return (
    <SectionShell id="hero" noPadding className="pt-40 lg:pt-48 pb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative overflow-hidden bg-transparent"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col justify-center">
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-zinc-600 shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:bg-zinc-900/40 dark:text-zinc-400 dark:shadow-none"
            >
              <span className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(229,9,32,0.6)]" />
              {SITE_TAGLINE}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              Build demand where <span className="text-brand-500">trust</span> is earned.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              RedSheel helps brands turn Reddit and X into a sharper demand system with better conversations, clearer authority, and highly qualified inbound flow.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" className="group rounded-full px-8 py-3.5 text-base flex items-center justify-center">
                Book a strategy call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="/results" variant="secondary" className="group rounded-full border-transparent bg-zinc-100 px-8 py-3.5 text-base flex items-center justify-center hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800">
                See results
                <ArrowRight className="ml-2 h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-20 grid gap-4 lg:mt-24 sm:grid-cols-3"
            >
              {HERO_SIGNALS.map((signal) => (
                <BentoCard key={signal.label} className="p-5">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-[15px] font-semibold leading-snug text-zinc-950 dark:text-zinc-50">
                    {signal.value}
                  </p>
                </BentoCard>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative flex flex-col gap-6 lg:translate-y-4">
            
            {/* X-like Post */}
            <div className="relative z-10 w-[90%] self-end rounded-3xl bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.04)] dark:bg-zinc-900/80 dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <div className="flex items-start gap-4">
                <img src="/redsheel-mark.svg" alt="RedSheel Logo" className="h-10 w-10 shrink-0 rounded-full bg-white p-1.5 object-contain shadow-sm ring-1 ring-zinc-100 dark:bg-black dark:ring-zinc-800" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-950 dark:text-zinc-50">RedSheel</span>
                    <span className="text-sm text-zinc-500">@redsheel · 2h</span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-800 dark:text-zinc-200">
                    Stop treating social like a billboard. The highest converting users are in the replies, building trust through active conversations. We scale that process. 📈
                  </p>
                  <div className="mt-4 flex items-center justify-between pr-8 text-zinc-400 dark:text-zinc-500">
                    <span className="flex items-center gap-2 text-sm hover:text-brand-500 cursor-pointer transition-colors"><MessageCircle className="h-4 w-4" /> 12</span>
                    <span className="flex items-center gap-2 text-sm hover:text-green-500 cursor-pointer transition-colors"><Repeat className="h-4 w-4" /> 4</span>
                    <span className="flex items-center gap-2 text-sm hover:text-red-500 cursor-pointer transition-colors"><Heart className="h-4 w-4" /> 142</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reddit-like Post */}
            <div className="relative w-[95%] -translate-y-4 rounded-3xl bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:bg-[#111111] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1 text-zinc-400">
                  <ArrowUp className="h-6 w-6 hover:text-reddit-500 cursor-pointer transition-colors" />
                  <span className="text-sm font-bold text-zinc-950 dark:text-zinc-50">2.8k</span>
                  <ArrowDown className="h-6 w-6 hover:text-blue-500 cursor-pointer transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="font-semibold text-zinc-950 dark:text-zinc-300">r/SaaS</span>
                    <span>•</span>
                    <span>Posted by u/growth_hacker 5h ago</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold leading-tight text-zinc-950 dark:text-zinc-50">
                    How we sourced 40% of our MRR from Reddit communities without getting banned
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    I see a lot of founders struggling with Reddit promotion. The trick isn't to promote, but to solve problems in real-time. Here is the exact framework we used to find high-intent users...
                  </p>
                  <div className="mt-4 flex gap-4 text-xs font-semibold text-zinc-500">
                    <span className="flex items-center gap-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer transition-colors"><MessageSquare className="h-4 w-4" /> 348 Comments</span>
                    <span className="flex items-center gap-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer transition-colors"><Share className="h-4 w-4" /> Share</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col items-center gap-6 border-t border-zinc-200/50 pt-10 dark:border-zinc-800/50 sm:flex-row sm:justify-between">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
          Driving authority across high-signal communities
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-bold text-zinc-400 dark:text-zinc-600">
          {PLATFORM_NAMES.map((name) => (
            <span key={name} className="hover:text-zinc-950 dark:hover:text-zinc-300 transition-colors cursor-default">
              {name}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}


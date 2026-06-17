"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { display } from "../lib/fonts";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";

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
];

const PLATFORMS = ["Reddit", "X", "Hacker News", "Discord", "LinkedIn"];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const tileBase =
  "h-full rounded-[26px] border transition-[transform,border-color,box-shadow] hover:border-brand-500/45 hover:shadow-[0_22px_55px_rgba(243,68,81,0.12)] dark:hover:border-brand-400/45 dark:hover:shadow-[0_24px_62px_rgba(243,68,81,0.16)]";

function HoverTile({ href, className = "", children }) {
  const tileRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const Component = href ? Link : "div";
  const componentProps = href ? { href } : {};

  const handleMouseMove = (event) => {
    if (!tileRef.current) return;
    const rect = tileRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPosition({ x, y });
    setMagnet({
      x: ((x - rect.width / 2) / rect.width) * 7,
      y: ((y - rect.height / 2) / rect.height) * 7,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setOpacity(0);
    setMagnet({ x: 0, y: 0 });
  };

  return (
    <Component
      {...componentProps}
      ref={tileRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden ${
        isHovering ? "duration-150 ease-out" : "duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      } ${className}`}
      style={{
        transform: `translate3d(${magnet.x}px, ${magnet.y}px, 0)`,
      }}
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 z-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      <div className="pointer-events-none absolute right-5 top-5 z-0 h-2 w-2 rounded-full bg-brand-500/0 transition group-hover:bg-brand-500/80 group-hover:shadow-[0_0_22px_rgba(243,68,81,0.55)]" />
      <div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(243,68,81,0.14), transparent 42%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        {children}
      </div>
    </Component>
  );
}

export default function HomeOverview() {
  return (
    <SectionShell noPadding className="py-14 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="Explore RedSheel"
        title="Move through the system by decision."
        description="Each page clarifies one part of how we build trust, momentum, and demand across platforms."
      />

      <motion.div
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-11 grid auto-rows-[minmax(160px,auto)] gap-3 sm:mt-20 sm:grid-cols-2 sm:gap-4 lg:mt-24 lg:grid-cols-6"
      >
        <motion.div variants={cardVariants} className="sm:col-span-2 lg:col-span-4 lg:row-span-2">
          <HoverTile
            href={PREVIEWS[0].href}
            className={`${tileBase} flex min-h-[280px] flex-col justify-between overflow-hidden border-[#d6c7b4] bg-[#fff9f1] p-4 dark:border-[#4a392b] dark:bg-[#241c16] sm:min-h-[360px] sm:p-9`}
          >
            <div className="flex h-full flex-col justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-500">
                {PREVIEWS[0].label}
              </p>
              <h2 className={`${display.className} mt-4 max-w-2xl text-[1.65rem] leading-[1.02] text-[#241913] dark:text-[#fff7ec] sm:mt-6 sm:text-[3.15rem]`}>
                {PREVIEWS[0].title}
              </h2>
              <p className="theme-copy mt-3 max-w-xl text-[0.84rem] leading-6 sm:mt-5 sm:text-[1.02rem] sm:leading-7">
                {PREVIEWS[0].body}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Positioning", "Founder voice", "Campaign rhythm"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ddccba] bg-[#fbf2e6] px-2.5 py-1.5 text-[11px] text-[#6f5947] dark:border-[#3b2d22] dark:bg-[#19130f] dark:text-[#d9ccb9] sm:px-3 sm:text-[12px]"
                >
                  {item}
                </span>
              ))}
            </div>
            </div>
          </HoverTile>
        </motion.div>

        <motion.div variants={cardVariants} className="lg:col-span-2">
          <HoverTile
            href={PREVIEWS[1].href}
            className={`${tileBase} flex min-h-[180px] flex-col justify-between border-[#d6c7b4] bg-[#fbf2e6] p-4 dark:border-[#3a2c21] dark:bg-[#1d1713] sm:min-h-[200px] sm:p-7`}
          >
            <div className="flex h-full flex-col justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-500">
                {PREVIEWS[1].label}
              </p>
              <h3 className={`${display.className} mt-4 text-[1.42rem] leading-[1.02] text-[#241913] dark:text-[#fff7ec] sm:mt-5 sm:text-[2rem]`}>
                {PREVIEWS[1].title}
              </h3>
            </div>
            <p className="theme-copy mt-4 text-[0.84rem] leading-6 sm:mt-5 sm:text-[15px] sm:leading-7">
              {PREVIEWS[1].body}
            </p>
            </div>
          </HoverTile>
        </motion.div>

        <motion.div variants={cardVariants} className="lg:col-span-2">
          <HoverTile className={`${tileBase} flex h-full min-h-[180px] flex-col justify-between border-[#d6c7b4] bg-[#fff9f1] p-4 dark:border-[#4a392b] dark:bg-[#241c16] sm:min-h-[200px] sm:p-7`}>
            <div className="flex h-full flex-col justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6c57] dark:text-[#a99478]">
              Platforms
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {PLATFORMS.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full bg-[#f2e6d8] px-2.5 py-1.5 text-xs text-[#5f4c3d] dark:bg-[#2a2019] dark:text-[#d9ccb9] sm:px-3 sm:py-2 sm:text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
            </div>
          </HoverTile>
        </motion.div>

        <motion.div variants={cardVariants} className="lg:col-span-2">
          <HoverTile
            href="/results"
            className={`${tileBase} flex min-h-[150px] flex-col justify-between border-[#241913] bg-[#241913] p-4 text-[#fff7ec] dark:border-[#5b4736] dark:bg-[#fff7ec] dark:text-[#241913] sm:min-h-[170px] sm:p-7`}
          >
            <div className="flex h-full flex-col justify-between">
            <p className={`${display.className} text-[2.25rem] leading-none sm:text-[3.1rem]`}>
              12M+
            </p>
            <div>
              <p className="text-[15px] font-medium">Impressions driven</p>
              <p className="mt-2 text-sm text-[#e7d8c6] dark:text-[#6f5947]">
                Demand signals across high-intent communities.
              </p>
            </div>
            </div>
          </HoverTile>
        </motion.div>

        <motion.div variants={cardVariants} className="lg:col-span-2">
          <HoverTile className={`${tileBase} flex h-full min-h-[150px] flex-col justify-between border-[#d6c7b4] bg-[#fbf2e6] p-4 dark:border-[#3a2c21] dark:bg-[#1d1713] sm:min-h-[170px] sm:p-7`}>
            <div className="flex h-full flex-col justify-between">
            <p className={`${display.className} text-[2.25rem] leading-none text-[#241913] dark:text-[#fff7ec] sm:text-[3.1rem]`}>
              4.8x
            </p>
            <div>
              <p className="text-[15px] font-medium text-[#241913] dark:text-[#f6ecde]">
                Average engagement lift
              </p>
              <p className="mt-2 text-sm text-[#7a614d] dark:text-[#a99478]">
                Stronger replies, sharper creative, cleaner handoffs.
              </p>
            </div>
            </div>
          </HoverTile>
        </motion.div>

        <motion.div variants={cardVariants} className="sm:col-span-2 lg:col-span-2">
          <HoverTile
            href="/contact"
            className={`${tileBase} flex min-h-[150px] flex-col justify-between border-[#d6c7b4] bg-[#fff9f1] p-4 dark:border-[#4a392b] dark:bg-[#241c16] sm:min-h-[170px] sm:p-7`}
          >
            <div className="flex h-full flex-col justify-between">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className={`${display.className} text-[1.8rem] leading-none text-[#241913] dark:text-[#fff7ec] sm:text-[2.4rem]`}>
                  80+
                </p>
                <p className="mt-2 text-sm text-[#7a614d] dark:text-[#a99478]">
                  Brands grown
                </p>
              </div>
              <div>
                <p className={`${display.className} text-[1.8rem] leading-none text-[#241913] dark:text-[#fff7ec] sm:text-[2.4rem]`}>
                  98%
                </p>
                <p className="mt-2 text-sm text-[#7a614d] dark:text-[#a99478]">
                  Client retention
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center text-sm font-medium text-[#241913] dark:text-[#fff7ec]">
              Explore fit
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
            </div>
          </HoverTile>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

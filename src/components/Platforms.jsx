import { MessageSquareQuote, Rocket } from "lucide-react";
import { fraunces } from "../lib/fonts";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const PLATFORM_CARDS = [
  {
    key: "reddit",
    label: "Reddit engine",
    title: "Earn trust where buyers already compare notes.",
    icon: MessageSquareQuote,
    body:
      "Reddit rewards useful detail and punishes lazy brand behavior. We shape your positioning so it feels native and still moves demand.",
    items: [
      "Subreddit targeting and community research",
      "Native post and comment strategy",
      "AMA planning and moderation support",
      "Reddit ads by audience intent",
    ],
  },
  {
    key: "x",
    label: "X engine",
    title: "Build visible authority that compounds in public.",
    icon: Rocket,
    body:
      "X moves fast, but the signal should not feel disposable. We design founder voice, reply loops, and thread systems that build authority.",
    items: [
      "Daily posting and thread systems",
      "Founder ghost-writing",
      "Reply loops and narrative stacks",
      "Audience funnel design",
    ],
  },
];

export default function Platforms() {
  return (
    <SectionShell id="platforms">
      <SectionHeading
        eyebrow="Platform expertise"
        title="Two channels, one operating standard."
        description="We adapt the execution to each platform while keeping the system clear, measured, and easy to inspect."
      />

      <div className="mt-24 grid gap-6 lg:mt-28 lg:grid-cols-2">
        {PLATFORM_CARDS.map((platform) => (
          <BentoCard
            key={platform.key}
            className="flex flex-col p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6c57] dark:text-[#a99478]">
                {platform.label}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ddccba] bg-[#f7ede0] text-brand-500 dark:border-[#3a2c21] dark:bg-[#201813]">
                <platform.icon className="h-5 w-5" />
              </div>
            </div>
            <h3 className={`${fraunces.className} mt-6 max-w-lg text-[2rem] leading-tight text-[#241913] dark:text-[#fff7ec]`}>
              {platform.title}
            </h3>
            <p className="theme-copy mt-4 max-w-xl text-[15px] leading-relaxed">
              {platform.body}
            </p>
            <ul className="mt-8 flex-1 space-y-4">
              {platform.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] font-medium text-[#5f4c3d] dark:text-[#d9ccb9]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        ))}
      </div>
    </SectionShell>
  );
}

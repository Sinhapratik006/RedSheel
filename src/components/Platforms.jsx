import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const PLATFORM_CARDS = [
  {
    key: "reddit",
    label: "Reddit engine",
    title: "Earn trust where buyers already compare notes.",
    symbol: "r/",
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
    symbol: "X",
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

      <div className="mt-20 grid gap-6 lg:mt-24 lg:grid-cols-2">
        {PLATFORM_CARDS.map((platform) => (
          <BentoCard
            key={platform.key}
            className="flex flex-col p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {platform.label}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 font-display text-xl font-bold text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50">
                {platform.symbol}
              </div>
            </div>
            <h3 className="mt-6 max-w-lg font-display text-2xl font-bold leading-tight text-zinc-950 dark:text-zinc-50">
              {platform.title}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {platform.body}
            </p>
            <ul className="mt-8 flex-1 space-y-4">
              {platform.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] font-medium text-zinc-700 dark:text-zinc-300"
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

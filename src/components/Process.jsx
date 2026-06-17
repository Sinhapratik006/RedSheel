import { BarChart3, Compass, PenLine, ScanSearch } from "lucide-react";
import { display } from "../lib/fonts";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const STEPS = [
  {
    n: "01",
    title: "Deep audit",
    desc:
      "Map the subreddits, creators, narratives, and objections already shaping buying behavior.",
    icon: ScanSearch,
    className: "lg:col-span-3",
  },
  {
    n: "02",
    title: "Strategy build",
    desc:
      "Design the posting, reply, and launch rhythm that fits each channel without losing brand consistency.",
    icon: Compass,
    className: "lg:col-span-3",
  },
  {
    n: "03",
    title: "Daily execution",
    desc:
      "Write, post, reply, and steer the conversation so the brand keeps showing up with intent.",
    icon: PenLine,
    className: "lg:col-span-4",
  },
  {
    n: "04",
    title: "Report and refine",
    desc:
      "Review traction, pull forward what compounds, and cut what looks busy but does not move pipeline.",
    icon: BarChart3,
    className: "lg:col-span-2",
  },
];

export default function Process() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Our process"
        title="A compact operating system for conversation-led growth."
        description="The process stays intentionally simple so execution can move fast without becoming messy."
      />

      <div className="mt-16 grid gap-4 sm:gap-6 lg:mt-28 md:grid-cols-2 lg:grid-cols-6">
        {STEPS.map((step) => (
          <div key={step.n} className={step.className}>
          <BentoCard className="flex h-full min-h-[230px] flex-col p-5 sm:min-h-[260px] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ddccba] bg-[#f7ede0] text-brand-500 transition group-hover:border-brand-500/30 group-hover:bg-brand-500/10 dark:border-[#3a2c21] dark:bg-[#201813]">
                <step.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6c57] dark:text-[#a99478]">
                {step.n}
              </span>
            </div>
            <h3 className={`${display.className} mt-5 text-[1.7rem] text-[#241913] dark:text-[#fff7ec] sm:mt-6 sm:text-[2rem]`}>
              {step.title}
            </h3>
            <p className="theme-copy mt-4 text-[15px] leading-relaxed">
              {step.desc}
            </p>
          </BentoCard>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

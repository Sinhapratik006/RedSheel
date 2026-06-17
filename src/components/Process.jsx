import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const STEPS = [
  {
    n: "01",
    title: "Deep audit",
    desc:
      "Map the subreddits, creators, narratives, and objections already shaping buying behavior.",
  },
  {
    n: "02",
    title: "Strategy build",
    desc:
      "Design the posting, reply, and launch rhythm that fits each channel without losing brand consistency.",
  },
  {
    n: "03",
    title: "Daily execution",
    desc:
      "Write, post, reply, and steer the conversation so the brand keeps showing up with intent.",
  },
  {
    n: "04",
    title: "Report and refine",
    desc:
      "Review traction, pull forward what compounds, and cut what looks busy but does not move pipeline.",
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

      <div className="mt-20 grid gap-6 lg:mt-24 md:grid-cols-2 xl:grid-cols-4">
        {STEPS.map((step) => (
          <BentoCard
            key={step.n}
            className="flex flex-col p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 font-display text-lg font-bold text-white dark:bg-white dark:text-zinc-950">
              {step.n}
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
              {step.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {step.desc}
            </p>
          </BentoCard>
        ))}
      </div>
    </SectionShell>
  );
}

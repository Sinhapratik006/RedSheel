import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";
import { fraunces } from "../lib/fonts";

const RESULTS = [
  {
    metric: "340%",
    label: "Traffic increase",
    desc:
      "A SaaS startup saw 340% more site traffic within 60 days after a Reddit-first education and proof strategy.",
  },
  {
    metric: "18K",
    label: "Followers in 90 days",
    desc:
      "A fintech founder scaled from 800 to 18K followers using our thread, reply, and credibility engine.",
  },
  {
    metric: "$0.38",
    label: "Reddit CPC",
    desc:
      "An ecommerce brand hit a $0.38 CPC on Reddit, roughly 6x cheaper than comparable Google Ads traffic.",
  },
  {
    metric: "2.1M",
    label: "Organic impressions",
    desc:
      "One coordinated Reddit AMA drove 2.1 million impressions and roughly 4,000 product signups.",
  },
  {
    metric: "72 hrs",
    label: "To first breakout post",
    desc:
      "The fastest onboarding-to-traction cycle produced a front-page entrepreneurship thread in under three days.",
  },
  {
    metric: "$220K",
    label: "Attributed revenue",
    desc:
      "A D2C brand tracked $220,000 in attributed revenue from RedSheel-managed Reddit and X campaigns.",
  },
];

function FormattedMetric({ value }) {
  const parts = value.split(/([0-9.]+)/);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const isNumber = /^[0-9.]+$/.test(part);
        return (
          <span
            key={i}
            className={
              isNumber ? "text-zinc-950 dark:text-zinc-50" : "text-brand-500"
            }
          >
            {part}
          </span>
        );
      })}
    </>
  );
}

export default function Results() {
  return (
    <SectionShell id="results" noPadding className="pt-44 pb-24 lg:pt-52 lg:pb-32">
      <SectionHeading
        eyebrow="Results"
        title="Measured traction, with proof that stays readable."
        description="The goal is clearer authority, better response quality, and revenue signals the team can actually use."
      />

      <div className="mt-24 grid gap-6 lg:mt-28 md:grid-cols-2 xl:grid-cols-3">
        {RESULTS.map((result) => (
          <BentoCard
            key={result.metric}
            className="flex flex-col p-8"
          >
            <p className={`${fraunces.className} text-[3rem] tracking-tight`}>
              <FormattedMetric value={result.metric} />
            </p>
            <h3 className="mt-6 text-[17px] font-bold text-[#241913] dark:text-[#fff7ec]">
              {result.label}
            </h3>
            <p className="theme-copy mt-3 text-[15px] leading-relaxed">
              {result.desc}
            </p>
          </BentoCard>
        ))}
      </div>
    </SectionShell>
  );
}

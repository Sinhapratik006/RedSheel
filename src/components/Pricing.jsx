"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";

const PLANS = [
  {
    name: "Starter",
    price: "499",
    featured: false,
    features: [
      "One platform: Reddit or X",
      "12 posts per month",
      "Weekly reporting",
      "Community monitoring",
      "Dedicated account manager",
    ],
  },
  {
    name: "Growth",
    price: "999",
    featured: true,
    features: [
      "Reddit and X together",
      "30 posts per month",
      "Daily engagement support",
      "Reddit ads management",
      "Monthly strategy call",
      "Viral content targeting",
    ],
  },
  {
    name: "Agency",
    price: "2,499",
    featured: false,
    features: [
      "Full-funnel brand system",
      "Unlimited posting support",
      "Ghost-writing included",
      "AMA campaign setup",
      "Weekly strategy calls",
      "Priority Slack support",
    ],
  },
];

export default function Pricing() {
  return (
    <SectionShell id="pricing" noPadding className="pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-32 lg:pt-52">
      <SectionHeading
        eyebrow="Pricing"
        title="Straightforward plans, designed to read like a product."
        description="Clear progression, fewer distractions, and a clean comparison between what each scope handles."
      />

      <div className="mt-16 grid gap-4 sm:gap-6 lg:mt-28 xl:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`theme-card relative flex flex-col p-5 transition-all sm:p-8 ${
              plan.featured
                ? "border-brand-500/45 bg-[#fdf0f1] dark:bg-[#2a1a19]"
                : ""
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-500/30">
                Most popular
              </div>
            )}

            <h3 className="font-display text-[1.75rem] text-[#241913] dark:text-[#fff7ec] sm:text-[2rem]">
              {plan.name}
            </h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-display text-[2.65rem] tracking-tight text-[#241913] dark:text-[#fff7ec] sm:text-[3.2rem]">
                ${plan.price}
              </span>
              <span className="pb-2 text-sm font-medium text-[#8a6c57] dark:text-[#a99478]">
                per month
              </span>
            </div>

            <div className="mt-8 border-t border-[#ded1bf] dark:border-[#3a2c21]" />

            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[15px] font-medium"
                >
                  <Check className={`h-5 w-5 shrink-0 ${plan.featured ? "text-brand-500" : "text-brand-500"}`} />
                  <span className="text-[#5f4c3d] dark:text-[#d9ccb9]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              className={`relative mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-bold transition ${
                plan.featured
                  ? "bg-brand-500 text-white hover:bg-brand-600"
                  : "bg-[#fff8ef] text-[#241913] hover:bg-[#f8efe2] dark:bg-[#241c16] dark:text-[#f6ecde] dark:hover:bg-[#2a211b]"
              }`}
              href="/contact"
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-[5px] rounded-full border-2 border-dashed ${
                  plan.featured
                    ? "border-white/55"
                    : "border-[#dfcfbc] dark:border-[#4d3a2c]"
                }`}
              />
              {plan.featured ? "Choose Growth" : "Talk to RedSheel"}
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

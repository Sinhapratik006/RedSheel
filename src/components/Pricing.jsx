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
    <SectionShell id="pricing" noPadding className="pt-40 pb-20 lg:pt-48 lg:pb-28">
      <SectionHeading
        eyebrow="Pricing"
        title="Straightforward plans, designed to read like a product."
        description="Clear progression, fewer distractions, and a clean comparison between what each scope handles."
      />

      <div className="mt-20 grid gap-6 lg:mt-24 xl:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col rounded-2xl p-8 transition-all ${
              plan.featured
                ? "bg-zinc-950 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:bg-zinc-50 dark:text-zinc-950"
                : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:bg-zinc-900/40 dark:shadow-none"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-500/30">
                Most popular
              </div>
            )}

            <h3 className={`font-display text-2xl font-bold ${plan.featured ? "" : "text-zinc-950 dark:text-zinc-50"}`}>
              {plan.name}
            </h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-display text-5xl font-bold tracking-tight">
                ${plan.price}
              </span>
              <span className={`pb-2 text-sm font-medium ${plan.featured ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-500 dark:text-zinc-400"}`}>
                per month
              </span>
            </div>

            <div className={`mt-8 h-px w-full ${plan.featured ? "bg-zinc-800 dark:bg-zinc-200" : "bg-zinc-100 dark:bg-zinc-800"}`} />

            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[15px] font-medium"
                >
                  <Check className={`h-5 w-5 shrink-0 ${plan.featured ? "text-brand-500" : "text-brand-500"}`} />
                  <span className={plan.featured ? "text-zinc-300 dark:text-zinc-700" : "text-zinc-600 dark:text-zinc-300"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-bold transition active:scale-[0.98] ${
                plan.featured
                  ? "bg-white text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800"
                  : "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              }`}
              href="/contact"
            >
              {plan.featured ? "Choose Growth" : "Talk to RedSheel"}
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

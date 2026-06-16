"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <SectionShell id="contact" noPadding className="pt-40 pb-20 lg:pt-48 lg:pb-28">
      <SectionHeading
        eyebrow="Contact Us"
        title="If the fit is there, we can move quickly."
        description="Leave your email and we will send a focused Reddit and X audit with the clearest opportunities to explore first."
      />

      <div className="mt-20 overflow-hidden rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] lg:mt-24 dark:bg-zinc-900/40 dark:shadow-none sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Get in touch
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              Ready to build demand?
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Drop your email below and our team will get back to you within 24 hours. No hard sells, just straight strategy.
            </p>
          </div>

          <div>
            <form
              className="flex flex-col gap-4 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                className="h-14 flex-1 rounded-full border-none bg-zinc-100 px-6 text-[15px] font-medium text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:ring-2 focus:ring-brand-500 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-500"
                placeholder="your@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="group flex h-14 items-center justify-center rounded-full bg-zinc-950 px-8 text-[15px] font-bold text-white transition hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Get free audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] font-bold text-zinc-600 dark:text-zinc-400">
              {["No hard sell", "Platform-native recommendations", "Fast turnaround"].map(
                (item) => (
                  <span key={item} className="rounded-full bg-zinc-100 px-4 py-2 dark:bg-zinc-800">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

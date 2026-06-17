"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { display } from "../lib/fonts";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";
import BentoCard from "./BentoCard";

const TEAM_HANDLES = [
  {
    role: "Founder",
    name: "Shreyansh",
    handle: "@ShreyanshM10802",
  },
  {
    role: "Co-founder and dev",
    name: "Pratik Sinha",
    handle: "@PratikSinhatwt",
  },
  {
    role: "Founding engineer",
    name: "Shivam Gaur",
    handle: "@ishivgaur",
  },
];

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <>
      <SectionShell id="contact" noPadding className="pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-32 lg:pt-52">
        <SectionHeading
          eyebrow="Contact Us"
          title="If the fit is there, we can move quickly."
          description="Leave your email and we will send a focused Reddit and X audit with the clearest opportunities to explore first."
        />

        <div className="theme-card mt-16 overflow-hidden p-5 sm:p-10 lg:mt-28 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-10">
            <div>
              <div className="theme-pill">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Get in touch
              </div>
              <h2 className={`${display.className} mt-6 max-w-2xl text-[2.05rem] leading-[1] text-[#241913] dark:text-[#fff7ec] sm:mt-7 sm:text-[3.5rem]`}>
                Ready to build demand?
              </h2>
              <p className="theme-copy mt-4 max-w-xl text-[0.95rem] leading-7 sm:mt-5 sm:text-[1.05rem]">
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
                  className="h-[52px] flex-1 rounded-full border border-[#d6c7b4] bg-[#fffdf8] px-5 text-[0.95rem] text-[#241913] outline-none transition placeholder:text-[#a28b75] focus:border-brand-500 dark:border-[#4a392b] dark:bg-[#1d1713] dark:text-zinc-50 dark:placeholder:text-[#7d6a59] sm:h-14 sm:px-6 sm:text-[1.05rem]"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  type="submit"
                  className="group relative flex h-[52px] cursor-pointer items-center justify-center rounded-full bg-brand-500 px-6 text-[0.95rem] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_16px_34px_rgba(243,68,81,0.24)] transition hover:bg-brand-600 sm:h-14 sm:px-9 sm:text-[1.05rem]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[5px] rounded-full border-2 border-dashed border-white/55"
                  />
                  Get free audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] text-[#6f5947] dark:text-[#b7a28a]">
                {["No hard sell", "Platform-native recommendations", "Fast turnaround"].map(
                  (item) => (
                    <span key={item} className="rounded-full border border-[#d6c7b4] bg-[#fff8ed] px-4 py-2 font-mono text-[11px] uppercase dark:border-[#4a392b] dark:bg-[#1d1713]">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="team-on-x" noPadding className="py-20 sm:py-28 lg:py-32">
        <SectionHeading
          eyebrow="Team on X"
          title="Reach the people building RedSheel."
          description="Direct X handles for the core team."
        />

        <div className="mt-14 grid auto-rows-[minmax(200px,auto)] gap-4 sm:gap-6 lg:mt-24 lg:grid-cols-6">
          <BentoCard
            href={`https://x.com/${TEAM_HANDLES[0].handle.slice(1)}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`${TEAM_HANDLES[0].name} on X`}
            className="flex min-h-[340px] cursor-pointer flex-col p-5 sm:p-10 lg:col-span-3 lg:row-span-2 lg:min-h-[430px]"
          >
            <div className="flex items-start justify-between gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ddccba] bg-[#f7ede0] text-brand-500 transition group-hover:border-brand-500/35 group-hover:bg-brand-500/10 dark:border-[#3a2c21] dark:bg-[#201813]">
                <FaXTwitter className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-[#dfcebb] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a6c57] dark:border-[#3a2c21] dark:text-[#a99478]">
                Founder
              </span>
            </div>

            <div className="mt-auto max-w-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-500">
                Public narrative
              </p>
              <h3 className={`${display.className} mt-4 text-[2.35rem] leading-[0.98] text-[#241913] dark:text-[#fff7ec] sm:text-[4rem]`}>
                {TEAM_HANDLES[0].name}
              </h3>
              <p className="theme-copy mt-5 text-[15px] leading-7">
                Founder voice and direction for the communities RedSheel builds in.
              </p>
              <div className="mt-7 inline-flex max-w-full items-center gap-3 rounded-full border border-[#eadccd] bg-[#fff8ef]/70 px-4 py-3 text-[#5f4c3d] transition group-hover:border-brand-500/40 group-hover:text-brand-500 dark:border-[#3a2c21] dark:bg-[#19130f]/70 dark:text-[#d9ccb9] dark:group-hover:text-brand-300 sm:mt-8 sm:px-5">
                <span className="truncate font-mono text-[12px]">
                  {TEAM_HANDLES[0].handle}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </div>
            </div>
          </BentoCard>

          {TEAM_HANDLES.slice(1).map((person) => (
            <BentoCard
              key={person.handle}
              href={`https://x.com/${person.handle.slice(1)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${person.name} on X`}
              className="flex min-h-[200px] cursor-pointer flex-col p-5 sm:p-8 lg:col-span-3"
            >
              <div className="flex h-full flex-col justify-between gap-8 sm:flex-row sm:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#ddccba] bg-[#f7ede0] text-brand-500 transition group-hover:border-brand-500/35 group-hover:bg-brand-500/10 dark:border-[#3a2c21] dark:bg-[#201813]">
                      <FaXTwitter className="h-4.5 w-4.5" />
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-500">
                      {person.role}
                    </p>
                  </div>
                  <h3 className={`${display.className} mt-6 text-[1.95rem] leading-[1] text-[#241913] dark:text-[#fff7ec] sm:mt-8 sm:text-[2.35rem]`}>
                    {person.name}
                  </h3>
                </div>

                <div className="flex w-fit max-w-full items-center gap-3 rounded-full border border-[#eadccd] bg-[#fff8ef]/70 px-4 py-3 text-[#5f4c3d] transition group-hover:border-brand-500/40 group-hover:text-brand-500 dark:border-[#3a2c21] dark:bg-[#19130f]/70 dark:text-[#d9ccb9] dark:group-hover:text-brand-300">
                  <span className="min-w-0 truncate font-mono text-[12px]">
                    {person.handle}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

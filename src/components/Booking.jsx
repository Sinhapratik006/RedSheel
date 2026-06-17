"use client";

import { useMemo, useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import { CAL_BOOKING_LINK } from "../config";
import { getCalBookingUrl, normalizeCalLink } from "../utils/calBooking";

export default function Booking() {
  const calLink = useMemo(() => normalizeCalLink(CAL_BOOKING_LINK), []);
  const bookingUrl = useMemo(() => getCalBookingUrl(CAL_BOOKING_LINK), []);
  const hasBookingLink = Boolean(calLink);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!hasBookingLink) return;
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#e50914" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      
      cal("on", {
        action: "*",
        callback: (e) => {
          if (e.detail.type === "linkReady" || e.detail.type === "uiReady") {
            setIsLoaded(true);
          }
        },
      });

      // Safety fallback to ensure it eventually shows even if events fail
      setTimeout(() => setIsLoaded(true), 3000);
    })();
  }, [hasBookingLink]);

  return (
    <SectionShell id="booking" noPadding className="pt-40 pb-20 lg:pt-48 lg:pb-28">
      <SectionHeading
        eyebrow="Book a call"
        title="A booking flow that feels native to the site."
        description="Simple context on the left, clean scheduling on the right, and no extra friction before the conversation starts."
      />

      <div className="mt-20 grid gap-6 lg:mt-24 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
        <div className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:bg-zinc-900/40 dark:shadow-none">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Book a focused strategy call.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            We will use the session to look at platform fit, current growth friction,
            and where Reddit or X can create the clearest momentum.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Platform fit and message review",
              "Fast audit of your current growth loop",
              "Next-step recommendation after the call",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[15px] font-medium text-zinc-700 dark:text-zinc-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {hasBookingLink ? (
            <a
              className="group mt-10 inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3.5 text-[15px] font-bold text-white transition hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open booking in a new tab
              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <div className="mt-10 rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900/60">
              <p className="text-[15px] font-bold text-zinc-950 dark:text-zinc-50">
                Add your Cal.com event link to activate the live scheduler.
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Set <code className="rounded bg-white/60 px-1.5 py-0.5 text-zinc-950 dark:bg-black/40 dark:text-zinc-50">NEXT_PUBLIC_CAL_LINK</code>
                {" "}to a Cal.com path like <code className="rounded bg-white/60 px-1.5 py-0.5 text-zinc-950 dark:bg-black/40 dark:text-zinc-50">your-user/intro-call</code>.
              </p>
            </div>
          )}
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:bg-zinc-900/40 dark:shadow-none">
          {hasBookingLink ? (
            <div className="relative w-full min-h-[520px] max-h-[560px] overflow-y-auto rounded-2xl bg-white pr-1 dark:bg-transparent">
              {!isLoaded && (
                <div className="absolute inset-0 z-0 flex flex-col p-4 sm:p-6">
                  {/* Top Details Skeleton */}
                  <div className="flex w-full flex-col gap-3">
                    <div className="h-8 w-8 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800/60" />
                    <div className="mt-1 h-3.5 w-32 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800/60" />
                    <div className="h-7 w-48 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800/60" />
                    <div className="mt-2 h-3.5 w-16 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800/60" />
                    <div className="h-3.5 w-36 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800/60" />
                    <div className="h-3.5 w-32 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800/60" />
                  </div>

                  {/* Bottom Calendar Skeleton */}
                  <div className="mt-8 flex w-full flex-1 flex-col gap-4">
                    <div className="flex items-center justify-between px-1">
                      <div className="h-4 w-24 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800/60" />
                      <div className="flex gap-3">
                        <div className="h-4 w-4 animate-pulse rounded-sm bg-zinc-200 dark:bg-zinc-800/60" />
                        <div className="h-4 w-4 animate-pulse rounded-sm bg-zinc-200 dark:bg-zinc-800/60" />
                      </div>
                    </div>
                    
                    {/* Days row */}
                    <div className="grid grid-cols-7 gap-2 px-1 pb-2">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={`day-${i}`} className="mx-auto h-2.5 w-6 animate-pulse rounded-sm bg-zinc-200 dark:bg-zinc-800/60" />
                      ))}
                    </div>

                    {/* Grid */}
                    <div className="grid flex-1 grid-cols-7 gap-2 pb-4">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div
                          key={`slot-${i}`}
                          className="aspect-square w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800/60"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div
                className={`relative z-10 w-full transition-opacity duration-700 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                <Cal
                  calLink={calLink}
                  style={{ width: "100%", height: "100%" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </div>
          ) : (
            <div className="flex min-h-[640px] items-center justify-center rounded-2xl bg-zinc-50 p-8 text-center dark:bg-zinc-900/30">
              <div className="max-w-md">
                <p className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                  Cal.com embed placeholder
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  The booking UI will appear here as soon as the Cal.com event path is configured.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

"use client";

import { useMemo, useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ExternalLink } from "lucide-react";
import { fraunces } from "../lib/fonts";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import { CAL_BOOKING_LINK } from "../config";
import { getCalBookingUrl, normalizeCalLink } from "../utils/calBooking";

const CAL_ACCENT = "#f34451";

const CAL_THEME = {
  theme: "auto",
  styles: {
    branding: { brandColor: CAL_ACCENT },
    body: { background: "transparent" },
    availabilityDatePicker: {
      background: "transparent",
      color: "#241913",
    },
    enabledDateButton: {
      background: "#fff8ef",
      color: "#241913",
    },
    disabledDateButton: {
      background: "transparent",
      color: "#a99478",
    },
  },
  cssVarsPerTheme: {
    light: {
      "--cal-brand": CAL_ACCENT,
      "--cal-brand-emphasis": "#d93240",
      "--cal-brand-text": "#fff7ec",
      "--cal-bg": "#fff9f1",
      "--cal-bg-muted": "#fbf4ea",
      "--cal-bg-subtle": "#fff8ef",
      "--cal-bg-emphasis": "#f3e4d5",
      "--cal-bg-primary": CAL_ACCENT,
      "--cal-bg-primary-emphasis": "#d93240",
      "--cal-bg-brand": CAL_ACCENT,
      "--cal-bg-brand-emphasis": "#d93240",
      "--cal-border": "#d6c7b4",
      "--cal-border-subtle": "#eadccd",
      "--cal-border-emphasis": "#bda890",
      "--cal-border-booker": "#d6c7b4",
      "--cal-text": "#5f4c3d",
      "--cal-text-emphasis": "#241913",
      "--cal-text-subtle": "#8a6c57",
      "--cal-text-muted": "#a99478",
      "--cal-text-inverted": "#fff7ec",
      "--cal-radius": "0.75rem",
      "--cal-radius-md": "0.9rem",
      "--cal-radius-lg": "1rem",
      "--cal-radius-xl": "1.15rem",
      "--cal-radius-2xl": "1.35rem",
    },
    dark: {
      "--cal-brand": CAL_ACCENT,
      "--cal-brand-emphasis": "#ff5c67",
      "--cal-brand-text": "#fff7ec",
      "--cal-bg": "#241c16",
      "--cal-bg-muted": "#1d1713",
      "--cal-bg-subtle": "#2a2019",
      "--cal-bg-emphasis": "#34271e",
      "--cal-bg-primary": CAL_ACCENT,
      "--cal-bg-primary-emphasis": "#ff5c67",
      "--cal-bg-brand": CAL_ACCENT,
      "--cal-bg-brand-emphasis": "#ff5c67",
      "--cal-border": "#4a392b",
      "--cal-border-subtle": "#3a2c21",
      "--cal-border-emphasis": "#6f5947",
      "--cal-border-booker": "#4a392b",
      "--cal-text": "#d9ccb9",
      "--cal-text-emphasis": "#fff7ec",
      "--cal-text-subtle": "#b7a28a",
      "--cal-text-muted": "#8a6c57",
      "--cal-text-inverted": "#fff7ec",
      "--cal-radius": "0.75rem",
      "--cal-radius-md": "0.9rem",
      "--cal-radius-lg": "1rem",
      "--cal-radius-xl": "1.15rem",
      "--cal-radius-2xl": "1.35rem",
    },
  },
};

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
        ...CAL_THEME,
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
    <SectionShell id="booking" noPadding className="pt-44 pb-24 lg:pt-52 lg:pb-32">
      <SectionHeading
        eyebrow="Book a call"
        title="A booking flow that feels native to the site."
        description="Simple context on the left, clean scheduling on the right, and no extra friction before the conversation starts."
      />

      <div className="mt-24 grid gap-6 lg:mt-28 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
        <div className="theme-card p-8">
          <h2 className={`${fraunces.className} text-[2.2rem] tracking-tight text-[#241913] dark:text-[#fff7ec]`}>
            Book a focused strategy call.
          </h2>
          <p className="theme-copy mt-4 max-w-xl text-[15px] leading-relaxed">
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
                className="flex items-center gap-3 text-[15px] font-medium text-[#5f4c3d] dark:text-[#d9ccb9]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {hasBookingLink ? (
            <a
              className="group relative mt-10 inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-[15px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_16px_34px_rgba(243,68,81,0.24)] transition hover:bg-brand-600"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[5px] rounded-full border-2 border-dashed border-white/55"
              />
              Open booking in a new tab
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <div className="theme-card-muted mt-10 p-6">
              <p className="text-[15px] font-bold text-[#241913] dark:text-[#fff7ec]">
                Add your Cal.com event link to activate the live scheduler.
              </p>
              <p className="theme-copy mt-2 text-sm leading-6">
                Set <code className="rounded bg-white/60 px-1.5 py-0.5 text-zinc-950 dark:bg-black/40 dark:text-zinc-50">NEXT_PUBLIC_CAL_LINK</code>
                {" "}to a Cal.com path like <code className="rounded bg-white/60 px-1.5 py-0.5 text-zinc-950 dark:bg-black/40 dark:text-zinc-50">your-user/intro-call</code>.
              </p>
            </div>
          )}
        </div>

        <div className="theme-card p-3 sm:p-4">
          {hasBookingLink ? (
            <div className="relative w-full min-h-[520px] max-h-[560px] overflow-y-auto overflow-x-hidden rounded-[22px] border border-[#ded1bf] bg-[#fff9f1] pr-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] dark:border-[#3a2c21] dark:bg-[#1d1713] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              {!isLoaded && (
                <div className="absolute inset-0 z-0 flex flex-col bg-[#fff9f1] p-4 sm:p-6 dark:bg-[#1d1713]">
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
                  className="h-full w-full"
                  style={{ width: "100%", height: "100%" }}
                  config={{ layout: "month_view", theme: "auto" }}
                />
              </div>
            </div>
          ) : (
            <div className="theme-card-muted flex min-h-[640px] items-center justify-center p-8 text-center">
              <div className="max-w-md">
                <p className={`${fraunces.className} text-[2rem] text-[#241913] dark:text-[#fff7ec]`}>
                  Cal.com embed placeholder
                </p>
                <p className="theme-copy mt-3 text-[15px] leading-relaxed">
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

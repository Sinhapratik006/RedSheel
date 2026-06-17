"use client";

import Link from "next/link";
import { COPYRIGHT_YEAR, SITE_NAME, X_HANDLE } from "../config";

export default function Footer() {
  const hasHandle = X_HANDLE && X_HANDLE.trim() !== "";

  return (
    <footer className="border-t border-zinc-200/50 bg-[#f7f7f5] px-5 py-12 dark:border-zinc-800/50 dark:bg-[#080808] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Link className="inline-flex items-center" href="/">
            <img
              src="/redsheel-logo.svg"
              alt={SITE_NAME}
              className="h-10 w-auto max-w-[214px] dark:hidden opacity-80 transition hover:opacity-100"
            />
            <img
              src="/redsheel-logo-dark.svg"
              alt={SITE_NAME}
              className="hidden h-10 w-auto max-w-[214px] dark:block opacity-80 transition hover:opacity-100"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-500">
            Copyright {COPYRIGHT_YEAR}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 lg:justify-end">
          <Link className="transition hover:text-brand-500" href="/services">
            Services
          </Link>
          <Link className="transition hover:text-brand-500" href="/results">
            Results
          </Link>
          <Link className="transition hover:text-brand-500" href="/pricing">
            Pricing
          </Link>
          {hasHandle ? (
            <a
              className="transition hover:text-brand-500"
              href={`https://x.com/${X_HANDLE}`}
              target="_blank"
              rel="noreferrer"
            >
              X @{X_HANDLE}
            </a>
          ) : (
            <span
              className="text-zinc-400 dark:text-zinc-600"
              title="Add your X handle in src/config.js"
            >
              X @handle
            </span>
          )}
          <Link className="transition hover:text-brand-500" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

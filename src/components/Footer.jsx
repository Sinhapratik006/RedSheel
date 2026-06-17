"use client";

import Link from "next/link";
import { COPYRIGHT_YEAR, SITE_NAME, X_HANDLE } from "../config";

export default function Footer() {
  const hasHandle = X_HANDLE && X_HANDLE.trim() !== "";

  return (
    <footer className="border-t-2 border-dashed border-[#d8c8b5] bg-[#f5efe4] dark:border-[#3d3024] dark:bg-[#17120f]">
      <div className="mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-12">
        <div className="py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Link
                className="inline-flex items-center rounded-[16px] transition"
                href="/"
                aria-label={SITE_NAME}
              >
                <img
                  src="/redsheel-brand.svg"
                  alt=""
                  className="h-11 w-auto object-contain opacity-90 transition hover:opacity-100 dark:hidden"
                />
                <img
                  src="/redsheel-brand-dark.svg"
                  alt=""
                  className="hidden h-11 w-auto object-contain opacity-90 transition hover:opacity-100 dark:block"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[#8a6c57] dark:text-[#8a6c57]">
                Copyright {COPYRIGHT_YEAR}. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#6f5947] dark:text-[#b7a28a] lg:justify-end">
              <Link className="transition hover:text-brand-500" href="/services">
                Services
              </Link>
              <Link className="transition hover:text-brand-500" href="/results">
                Results
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
                  className="text-[#a28b75] dark:text-[#6e5947]"
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
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_NAME } from "../config";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b-2 border-dashed border-[#d8c8b5] bg-[#f5efe4]/94 backdrop-blur-md dark:border-[#3d3024] dark:bg-[#17120f]/94">
      <div className="mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-12">
        <div
          className={`flex w-full items-center justify-between px-0 py-3 transition-all duration-300 sm:py-4 ${
            isScrolled || isMobileMenuOpen
              ? "opacity-100"
              : "opacity-100"
          }`}
        >
          <div className="flex items-center gap-3">
            <Link
              className="group inline-flex items-center rounded-[15px] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
              href="/"
              aria-label={SITE_NAME}
            >
              <img
                src="/redsheel-brand.svg"
                alt=""
                className="h-10 w-auto object-contain opacity-95 transition duration-300 group-hover:opacity-100 dark:hidden sm:h-11"
              />
              <img
                src="/redsheel-brand-dark.svg"
                alt=""
                className="hidden h-10 w-auto object-contain opacity-95 transition duration-300 group-hover:opacity-100 dark:block sm:h-11"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] transition-colors duration-300 ${
                    isActive 
                      ? "text-brand-400 dark:text-brand-400" 
                      : "text-[#7a614d] hover:text-[#241913] dark:text-[#b8ab98] dark:hover:text-[#f6ecde]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Link
              className="hidden group relative h-10 items-center rounded-full bg-brand-500 px-5 text-[13px] font-medium leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_26px_rgba(243,68,81,0.22)] transition duration-200 hover:bg-brand-600 md:inline-flex"
              href="/contact"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[4px] rounded-full border-2 border-dashed border-white/55"
              />
              Book a Call
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff8ef] text-[#241913] transition hover:bg-[#f8efe2] dark:bg-[#241c16] dark:text-[#f6ecde] dark:hover:bg-[#2d251f] md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-2.5 right-2.5 top-[72px] mt-2 origin-top rounded-[22px] border border-[#d6c7b4] bg-[#fff9f1] p-4 shadow-[0_18px_50px_rgba(74,39,21,0.14)] dark:border-[#4a392b] dark:bg-[#201913] dark:shadow-[0_18px_50px_rgba(0,0,0,0.32)] sm:left-6 sm:right-6 sm:top-[80px] sm:p-5 md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-base transition-colors ${
                        isActive ? "text-brand-400" : "text-[#6f5947] dark:text-[#d2c3ae]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="mt-6 flex flex-col gap-4 border-t-2 border-dashed border-[#ded1bf] pt-6 dark:border-[#3a2c21]">
                <Link
                  className="group relative inline-flex h-10 w-full items-center justify-center rounded-full bg-brand-500 px-5 text-[13px] font-medium leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_26px_rgba(243,68,81,0.22)] transition hover:bg-brand-600"
                  href="/contact"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[4px] rounded-full border-2 border-dashed border-white/55"
                  />
                  Book a Call
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm text-[#6f5947] dark:text-[#b8ab98]">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

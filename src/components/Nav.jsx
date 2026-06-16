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
  { href: "/pricing", label: "Pricing" },
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
    <header className="fixed inset-x-0 top-0 z-50 w-full pt-4 sm:pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
              ? "bg-white/90 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl dark:border dark:border-zinc-800/50 dark:bg-zinc-950/90 dark:shadow-none"
              : "border border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center gap-3">
            <Link className="group inline-flex items-center" href="/" aria-label={SITE_NAME}>
              <img
                src="/redsheel-logo.svg"
                alt={SITE_NAME}
                className="h-7 w-auto max-w-[150px] opacity-95 transition duration-300 group-hover:opacity-100 dark:hidden sm:h-8 sm:max-w-[196px]"
              />
              <img
                src="/redsheel-logo-dark.svg"
                alt={SITE_NAME}
                className="hidden h-7 w-auto max-w-[150px] opacity-95 transition duration-300 group-hover:opacity-100 dark:block sm:h-8 sm:max-w-[196px]"
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
                  className={`relative text-[14px] font-medium transition-colors duration-300 ${
                    isActive 
                      ? "text-brand-500 dark:text-brand-400" 
                      : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Link
              className="hidden group rounded-xl bg-zinc-950 px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition duration-200 hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 md:inline-flex items-center"
              href="/contact"
            >
              Book a Call
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
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
              className="absolute left-4 right-4 top-[76px] mt-2 origin-top rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:border dark:border-zinc-800/50 dark:bg-zinc-950 sm:left-8 sm:right-8 md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        isActive ? "text-brand-500" : "text-zinc-600 dark:text-zinc-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="mt-6 flex flex-col gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800/50">
                <Link
                  className="group inline-flex w-full items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-[15px] font-semibold text-white transition active:scale-[0.98] dark:bg-white dark:text-zinc-950"
                  href="/contact"
                >
                  Book a Call
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Theme</span>
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

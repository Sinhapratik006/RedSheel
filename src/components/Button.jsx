import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "", 
  icon = null 
}) {
  const baseStyles = "group relative inline-flex items-center justify-center overflow-hidden rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-zinc-950 text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
    secondary: "border border-zinc-200 bg-white text-zinc-950 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900",
  };

  const buttonContent = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {buttonContent}
    </button>
  );
}

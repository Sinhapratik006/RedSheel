import Link from "next/link";

export default function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "", 
  icon = null 
}) {
  const baseStyles = "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition duration-200";
  
  const variants = {
    primary:
      "bg-brand-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_16px_34px_rgba(243,68,81,0.24)] hover:bg-brand-600",
    secondary:
      "bg-[#fff8ef] text-[#241913] hover:bg-[#f8efe2] dark:bg-[#241c16] dark:text-[#f6ecde] dark:hover:bg-[#2a211b]",
  };

  const accentChrome =
    variant === "primary" || variant === "secondary" ? (
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-[5px] rounded-full border-2 border-dashed ${
          variant === "primary"
            ? "border-white/55"
            : "border-[#dfcfbc] dark:border-[#4d3a2c]"
        }`}
      />
    ) : null;

  const buttonContent = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && (
        <span>
          {icon}
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {accentChrome}
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {accentChrome}
      {buttonContent}
    </button>
  );
}

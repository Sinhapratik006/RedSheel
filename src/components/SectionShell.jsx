export default function SectionShell({
  id,
  children,
  width = "max-w-6xl",
  className = "",
  contentClassName = "",
  noPadding = false,
}) {
  const defaultPadding = noPadding ? "" : "py-20 sm:py-24 lg:py-28";

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden text-zinc-950 dark:text-zinc-50 ${className}`}
    >
      <div className={`relative mx-auto ${width} px-5 sm:px-8 lg:px-12 ${defaultPadding} ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}

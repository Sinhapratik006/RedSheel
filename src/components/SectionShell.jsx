export default function SectionShell({
  id,
  children,
  width = "max-w-7xl",
  className = "",
  contentClassName = "",
  noPadding = false,
}) {
  const defaultPadding = noPadding ? "" : "py-20 sm:py-[7.5rem] lg:py-36";

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden border-b-2 border-dashed border-[#d8c8b5] text-[#221913] dark:border-[#3d3024] dark:text-[#f6ecde] ${className}`}
    >
      <div className={`relative mx-auto ${width} px-2 sm:px-6 lg:px-12 ${defaultPadding} ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}

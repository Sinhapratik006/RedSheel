export default function SiteCanvas({ children }) {
  return (
    <main className="theme-shell relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(104,82,63,0.08)_1px,transparent_1px)] bg-[size:100%_15rem] opacity-60 dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,68,81,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(243,68,81,0.05),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(243,68,81,0.13),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(243,68,81,0.08),transparent_28%)]" />
      <div className="relative z-10">{children}</div>
    </main>
  );
}

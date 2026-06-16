export default function SiteCanvas({ children }) {
  return (
    <main className="relative isolate overflow-hidden bg-[#f7f7f5] text-zinc-950 dark:bg-[#080808] dark:text-zinc-50">
      <div className="relative z-10">{children}</div>
    </main>
  );
}

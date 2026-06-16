"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function BentoCard({ children, className = "", href, ...props }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Component = href ? Link : "div";

  return (
    <Component
      href={href}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors dark:border-zinc-800/80 dark:bg-[#0a0a0a] ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(229,9,32,0.08), transparent 40%)`,
        }}
      />
      <div className="absolute z-0 inset-x-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-brand-500/0 to-transparent transition-all duration-500 group-hover:via-brand-500/30" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </Component>
  );
}

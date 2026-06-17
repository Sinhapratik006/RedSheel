"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function BentoCard({ children, className = "", href, style, ...props }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setMagnet({
      x: ((x - rect.width / 2) / rect.width) * 7,
      y: ((y - rect.height / 2) / rect.height) * 7,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setOpacity(0);
    setMagnet({ x: 0, y: 0 });
  };

  const Component = href ? Link : "div";

  return (
    <Component
      href={href}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group theme-card relative block overflow-hidden transition-[transform,border-color,box-shadow] hover:border-brand-500/45 hover:shadow-[0_22px_55px_rgba(243,68,81,0.12)] dark:hover:border-brand-400/45 dark:hover:shadow-[0_24px_62px_rgba(243,68,81,0.16)] ${
        isHovering ? "duration-150 ease-out" : "duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      } ${className}`}
      style={{
        ...style,
        transform: `translate3d(${magnet.x}px, ${magnet.y}px, 0)`,
      }}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 z-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      <div className="pointer-events-none absolute right-5 top-5 z-0 h-2 w-2 rounded-full bg-brand-500/0 transition group-hover:bg-brand-500/80 group-hover:shadow-[0_0_22px_rgba(243,68,81,0.55)]" />
      <div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(243,68,81,0.14), transparent 42%)`,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </Component>
  );
}

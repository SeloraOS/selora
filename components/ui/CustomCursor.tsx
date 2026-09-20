"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], .cursor-hover';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    if (dotRef.current) dotRef.current.style.opacity = "1";
    if (ringRef.current) ringRef.current.style.opacity = "1";

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let raf = 0;

    function handleMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 3}px, ${targetY - 3}px, 0)`;
      }
    }

    function handleOver(e: PointerEvent) {
      const target = e.target as Element | null;
      setHovering(!!target?.closest(HOVER_SELECTOR));
    }

    function loop() {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[110] h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-200"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[110] h-9 w-9 rounded-full border border-accent/50 opacity-0 transition-[transform,opacity,background-color] duration-200"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          backgroundColor: hovering ? "rgba(37, 99, 235, 0.08)" : "transparent",
          scale: hovering ? 1.4 : 1,
        } as CSSProperties}
      />
    </>
  );
}

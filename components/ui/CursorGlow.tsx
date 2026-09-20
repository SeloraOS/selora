"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function handleMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function loop() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("pointermove", handleMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[400px] w-[400px] rounded-full opacity-[0.06] blur-3xl md:block"
      style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
    />
  );
}

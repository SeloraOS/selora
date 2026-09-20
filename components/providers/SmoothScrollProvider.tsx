"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "@/lib/lenis";

const NAVBAR_OFFSET = -96;

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    setLenisInstance(lenis);

    let raf: number;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Lenis owns real scroll position, so a plain browser hash-jump (from a
    // <Link href="/#section">, or landing directly on a URL with a hash)
    // gets immediately overridden by Lenis's own animation loop. Route both
    // cases through lenis.scrollTo() instead so they actually land and ease
    // in, rather than jumping and snapping back.
    function handleClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a[href*='#']");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex + 1);
      if (!hash) return;
      if (path && path !== window.location.pathname) return;

      const target = document.getElementById(hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: NAVBAR_OFFSET });
    }

    document.addEventListener("click", handleClick);

    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        requestAnimationFrame(() => {
          lenis.scrollTo(target, { offset: NAVBAR_OFFSET, immediate: true });
        });
      }
    }

    return () => {
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(raf);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

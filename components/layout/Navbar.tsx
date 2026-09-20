"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
        <nav
          className={cn(
            "mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border bg-white/85 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 sm:px-5",
            scrolled ? "border-border shadow-elevated" : "border-border/60 shadow-subtle"
          )}
        >
          <Link href="/" className="focus-ring flex shrink-0 items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="url(#logo-gradient)" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="20" y2="20">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-base font-bold tracking-tight text-foreground">Selora</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "focus-ring relative z-10 block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      active ? "text-accent" : "text-foreground/75 hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-accent/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden shrink-0 md:flex">
            <MagneticButton href="/contact" variant="primary" className="!px-5 !py-2 !text-sm">
              Let&apos;s Talk →
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-[1.5px] w-5 bg-foreground" />
              <span className="h-[1.5px] w-5 bg-foreground" />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

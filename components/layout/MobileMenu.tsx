"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-white md:hidden"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-lg font-bold tracking-tight text-foreground">
          Selora<span className="text-accent">OS</span>
        </span>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
        className="flex flex-col gap-2 px-6 pt-8"
      >
        {NAV_LINKS.map((link) => (
          <motion.div
            key={link.href}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="focus-ring block border-b border-border py-4 text-2xl font-semibold text-foreground"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <div className="px-6 pt-8">
        <MagneticButton href="/contact" variant="primary" className="w-full">
          Let&apos;s Talk →
        </MagneticButton>
      </div>
    </motion.div>
  );
}

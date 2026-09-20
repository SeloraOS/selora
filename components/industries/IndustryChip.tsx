"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Industry } from "@/types";

export default function IndustryChip({ industry }: { industry: Industry }) {
  const [hovered, setHovered] = useState(false);
  const Icon = industry.icon;

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="focus-ring flex items-center gap-2 rounded-full px-2 py-1 transition-colors"
      >
        <Icon
          className={cn(
            "h-4 w-4 shrink-0 transition-colors",
            hovered ? "text-accent" : "text-foreground/60"
          )}
        />
        <span
          className={cn(
            "whitespace-nowrap text-sm font-medium transition-colors",
            hovered ? "text-accent" : "text-foreground/80"
          )}
        >
          {industry.name}
        </span>
      </button>

      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 whitespace-normal rounded-lg border border-border bg-white p-3 text-center text-xs leading-snug text-muted shadow-elevated",
          !hovered && "hidden"
        )}
      >
        {industry.description}
      </motion.p>
    </div>
  );
}

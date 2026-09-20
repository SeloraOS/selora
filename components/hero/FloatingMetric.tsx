"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingMetricProps {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
  delay?: number;
}

export default function FloatingMetric({
  icon: Icon,
  label,
  value,
  className,
  delay = 0,
}: FloatingMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute flex items-center gap-3 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-elevated backdrop-blur-sm",
        className
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-bold leading-none text-foreground">{value}</p>
        <p className="mt-1 text-[11px] text-muted leading-none">{label}</p>
      </div>
    </motion.div>
  );
}

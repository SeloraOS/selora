"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  onOpen: (service: Service) => void;
  palette: { bg: string; text: string };
}

export default function ServiceCard({ service, onOpen, palette }: ServiceCardProps) {
  const Icon = service.icon;
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onOpen(service)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="focus-ring group flex h-full flex-col rounded-card border border-border bg-white p-6 text-left shadow-subtle transition-colors hover:border-accent hover:shadow-elevated"
    >
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
          palette.bg,
          palette.text
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-base font-bold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>

      <div className="mt-auto pt-6">
        <span className="focus-ring flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.button>
  );
}

"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { UserPlus, CheckCircle2 } from "lucide-react";
import AssetImage from "@/components/ui/AssetImage";
import Annotation from "@/components/ui/Annotation";
import FloatingMetric from "./FloatingMetric";
import { getAsset } from "@/lib/utils";

export default function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
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
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto mb-10 aspect-[4/3] w-full max-w-xl [perspective:1400px]"
    >
      <motion.div
        aria-hidden
        style={{ x: translateX, y: translateY }}
        className="absolute -inset-16 -z-10 rounded-full bg-accent/10 blur-3xl"
      />

      <motion.div
        style={{ rotateX, rotateY, x: translateX, y: translateY }}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-white shadow-elevated"
      >
        <AssetImage
          src={getAsset("/assets/hero/hero-dashboard.webp")}
          alt="Selora business operating system dashboard showing CRM pipeline, revenue metrics and team activity"
          fallbackLabel="Hero dashboard asset pending"
          sizes="(max-width: 768px) 90vw, 576px"
          priority
        />
      </motion.div>

      <FloatingMetric
        icon={UserPlus}
        label="2m ago"
        value="New Lead from Website"
        delay={0.3}
        className="-right-6 -top-6 hidden sm:flex"
      />
      <FloatingMetric
        icon={CheckCircle2}
        label="All services operational"
        value="System Running Smoothly"
        delay={0.5}
        className="-bottom-6 -right-4 hidden sm:flex"
      />

      <Annotation
        text="Your Business In One Place"
        className="absolute -bottom-12 left-0 hidden sm:flex"
      />
    </div>
  );
}

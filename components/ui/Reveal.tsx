"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
}

export default function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = as === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

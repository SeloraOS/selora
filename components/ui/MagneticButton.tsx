"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const styles = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200",
    variant === "primary"
      ? "bg-foreground text-white hover:bg-accent"
      : "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.2 }}
      className="inline-block"
    >
      {href ? (
        <Link href={href} className={styles}>
          {children}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={styles}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}

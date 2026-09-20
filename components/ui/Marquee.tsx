"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({ children, className, pauseOnHover = true }: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-x-hidden overflow-y-visible py-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className={cn("flex w-max motion-safe:animate-marquee", className)}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center pointer-events-none" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

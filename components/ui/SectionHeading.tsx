import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <Tag className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

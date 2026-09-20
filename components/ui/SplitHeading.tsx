import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import MagneticButton from "./MagneticButton";

interface SplitHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function SplitHeading({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: SplitHeadingProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
      <div className="max-w-xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {title}
          </h2>
        </Reveal>
      </div>

      {(description || ctaLabel) && (
        <Reveal delay={0.15} className="max-w-sm lg:text-right">
          {description && (
            <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p>
          )}
          {ctaLabel && ctaHref && (
            <div className="mt-4 lg:flex lg:justify-end">
              <MagneticButton href={ctaHref} variant="secondary">
                {ctaLabel}
              </MagneticButton>
            </div>
          )}
        </Reveal>
      )}
    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import GradientBlob from "@/components/ui/GradientBlob";
import { cn } from "@/lib/utils";
import { ICON_PALETTE } from "@/lib/constants";
import type { ProcessStep } from "@/types";

const steps: ProcessStep[] = [
  { index: "01", title: "Discover", description: "Understand your goals and challenges." },
  { index: "02", title: "Plan", description: "Create a tailored strategy and roadmap." },
  { index: "03", title: "Design & Build", description: "Develop with precision and regular updates." },
  { index: "04", title: "Launch", description: "Deploy and ensure smooth adoption." },
  { index: "05", title: "Support", description: "Ongoing support for long-term growth." },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.5"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <GradientBlob color="violet" className="-left-48 bottom-0" />
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SplitHeading
          eyebrow="How We Work"
          title={
            <>
              A Simple, <span className="text-accent">Transparent</span> Process
            </>
          }
          description="From idea to impact, we keep it clear and collaborative."
          ctaLabel="Our Process in Detail →"
          ctaHref="/about"
        />

        <div ref={ref} className="mt-16">
          <div className="relative hidden lg:block">
            <div className="absolute left-5 right-5 top-5 h-[2px] bg-border [background-image:linear-gradient(to_right,var(--border)_50%,transparent_50%)] [background-size:12px_2px]" />
            <motion.div
              style={{ scaleX, transformOrigin: "left" }}
              className="absolute left-5 right-5 top-5 h-[2px] bg-accent"
            />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => {
                const palette = ICON_PALETTE[i % ICON_PALETTE.length];
                return (
                  <Reveal key={step.index} delay={i * 0.1}>
                    <div className="relative">
                      <div
                        className={cn(
                          "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-sm font-bold shadow-subtle",
                          palette.bg,
                          palette.text
                        )}
                      >
                        {step.index}
                      </div>
                      <h3 className="mt-5 text-base font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="relative space-y-10 lg:hidden">
            <div className="absolute bottom-0 left-5 top-0 w-[2px] bg-border" />
            <motion.div
              style={{ scaleY: scaleX, transformOrigin: "top" }}
              className="absolute bottom-0 left-5 top-0 w-[2px] bg-accent"
            />
            {steps.map((step, i) => {
              const palette = ICON_PALETTE[i % ICON_PALETTE.length];
              return (
                <Reveal key={step.index} delay={i * 0.08}>
                  <div className="relative flex gap-5 pl-0">
                    <div
                      className={cn(
                        "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-sm font-bold shadow-subtle",
                        palette.bg,
                        palette.text
                      )}
                    >
                      {step.index}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

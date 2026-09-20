"use client";

import { TrendingUp, Target, Eye, LifeBuoy } from "lucide-react";
import AssetImage from "@/components/ui/AssetImage";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Annotation from "@/components/ui/Annotation";
import { cn, getAsset } from "@/lib/utils";
import { ICON_PALETTE } from "@/lib/constants";

const points = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "We understand your business before we build.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Future-Ready",
    description: "Solutions that grow with you.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "No hidden costs. No surprises.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    description: "We're here even after launch.",
  },
];

export default function WhySeloraSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-white shadow-elevated">
              <AssetImage
                src={getAsset("/assets/products/crm-dashboard.webp")}
                alt="Selora CRM pipeline dashboard"
                fallbackLabel="Product asset pending"
                sizes="(max-width: 1024px) 100vw, 576px"
              />
            </div>

            <div className="absolute -top-5 left-6 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-elevated">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold leading-none text-foreground">+28%</p>
                <p className="mt-1 text-[11px] leading-none text-muted">Increase in conversions</p>
              </div>
            </div>

            <Annotation
              text="Real Results. Not Just Software."
              className="absolute -bottom-10 left-2 hidden sm:flex"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Why Choose Selora</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              More Than a Vendor. <span className="text-accent">A Long-Term Partner.</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-7">
            {points.map((point, i) => {
              const Icon = point.icon;
              const palette = ICON_PALETTE[i % ICON_PALETTE.length];
              return (
                <Reveal key={point.title} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                        palette.bg,
                        palette.text
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                      <p className="mt-1 text-sm text-muted">{point.description}</p>
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

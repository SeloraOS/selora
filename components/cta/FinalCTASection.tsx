"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import AvatarStack from "@/components/ui/AvatarStack";
import { HERO_METRICS } from "@/lib/constants";
import Counter from "@/components/ui/Counter";

export default function FinalCTASection() {
  return (
    <section className="bg-foreground py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <div className="max-w-lg">
            <Reveal>
              <Eyebrow className="bg-white/10 text-white">Ready to Get Started?</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                Your Next Chapter Starts Here.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base text-white/70">
                Let&apos;s turn your ideas into impactful software solutions.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href="/contact" variant="primary" className="!bg-white !text-foreground hover:!bg-accent hover:!text-white">
                  Start a Project →
                </MagneticButton>
                <MagneticButton href="/contact" variant="secondary" className="!border-white/25 !text-white hover:!border-white">
                  Schedule a Call →
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="flex flex-col gap-6">
            <div className="flex gap-10">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
            <AvatarStack label="Trusted by growing businesses" dark />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

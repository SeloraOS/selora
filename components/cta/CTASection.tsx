"use client";

import AssetImage from "@/components/ui/AssetImage";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import AvatarStack from "@/components/ui/AvatarStack";
import { getAsset } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-card border border-border">
          <div className="absolute inset-0">
            <AssetImage
              src={getAsset("/assets/cta/cta-office.svg")}
              alt=""
              fallbackLabel="Office photo pending"
              fallbackClassName="bg-foreground"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/20" />
          </div>

          <div className="relative hidden lg:block">
            <Reveal delay={0.2} className="absolute right-10 top-10 max-w-[220px] rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
              <p className="text-xs text-white/70">Ideas → Execution = Real Growth</p>
            </Reveal>
            <Reveal delay={0.3} className="absolute right-10 top-28 text-2xl font-bold leading-tight text-white">
              Build
              <br />
              Automate
              <br />
              Grow
            </Reveal>
          </div>

          <div className="relative px-8 py-16 sm:px-14 sm:py-20 lg:max-w-xl">
            <Reveal>
              <Eyebrow className="bg-white/10 text-white">Built for What&apos;s Next</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                Let&apos;s Build a Smarter, Stronger Tomorrow.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-md text-base text-white/70">
                Share your idea. We&apos;ll help you turn it into a powerful
                digital solution.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href="/contact" variant="primary" className="!bg-foreground !text-white hover:!bg-accent">
                  Start a Project →
                </MagneticButton>
                <MagneticButton href="/contact" variant="secondary" className="!border-transparent !bg-white !text-foreground hover:!text-accent">
                  Talk to Our Team
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.25} className="mt-8">
              <AvatarStack label="Join 30+ happy clients" dark />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

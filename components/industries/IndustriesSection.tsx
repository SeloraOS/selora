"use client";

import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import { industries } from "@/data/industries";
import IndustryChip from "./IndustryChip";

export default function IndustriesSection() {
  return (
    <section className="border-y border-border bg-white py-14">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            Trusted by Businesses Across Industries
          </p>
        </Reveal>
      </div>

      <div className="mt-8">
        <Marquee className="gap-16 pr-16">
          {industries.map((industry) => (
            <IndustryChip key={industry.id} industry={industry} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

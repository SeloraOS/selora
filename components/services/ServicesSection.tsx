"use client";

import { useState } from "react";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import GradientBlob from "@/components/ui/GradientBlob";
import { services } from "@/data/services";
import { ICON_PALETTE } from "@/lib/constants";
import type { Service } from "@/types";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="solutions" className="relative overflow-hidden py-24 sm:py-32">
      <GradientBlob color="blue" className="-right-40 top-0" />
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SplitHeading
          eyebrow="Our Services"
          title={
            <>
              End-to-End Solutions for <span className="text-accent">Modern Businesses</span>
            </>
          }
          description="From ready-to-deploy modules to fully custom platforms, we build solutions that fit your goals, integrate seamlessly and deliver real results."
          ctaLabel="Explore All Services →"
          ctaHref="/services"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <ServiceCard
                service={service}
                onOpen={setActiveService}
                palette={ICON_PALETTE[i % ICON_PALETTE.length]}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </section>
  );
}

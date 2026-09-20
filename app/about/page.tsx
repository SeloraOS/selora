import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import WhySeloraSection from "@/components/why/WhySeloraSection";
import ProcessSection from "@/components/process/ProcessSection";
import IndustriesSection from "@/components/industries/IndustriesSection";
import CTASection from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Selora is a technology partner that builds CRM, ERP and custom software for growing businesses.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-20 pt-32 sm:pt-40">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <SectionHeading
            eyebrow="About Selora"
            title="Your business should not have to work around software. Your software should work around your business."
            description="We're a technology partner for growing businesses — combining engineering discipline with a real understanding of how businesses operate, so the systems we build fit the way you work, not the other way around."
          />

          <Reveal delay={0.2}>
            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-accent">Who We Serve</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  SMEs, startups and growing enterprises across real estate,
                  healthcare, education, manufacturing, retail and logistics.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent">What We Build</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  CRM and ERP platforms, custom web and mobile applications,
                  automation systems and long-term technical support.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent">How We Work</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Transparent, collaborative and built around your goals from
                  discovery through to long-term support.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WhySeloraSection />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}

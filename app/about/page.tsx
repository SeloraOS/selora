import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import WhySeloraSection from "@/components/why/WhySeloraSection";
import ProcessSection from "@/components/process/ProcessSection";
import IndustriesSection from "@/components/industries/IndustriesSection";
import CTASection from "@/components/cta/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About SeloraOS — Engineering Discipline Meets Enterprise Strategy",
  description:
    "Learn about SeloraOS (seloraos.online), our engineering methodology, enterprise security standards, and why scaling businesses trust us for custom CRM and ERP systems.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "About SeloraOS",
    "enterprise software company",
    "custom software development agency",
    "B2B software engineering",
    "SeloraOS team",
  ],
  openGraph: {
    title: "About SeloraOS — Engineering Discipline Meets Enterprise Strategy",
    description:
      "Learn about SeloraOS, our engineering philosophy, enterprise security standards, and why companies trust us to build custom CRM and ERP software.",
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SeloraOS — Engineering Discipline Meets Enterprise Strategy",
    description:
      "Learn about SeloraOS, our engineering philosophy, enterprise security standards, and why companies trust us to build custom CRM and ERP software.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <section className="pb-20 pt-32 sm:pt-40">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <SectionHeading
            as="h1"
            eyebrow="About SeloraOS"
            title="Your business should not have to work around software. Your software should work around your business."
            description="SeloraOS is an enterprise technology partner for growing businesses — combining rigorous software engineering discipline with operational insight, so the systems we build fit the way you work, not the other way around."
          />

          <Reveal delay={0.2}>
            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-accent">Who We Serve</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  SMEs, high-growth startups, and established enterprises across real estate,
                  healthcare, education, manufacturing, retail, and logistics.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent">What We Build</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Bespoke CRM platforms, high-performance ERP systems, custom web and mobile applications,
                  intelligent automated workflows, and dedicated SLA support.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent">How We Work</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Transparent, agile, and aligned with your bottom-line metrics from architectural discovery
                  through deployment and long-term scaling.
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

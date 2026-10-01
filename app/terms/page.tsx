import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | SeloraOS",
  description:
    "Terms of service, engineering engagement standards, SLA definitions, and licensing agreements for SeloraOS software platforms.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ]}
      />
      <section className="pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <SectionHeading as="h1" eyebrow="Legal" title="Terms of Service" />
          <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
            <p>
              Last updated: October 2026. These Terms of Service govern your use of the SeloraOS website ({SITE.url})
              and outline engagement terms for custom software engineering, CRM, and ERP implementations.
            </p>
            <h2 className="text-base font-semibold text-foreground">1. Engineering Engagements</h2>
            <p>
              All software development services, project timelines, deliverables, and service-level agreements (SLAs)
              are governed by formal Master Services Agreements (MSAs) and Statements of Work (SOWs) executed
              directly between SeloraOS and our clients.
            </p>
            <h2 className="text-base font-semibold text-foreground">2. Intellectual Property Rights</h2>
            <p>
              Upon fulfillment of contractual terms, full ownership of custom application source code, bespoke schemas,
              and dedicated architectures transfers to the client, providing unrestricted operational independence.
            </p>
            <h2 className="text-base font-semibold text-foreground">3. Service Reliability & SLAs</h2>
            <p>
              For clients subscribed to dedicated support tiers, SeloraOS provides 99.9% uptime guarantees, proactive
              security monitoring, and emergency response protocols defined in respective service level agreements.
            </p>
            <h2 className="text-base font-semibold text-foreground">4. Governing Law</h2>
            <p>
              These terms are governed in accordance with international commercial law standards. For inquiries regarding
              contractual agreements, please contact{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent underline">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

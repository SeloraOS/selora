import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | SeloraOS",
  description:
    "Review SeloraOS's privacy policy, data protection standards, client confidentiality, and information security practices.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ]}
      />
      <section className="pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
          <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
            <p>
              Last updated: October 2026. At SeloraOS ({SITE.domain}), we hold client data confidentiality,
              enterprise integrity, and personal privacy as foundational tenets of our engineering practice.
            </p>
            <h2 className="text-base font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              When you submit an inquiry through our contact forms or engage our software engineering services,
              we collect necessary contact information (name, corporate email, company name, project specifications)
              strictly to respond to your project request and formulate solution architectures.
            </p>
            <h2 className="text-base font-semibold text-foreground">2. Client Data & Code Ownership</h2>
            <p>
              All proprietary business logic, customer database records, workflow schematics, and enterprise assets
              processed or developed under client contracts remain the exclusive intellectual property of the client.
              SeloraOS does not sell, lease, or monetize client data.
            </p>
            <h2 className="text-base font-semibold text-foreground">3. Security Standards</h2>
            <p>
              We implement industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest) for all
              telemetry, client interactions, and communication channels.
            </p>
            <h2 className="text-base font-semibold text-foreground">4. Contact & Inquiries</h2>
            <p>
              For privacy-related questions or data deletion requests, contact our compliance team at{" "}
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

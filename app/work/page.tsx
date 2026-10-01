import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkSection from "@/components/work/WorkSection";
import CTASection from "@/components/cta/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enterprise Case Studies & Client Work",
  description:
    "Explore enterprise software case studies built by SeloraOS: custom real estate CRM, smart manufacturing ERP suites, logistics fleet management, and cloud operations platforms.",
  alternates: {
    canonical: "/work",
  },
  keywords: [
    "custom CRM case studies",
    "manufacturing ERP implementation",
    "logistics software case study",
    "enterprise software portfolio",
    "SeloraOS projects",
  ],
  openGraph: {
    title: "Enterprise Case Studies & Client Work | SeloraOS",
    description:
      "Explore real-world software platforms built by SeloraOS across real estate, manufacturing, logistics, and technology.",
    url: `${SITE.url}/work`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Case Studies & Client Work | SeloraOS",
    description:
      "Explore real-world software platforms built by SeloraOS across real estate, manufacturing, logistics, and technology.",
  },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Work", url: "/work" },
        ]}
      />
      <div className="pt-32 sm:pt-40">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <SectionHeading
            as="h1"
            eyebrow="Case Studies & Portfolio"
            title="Software Solutions Engineered for Measurable Business Impact"
            description="Explore how SeloraOS has engineered custom CRM, ERP, and automation platforms that eliminate operational bottlenecks and drive enterprise performance."
          />
        </div>
      </div>
      <WorkSection showAll />
      <CTASection />
    </>
  );
}

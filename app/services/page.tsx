import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesSection from "@/components/services/ServicesSection";
import ProductShowcase from "@/components/showcase/ProductShowcase";
import FAQSection, { type FAQItem } from "@/components/faq/FAQSection";
import CTASection from "@/components/cta/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enterprise CRM, ERP & Custom Software Services",
  description:
    "Explore SeloraOS technology services: custom CRM development, cloud ERP systems, workflow automation, legacy modernization, and 24/7 technical support.",
  alternates: {
    canonical: "/services",
  },
  keywords: [
    "custom CRM development services",
    "cloud ERP implementation",
    "enterprise software development",
    "workflow automation services",
    "API integration agency",
    "bespoke SaaS engineering",
    "SeloraOS services",
  ],
  openGraph: {
    title: "Enterprise CRM, ERP & Custom Software Services | SeloraOS",
    description:
      "End-to-end software solutions: custom CRM platforms, ERP systems, workflow automation, and dedicated engineering support.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise CRM, ERP & Custom Software Services | SeloraOS",
    description:
      "End-to-end software solutions: custom CRM platforms, ERP systems, workflow automation, and dedicated engineering support.",
  },
};

const SERVICE_FAQS: FAQItem[] = [
  {
    question: "What makes SeloraOS custom CRM development different from Salesforce or HubSpot?",
    answer:
      "Unlike off-the-shelf CRM platforms that impose rigid data schemas and perpetual subscription fees per seat, SeloraOS builds custom CRM systems around your exact sales motions, pipeline stages, and proprietary data structures with complete source code ownership.",
  },
  {
    question: "Can an ERP system built by SeloraOS scale as our business adds facilities or locations?",
    answer:
      "Yes. Our ERP systems are architected with modular microservices and scalable cloud databases (PostgreSQL, Redis), allowing you to expand warehouse tracking, multi-entity finances, and supply-chain logistics without performance degradation.",
  },
  {
    question: "Do you build both web and native mobile applications?",
    answer:
      "Yes. We engineer responsive web applications and cross-platform mobile apps for iOS and Android, allowing field reps, warehouse staff, and executives to access real-time operational data from any device.",
  },
  {
    question: "How does SeloraOS support our team after deployment?",
    answer:
      "Every production deployment is covered by continuous monitoring, scheduled maintenance windows, proactive security patches, and direct developer communication channels to ensure 99.9% uptime.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <div className="pt-32 sm:pt-40">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <SectionHeading
            as="h1"
            eyebrow="Our Capabilities"
            title="Enterprise Software Architecture & Custom Engineering"
            description="From high-scale custom CRM systems and intelligent ERP platforms to automated workflow integrations, SeloraOS engineers mission-critical software built for measurable growth."
          />
        </div>
      </div>
      <ServicesSection />
      <ProductShowcase />
      <FAQSection
        title="Services & Implementation FAQ"
        eyebrow="Technical Guidance"
        description="Detailed answers regarding our architecture, development methodologies, and ongoing technical support."
        faqs={SERVICE_FAQS}
      />
      <CTASection />
    </>
  );
}

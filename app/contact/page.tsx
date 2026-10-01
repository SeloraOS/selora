import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact SeloraOS — Enterprise Software Consultations & Inquiries",
  description:
    "Get in touch with the SeloraOS engineering team. Discuss custom CRM platforms, ERP systems, cloud automation, and bespoke software projects.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SeloraOS — Start Your Enterprise Software Project",
    description:
      "Discuss your custom CRM, ERP, or enterprise automation needs with our engineering leads.",
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SeloraOS — Start Your Enterprise Software Project",
    description:
      "Discuss your custom CRM, ERP, or enterprise automation needs with our engineering leads.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <section className="pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <SectionHeading
            as="h1"
            eyebrow="Get In Touch"
            title="Let's Start Building Together"
            description="Tell us about your project and our engineering team will get back to you within one business day."
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}

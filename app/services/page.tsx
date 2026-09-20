import type { Metadata } from "next";
import ServicesSection from "@/components/services/ServicesSection";
import ProductShowcase from "@/components/showcase/ProductShowcase";
import CTASection from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CRM, ERP, custom software, automation and technical support — end-to-end technology solutions from Selora.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32 sm:pt-40" />
      <ServicesSection />
      <ProductShowcase />
      <CTASection />
    </>
  );
}

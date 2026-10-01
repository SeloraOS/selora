import Hero from "@/components/hero/Hero";
import IndustriesSection from "@/components/industries/IndustriesSection";
import ServicesSection from "@/components/services/ServicesSection";
import StickyShowcase from "@/components/showcase/StickyShowcase";
import WhySeloraSection from "@/components/why/WhySeloraSection";
import ProcessSection from "@/components/process/ProcessSection";
import CTASection from "@/components/cta/CTASection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import FinalCTASection from "@/components/cta/FinalCTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesSection />
      <ServicesSection />
      <StickyShowcase />
      <WhySeloraSection />
      <ProcessSection />
      <CTASection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

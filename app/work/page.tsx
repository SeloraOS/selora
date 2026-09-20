import type { Metadata } from "next";
import WorkSection from "@/components/work/WorkSection";
import CTASection from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description: "Recent CRM, ERP, web application and automation projects built by Selora.",
};

export default function WorkPage() {
  return (
    <>
      <div className="pt-32 sm:pt-40" />
      <WorkSection showAll />
      <CTASection />
    </>
  );
}

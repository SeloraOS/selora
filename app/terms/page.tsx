import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionHeading eyebrow="Legal" title="Terms of Service" />
        <div className="mt-10 max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
          <p>
            This placeholder page outlines the terms governing use of the
            Selora website and services. Replace this content with your
            finalized terms before launch.
          </p>
        </div>
      </div>
    </section>
  );
}

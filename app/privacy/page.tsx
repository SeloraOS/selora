import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        <div className="mt-10 max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
          <p>
            This placeholder page outlines how Selora would handle visitor and
            client data. Replace this content with your finalized privacy
            policy before launch.
          </p>
        </div>
      </div>
    </section>
  );
}

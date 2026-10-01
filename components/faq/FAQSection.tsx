"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    question: "What is SeloraOS and what systems do you build?",
    answer:
      "SeloraOS (seloraos.online) is a specialized enterprise technology partner. We engineer bespoke CRM platforms, scalable cloud ERP systems, workflow automation engines, and custom web and mobile platforms built to handle complex business operations without the bloat of generic SaaS.",
    category: "General",
  },
  {
    question: "How do custom CRM and ERP solutions compare to off-the-shelf software?",
    answer:
      "Off-the-shelf tools force your business into rigid workflows and charge escalating per-user monthly fees. SeloraOS develops systems mapped precisely to your proprietary processes, giving you 100% data ownership, zero unnecessary feature clutter, and limitless scaling capability.",
    category: "Solutions",
  },
  {
    question: "Can SeloraOS integrate with our existing database, APIs, and legacy infrastructure?",
    answer:
      "Yes. We specialize in deep architectural integration. Whether you are running legacy SQL databases, third-party payment gateways, accounting platforms (QuickBooks, Xero), or communication channels (Slack, WhatsApp), we build secure APIs and automated webhooks that sync seamlessly.",
    category: "Technical",
  },
  {
    question: "How long does a typical software project take from discovery to launch?",
    answer:
      "Most enterprise deployments launch in 4 to 12 weeks. We execute through iterative agile sprints, deploying functional sandbox environments early so your team can test, validate, and train before full production cutover.",
    category: "Process",
  },
  {
    question: "What ongoing maintenance and SLA uptime guarantees are provided?",
    answer:
      "Software evolution doesn't end at launch. We provide 24/7 automated telemetry monitoring, security patching, regular feature expansions, and an enterprise 99.9% uptime SLA backed by direct engineering support.",
    category: "Support",
  },
  {
    question: "How does SeloraOS ensure enterprise data security and compliance?",
    answer:
      "Security is engineered at every layer: TLS 1.3 encryption in transit, AES-256 at rest, granular role-based access control (RBAC), automated audit logs, and adherence to industry privacy standards (GDPR, SOC 2, HIPAA-compliant architectures).",
    category: "Security",
  },
];

export default function FAQSection({
  title = "Frequently Asked Questions",
  eyebrow = "Everything You Need to Know",
  description = "Have questions about our custom CRM, ERP, and engineering capabilities? Here are answers to common questions about working with SeloraOS.",
  faqs = HOME_FAQS,
  includeSchema = true,
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
  faqs?: FAQItem[];
  includeSchema?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-28" id="faq">
      {includeSchema && <FAQJsonLd faqs={faqs} />}
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white p-6 shadow-subtle sm:p-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="focus-ring flex w-full items-start justify-between gap-4 text-left transition-colors hover:text-accent"
                >
                  <span className="flex items-center gap-3 text-base font-semibold text-foreground sm:text-lg">
                    <HelpCircle className="h-5 w-5 shrink-0 text-accent" />
                    {faq.question}
                  </span>
                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-accent/10 text-accent" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pl-8 text-sm leading-relaxed text-muted sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

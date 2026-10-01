"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Users, Layers, Workflow, Code2 } from "lucide-react";
import AssetImage from "@/components/ui/AssetImage";
import SplitHeading from "@/components/ui/SplitHeading";
import { cn, getAsset } from "@/lib/utils";
import { ICON_PALETTE } from "@/lib/constants";

const panels = [
  {
    id: "crm",
    label: "CRM",
    icon: Users,
    title: "Sell With a System, Not Spreadsheets",
    description:
      "Every lead, deal and conversation lives in one pipeline — scored, tracked and automatically followed up on.",
    features: ["Lead & pipeline management", "Sales automation", "Customer insights & reporting"],
    asset: "/assets/products/crm-dashboard.webp",
  },
  {
    id: "erp",
    label: "ERP",
    icon: Layers,
    title: "One System for Every Moving Part",
    description:
      "Inventory, finance, procurement and HR connected — replacing disconnected spreadsheets with a single operational backbone.",
    features: ["Inventory & procurement", "Finance & accounting", "HR & workforce management"],
    asset: "/assets/products/erp-dashboard.webp",
  },
  {
    id: "automation",
    label: "Automation",
    icon: Workflow,
    title: "Let the Busywork Run Itself",
    description:
      "Connect the tools you already use and automate the repetitive steps that eat up your team's time.",
    features: ["Workflow automation", "Third-party integrations", "API development"],
    asset: "/assets/products/automation-workflow.webp",
  },
  {
    id: "custom",
    label: "Custom Software",
    icon: Code2,
    title: "Built Around You, Not the Other Way",
    description:
      "When off-the-shelf falls short, we engineer bespoke platforms — web and mobile — around your exact workflow.",
    features: ["Web & mobile applications", "Custom architecture", "Scalable engineering"],
    asset: "/assets/services/custom-software.webp",
  },
];

export default function StickyShowcase() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SplitHeading
          eyebrow="See It In Action"
          title={
            <>
              Real Software. <span className="text-accent">Real Business Impact.</span>
            </>
          }
          description="Keep scrolling — each system below is a real product surface we build, not a mockup."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-background shadow-elevated">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={panels[active].id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <AssetImage
                      src={getAsset(panels[active].asset)}
                      alt={`SeloraOS ${panels[active].label} enterprise interface — ${panels[active].title}`}
                      fallbackLabel={`${panels[active].label} asset pending`}
                      sizes="576px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-2">
                {panels.map((panel, i) => (
                  <div
                    key={panel.id}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors duration-300",
                      i === active ? "bg-accent" : "bg-border"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-24 lg:gap-40">
            {panels.map((panel, i) => {
              const Icon = panel.icon;
              const palette = ICON_PALETTE[i % ICON_PALETTE.length];
              return (
                <div
                  key={panel.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  data-index={i}
                  className="flex flex-col justify-center lg:min-h-[55vh]"
                >
                  <div className="lg:hidden relative mb-6 aspect-[16/10] overflow-hidden rounded-card border border-border bg-background shadow-elevated">
                    <AssetImage
                      src={getAsset(panel.asset)}
                      alt={`SeloraOS ${panel.label} enterprise interface — ${panel.title}`}
                      fallbackLabel={`${panel.label} asset pending`}
                      sizes="100vw"
                    />
                  </div>

                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300",
                      palette.bg,
                      palette.text
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="mt-5 text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    {panel.label}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                    {panel.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                    {panel.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {panel.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

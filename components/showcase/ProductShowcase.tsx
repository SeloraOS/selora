"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Workflow, Zap, Plug, GitMerge } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AssetImage from "@/components/ui/AssetImage";
import { cn, getAsset } from "@/lib/utils";
import CRMShowcase from "./CRMShowcase";
import ERPShowcase from "./ERPShowcase";

type TabId = "crm" | "erp" | "automation" | "custom";

const tabs: { id: TabId; label: string; asset: string }[] = [
  { id: "crm", label: "CRM", asset: "/assets/products/crm-dashboard.webp" },
  { id: "erp", label: "ERP", asset: "/assets/products/erp-dashboard.webp" },
  { id: "automation", label: "Automation", asset: "/assets/products/automation-workflow.webp" },
  { id: "custom", label: "Custom Software", asset: "/assets/services/custom-software.webp" },
];

const automationNodes = [
  { label: "Trigger", icon: Zap },
  { label: "Integration", icon: Plug },
  { label: "Workflow", icon: Workflow },
  { label: "Action", icon: GitMerge },
];

export default function ProductShowcase() {
  const [active, setActive] = useState<TabId>("crm");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="See It In Action"
          title="Real Software. Real Business Impact."
          description="Explore the kinds of systems we build — each tailored to how a specific business actually operates."
          className="mx-auto"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                "focus-ring rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                active === tab.id
                  ? "border-foreground bg-foreground text-white"
                  : "border-border bg-white text-muted hover:border-accent hover:text-accent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-card border border-border bg-background shadow-elevated">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {active === "crm" && <CRMShowcase />}
              {active === "erp" && <ERPShowcase />}
              {active === "automation" && (
                <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
                  {automationNodes.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-5 text-center"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              )}
              {active === "custom" && (
                <div className="p-6">
                  <p className="text-sm text-muted">
                    Bespoke architecture, designed line-by-line around your exact
                    business processes — no unnecessary features, no rigid templates.
                  </p>
                </div>
              )}

              <div className="relative aspect-[16/9] w-full border-t border-border">
                <AssetImage
                  src={getAsset(activeTab.asset)}
                  alt={`SeloraOS ${activeTab.label} enterprise product architecture and interface`}
                  fallbackLabel={`${activeTab.label} asset pending`}
                  sizes="(max-width: 1024px) 100vw, 1152px"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

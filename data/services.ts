import { Users, Layers, Code2, Workflow, LifeBuoy } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "crm",
    index: "01",
    title: "CRM Solutions",
    summary: "Manage leads, sales and customer relationships in one place.",
    detail:
      "A single source of truth for every customer relationship — pipeline tracking, lead scoring, sales automation and reporting built around how your team actually sells.",
    icon: Users,
    asset: "/assets/services/crm.webp",
    features: ["Lead & pipeline management", "Sales automation", "Customer insights & reporting"],
  },
  {
    id: "erp",
    index: "02",
    title: "ERP Systems",
    summary: "Unify your operations — inventory, finance, HR and more.",
    detail:
      "Connect inventory, finance, procurement and HR into one operational backbone, replacing spreadsheets and disconnected tools with a system built for your workflows.",
    icon: Layers,
    asset: "/assets/services/erp.webp",
    features: ["Inventory & procurement", "Finance & accounting", "HR & workforce management"],
  },
  {
    id: "custom-software",
    index: "03",
    title: "Custom Software",
    summary: "Tailored web and mobile applications for your unique needs.",
    detail:
      "When off-the-shelf software falls short, we design and engineer bespoke platforms — web and mobile — purpose-built around your exact processes.",
    icon: Code2,
    asset: "/assets/services/custom-software.webp",
    features: ["Web & mobile applications", "Custom architecture", "Scalable engineering"],
  },
  {
    id: "automation",
    index: "04",
    title: "Automation & Integrations",
    summary: "Connect your tools, automate workflows and save time.",
    detail:
      "We link the tools you already use, automate repetitive work and design workflows that remove manual effort from your business operations.",
    icon: Workflow,
    asset: "/assets/services/automation.webp",
    features: ["Workflow automation", "Third-party integrations", "API development"],
  },
  {
    id: "support",
    index: "05",
    title: "Technical Support",
    summary: "Reliable, ongoing support to keep your business running smoothly.",
    detail:
      "Software doesn't stop at launch. Our support team monitors, maintains and evolves your systems so they keep pace with your business.",
    icon: LifeBuoy,
    asset: "/assets/services/support.webp",
    features: ["24/7 monitoring", "Maintenance & upgrades", "Dedicated support team"],
  },
];

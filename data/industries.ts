import { Building2, HeartPulse, GraduationCap, Factory, ShoppingBag, Truck, Rocket } from "lucide-react";
import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    description: "CRM and listing platforms that keep agents and buyers in sync.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Secure, compliant systems for patient management and care coordination.",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Platforms for admissions, student management and remote learning.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "ERP systems that connect production, inventory and finance.",
  },
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    description: "Integrated commerce, POS and inventory systems that scale with demand.",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    description: "Automated dispatch, tracking and fleet management workflows.",
  },
  {
    id: "startups",
    name: "Startups",
    icon: Rocket,
    description: "Custom software built to move fast without sacrificing scalability.",
  },
];

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "real-estate-crm",
    name: "Real Estate CRM Platform",
    category: "CRM",
    description: "A lead-to-close pipeline system with a geographical listings locator for a growing brokerage.",
    technologies: ["Next.js", "PostgreSQL", "Node.js"],
    asset: "/assets/projects/real-estate-crm.webp",
  },
  {
    id: "manufacturing-erp",
    name: "Manufacturing ERP Suite",
    category: "ERP",
    description: "Smart factory floor telemetry unified with inventory, procurement and finance.",
    technologies: ["React", "NestJS", "PostgreSQL"],
    asset: "/assets/projects/manufacturing-erp.webp",
  },
  {
    id: "custom-platform",
    name: "Custom Operations Platform",
    category: "Web Apps",
    description: "A bespoke enterprise workspace tracking API health, cloud usage and commit velocity.",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    asset: "/assets/projects/custom-platform.webp",
  },
  {
    id: "logistics-platform",
    name: "Logistics Fleet Platform",
    category: "Automation",
    description: "Automated dispatch, fleet tracking and route optimization for a logistics provider.",
    technologies: ["Node.js", "Redis", "REST APIs"],
    asset: "/assets/projects/logistics-platform.webp",
  },
];

export const PROJECT_FILTERS = ["All", "CRM", "ERP", "Web Apps", "Automation"] as const;

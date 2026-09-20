import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  icon: LucideIcon;
  asset: string;
  features: string[];
}

export type ProjectCategory = "CRM" | "ERP" | "Web Apps" | "Automation";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  asset: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
}

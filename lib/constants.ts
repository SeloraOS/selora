import type { Metric } from "@/types";

export const SITE = {
  name: "SeloraOS",
  brandName: "SeloraOS",
  shortName: "Selora",
  domain: "seloraos.online",
  url: "https://seloraos.online",
  tagline: "Software That Simplifies Today and Scales Tomorrow.",
  title: "SeloraOS — Enterprise CRM, ERP & Custom Software Solutions",
  description:
    "SeloraOS builds bespoke CRM platforms, intelligent ERP systems, enterprise workflow automation, and custom software engineering for scaling businesses.",
  keywords: [
    "Riaan Attar",
    "riaan attar",
    "Riaan Attar Selora",
    "Riaan Attar SeloraOS",
    "Riaan Attar software engineer",
    "SeloraOS",
    "seloraos.online",
    "Selora OS",
    "Selora",
    "custom CRM development",
    "enterprise ERP software",
    "custom business software",
    "business workflow automation",
    "bespoke software engineering",
    "cloud ERP systems",
    "SaaS application development",
    "enterprise systems integration",
    "real estate CRM",
    "manufacturing ERP platform",
    "logistics fleet software",
    "B2B software solutions",
    "full-stack software development",
  ],
  author: "Riaan Attar",
  creator: "Riaan Attar",
  organization: "SeloraOS Technologies",
  email: "contact@seloraos.online",
  locale: "en_US",
  twitterHandle: "@seloraos",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

/**
 * Configurable, unverified marketing metrics. Replace with real, verified
 * figures before presenting them as factual business claims.
 */
export const HERO_METRICS: Metric[] = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Support Uptime", value: 99, suffix: "%" },
];

/** Cycled pastel icon-chip colors used across services, process and value props. */
export const ICON_PALETTE = [
  { bg: "bg-emerald-50", text: "text-emerald-600" },
  { bg: "bg-blue-50", text: "text-accent" },
  { bg: "bg-violet-50", text: "text-violet-600" },
  { bg: "bg-amber-50", text: "text-amber-600" },
  { bg: "bg-purple-50", text: "text-purple-600" },
  { bg: "bg-teal-50", text: "text-teal-600" },
];

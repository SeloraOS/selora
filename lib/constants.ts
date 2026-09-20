import type { Metric } from "@/types";

export const SITE = {
  name: "Selora",
  tagline: "Technology for a better tomorrow.",
  title: "Selora — Software That Simplifies Today and Scales Tomorrow",
  description:
    "Selora builds CRM, ERP, custom software, automation and technology solutions for modern businesses.",
  url: "https://selora.example.com",
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

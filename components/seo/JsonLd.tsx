import { SITE } from "@/lib/constants";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${SITE.url}/#organization`,
    name: SITE.brandName,
    alternateName: ["Selora", "Selora OS", "seloraos.online", "Selora Technologies"],
    url: SITE.url,
    logo: `${SITE.url}/icon.png`,
    image: `${SITE.url}/opengraph-image`,
    description: SITE.description,
    email: SITE.email,
    founder: {
      "@type": "Person",
      name: "Riaan Attar",
      jobTitle: "Founder & Software Engineer",
      url: SITE.url,
    },
    sameAs: [
      "https://linkedin.com",
      "https://x.com",
      "https://instagram.com",
      "https://youtube.com",
    ],
    knowsAbout: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Custom Software Development",
      "Workflow Automation",
      "Business Intelligence",
      "Cloud Infrastructure",
      "API Integrations",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support & Sales",
        email: SITE.email,
        availableLanguage: ["English"],
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SeloraOS Enterprise Technology Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM Solutions",
            description: "Custom customer relationship and pipeline tracking systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP Systems",
            description: "Integrated enterprise resource planning connecting inventory, finance, and operations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Engineering",
            description: "Bespoke web and mobile platforms engineered for unique workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automation & Integrations",
            description: "End-to-end workflow automation linking APIs, webhooks, and third-party tools.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Technical Support & Maintenance",
            description: "Dedicated SLA-backed engineering monitoring, optimization, and upgrades.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.brandName,
    alternateName: "Selora",
    description: SITE.description,
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SeloraOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Web-based, iOS, Android",
    url: SITE.url,
    description:
      "SeloraOS is a modular enterprise operating software platform enabling businesses to manage CRM, ERP, automated operations, and custom data workflows in real-time.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Custom consultation & enterprise pilot pricing",
    },
    featureList: [
      "Modular CRM Pipeline Management",
      "Real-time Multi-Facility ERP & Inventory Control",
      "Automated Workflow & Webhook Orchestration",
      "Role-Based Access Control & Enterprise Compliance",
      "Real-time Telemetry, KPI Dashboards & Reporting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

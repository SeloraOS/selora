import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/react";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [
    { name: "Riaan Attar", url: SITE.url },
    { name: SITE.name, url: SITE.url },
  ],
  creator: "Riaan Attar",
  publisher: SITE.name,
  applicationName: SITE.name,
  category: "Enterprise Software & Cloud Solutions",
  classification: "Enterprise Software, Custom CRM, Cloud ERP, Automation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitterHandle,
    site: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SoftwareApplicationJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GrainOverlay />
        <ScrollProgress />
        <CursorGlow />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}

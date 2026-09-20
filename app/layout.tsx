import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GrainOverlay />
        <ScrollProgress />
        <CursorGlow />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <BackToTop />
      </body>
    </html>
  );
}

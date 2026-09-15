import {
  HeroSection,
  PricingSection,
  FeaturesSection,
  TemplatesSection,
  AiFeatureSection,
} from "@/features/marketing";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelola | Maximize your Productivity with AI-Powered Planning",
  description:
    "Connect minds to one page with a single click. Kelola helps teams stay on top of ideas with AI-powered scheduling, 10,000+ templates, and real-time collaboration.",
  openGraph: {
    title: "Kelola | Maximize your Productivity with AI-Powered Planning",
    description:
      "Connect minds to one page with a single click. Kelola helps teams stay on top of ideas with AI-powered scheduling, 10,000+ templates, and real-time collaboration.",
    type: "website",
    siteName: "Kelola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelola | Maximize your Productivity with AI-Powered Planning",
    description:
      "Connect minds to one page with a single click. Kelola helps teams stay on top of ideas with AI-powered scheduling and real-time collaboration.",
  },
};

export default function RootPage() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <TemplatesSection />
      <AiFeatureSection />
    </>
  );
}

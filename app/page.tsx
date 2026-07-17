import { HeroSection } from "@/features/marketing/components/hero-section";
import { PricingSection } from "@/features/marketing/components/pricing-section";
import { FeaturesSection } from "@/features/marketing/components/features-section";
import { AiFeatureSection } from "@/features/marketing/components/ai-feature-section";

export default function RootPage() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <AiFeatureSection />
    </>
  );
}

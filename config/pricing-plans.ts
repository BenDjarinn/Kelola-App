export type PricingPlanBadgeVariant = "default" | "highlight";
export type PricingPlanCtaVariant = "default" | "gradient";
export type PricingPlanName = "Standard" | "Business" | "Entrepreneur";

export interface PricingPlan {
  badge: string;
  badgeVariant: PricingPlanBadgeVariant;
  cta: string;
  ctaVariant: PricingPlanCtaVariant;
  description: string;
  features: string[];
  name: PricingPlanName;
  period: string;
  price: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Standard",
    badge: "Current",
    badgeVariant: "default",
    description: "Best for starters.",
    price: "Free",
    period: "/mo",
    features: [
      "Personal Goal Mapping",
      "Basic Project Dashboard",
      "100 Free Project Plan Templates",
      "Basic Report Access",
      "Support Forum Community",
    ],
    cta: "Upgrade Plan",
    ctaVariant: "default",
  },
  {
    name: "Business",
    badge: "Save 25%",
    badgeVariant: "highlight",
    description: "Scale your planning with complete visibility.",
    price: "$20",
    period: "/mo",
    features: [
      "All Standard team features",
      "10,000 Project Plan Templates",
      "Team Performance Analysis & Reports",
      "Third-Party tool integrations",
      "More AI models",
    ],
    cta: "Upgrade Plan",
    ctaVariant: "default",
  },
  {
    name: "Entrepreneur",
    badge: "Save 50%",
    badgeVariant: "highlight",
    description: "Fuel high-volume planning and strategy.",
    price: "$65",
    period: "/mo",
    features: [
      "All Business team features",
      "Monthly coaching & strategy sessions",
      "Early access on the latest feature",
    ],
    cta: "Contact Us",
    ctaVariant: "gradient",
  },
];

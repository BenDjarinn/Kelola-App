import { ArrowUpRight, Check } from "lucide-react";

import type { PricingPlan, PricingPlanName } from "@/config/pricing-plans";

interface HomepageUpgradePricingCardProps {
  plan: PricingPlan;
}

function getUpgradePricingCardClassName(planName: PricingPlanName) {
  switch (planName) {
    case "Standard":
      return "homepage-upgrade-pricing-card homepage-upgrade-pricing-card-standard";
    case "Business":
      return "homepage-upgrade-pricing-card homepage-upgrade-pricing-card-featured homepage-upgrade-pricing-card-business";
    case "Entrepreneur":
      return "homepage-upgrade-pricing-card homepage-upgrade-pricing-card-featured homepage-upgrade-pricing-card-entrepreneur";
  }
}

function getUpgradePricingButtonClassName(planName: PricingPlanName) {
  const baseClassName = "homepage-upgrade-pricing-button";

  if (planName === "Standard") {
    return `${baseClassName} homepage-upgrade-pricing-button-standard`;
  }

  return `${baseClassName} homepage-upgrade-pricing-button-featured`;
}

export function HomepageUpgradePricingCard({ plan }: HomepageUpgradePricingCardProps) {
  const pricingCardClassName = getUpgradePricingCardClassName(plan.name);
  const pricingButtonClassName = getUpgradePricingButtonClassName(plan.name);

  return (
    <article className={pricingCardClassName}>
      <div className="homepage-upgrade-pricing-card-body">
        <div className="homepage-upgrade-pricing-card-header">
          <h3 className="homepage-upgrade-pricing-card-title">{plan.name}</h3>
          <span className="homepage-upgrade-pricing-badge">
            {plan.badge}
            <ArrowUpRight className="homepage-upgrade-pricing-badge-icon" aria-hidden="true" />
          </span>
        </div>
        <p className="homepage-upgrade-pricing-description">{plan.description}</p>
        <div className="homepage-upgrade-pricing-price-row">
          <span className="homepage-upgrade-pricing-price">{plan.price}</span>
          <span className="homepage-upgrade-pricing-period">{plan.period}</span>
        </div>
        <ul className="homepage-upgrade-pricing-features">
          {plan.features.map((feature) => (
            <li className="homepage-upgrade-pricing-feature" key={feature}>
              <Check className="homepage-upgrade-pricing-feature-icon" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="homepage-upgrade-pricing-card-footer">
        <button className={pricingButtonClassName} type="button">
          {plan.cta}
        </button>
      </div>
    </article>
  );
}

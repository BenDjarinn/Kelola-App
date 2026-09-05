"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import { pricingPlans } from "@/config/pricing-plans";
import { HomepageUpgradePricingCard } from "./homepage-upgrade-pricing-card";

interface HomepageUpgradeModalProps {
  onClose: () => void;
}

export function HomepageUpgradeModal({ onClose }: HomepageUpgradeModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="homepage-upgrade-modal-overlay">
      <section
        aria-label="Upgrade plan"
        aria-modal="true"
        className="homepage-upgrade-modal-panel"
        role="dialog"
      >
        <div className="homepage-upgrade-modal-content">
          <div className="homepage-upgrade-modal-header">
            <h2 className="homepage-upgrade-modal-title">
              <span>Upgrade</span> Your Plan, <span>Better Benefits</span> Awaits
            </h2>
            <p className="homepage-upgrade-modal-subtitle">
              Choose your plans. Cancel anytime
            </p>
          </div>
          <div className="homepage-upgrade-pricing-grid">
            {pricingPlans.map((plan) => (
              <HomepageUpgradePricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
        <button className="homepage-upgrade-modal-close" onClick={onClose} type="button">
          <X className="homepage-upgrade-modal-close-icon" aria-hidden="true" />
          <span className="sr-only">Close upgrade plan modal</span>
        </button>
      </section>
    </div>
  );
}

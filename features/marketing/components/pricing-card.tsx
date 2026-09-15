import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

import type { PricingPlan } from "@/config/pricing-plans";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const cardBg = (() => {
    switch (plan.name) {
      case "Entrepreneur":
        return "bg-gradient-to-b from-mkt-pricing-gradient-start to-mkt-pricing-gradient-end";
      case "Business":
        return "bg-gradient-to-b from-mkt-pricing-gradient-start to-mkt-pricing-gradient-end";
      default:
        return "bg-mkt-card-bg";
    }
  })();

  const buttonStyle = (() => {
    switch (plan.name) {
      case "Standard":
        return "bg-gradient-to-r from-mkt-pricing-standard-btn-start to-mkt-pricing-standard-btn-end text-white hover:brightness-125";
      case "Business":
        return "bg-mkt-pricing-gradient-end text-white hover:brightness-125";
      case "Entrepreneur":
        return "bg-mkt-pricing-gradient-end text-white hover:brightness-125";
      default:
        return "border border-white/20 bg-mkt-card-inner-bg text-white hover:border-nav-accent";
    }
  })();

  return (
    <div className={`flex h-full flex-col justify-between rounded-[16px] border border-white/10 px-[20px] pt-[24px] pb-[36px] ${cardBg}`}>
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-white font-nav">
            {plan.name}
          </h3>
          <span className="inline-flex justify-center items-center rounded-full border border-white/20 px-[14px] py-[4px] text-[11px] font-normal text-white/70 ">
            {plan.badge}
            <ArrowUpRight className="size-[12px]" />
          </span>
        </div>

        {/* Description */}
        <p className="mt-[8px] text-[12px] font-normal text-mkt-body-muted font-nav">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mt-[16px] flex items-baseline gap-[4px]">
          <span className="text-[32px] font-bold text-white font-nav">
            {plan.price}
          </span>
          <span className="text-[13px] font-normal text-mkt-body-muted font-nav">
            {plan.period}
          </span>
        </div>

        {/* Features */}
        <div className="mt-[20px] flex flex-col gap-[12px]">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-[8px]">
              <Check className="mt-[2px] size-[14px] shrink-0 text-white" />
              <span className="text-[12px] font-normal text-white/70 font-nav">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="#"
        className={`mt-[24px] flex w-full items-center justify-center rounded-[10px] py-[10px] text-[13px] font-medium transition-all duration-200 font-nav ${buttonStyle}`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}

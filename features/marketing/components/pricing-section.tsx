"use client";

import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface PricingPlan {
  name: string;
  badge: string;
  badgeVariant: "default" | "highlight";
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  ctaVariant: "default" | "gradient";
}

const pricingPlans: PricingPlan[] = [
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 } as const,
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as const,
  },
} as const;

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  const cardBg = (() => {
    switch (plan.name) {
      case "Entrepreneur":
        return "bg-gradient-to-b from-[#3b2d7a] to-[#7c3aed]";
      case "Business":
        return "bg-gradient-to-b from-[#3b2d7a] to-[#7c3aed]";
      default:
        return "bg-[#1e2540]";
    }
  })();

  const buttonStyle = (() => {
    switch (plan.name) {
      case "Standard":
        return "bg-gradient-to-r from-[#2a3354] to-[#3b4d8a] text-white hover:brightness-125";
      case "Business":
        return "bg-[#7c3aed] text-white hover:brightness-125";
      case "Entrepreneur":
        return "bg-[#7c3aed] text-white hover:brightness-125";
      default:
        return "border border-white/20 bg-[#2a3354] text-white hover:border-[#6155F5]";
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
        <p className="mt-[8px] text-[12px] font-normal text-white/50 font-nav">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mt-[16px] flex items-baseline gap-[4px]">
          <span className="text-[32px] font-bold text-white font-nav">
            {plan.price}
          </span>
          <span className="text-[13px] font-normal text-white/50 font-nav">
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

export function PricingSection() {

  return (
    <section className="w-full bg-nav-bg px-[30px] py-[60px] md:px-[55px] md:py-[80px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[14px] font-normal text-[#7F86C2] font-nav">
          Let this be a fresh start for your project.
        </p>
        <h2 className="mt-[8px] text-[24px] font-bold text-white font-nav md:text-[30px]">
          Let&apos;s make a move from now.
        </h2>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="mt-[40px] mx-auto grid w-full max-w-[85%] grid-cols-1 gap-[24px] md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pricingPlans.map((plan) => (
          <motion.div key={plan.name} variants={cardVariants}>
            <PricingCard plan={plan} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

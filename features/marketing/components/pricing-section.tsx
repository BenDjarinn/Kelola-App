"use client";

import { motion, useReducedMotion } from "framer-motion";

import { pricingPlans } from "@/config/pricing-plans";
import { PricingCard } from "./pricing-card";

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

const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

export function PricingSection() {
  const shouldReduceMotion = useReducedMotion();

  const resolvedContainerVariants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : containerVariants;

  const resolvedCardVariants = shouldReduceMotion ? REDUCED_VARIANTS : cardVariants;

  return (
    <section className="w-full bg-nav-bg px-[30px] py-[60px] md:px-[55px] md:py-[80px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <p className="text-[14px] font-normal text-nav-link-text font-nav">
          Let this be a fresh start for your project.
        </p>
        <h2 className="mt-[8px] text-[24px] font-bold text-white font-nav md:text-[30px]">
          Let&apos;s make a move from now.
        </h2>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="mt-[40px] mx-auto grid w-full max-w-[85%] grid-cols-1 gap-[24px] md:grid-cols-3"
        variants={resolvedContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pricingPlans.map((plan) => (
          <motion.div key={plan.name} variants={resolvedCardVariants}>
            <PricingCard plan={plan} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

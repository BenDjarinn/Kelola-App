"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { HeroDashboard } from "./hero-dashboard";

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.12 } as const,
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as const,
  },
} as const;

const rightVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 } as const,
  },
} as const;

export function HeroSection() {

  return (
    <section className="w-full bg-nav-bg px-[30px] pt-[120px] pb-[80px] md:px-[55px] md:pt-[140px] md:pb-[120px]">
      <div className="mx-auto flex flex-col items-center gap-[40px] md:flex-row md:justify-between">
        {/* Left content */}
        <motion.div
          className="flex max-w-[550px] flex-col gap-[24px]"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          <motion.p
            className="text-[14px] font-bold text-white font-(family-name:--font-nav) md:text-[22px]"
            variants={itemVariants}
          >
            The era of AI begins.
          </motion.p>

          {/* Heading */}
          <motion.h1 className="flex flex-col gap-[4px]" variants={itemVariants}>
            <span className="text-[28px] font-bold leading-tight text-[#7F86C2] font-(family-name:--font-nav) md:text-[36px] lg:text-[40px]">
              Connect minds to One Page With a <span className="font-bold text-[#F0F0F8]">Single Click.</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[13px] font-normal leading-relaxed text-white/60 font-(family-name:--font-nav) md:text-[14px]"
            variants={itemVariants}
          >
            Stay on top of your ideas by connecting each other through the precision scheduling from various tasks with implementation of AI
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="inline-flex items-center gap-[8px] rounded-xl border border-white/30 px-[20px] py-[10px] text-[13px] font-normal text-white transition-all duration-200 hover:border-[#6155F5] hover:text-[#6155F5] font-(family-name:--font-nav) md:text-[14px]"
            >
              Bring Me There
              <ArrowUpRight className="size-[16px]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right content — dashboard preview */}
        <motion.div
          className="hidden w-[400px] shrink-0 md:block lg:w-[480px]"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}

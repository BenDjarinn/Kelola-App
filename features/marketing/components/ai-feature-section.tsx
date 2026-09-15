"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 } as const,
  },
} as const;

const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

function ChatBubble({ text, variant }: { text: string; variant: "blue" | "pink" }) {
  const bgColor = variant === "blue" ? "bg-mkt-chat-blue" : "bg-mkt-chat-pink";

  return (
    <span className={`inline-block rounded-full px-5 py-2 text-[14px] font-medium text-white ${bgColor}`}>
      {text}
    </span>
  );
}

function AvatarFigure() {

  return (
    <div className="flex flex-col items-center">
      <div className="size-12 rounded-full bg-mkt-avatar" />
      <div className="mt-[-6px] h-15 w-20 rounded-t-full bg-mkt-avatar" />
    </div>
  );
}

export function AiFeatureSection() {
  const shouldReduceMotion = useReducedMotion();

  const resolvedLeftVariants = shouldReduceMotion ? REDUCED_VARIANTS : leftVariants;
  const resolvedItemVariants = shouldReduceMotion ? REDUCED_VARIANTS : itemVariants;
  const resolvedRightVariants = shouldReduceMotion ? REDUCED_VARIANTS : rightVariants;

  return (
    <section className="w-full bg-nav-bg px-7.5 py-20 md:px-13.75 md:py-30">
      <div className="mx-auto flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <motion.div
          className="flex max-w-120 flex-col gap-3"
          variants={resolvedLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[20px] font-semibold text-nav-link-heading font-(family-name:--font-nav) md:text-[24px]"
            variants={resolvedItemVariants}
          >
            Everything just works better, with
          </motion.p>

          <motion.h2
            className="text-[24px] font-bold leading-tight text-white font-(family-name:--font-nav) md:text-[32px] lg:text-[36px]"
            variants={resolvedItemVariants}
          >
            AI powered solutions
          </motion.h2>

          <motion.p
            className="text-[13px] font-normal text-mkt-subheading font-(family-name:--font-nav) md:text-[14px]"
            variants={resolvedItemVariants}
          >
            Best engineered for the best of performance..
          </motion.p>

          <motion.div variants={resolvedItemVariants}>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-[10px] text-[13px] font-normal text-white transition-all duration-200 hover:border-nav-accent hover:text-nav-accent font-(family-name:--font-nav) md:text-[14px]"
            >
              Get Started with Kelolaku
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right content — AI chat illustration */}
        <motion.div
          className="relative hidden h-70 w-100 shrink-0 md:flex md:items-center md:justify-center lg:w-120"
          variants={resolvedRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Background card with grid lines */}
          <div className="absolute inset-0 rounded-[12px] border border-white/10 bg-mkt-card-inner-bg overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
              <div className="border-r border-b border-white/5" />
              <div className="border-r border-b border-white/5" />
              <div className="border-b border-white/5" />
              <div className="border-r border-b border-white/5" />
              <div className="border-r border-b border-white/5" />
              <div className="border-b border-white/5" />
              <div className="border-r border-white/5" />
              <div className="border-r border-white/5" />
              <div />
            </div>
          </div>

          {/* Chat bubbles */}
          <div className="absolute left-15 top-15 z-10">
            <ChatBubble text="Ask Kelolaku should help" variant="blue" />
          </div>
          <div className="absolute right-20 top-27.5 z-10">
            <ChatBubble text="How ?" variant="pink" />
          </div>

          {/* Avatar left */}
          <div className="absolute bottom-[-20] left-10 z-10">
            <AvatarFigure />
          </div>

          {/* Avatar right */}
          <div className="absolute bottom-[-20] right-10 z-10">
            <AvatarFigure />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

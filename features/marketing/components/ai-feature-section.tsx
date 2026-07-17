"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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

function ChatBubble({ text, variant }: { text: string; variant: "blue" | "pink" }) {
  const bgColor = variant === "blue" ? "bg-[#3B82F6]" : "bg-[#D946EF]";

  return (
    <span className={`inline-block rounded-full px-[20px] py-[8px] text-[14px] font-medium text-white ${bgColor}`}>
      {text}
    </span>
  );
}

function AvatarFigure() {

  return (
    <div className="flex flex-col items-center">
      <div className="size-[48px] rounded-full bg-[#9ca3af]" />
      <div className="mt-[-6px] h-[60px] w-[100px] rounded-t-full bg-[#9ca3af]" />
    </div>
  );
}

export function AiFeatureSection() {

  return (
    <section className="w-full bg-nav-bg px-[30px] py-[80px] md:px-[55px] md:py-[120px]">
      <div className="mx-auto flex flex-col items-start gap-[40px] md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <motion.div
          className="flex max-w-[480px] flex-col gap-[12px]"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[20px] font-semibold text-[#A6AAD4] font-(family-name:--font-nav) md:text-[24px]"
            variants={itemVariants}
          >
            Everything just works better, with
          </motion.p>

          <motion.h2
            className="text-[24px] font-bold leading-tight text-white font-(family-name:--font-nav) md:text-[32px] lg:text-[36px]"
            variants={itemVariants}
          >
            AI powered solutions
          </motion.h2>

          <motion.p
            className="text-[13px] font-normal text-[#7F86C2] font-(family-name:--font-nav) md:text-[14px]"
            variants={itemVariants}
          >
            Best engineered for the best of performance..
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="inline-flex items-center gap-[8px] rounded-xl border border-white/30 px-[20px] py-[10px] text-[13px] font-normal text-white transition-all duration-200 hover:border-[#6155F5] hover:text-[#6155F5] font-(family-name:--font-nav) md:text-[14px]"
            >
              Get Started with Kelolaku
              <ArrowUpRight className="size-[16px]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right content — AI chat illustration */}
        <motion.div
          className="relative hidden h-[280px] w-[400px] shrink-0 md:flex md:items-center md:justify-center lg:w-[480px]"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Background card with grid lines */}
          <div className="absolute inset-0 rounded-[12px] border border-white/10 bg-[#2a3354] overflow-hidden">
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
          <div className="absolute left-[60px] top-[60px] z-10">
            <ChatBubble text="Ask Kelolaku should help" variant="blue" />
          </div>
          <div className="absolute right-[80px] top-[110px] z-10">
            <ChatBubble text="How ?" variant="pink" />
          </div>

          {/* Avatar left */}
          <div className="absolute bottom-[-20] left-[40px] z-10">
            <AvatarFigure />
          </div>

          {/* Avatar right */}
          <div className="absolute bottom-[-20] right-[40px] z-10">
            <AvatarFigure />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

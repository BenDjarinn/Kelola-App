"use client";

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

function TaskCard({ title }: { title: string }) {

  return (
    <div className="w-[170px] rounded-[10px] bg-[#2a3354] p-[16px]">
      <span className="text-[14px] font-bold text-white/80 font-(family-name:--font-nav)">
        {title}
      </span>
      <div className="my-[16px] flex flex-col gap-[12px]">
        <div className="h-px w-full bg-white/15" />
        <div className="h-px w-full bg-white/15" />
        <div className="h-px w-full bg-white/15" />
        <div className="h-px w-full bg-white/15" />
        <div className="h-px w-full bg-white/15" />
        <div className="h-px w-full bg-white/15" />
      </div>
    </div>
  );
}

function AvatarIllustration() {

  return (
    <div className="flex flex-col items-center">
      {/* Head */}
      <div className="size-[75px] rounded-full bg-[#9ca3af]" />
      {/* Body */}
      <div className="mt-[-8px] h-[90px] w-[120px] rounded-t-full bg-[#9ca3af]" />
    </div>
  );
}

export function FeaturesSection() {

  return (
    <section className="w-full bg-nav-bg px-[30px] py-[80px] md:px-[55px] md:py-[120px]">
      <div className="mx-auto flex flex-col items-start gap-[40px] md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <motion.div
          className="flex max-w-[480px] flex-col gap-[10px]"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[20px] font-bold text-[#7F86C2] font-(family-name:--font-nav) md:text-[24px]"
            variants={itemVariants}
          >
            Build better things,
          </motion.p>

          <motion.h2
            className="text-[30px] font-bold leading-tight text-white font-(family-name:--font-nav) md:text-[32px] lg:text-[40px]"
            variants={itemVariants}
          >
            Simplified, And Easy to Use.
          </motion.h2>

          <motion.p
            className="text-[15px] font-normal text-white/50 font-(family-name:--font-nav) md:text-[18px]"
            variants={itemVariants}
          >
            Kaizen is made for the team to track it&apos;s progress.
          </motion.p>
        </motion.div>

        {/* Right content — task illustration */}
        <motion.div
          className="relative hidden h-[280px] w-[380px] shrink-0 md:flex"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Task #1 card — left */}
          <div className="absolute left-0 top-0">
            <TaskCard title="Task #1" />
          </div>

          {/* Task #2 card — right */}
          <div className="absolute right-0 top-0">
            <TaskCard title="Task #2" />
          </div>

          {/* Avatar — centered, overlapping bottom of both cards */}
          <div className="absolute bottom-[40px] left-1/2 z-10 -translate-x-1/2">
            <AvatarIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

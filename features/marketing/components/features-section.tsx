"use client";

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

function TaskCard({ title }: { title: string }) {

  return (
    <div className="w-42.5 rounded-[10px] bg-mkt-card-inner-bg p-4">
      <span className="text-[14px] font-bold text-white/80 font-(family-name:--font-nav)">
        {title}
      </span>
      <div className="my-4 flex flex-col gap-3">
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
      <div className="size-18.75 rounded-full bg-mkt-avatar" />
      {/* Body */}
      <div className="-mt-2 h-22.5 w-30 rounded-t-full bg-mkt-avatar" />
    </div>
  );
}

export function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  const resolvedLeftVariants = shouldReduceMotion ? REDUCED_VARIANTS : leftVariants;
  const resolvedItemVariants = shouldReduceMotion ? REDUCED_VARIANTS : itemVariants;
  const resolvedRightVariants = shouldReduceMotion ? REDUCED_VARIANTS : rightVariants;

  return (
    <section className="w-full bg-nav-bg px-7.5 py-20 md:px-13.75 md:py-30">
      <div className="mx-auto flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <motion.div
          className="flex max-w-120 flex-col gap-[10px]"
          variants={resolvedLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[20px] font-bold text-mkt-subheading font-(family-name:--font-nav) md:text-[24px]"
            variants={resolvedItemVariants}
          >
            Build better things,
          </motion.p>

          <motion.h2
            className="text-[30px] font-bold leading-tight text-white font-(family-name:--font-nav) md:text-[32px] lg:text-[40px]"
            variants={resolvedItemVariants}
          >
            Simplified, And Easy to Use.
          </motion.h2>

          <motion.p
            className="text-[15px] font-normal text-mkt-body-muted font-(family-name:--font-nav) md:text-[18px]"
            variants={resolvedItemVariants}
          >
            Kaizen is made for the team to track it&apos;s progress.
          </motion.p>
        </motion.div>

        {/* Right content — task illustration */}
        <motion.div
          className="relative hidden h-70 w-95 shrink-0 md:flex"
          variants={resolvedRightVariants}
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
          <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
            <AvatarIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

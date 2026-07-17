"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface BadgeData {
  label: string;
  bg: string;
  color: string;
}

interface TaskData {
  name: string;
  badges: BadgeData[];
}

interface CardData {
  id: number;
  tag: string;
  tagBg: string;
  tagColor: string;
  top: number;
  left: number;
  rotate: string;
  zIndex: number;
  width?: number;
  tasks: TaskData[];
  showProgress?: boolean;
}

const CARDS: CardData[] = [
  {
    id: 1,
    tag: "In Development",
    tagBg: "#312e81",
    tagColor: "#a5b4fc",
    top: 10,
    left: 0,
    rotate: "-4deg",
    zIndex: 2,
    tasks: [{ name: "Change log MQL", badges: [{ label: "High", bg: "#7f1d1d", color: "#fca5a5" }, { label: "Design", bg: "#1e3a5f", color: "#93c5fd" }] }],
  },
  {
    id: 2,
    tag: "On Production",
    tagBg: "#064e3b",
    tagColor: "#6ee7b7",
    top: 0,
    left: 170,
    rotate: "2.5deg",
    zIndex: 3,
    tasks: [{ name: "Task a collection content", badges: [{ label: "High", bg: "#7f1d1d", color: "#fca5a5" }, { label: "In Progress", bg: "#4c1d95", color: "#c4b5fd" }] }],
  },
  {
    id: 3,
    tag: "To Do",
    tagBg: "#312e81",
    tagColor: "#a5b4fc",
    top: 135,
    left: 20,
    rotate: "-1deg",
    zIndex: 6,
    width: 230,
    tasks: [{ name: "Change tag UI Mockup Tentosa", badges: [{ label: "High", bg: "#7f1d1d", color: "#fca5a5" }, { label: "UI Design", bg: "#1e3a5f", color: "#93c5fd" }] }],
    showProgress: true,
  },
  {
    id: 4,
    tag: "Report",
    tagBg: "#451a03",
    tagColor: "#fdba74",
    top: 65,
    left: 290,
    rotate: "5deg",
    zIndex: 4,
    tasks: [
      { name: "Redesign Home Page", badges: [{ label: "Done", bg: "#064e3b", color: "#6ee7b7" }, { label: "UI Design", bg: "#1e3a5f", color: "#93c5fd" }] },
      { name: "Catchup pinned documents", badges: [{ label: "High", bg: "#7f1d1d", color: "#fca5a5" }] },
    ],
  },
  {
    id: 5,
    tag: "Report",
    tagBg: "#451a03",
    tagColor: "#fdba74",
    top: 255,
    left: 295,
    rotate: "8deg",
    zIndex: 2,
    tasks: [{ name: "Redesign Home Page", badges: [{ label: "High", bg: "#7f1d1d", color: "#fca5a5" }, { label: "Frontend", bg: "#1e3a5f", color: "#93c5fd" }] }],
  },
];

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
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 } as const,
  },
} as const;

function Badge({ label, bg, color }: BadgeData) {

  return (
    <span
      className="inline-block rounded-[3px] px-[6px] py-[2px] text-[9px] font-bold"
      style={{ background: bg, color }}
    >
      {label}
    </span>
  );
}

function MockupCard({ tag, tagBg, tagColor, tasks, top, left, rotate, zIndex, width, showProgress }: Omit<CardData, "id">) {

  return (
    <div
      className="absolute rounded-[10px] border border-white/8 bg-[#1b2338] p-[14px] shadow-[0_16px_48px_rgba(0,0,0,0.55)]"
      style={{ top, left, transform: `rotate(${rotate})`, zIndex, width: width || 206 }}
    >
      {/* Header */}
      <div className="mb-[10px] flex items-center justify-between">
        <span
          className="rounded-[4px] px-[8px] py-[3px] text-[9.5px] font-bold"
          style={{ background: tagBg, color: tagColor }}
        >
          {tag}
        </span>
        <span className="text-[14px] tracking-[1px] text-[#475569]">···</span>
      </div>

      {/* Tasks */}
      {tasks.map((task, i) => (
        <div
          key={task.name}
          className={`py-[7px] ${i < tasks.length - 1 ? "border-b border-white/5" : ""}`}
        >
          <div className="mb-[5px] text-[11px] font-medium text-[#e2e8f0]">{task.name}</div>
          <div className="flex flex-wrap gap-[4px]">
            {task.badges.map((badge) => (
              <Badge key={badge.label} label={badge.label} bg={badge.bg} color={badge.color} />
            ))}
          </div>
        </div>
      ))}

      {/* Progress bar */}
      {showProgress && (
        <div className="pt-[8px]">
          <div className="mb-[5px] text-[9px] text-[#475569]">Progress</div>
          <div className="h-[3px] overflow-hidden rounded-[2px] bg-white/6">
            <div className="h-full w-[40%] rounded-[2px] bg-[#6366f1]" />
          </div>
        </div>
      )}
    </div>
  );
}

export function TemplatesSection() {

  return (
    <section className="w-full overflow-hidden bg-[#141928] px-[30px] py-[80px] md:px-[55px] md:py-[120px]">
      <div className="mx-auto flex flex-col items-start md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <motion.div
          className="flex max-w-[480px] flex-col gap-[16px]"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[14px] font-normal text-[#94a3b8] font-(family-name:--font-nav) md:text-[20px]"
            variants={itemVariants}
          >
            What you need is ready, with
          </motion.p>

          <motion.h2
            className="text-[32px] font-extrabold leading-tight text-white font-(family-name:--font-nav) md:text-[40px] lg:text-[45px]"
            variants={itemVariants}
          >
            10,000+ ready templates
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="inline-flex items-center gap-[8px] rounded-[8px] border-[1.5px] border-white/50 px-[20px] py-[10px] text-[14px] font-medium text-white transition-colors duration-200 hover:bg-white/[0.07] font-(family-name:--font-nav)"
            >
              Check out templates
              <ArrowUpRight className="size-[13px]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right content — overlapping card mockups */}
        <motion.div
          className="relative hidden h-[380px] w-[500px] shrink-0 md:block lg:w-[540px]"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CARDS.map((card) => (
            <MockupCard
              key={card.id}
              tag={card.tag}
              tagBg={card.tagBg}
              tagColor={card.tagColor}
              tasks={card.tasks}
              top={card.top}
              left={card.left}
              rotate={card.rotate}
              zIndex={card.zIndex}
              width={card.width}
              showProgress={card.showProgress}
            />
          ))}

          {/* Tooltip */}
          <div
            className="absolute z-20 whitespace-nowrap rounded-[8px] bg-white px-[14px] py-[8px] text-[12px] font-bold text-[#0f172a] shadow-[0_6px_28px_rgba(0,0,0,0.45)]"
            style={{ top: 195, left: 140 }}
          >
            Pick from 10k+ templates: Flow, Task, and more.
            <div className="absolute bottom-[-5px] left-[18px] size-[10px] rotate-45 bg-white" />
          </div>

          {/* Right fade gradient */}
          <div className="pointer-events-none absolute right-0 top-0 z-16 h-full w-[80px] bg-linear-to-r from-transparent to-[#141928]" />
        </motion.div>
      </div>
    </section>
  );
}

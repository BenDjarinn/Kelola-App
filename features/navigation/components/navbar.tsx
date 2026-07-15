"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  templateMenuColumns,
  productMenuColumns,
  resourceMenuColumns,
} from "@/config/navigation";
import { MegaMenu } from "./mega-menu";
import type { MegaMenuColumn } from "./mega-menu";


interface NavTriggerProps {
  label: string;
  isActive: boolean;
  onHover: () => void;
}

const TRIGGER_BASE =
  "flex items-center gap-[4px] text-[16px] font-normal font-[family-name:var(--font-nav)] transition-colors duration-200 outline-none cursor-pointer";

const megaMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } as const,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } as const,
  },
} as const;

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.1 } as const,
  },
} as const;

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut", staggerChildren: 0.05 } as const,
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" } as const,
  },
} as const;


interface MegaMenuConfig {
  searchLabel: string;
  columns: MegaMenuColumn[];
}

const MEGA_MENU_MAP: Record<string, MegaMenuConfig> = {
  Template: { searchLabel: "Find Templates", columns: templateMenuColumns },
  Products: { searchLabel: "Find Products", columns: productMenuColumns },
  Resources: { searchLabel: "Find Resources", columns: resourceMenuColumns },
};

function NavTrigger({ label, isActive, onHover }: NavTriggerProps) {
  const colorClass = isActive ? "text-[#6155F5]" : "text-white/80 hover:text-[#6155F5]";

  return (
    <button
      type="button"
      className={`${TRIGGER_BASE} ${colorClass}`}
      onMouseEnter={onHover}
    >
      {label}
      <ChevronDown
        className={`size-[16px] transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
      />
    </button>
  );
}


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  const handleNavHover = useCallback((label: string) => {
    setActiveMenu(label);
  }, []);

  function handleNavLeave() {
    setActiveMenu(null);
  }

  function handleMobileToggle() {
    setMobileMenuOpen((prev) => {
      if (prev) setMobileActiveMenu(null);
      return !prev;
    });
  }

  const activeMegaMenu = activeMenu ? MEGA_MENU_MAP[activeMenu] : null;

  return (
    <header
      className="sticky top-0 left-0 z-50 w-full bg-nav-bg"
      onMouseLeave={handleNavLeave}
    >
      {/* Desktop nav */}
      <div className="mx-auto flex h-[75px] items-center justify-between px-[30px] md:px-[55px] md:py-[50px]">
        {/* Left section: Logo + Nav items */}
        <div className="flex items-center gap-[36px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              loading="eager"
              src="/assets/images/kelola-logo.svg"
              alt="Kelola"
              width={60}
              height={60}
              className="size-[60px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-[36px] md:flex">
            {Object.keys(MEGA_MENU_MAP).map((label) => (
              <NavTrigger
                key={label}
                label={label}
                isActive={activeMenu === label}
                onHover={() => handleNavHover(label)}
              />
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-[16px]">
          {/* Login button - hidden on mobile */}
          <Link
            href="#"
            className="hidden items-center justify-center rounded-[9px] bg-[linear-gradient(180deg,var(--color-btn-gradient-start)_0%,var(--color-btn-gradient-end)_100%)] px-[20px] py-[8px] text-[14px] font-normal text-white font-nav00 hover:brightness-125 hover:scale-[1.02] active:scale-[0.98] md:flex"
          >
            Login
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex items-center justify-center text-white md:hidden"
            onClick={handleMobileToggle}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-[24px]" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-[24px]" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mega menu - pulldown animation */}
      <AnimatePresence mode="wait">
        {activeMegaMenu && (
          <motion.div
            key={activeMenu}
            className="absolute left-0 top-[75px] hidden w-full overflow-hidden md:block"
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div variants={contentVariants} initial="hidden" animate="visible">
              <MegaMenu
                searchLabel={activeMegaMenu.searchLabel}
                columns={activeMegaMenu.columns}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[75px] z-40 flex flex-col overflow-y-auto bg-[#161C33] md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence mode="wait">
              {mobileActiveMenu === null ? (
                <motion.div
                  key="main-nav"
                  className="flex flex-1 flex-col px-[30px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col py-[20px]">
                    {Object.keys(MEGA_MENU_MAP).map((label) => (
                      <button
                        key={label}
                        type="button"
                        className="flex items-center justify-between py-[14px] text-[16px] font-normal font-nav text-white/80 transition-colors duration-200 hover:text-[#6155F5]"
                        onClick={() => setMobileActiveMenu(label)}
                      >
                        {label}
                        <ChevronDown className="size-[16px] -rotate-90" />
                      </button>
                    ))}
                  </div>
                  <div className="mt-auto border-t border-white/10 pt-[16px] pb-[20px]">
                    <Link
                      href="#"
                      className="flex w-full items-center justify-center rounded-[9px] bg-[linear-gradient(180deg,var(--color-btn-gradient-start)_0%,var(--color-btn-gradient-end)_100%)] px-[20px] py-[12px] text-[14px] font-normal text-white font-nav00 hover:brightness-125 active:scale-[0.98]"
                    >
                      Login
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={mobileActiveMenu}
                  className="flex flex-1 flex-col px-[30px]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-1 overflow-y-auto py-[20px]">
                    {MEGA_MENU_MAP[mobileActiveMenu].columns.map((column) => (
                      <div key={column.title} className="mb-[24px]">
                        <span className="mb-[12px] block text-[11px] font-normal uppercase tracking-[1px] text-[#474C7F] font-nav">
                          {column.title}
                        </span>
                        <div className="flex flex-col gap-[16px]">
                          {column.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-[12px] text-[15px] font-normal text-white transition-colors duration-200 hover:text-[#6155F5] font-nav"
                            >
                              <span className="text-white/70">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 py-[16px]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-[9px] border border-white/10 py-[12px] text-[14px] font-normal text-white font-nav transition-colors duration-200 hover:bg-white/5"
                      onClick={() => setMobileActiveMenu(null)}
                    >
                      Back
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

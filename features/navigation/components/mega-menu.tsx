"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export interface MegaMenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  searchLabel: string;
  columns: MegaMenuColumn[];
}

export function MegaMenu({ searchLabel, columns }: MegaMenuProps) {

  return (
    <div className="w-full bg-[#161C33] border-t border-white/5">
      <div className="mx-auto flex gap-[48px] px-[55px] py-[40px] pl-[147.5px]">
        {/* Search column */}
        <div className="flex flex-col gap-[14px]">
          <span className="text-[13px] font-normal text-[#474C7F] font-nav">
            {searchLabel}
          </span>
          <div className="relative">
            <Search className="absolute left-[10px] top-1/2 size-[16px] -translate-y-1/2 text-[#B2B2B2]" />
            <input
              type="text"
              placeholder="Search..."
              className="h-[34px] w-[200px] rounded-[12px] bg-[#232B48] pl-[32px] pr-[12px] py-[6px] text-[13px] font-normal text-white placeholder:text-[#B2B2B2] font-nav outline-none focus:ring-1 focus:ring-[#6155F5]/50"
            />
          </div>
        </div>

        {/* Menu columns */}
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-[14px]">
            <span className="text-[13px] font-normal text-[#474C7F] font-nav">
              {column.title}
            </span>
            <div className="flex flex-col gap-[14px]">
              {column.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-[10px] text-[14px] font-normal text-white transition-colors duration-200 hover:text-[#6155F5] font-nav"
                >
                  <span className="text-white/70">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

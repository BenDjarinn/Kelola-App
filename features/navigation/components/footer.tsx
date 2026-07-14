import Link from "next/link";
import Image from "next/image";

import { footerColumns } from "@/config/navigation";

export function Footer() {

  return (
    <footer className="w-full bg-nav-bg px-[30px] md:px-[55px] py-[50px]">
      <div className="mx-auto flex items-start justify-between">
        {/* Left section */}
        <div className="flex flex-1 flex-col">
          {/* Logo + text */}
          <div className="flex items-center gap-[8px]">
            <Image
              src="/assets/images/kelola-logo.svg"
              alt="Kelola"
              width={40}
              height={40}
              className="size-[40px]"
            />
            <span className="text-[16px] font-semibold text-white font-nav">
              Kelola
            </span>
          </div>

          {/* Divider */}
          <div className="mt-[20px] h-px w-[90%] bg-[#767984]" />

          {/* Tagline */}
          <p className="mt-[20px] text-[14px] font-normal text-[#7F86C2] font-nav">
            Smarter. More personal. Truly creative.
          </p>

          {/* Copyright */}
          <p className="mt-[12px] text-[13px] font-normal text-[#C0C3E1] font-nav">
            © 2026 Kelola — Built with intelligence for creators and teams.
          </p>
        </div>

        {/* Right section - Link columns */}
        <div className="hidden gap-[60px] lg:flex">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-[20px]">
              <span className="text-[14px] font-medium text-[#A6AAD4] font-nav">
                {column.title}
              </span>
              <div className="flex flex-col gap-[20px]">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[14px] font-normal text-[#7F86C2] transition-colors duration-200 hover:text-[#6155F5] font-nav"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/tablet link columns */}
      <div className="mx-auto mt-[30px] grid max-w-[1080px] grid-cols-3 gap-[30px] lg:hidden">
        {footerColumns.map((column) => (
          <div key={column.title} className="flex flex-col gap-[12px]">
            <span className="text-[13px] font-medium text-[#A6AAD4] font-nav">
              {column.title}
            </span>
            <div className="flex flex-col gap-[10px]">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-normal text-[#7F86C2] transition-colors duration-200 hover:text-[#6155F5] font-nav"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

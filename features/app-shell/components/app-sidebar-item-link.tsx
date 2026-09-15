import Link from "next/link";
import { Headphones, Home, Users, Workflow } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type { AppNavigationIcon, AppNavigationItem } from "@/config/app-navigation";

interface AppSidebarItemLinkProps {
  isActive: boolean;
  item: AppNavigationItem;
}

const appNavigationIcons: Record<AppNavigationIcon, LucideIcon> = {
  community: Users,
  home: Home,
  support: Headphones,
  workspace: Workflow,
};

function getAppSidebarItemClassName(isActive: boolean) {
  return isActive ? "homepage-sidebar-item homepage-sidebar-item-active" : "homepage-sidebar-item";
}

function renderAppNavigationIcon(icon: AppNavigationIcon) {
  const AppNavigationIcon = appNavigationIcons[icon];

  return <AppNavigationIcon className="homepage-sidebar-icon-glyph" />;
}

export function AppSidebarItemLink({ isActive, item }: AppSidebarItemLinkProps) {
  const sidebarItemClassName = getAppSidebarItemClassName(isActive);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={sidebarItemClassName}
      href={item.href}
    >
      <span className="homepage-sidebar-icon" aria-hidden="true">
        {renderAppNavigationIcon(item.icon)}
      </span>
      <span className="homepage-sidebar-label">{item.label}</span>
    </Link>
  );
}

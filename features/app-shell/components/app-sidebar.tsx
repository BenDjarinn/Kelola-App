import { appNavigationItems } from "@/config/app-navigation";
import { AppSidebarItemLink } from "./app-sidebar-item-link";

import type { AppNavigationId } from "@/config/app-navigation";

interface AppSidebarProps {
  activeNavigationId: AppNavigationId;
}

export function AppSidebar({ activeNavigationId }: AppSidebarProps) {
  return (
    <aside className="homepage-sidebar" aria-label="Application navigation">
      <nav className="homepage-sidebar-nav">
        {appNavigationItems.map((item) => (
          <AppSidebarItemLink
            isActive={activeNavigationId === item.id}
            item={item}
            key={item.id}
          />
        ))}
      </nav>
    </aside>
  );
}

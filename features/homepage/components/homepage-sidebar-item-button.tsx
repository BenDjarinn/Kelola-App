import { Headphones, Home, Users, Workflow } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type {
  HomepageNavigationIcon,
  HomepageNavigationId,
  HomepageNavigationItem,
} from "../config/homepage-navigation";

interface HomepageSidebarItemButtonProps {
  isActive: boolean;
  item: HomepageNavigationItem;
  onSelect: (navigationId: HomepageNavigationId) => void;
}

const homepageNavigationIcons: Record<HomepageNavigationIcon, LucideIcon> = {
  home: Home,
  workspace: Workflow,
  community: Users,
  support: Headphones,
};

function getNavigationItemClassName(isActive: boolean) {
  return isActive ? "homepage-sidebar-item homepage-sidebar-item-active" : "homepage-sidebar-item";
}

function renderNavigationIcon(icon: HomepageNavigationIcon) {
  const NavigationIcon = homepageNavigationIcons[icon];

  return <NavigationIcon className="homepage-sidebar-icon-glyph" />;
}

export function HomepageSidebarItemButton({
  isActive,
  item,
  onSelect,
}: HomepageSidebarItemButtonProps) {
  const navigationItemClassName = getNavigationItemClassName(isActive);

  function handleClick() {
    onSelect(item.id);
  }

  return (
    <button
      aria-pressed={isActive}
      className={navigationItemClassName}
      onClick={handleClick}
      type="button"
    >
      <span className="homepage-sidebar-icon" aria-hidden="true">
        {renderNavigationIcon(item.icon)}
      </span>
      <span className="homepage-sidebar-label">{item.label}</span>
    </button>
  );
}

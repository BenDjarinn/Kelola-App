"use client";

import { useState } from "react";

import { homepageNavigationItems } from "../config/homepage-navigation";
import { HomepageSidebarItemButton } from "./homepage-sidebar-item-button";

import type { HomepageNavigationId } from "../config/homepage-navigation";

export function HomepageSidebar() {
  const [selectedNavigationId, setSelectedNavigationId] = useState<HomepageNavigationId>("home");

  function handleNavigationSelect(navigationId: HomepageNavigationId) {
    setSelectedNavigationId(navigationId);
  }

  return (
    <aside className="homepage-sidebar" aria-label="Homepage navigation">
      <nav className="homepage-sidebar-nav">
        {homepageNavigationItems.map((item) => (
          <HomepageSidebarItemButton
            isActive={selectedNavigationId === item.id}
            item={item}
            key={item.id}
            onSelect={handleNavigationSelect}
          />
        ))}
      </nav>
    </aside>
  );
}

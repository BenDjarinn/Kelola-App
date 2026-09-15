"use client";

import { useState } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";

import {
  getWorkspaceItemById,
  WORKSPACE_SELECTED_ITEM_COOKIE_MAX_AGE_SECONDS,
  WORKSPACE_SELECTED_ITEM_COOKIE_NAME,
  workspaceAnnouncementItem,
  workspaceProjectName,
  workspaceSections,
} from "../config/workspace-sidebar";
import { WorkspaceHeader } from "./workspace-header";
import { WorkspaceItemButton } from "./workspace-item-button";
import { WorkspaceProjectsPanel } from "./workspace-projects-panel";
import { WorkspaceRightSidebar } from "./workspace-right-sidebar";
import { WorkspaceSection } from "./workspace-section";

import type { WorkspaceItemId, WorkspaceSectionId } from "../config/workspace-sidebar";

type WorkspaceSectionOpenState = Record<WorkspaceSectionId, boolean>;

const DEFAULT_WORKSPACE_SECTION_OPEN_STATE: WorkspaceSectionOpenState = {
  channels: true,
  "other-projects": true,
};

interface WorkspacePanelProps {
  initialSelectedItemId: WorkspaceItemId;
}

function persistWorkspaceSelectedItem(itemId: WorkspaceItemId) {
  document.cookie = `${WORKSPACE_SELECTED_ITEM_COOKIE_NAME}=${encodeURIComponent(
    itemId,
  )}; path=/; max-age=${WORKSPACE_SELECTED_ITEM_COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
}

export function WorkspacePanel({ initialSelectedItemId }: WorkspacePanelProps) {
  const [selectedItemId, setSelectedItemId] = useState<WorkspaceItemId>(initialSelectedItemId);
  const [sectionOpenState, setSectionOpenState] = useState<WorkspaceSectionOpenState>(
    DEFAULT_WORKSPACE_SECTION_OPEN_STATE,
  );

  const activeItem = getWorkspaceItemById(selectedItemId);

  function handleSectionToggle(sectionId: WorkspaceSectionId) {
    setSectionOpenState((currentState) => ({
      ...currentState,
      [sectionId]: !currentState[sectionId],
    }));
  }

  function handleItemSelect(itemId: WorkspaceItemId) {
    setSelectedItemId(itemId);
    persistWorkspaceSelectedItem(itemId);
  }

  return (
    <div className="homepage-workspace-layout">
      <aside className="homepage-workspace-sidebar" aria-label="Workspace navigation">
        <header className="homepage-workspace-header">
          <div className="homepage-workspace-header-control">
            <button className="homepage-workspace-title-button" type="button">
              <span>{workspaceProjectName}</span>
              <ChevronDown className="homepage-workspace-title-chevron" aria-hidden="true" />
            </button>
            <button className="homepage-workspace-more-button" type="button">
              <MoreVertical className="homepage-workspace-more-icon" aria-hidden="true" />
              <span className="sr-only">Open workspace menu</span>
            </button>
          </div>
        </header>
        <div className="homepage-workspace-sidebar-body">
          <div className="homepage-workspace-announcement">
            <WorkspaceItemButton
              isActive={selectedItemId === workspaceAnnouncementItem.id}
              item={workspaceAnnouncementItem}
              onSelect={handleItemSelect}
            />
          </div>
          {workspaceSections.map((section) => (
            <WorkspaceSection
              isOpen={sectionOpenState[section.id]}
              key={section.id}
              onItemSelect={handleItemSelect}
              onToggle={handleSectionToggle}
              section={section}
              selectedItemId={selectedItemId}
            />
          ))}
        </div>
      </aside>
      <section className="workspace-content" aria-label="Workspace content">
        <WorkspaceHeader activeItem={activeItem} />
        <div className="workspace-body">
          <div className="workspace-main-content">
            <WorkspaceProjectsPanel />
          </div>
          <WorkspaceRightSidebar />
        </div>
      </section>
    </div>
  );
}

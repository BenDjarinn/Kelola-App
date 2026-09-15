"use client";

import { useState } from "react";

import {
  defaultWorkspaceRightSidebarOpenState,
  workspaceRightSidebarSections,
} from "../config/workspace-right-sidebar";
import { WorkspaceRightSidebarSection } from "./workspace-right-sidebar-section";

import type {
  WorkspaceRightSidebarOpenState,
  WorkspaceRightSidebarSectionId,
} from "../config/workspace-right-sidebar";

export function WorkspaceRightSidebar() {
  const [sectionOpenState, setSectionOpenState] = useState<WorkspaceRightSidebarOpenState>(
    defaultWorkspaceRightSidebarOpenState,
  );

  function handleSectionToggle(sectionId: WorkspaceRightSidebarSectionId) {
    setSectionOpenState((currentState) => ({
      ...currentState,
      [sectionId]: !currentState[sectionId],
    }));
  }

  return (
    <aside className="workspace-right-sidebar" aria-label="Workspace member and tool navigation">
      {workspaceRightSidebarSections.map((section) => (
        <WorkspaceRightSidebarSection
          isOpen={sectionOpenState[section.id]}
          key={section.id}
          onToggle={handleSectionToggle}
          section={section}
        />
      ))}
    </aside>
  );
}

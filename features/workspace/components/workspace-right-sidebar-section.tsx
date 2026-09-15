import { ChevronDown } from "lucide-react";

import { WorkspaceRightSidebarItem } from "./workspace-right-sidebar-item";

import type {
  WorkspaceRightSidebarSection as WorkspaceRightSidebarSectionData,
  WorkspaceRightSidebarSectionId,
} from "../config/workspace-right-sidebar";

interface WorkspaceRightSidebarSectionProps {
  isOpen: boolean;
  onToggle: (sectionId: WorkspaceRightSidebarSectionId) => void;
  section: WorkspaceRightSidebarSectionData;
}

function getRightSidebarChevronClassName(isOpen: boolean) {
  return isOpen
    ? "workspace-right-sidebar-section-chevron workspace-right-sidebar-section-chevron-open"
    : "workspace-right-sidebar-section-chevron";
}

export function WorkspaceRightSidebarSection({
  isOpen,
  onToggle,
  section,
}: WorkspaceRightSidebarSectionProps) {
  const rightSidebarChevronClassName = getRightSidebarChevronClassName(isOpen);

  function handleToggle() {
    onToggle(section.id);
  }

  return (
    <section className="workspace-right-sidebar-section">
      <button
        aria-expanded={isOpen}
        className="workspace-right-sidebar-section-trigger"
        onClick={handleToggle}
        type="button"
      >
        <span>{section.label}</span>
        <ChevronDown className={rightSidebarChevronClassName} aria-hidden="true" />
      </button>
      {isOpen ? (
        <ul className="workspace-right-sidebar-list">
          {section.items.map((item) => (
            <WorkspaceRightSidebarItem item={item} key={item.id} />
          ))}
        </ul>
      ) : null}
    </section>
  );
}

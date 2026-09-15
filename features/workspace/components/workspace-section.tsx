import { ChevronDown } from "lucide-react";

import { WorkspaceItemButton } from "./workspace-item-button";

import type { WorkspaceItemId, WorkspaceSection, WorkspaceSectionId } from "../config/workspace-sidebar";

interface WorkspaceSectionProps {
  isOpen: boolean;
  onItemSelect: (itemId: WorkspaceItemId) => void;
  onToggle: (sectionId: WorkspaceSectionId) => void;
  section: WorkspaceSection;
  selectedItemId: WorkspaceItemId;
}

function getWorkspaceSectionChevronClassName(isOpen: boolean) {
  return isOpen
    ? "homepage-workspace-section-chevron homepage-workspace-section-chevron-open"
    : "homepage-workspace-section-chevron";
}

export function WorkspaceSection({
  isOpen,
  onItemSelect,
  onToggle,
  section,
  selectedItemId,
}: WorkspaceSectionProps) {
  const sectionChevronClassName = getWorkspaceSectionChevronClassName(isOpen);

  function handleToggle() {
    onToggle(section.id);
  }

  return (
    <section className="homepage-workspace-section">
      <button
        aria-expanded={isOpen}
        className="homepage-workspace-section-trigger"
        onClick={handleToggle}
        type="button"
      >
        <span>{section.label}</span>
        <ChevronDown className={sectionChevronClassName} aria-hidden="true" />
      </button>
      {isOpen ? (
        <div className="homepage-workspace-section-list">
          {section.items.map((item) => (
            <WorkspaceItemButton
              isActive={selectedItemId === item.id}
              item={item}
              key={item.id}
              onSelect={onItemSelect}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

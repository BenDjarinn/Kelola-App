import {
  BarChart3,
  Bot,
  CalendarDays,
  Megaphone,
  MessageCircle,
  MoreVertical,
  StickyNote,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type { WorkspaceItem, WorkspaceItemIcon, WorkspaceItemId } from "../config/workspace-sidebar";

interface WorkspaceItemButtonProps {
  isActive: boolean;
  item: WorkspaceItem;
  onSelect: (itemId: WorkspaceItemId) => void;
}

const workspaceItemIcons: Record<WorkspaceItemIcon, LucideIcon> = {
  ai: Bot,
  announcement: Megaphone,
  calendar: CalendarDays,
  chart: BarChart3,
  discussion: MessageCircle,
  notes: StickyNote,
};

function getWorkspaceItemClassName(isActive: boolean) {
  return isActive
    ? "homepage-workspace-item homepage-workspace-item-active"
    : "homepage-workspace-item";
}

function renderWorkspaceItemIcon(icon: WorkspaceItemIcon) {
  const WorkspaceItemIcon = workspaceItemIcons[icon];

  return <WorkspaceItemIcon className="homepage-workspace-item-icon" />;
}

export function WorkspaceItemButton({ isActive, item, onSelect }: WorkspaceItemButtonProps) {
  const workspaceItemClassName = getWorkspaceItemClassName(isActive);

  function handleClick() {
    onSelect(item.id);
  }

  return (
    <button
      aria-pressed={isActive}
      className={workspaceItemClassName}
      onClick={handleClick}
      type="button"
    >
      <span className="homepage-workspace-item-mark" aria-hidden="true">
        {renderWorkspaceItemIcon(item.icon)}
      </span>
      <span className="homepage-workspace-item-label">{item.label}</span>
      {isActive ? (
        <MoreVertical className="homepage-workspace-item-menu-icon" aria-hidden="true" />
      ) : null}
    </button>
  );
}

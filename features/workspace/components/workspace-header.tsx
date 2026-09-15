import {
  BarChart3,
  Bell,
  Bot,
  CalendarDays,
  Megaphone,
  MessageCircle,
  MoreVertical,
  Search,
  StickyNote,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type { WorkspaceItem, WorkspaceItemIcon } from "../config/workspace-sidebar";

interface WorkspaceHeaderProps {
  activeItem: WorkspaceItem;
}

const workspaceHeaderIcons: Record<WorkspaceItemIcon, LucideIcon> = {
  ai: Bot,
  announcement: Megaphone,
  calendar: CalendarDays,
  chart: BarChart3,
  discussion: MessageCircle,
  notes: StickyNote,
};

function renderWorkspaceHeaderIcon(icon: WorkspaceItemIcon) {
  const WorkspaceHeaderIcon = workspaceHeaderIcons[icon];

  return <WorkspaceHeaderIcon className="workspace-header-channel-icon" />;
}

export function WorkspaceHeader({ activeItem }: WorkspaceHeaderProps) {
  return (
    <header className="workspace-header">
      <div className="workspace-header-channel">
        <span className="workspace-header-channel-mark" aria-hidden="true">
          {renderWorkspaceHeaderIcon(activeItem.icon)}
        </span>
        <h1 className="workspace-header-title">{activeItem.label}</h1>
      </div>
      <div className="workspace-header-actions">
        <div className="workspace-header-search" role="search">
          <label className="sr-only" htmlFor="workspace-header-search">
            Search workspace channel
          </label>
          <Search className="workspace-header-search-icon" aria-hidden="true" />
          <input
            className="workspace-header-search-input"
            id="workspace-header-search"
            placeholder="Search"
            type="search"
          />
        </div>
        <button className="workspace-header-icon-button" type="button">
          <Bell className="workspace-header-action-icon" aria-hidden="true" />
          <span className="sr-only">Open notifications</span>
        </button>
        <button className="workspace-header-icon-button" type="button">
          <MoreVertical className="workspace-header-action-icon" aria-hidden="true" />
          <span className="sr-only">Open channel menu</span>
        </button>
      </div>
    </header>
  );
}

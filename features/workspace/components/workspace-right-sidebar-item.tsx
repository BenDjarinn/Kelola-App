import { Bot, CloudSun, FileCog, FileText, SquareCheckBig } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type {
  WorkspaceRightSidebarAvatarTone,
  WorkspaceRightSidebarIcon,
  WorkspaceRightSidebarItem as WorkspaceRightSidebarItemData,
} from "../config/workspace-right-sidebar";

interface WorkspaceRightSidebarItemProps {
  item: WorkspaceRightSidebarItemData;
}

const workspaceRightSidebarIcons: Record<WorkspaceRightSidebarIcon, LucideIcon> = {
  bot: Bot,
  cloud: CloudSun,
  file: FileCog,
  pdf: FileText,
  task: SquareCheckBig,
};

function getRightSidebarAvatarClassName(avatarTone: WorkspaceRightSidebarAvatarTone) {
  return `workspace-right-sidebar-avatar workspace-right-sidebar-avatar-${avatarTone}`;
}

function renderRightSidebarResourceIcon(icon: WorkspaceRightSidebarIcon) {
  const RightSidebarIcon = workspaceRightSidebarIcons[icon];

  return <RightSidebarIcon className="workspace-right-sidebar-resource-icon" />;
}

export function WorkspaceRightSidebarItem({ item }: WorkspaceRightSidebarItemProps) {
  if (item.variant === "member") {
    const avatarClassName = getRightSidebarAvatarClassName(item.avatarTone);

    return (
      <li className="workspace-right-sidebar-item">
        <span className={avatarClassName} aria-hidden="true">
          {item.initials}
        </span>
        <span className="workspace-right-sidebar-item-label">{item.label}</span>
      </li>
    );
  }

  return (
    <li className="workspace-right-sidebar-item">
      <span className="workspace-right-sidebar-resource-mark" aria-hidden="true">
        {renderRightSidebarResourceIcon(item.icon)}
      </span>
      <span className="workspace-right-sidebar-item-label">{item.label}</span>
      {item.badge ? <span className="workspace-right-sidebar-badge">{item.badge}</span> : null}
    </li>
  );
}

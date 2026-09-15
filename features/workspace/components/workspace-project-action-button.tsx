import { ArrowUpDown, Plus, RefreshCcw, Search } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type {
  WorkspaceProjectAction,
  WorkspaceProjectActionIcon,
} from "../config/workspace-projects";

interface WorkspaceProjectActionButtonProps {
  action: WorkspaceProjectAction;
}

const workspaceProjectActionIcons: Record<WorkspaceProjectActionIcon, LucideIcon> = {
  create: Plus,
  refresh: RefreshCcw,
  search: Search,
  sort: ArrowUpDown,
};

function renderWorkspaceProjectActionIcon(icon: WorkspaceProjectActionIcon) {
  const WorkspaceProjectActionIcon = workspaceProjectActionIcons[icon];

  return <WorkspaceProjectActionIcon className="workspace-project-action-icon" />;
}

export function WorkspaceProjectActionButton({ action }: WorkspaceProjectActionButtonProps) {
  return (
    <button className="workspace-project-action-button" type="button">
      {renderWorkspaceProjectActionIcon(action.icon)}
      <span className="sr-only">{action.label}</span>
    </button>
  );
}

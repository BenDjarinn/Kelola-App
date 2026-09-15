import { ROUTES } from "@/config/routes";

export type WorkspaceProjectActionIcon = "create" | "refresh" | "search" | "sort";
export type WorkspaceProjectActionId = "refresh" | "search" | "sort" | "create";
export type WorkspaceProjectId = "bot-announce" | "staff-announce";

export interface WorkspaceProjectAction {
  icon: WorkspaceProjectActionIcon;
  id: WorkspaceProjectActionId;
  label: string;
}

export interface WorkspaceProject {
  handle: string;
  href: string;
  id: WorkspaceProjectId;
  pic: string;
  project: string;
}

export const workspaceProjectActions: WorkspaceProjectAction[] = [
  {
    icon: "refresh",
    id: "refresh",
    label: "Refresh projects",
  },
  {
    icon: "search",
    id: "search",
    label: "Search projects",
  },
  {
    icon: "sort",
    id: "sort",
    label: "Sort projects",
  },
  {
    icon: "create",
    id: "create",
    label: "Create project",
  },
];

export const workspaceProjects: WorkspaceProject[] = [
  {
    handle: "Albert Gunawan & Nesya Gunawarma",
    href: ROUTES.workspaceProjectDetail("bot-announce"),
    id: "bot-announce",
    pic: "Albert Gunawan",
    project: "Bot Announce",
  },
  {
    handle: "Albert Gunawan & Nesya Gunawarma",
    href: ROUTES.workspaceProjectDetail("staff-announce"),
    id: "staff-announce",
    pic: "Albert Gunawan",
    project: "Staff Announce",
  },
];

export function getWorkspaceProjectById(projectId: string) {
  return workspaceProjects.find((project) => project.id === projectId);
}

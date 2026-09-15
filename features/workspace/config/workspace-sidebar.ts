export type WorkspaceItemIcon =
  | "announcement"
  | "chart"
  | "discussion"
  | "notes"
  | "calendar"
  | "ai";

export type WorkspaceItemId =
  | "announcements"
  | "meeting-announcement"
  | "development-discussion"
  | "monthly-report"
  | "report-weekly-chart"
  | "bot-report"
  | "meeting-notes"
  | "meeting-calendar"
  | "kelola-ai"
  | "laincash"
  | "laincash-report"
  | "bacabank"
  | "bacabank-report";

export type WorkspaceSectionId = "channels" | "other-projects";

export interface WorkspaceItem {
  icon: WorkspaceItemIcon;
  id: WorkspaceItemId;
  label: string;
}

export interface WorkspaceSection {
  id: WorkspaceSectionId;
  items: WorkspaceItem[];
  label: string;
}

export const workspaceProjectName = "Project Management Dashboard";

export const WORKSPACE_SELECTED_ITEM_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export const WORKSPACE_SELECTED_ITEM_COOKIE_NAME = "kelola_workspace_selected_item_id";

export const workspaceAnnouncementItem: WorkspaceItem = {
  icon: "announcement",
  id: "announcements",
  label: "announcements",
};

export const workspaceSections: WorkspaceSection[] = [
  {
    id: "channels",
    label: "Channels",
    items: [
      {
        icon: "announcement",
        id: "meeting-announcement",
        label: "meeting-announcement",
      },
      {
        icon: "discussion",
        id: "development-discussion",
        label: "development-discussion",
      },
      {
        icon: "announcement",
        id: "monthly-report",
        label: "monthly-report",
      },
      {
        icon: "chart",
        id: "report-weekly-chart",
        label: "report-weekly-chart",
      },
      {
        icon: "announcement",
        id: "bot-report",
        label: "bot-report",
      },
      {
        icon: "notes",
        id: "meeting-notes",
        label: "meeting-notes",
      },
      {
        icon: "calendar",
        id: "meeting-calendar",
        label: "meeting-calendar",
      },
      {
        icon: "ai",
        id: "kelola-ai",
        label: "kelola-ai",
      },
    ],
  },
  {
    id: "other-projects",
    label: "Other Projects",
    items: [
      {
        icon: "announcement",
        id: "laincash",
        label: "laincash",
      },
      {
        icon: "announcement",
        id: "laincash-report",
        label: "laincash-report",
      },
      {
        icon: "announcement",
        id: "bacabank",
        label: "bacabank",
      },
      {
        icon: "announcement",
        id: "bacabank-report",
        label: "bacabank-report",
      },
    ],
  },
];

export const defaultWorkspaceItemId: WorkspaceItemId = "meeting-announcement";

export const workspaceItems: WorkspaceItem[] = [
  workspaceAnnouncementItem,
  ...workspaceSections.flatMap((section) => section.items),
];

export function getWorkspaceItemById(itemId: WorkspaceItemId) {
  return workspaceItems.find((item) => item.id === itemId) ?? workspaceAnnouncementItem;
}

export function isWorkspaceItemId(itemId: string): itemId is WorkspaceItemId {
  return workspaceItems.some((item) => item.id === itemId);
}

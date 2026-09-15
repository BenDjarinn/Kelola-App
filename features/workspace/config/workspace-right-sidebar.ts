export type WorkspaceRightSidebarAvatarTone = "amber" | "blue" | "cyan" | "teal";
export type WorkspaceRightSidebarIcon = "bot" | "cloud" | "file" | "pdf" | "task";
export type WorkspaceRightSidebarSectionId = "members" | "bots" | "tools-plugins";

interface WorkspaceRightSidebarBaseItem {
  id: string;
  label: string;
}

export interface WorkspaceRightSidebarMemberItem extends WorkspaceRightSidebarBaseItem {
  avatarTone: WorkspaceRightSidebarAvatarTone;
  initials: string;
  variant: "member";
}

export interface WorkspaceRightSidebarResourceItem extends WorkspaceRightSidebarBaseItem {
  badge?: string;
  icon: WorkspaceRightSidebarIcon;
  variant: "resource";
}

export type WorkspaceRightSidebarItem =
  | WorkspaceRightSidebarMemberItem
  | WorkspaceRightSidebarResourceItem;

export interface WorkspaceRightSidebarSection {
  id: WorkspaceRightSidebarSectionId;
  items: WorkspaceRightSidebarItem[];
  label: string;
}

export type WorkspaceRightSidebarOpenState = Record<WorkspaceRightSidebarSectionId, boolean>;

export const defaultWorkspaceRightSidebarOpenState: WorkspaceRightSidebarOpenState = {
  bots: true,
  members: true,
  "tools-plugins": true,
};

export const workspaceRightSidebarSections: WorkspaceRightSidebarSection[] = [
  {
    id: "members",
    label: "Members",
    items: [
      {
        avatarTone: "blue",
        id: "albert-gunawan",
        initials: "AG",
        label: "Albert Gunawan",
        variant: "member",
      },
      {
        avatarTone: "amber",
        id: "nesya-gunawarma14",
        initials: "NG",
        label: "Nesya Gunawarma14",
        variant: "member",
      },
      {
        avatarTone: "teal",
        id: "muhammad-yudees",
        initials: "MY",
        label: "Muhammad Yudees",
        variant: "member",
      },
      {
        avatarTone: "cyan",
        id: "fikri-kusuma",
        initials: "FK",
        label: "Fikri Kusuma",
        variant: "member",
      },
    ],
  },
  {
    id: "bots",
    label: "Bot",
    items: [
      {
        badge: "BOT",
        icon: "bot",
        id: "announcer-bot",
        label: "Announcer-bot",
        variant: "resource",
      },
    ],
  },
  {
    id: "tools-plugins",
    label: "Tools / Plugins",
    items: [
      {
        icon: "cloud",
        id: "weatherforecaster",
        label: "weatherforecaster",
        variant: "resource",
      },
      {
        icon: "task",
        id: "jira",
        label: "Jira",
        variant: "resource",
      },
      {
        icon: "file",
        id: "task-card-aligner-tool",
        label: "TaskCardAlignerTool.exe",
        variant: "resource",
      },
      {
        icon: "pdf",
        id: "pdf-converter",
        label: "PDFConverter",
        variant: "resource",
      },
      {
        icon: "bot",
        id: "mebot",
        label: "Mebot",
        variant: "resource",
      },
    ],
  },
];

export type HomepageNavigationId = "home" | "workspace" | "community" | "support";
export type HomepageNavigationIcon = "home" | "workspace" | "community" | "support";

export interface HomepageNavigationItem {
  icon: HomepageNavigationIcon;
  id: HomepageNavigationId;
  label: string;
}

export const homepageNavigationItems: HomepageNavigationItem[] = [
  {
    icon: "home",
    id: "home",
    label: "Home",
  },
  {
    icon: "workspace",
    id: "workspace",
    label: "Workspace",
  },
  {
    icon: "community",
    id: "community",
    label: "Community",
  },
  {
    icon: "support",
    id: "support",
    label: "Support",
  },
];

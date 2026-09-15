import { ROUTES } from "./routes";

export type AppNavigationId = "home" | "workspace" | "community" | "support";
export type AppNavigationIcon = "home" | "workspace" | "community" | "support";

export interface AppNavigationItem {
  href: string;
  icon: AppNavigationIcon;
  id: AppNavigationId;
  label: string;
}

export const appNavigationItems: AppNavigationItem[] = [
  {
    href: ROUTES.homepage,
    icon: "home",
    id: "home",
    label: "Home",
  },
  {
    href: ROUTES.workspace,
    icon: "workspace",
    id: "workspace",
    label: "Workspace",
  },
  {
    href: ROUTES.community,
    icon: "community",
    id: "community",
    label: "Community",
  },
  {
    href: ROUTES.support,
    icon: "support",
    id: "support",
    label: "Support",
  },
];

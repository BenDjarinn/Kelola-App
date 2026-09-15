import { AppSidebar } from "./app-sidebar";

import type { ReactNode } from "react";
import type { AppNavigationId } from "@/config/app-navigation";

type AppRouteContentVariant = "default" | "workspace";

interface AppRouteShellProps {
  activeNavigationId: AppNavigationId;
  children?: ReactNode;
  contentVariant?: AppRouteContentVariant;
}

function getAppRouteContentClassName(contentVariant: AppRouteContentVariant) {
  return contentVariant === "workspace"
    ? "homepage-content homepage-content-workspace"
    : "homepage-content";
}

export function AppRouteShell({
  activeNavigationId,
  children,
  contentVariant = "default",
}: AppRouteShellProps) {
  const routeContentClassName = getAppRouteContentClassName(contentVariant);

  return (
    <div className="homepage-shell">
      <AppSidebar activeNavigationId={activeNavigationId} />
      <main className={routeContentClassName}>{children}</main>
    </div>
  );
}

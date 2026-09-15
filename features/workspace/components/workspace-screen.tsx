import { AppRouteShell } from "@/features/app-shell";
import { WorkspacePanel } from "./workspace-panel";

import type { WorkspaceItemId } from "../config/workspace-sidebar";

interface WorkspaceScreenProps {
  initialSelectedItemId: WorkspaceItemId;
}

export function WorkspaceScreen({ initialSelectedItemId }: WorkspaceScreenProps) {
  return (
    <AppRouteShell activeNavigationId="workspace" contentVariant="workspace">
      <WorkspacePanel initialSelectedItemId={initialSelectedItemId} />
    </AppRouteShell>
  );
}

import { cookies } from "next/headers";

import {
  defaultWorkspaceItemId,
  isWorkspaceItemId,
  WORKSPACE_SELECTED_ITEM_COOKIE_NAME,
  WorkspaceScreen,
} from "@/features/workspace";

import type { Metadata } from "next";
import type { WorkspaceItemId } from "@/features/workspace";

export const metadata: Metadata = {
  title: "Workspace",
  description: "Manage your Kelola workspace projects, channels, and collaboration flows.",
};

export default async function WorkspacePage() {
  const cookieStore = await cookies();
  const storedItemId = cookieStore.get(WORKSPACE_SELECTED_ITEM_COOKIE_NAME)?.value;
  const initialSelectedItemId: WorkspaceItemId =
    storedItemId && isWorkspaceItemId(storedItemId) ? storedItemId : defaultWorkspaceItemId;

  return <WorkspaceScreen initialSelectedItemId={initialSelectedItemId} />;
}

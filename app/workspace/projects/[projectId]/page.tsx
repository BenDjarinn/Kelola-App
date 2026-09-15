import { WorkspaceProjectDetailScreen } from "@/features/workspace";

import type { Metadata } from "next";

interface WorkspaceProjectDetailPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export const metadata: Metadata = {
  title: "Workspace Project",
  description: "View a selected Kelola workspace project.",
};

export default async function WorkspaceProjectDetailPage({
  params,
}: WorkspaceProjectDetailPageProps) {
  const { projectId } = await params;

  return <WorkspaceProjectDetailScreen projectId={projectId} />;
}

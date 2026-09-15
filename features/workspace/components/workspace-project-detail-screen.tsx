import { notFound } from "next/navigation";

import { AppRouteShell } from "@/features/app-shell";
import { getWorkspaceProjectById } from "../config/workspace-projects";

interface WorkspaceProjectDetailScreenProps {
  projectId: string;
}

export function WorkspaceProjectDetailScreen({ projectId }: WorkspaceProjectDetailScreenProps) {
  const project = getWorkspaceProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <AppRouteShell activeNavigationId="workspace" contentVariant="workspace">
      <section className="workspace-project-detail-screen" aria-labelledby="workspace-project-detail-title">
        <p className="workspace-project-detail-kicker">Projects</p>
        <h1 className="workspace-project-detail-title" id="workspace-project-detail-title">
          {project.project}
        </h1>
      </section>
    </AppRouteShell>
  );
}

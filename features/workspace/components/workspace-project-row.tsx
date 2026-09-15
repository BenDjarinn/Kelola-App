import Link from "next/link";

import type { WorkspaceProject } from "../config/workspace-projects";

interface WorkspaceProjectRowProps {
  project: WorkspaceProject;
}

export function WorkspaceProjectRow({ project }: WorkspaceProjectRowProps) {
  return (
    <tr className="workspace-project-row">
      <td className="workspace-project-cell workspace-project-name">
        <Link className="workspace-project-name-link" href={project.href}>
          {project.project}
        </Link>
      </td>
      <td className="workspace-project-cell workspace-project-pic">{project.pic}</td>
      <td className="workspace-project-cell workspace-project-handle">{project.handle}</td>
      <td className="workspace-project-cell workspace-project-menu-cell" aria-hidden="true" />
    </tr>
  );
}

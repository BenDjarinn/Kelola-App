import { workspaceProjectActions, workspaceProjects } from "../config/workspace-projects";
import { WorkspaceProjectActionButton } from "./workspace-project-action-button";
import { WorkspaceProjectRow } from "./workspace-project-row";

export function WorkspaceProjectsPanel() {
  return (
    <section className="workspace-projects-panel" aria-labelledby="workspace-projects-title">
      <div className="workspace-projects-header">
        <h2 className="workspace-projects-title" id="workspace-projects-title">
          Projects
        </h2>
        <div className="workspace-project-actions" aria-label="Project actions">
          {workspaceProjectActions.map((action) => (
            <WorkspaceProjectActionButton action={action} key={action.id} />
          ))}
        </div>
      </div>
      <div className="workspace-projects-table-wrap">
        <table className="workspace-projects-table">
          <thead>
            <tr className="workspace-project-head-row">
              <th className="workspace-project-head-cell" scope="col">
                Projects
              </th>
              <th className="workspace-project-head-cell" scope="col">
                PIC
              </th>
              <th className="workspace-project-head-cell" scope="col">
                Handle
              </th>
              <th className="workspace-project-head-cell" scope="col">
                ...
              </th>
            </tr>
          </thead>
          <tbody>
            {workspaceProjects.map((project) => (
              <WorkspaceProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

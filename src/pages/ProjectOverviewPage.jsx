import projectOverviewMainHtml from "../assets/project-overview-main.html?raw";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function ProjectOverviewPage() {
  useDocumentTitle("Project Overview");
  return (
    <div
      dangerouslySetInnerHTML={{ __html: projectOverviewMainHtml }}
    />
  );
}

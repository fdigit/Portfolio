import ProjectsClient from "@/components/ProjectsClient";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
    const projectsData = getAllProjects();
    return <ProjectsClient projectsData={projectsData} />;
}

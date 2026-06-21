import HomeClient from "@/components/HomeClient";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
    const projectsData = getAllProjects();
    const featuredProjects = projectsData.slice(0, 3);
    return <HomeClient featuredProjects={featuredProjects} />;
}

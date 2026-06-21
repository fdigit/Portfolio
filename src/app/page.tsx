import HomeClient from "@/components/HomeClient";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
    const projectsData = getAllProjects();
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
    return <HomeClient featuredProjects={featuredProjects} />;
}

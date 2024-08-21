import ProjectsSection from "@/components/pages/ProjectsSection";
import { projectsTitles, projectsVars } from "@/utils/variables";
import { IconType } from "react-icons/lib";

export default async function Projects(icons: IconType[]) {

  return (
    <ProjectsSection
      title={projectsTitles.title}
      subtitle={projectsTitles.subtitle}
      projects={projectsVars}
      icons={icons}
    />
  );
}

import { ProjectsSectionPayload } from "@/types/global";
import Image from "next/image";
import { DiNodejs, DiDigitalOcean, DiDocker, DiGithub, DiMysql } from "react-icons/di";
import { SiPrisma, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma, FaNodeJs } from "react-icons/fa6";
import { projectsVars } from "@/utils/variables";
import { IconType } from "react-icons";
import Link from "next/link";

const ProjectsSection = ({ title, subtitle, image }: ProjectsSectionPayload) => {

    return (
     <div className="projects flex">
        {projectsVars && (
          <div className="projects-grid grid grid-cols-1 gap-6 md:grid-cols-3">
            {projectsVars.map((project, index) => (
              <div
                className="project-card flex flex-col gap-4 p-2 rounded-xl shadow-lg w-full h-full bg-slate-300 border-2 border-slate-400 text-black"
                key={index}
              >
                <h3 className="project-title text-center">{project.title}</h3>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-image py-1 px-2  w-full h-full rounded-xl bg-black "
                  // style={{
                  //   backgroundImage: `url(${project.image})`,
                  //   backgroundSize: "contain",
                  //   backgroundPosition: "center",
                  //   backgroundRepeat: "no-repeat",
                  // }}
                >
                  <Image
                    src={project.image}
                    alt="project"
                    width={300}
                    height={250}
                    className="project-image rounded-xl w-[910%] h-[100%]"
                  />
                </Link>
                <p className="project-description">{project.description}</p>
                <div className="project-icons flex gap-3 text-xl pl-20">
                  {project.icons.map((Icon: IconType) => (
                    <Icon key={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

export default ProjectsSection;

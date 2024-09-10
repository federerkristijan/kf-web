import { Project } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { useState } from "react";

interface MobileProjectsSectionProps {
  projects: Project[];
}

const MobileProjectsSection: React.FC<MobileProjectsSectionProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="mobile-projects-section">
      <div className="carousel-container">
        <button onClick={prevProject} className="carousel-button prev">&lt;</button>
        <div className="project-card">
          <h3 className="project-title text-center">{projects[currentIndex].title}</h3>
          <Link
            href={projects[currentIndex].url}
            target="_blank"
            rel="noreferrer"
            className="project-image-container"
          >
            <Image
              src={projects[currentIndex].image}
              alt="project"
              width={300}
              height={250}
              className="project-image"
            />
          </Link>
          <p className="project-description">{projects[currentIndex].description}</p>
          <div className="project-icons">
            {projects[currentIndex].icons.map((Icon: IconType, iconIndex) => (
              <Icon key={iconIndex} />
            ))}
          </div>
        </div>
        <button onClick={nextProject} className="carousel-button next">&gt;</button>
      </div>
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileProjectsSection;

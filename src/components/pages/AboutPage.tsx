import { AboutPagePayload } from "@/types/global";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";
import { aboutVars, quote } from "@/utils/variables";

export default function AboutPage({ image, skills }: AboutPagePayload) {
  return (
    <div className="about-wrapper bg-[#ffffff] h-full text-black">
      <h1 className="about-title">{aboutVars.title}</h1>
      {image && (
        <Image
          src={Foto}
          alt="foto"
          className="about-pic rounded-full bg-slate-300 border-gray-300 border-2 my-8 mr-2"
        />
      )}
      <h4 className="about-description">{aboutVars.description}</h4>
      <div className="about-skills-wrapper flex h-auto pt-6 gap-4 flex-wrap">
        {skills &&
          skills.map((skill, index) => (
            <span key={index} className="about-skill">
              {skill.title}
            </span>
          ))}
      </div>
      <h2 className="about-quote">{'"' + quote + '"'}</h2>
    </div>
  );
}

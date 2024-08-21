import { Project, Skill } from "@/types/global";
import Livepad from "@/assets/Livepad.png";
import Inklusion from "@/assets/Inklusion.png";
import DasaHink from "@/assets/DasaHink.png";
import CannaSmokeHere from "@/assets/CannaSmokeHere.png";
import { DiNodejs, DiDigitalOcean, DiDocker, DiGithub, DiMysql } from "react-icons/di";
import { SiPrisma, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma, FaNodeJs } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { FaMailchimp } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";

export const aboutVars = {
  title: 'About',
  description:
    "I'm a passionate code creator and language enthusiast, weaving innovation into the digital realm of possibilities. Always open to a new challenge and learning and exploring new technologies, I'm a firm believer in the power of collaboration and teamwork. I'm a self-taught developer with a strong knowledge in JavaScript, Next.js, Typescript, Python, Django and Sanity.io. I'm always looking for opportunities to learn and grow, and I'm excited to see where my journey takes me.",
};

export const skills: Skill[] = [
  {
    title: 'DigitalOcean',
  },
  {
    title: 'JavaScript',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'Figma',
  },
  {
    title: 'React',
  },
  {
    title: 'Mysql',
  },
  {
    title: 'Node.js',
  },
  {
    title: 'Python',
  },
  {
    title: 'Django',
  },
  {
    title: 'Github'
  },
  {
    title: 'Vercel'
  },
  {
    title: 'Scrum'
  },
  {
    title: 'Next.js'
  },
  {
    title: 'TailwindCSS'
  },
  {
    title: 'Prisma'
  }
];

export const quote = "Failure is an opportunity to learn and thrive."

export const projectsTitles = {
  title: 'Projects',
  subtitle: 'A collection of projects I have worked on',
};

//  TODO: Add the project tech stack icons
export const projectsVars: Project[] = [
  {
    title: 'Canna Smoke Here',
    description:
      'Interactive and Responsive Web SPA with Next.js 14, TailwindCSS, OpenStreetMaps and Google Analytics',
    image: CannaSmokeHere.src,
    url: 'https://www.livepad.org/',
    icons: [TbBrandNextjs, SiTailwindcss, SiTypescript, SiVercel,FaFigma, DiGithub, SiOpenstreetmap, SiGoogleanalytics]
  },
  {
    title: 'Livepad',
    description:
      'Product management for the agile team project. Integration and implemention of the user authentication for the existing website, as well as further developing the app with various Etherpad plugins. Tech stack: Node.js, Next.js, TailwindCSS, i18next, DigitalOcean, Vercel, Docker, Typescript, Sanity.io, Prisma, MySQL, Planetscale, Figma, and GitHub.',
    image: Livepad.src,
    url: 'https://www.livepad.org/',
    icons: [FaNodeJs, TbBrandNextjs, SiTailwindcss, SiTypescript, DiNodejs, DiDigitalOcean, SiVercel, DiDocker, FaFigma, DiGithub, SiPrisma, DiMysql, SiSanity]
  },
  {
    title: 'Inklusion Bühnenreif',
    description:
      'Servicing, updating and managing a Wix Website. Administration of Meta Business Suite and the creation of social media content with a focus on accessibility, particularly alternative text.Creating educational materials for team members on the usage of web technologies',
    image: Inklusion.src,
    url: 'https://www.inklusion-buehnenreif.de/',
    icons: [ FaMailchimp, FaWix, FaCss3 ]
  },
  {
    title: 'Dasa Hink',
    description:
      'Development of Responsive Web SPA with React, Sanity.io, NoSQL, EmailJS (contact), Mailchimp (subscription), Google Analytics',
    image: DasaHink.src,
    url: 'https://www.dasahink.com/',
    icons: [FaReact, SiSanity, SiGoogleanalytics, FaMailchimp ]
  },
];

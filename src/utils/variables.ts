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
import { FaMeta } from "react-icons/fa6";

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

export const projectsVars: Project[] = [
  {
    title: 'Canna Smoke Here',
    description:
      'An interactive and responsive web app that geolocates all schools, kindergartens, and playgrounds in Germany, allowing users to compare their location with nearby educational institutions and recreational areas. The tech stack includes Next.js 14, TypeScript, TailwindCSS, OpenStreetMaps, and Google Analytics.',
    image: CannaSmokeHere.src,
    url: 'https://www.livepad.org/',
    icons: [TbBrandNextjs, SiTailwindcss, SiTypescript, SiVercel,FaFigma, DiGithub, SiOpenstreetmap, SiGoogleanalytics]
  },
  {
    title: 'Livepad',
    description:
      'Product management for the Agile team project involved integrating and implementing user authentication for the existing website, as well as further developing the app with various Etherpad plugins. The tech stack included Node.js, Next.js, TypeScript, TailwindCSS, i18next, DigitalOcean, Vercel, Docker, Sanity.io, Prisma, MySQL, Planetscale, Figma, and GitHub',
    image: Livepad.src,
    url: 'https://www.livepad.org/',
    icons: [FaNodeJs, TbBrandNextjs, SiTailwindcss, SiTypescript, DiNodejs, DiDigitalOcean, SiVercel, DiDocker, FaFigma, DiGithub, SiPrisma, DiMysql, SiSanity]
  },
  {
    title: 'Inklusion Bühnenreif',
    description:
      'Servicing, updating, and managing a Wix website. Administering the Meta Business Suite and creating social media content with a focus on accessibility, particularly through the use of alternative text. Developing educational materials for team members on web technologies and providing technical support.',
    image: Inklusion.src,
    url: 'https://www.inklusion-buehnenreif.de/',
    icons: [ FaMailchimp, FaWix, FaCss3, FaMeta ]
  },
  // {
  //   title: 'Dasa Hink',
  //   description:
  //     'Development of Responsive Web SPA with React, Sanity.io, NoSQL, EmailJS (contact), Mailchimp (subscription), Google Analytics',
  //   image: DasaHink.src,
  //   url: 'https://www.dasahink.com/',
  //   icons: [FaReact, SiSanity, SiGoogleanalytics, FaMailchimp ]
  // },
];

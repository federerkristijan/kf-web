import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    _id,
    heroSection
    }
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    _id,
    title,
    image,
    description,
    skills,
    quote,
    }
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] {
    _id,
    title,
    slug,
    description,
    date,
    mainImage,
    link,
    tags,
    }
  }
`;

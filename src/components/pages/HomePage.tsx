import React from "react";
import { HomePageProps } from "@/types";
import { HeroSection } from "./HeroSection";
import Layout from "@/pages/layout";
import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "homePage"] {
  }
`;

export function HomePage({ page, sections, preview }: HomePageProps) {
  const { hero } = sections ?? {};

  return (
    <Layout>
      <div className="bg-[#111111] h-full">
        <HeroSection
          title={hero?.title || ""}
          subtitle={hero?.subtitle || "Fullstack Developer"}
        />
      </div>
    </Layout>
  );
}

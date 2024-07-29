import React from "react";
import { HomePageProps } from "@/types/global";
import { HeroSection } from "./HeroSection";
import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "homePage"] {
  }
`;

export function HomePage({ page, sections, preview }: HomePageProps) {
  const { hero } = sections ?? {};

  return (
    <div className="bg-[#111111] h-full">
      <HeroSection
        title={hero?.title || ""}
        subtitle={hero?.subtitle || "Fullstack Developer"}
      />
    </div>
  );
}

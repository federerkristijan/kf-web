import React from "react";

import { HeroSection } from "./HeroSection";

export function HomePage({ sections }: { sections: any }) {
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

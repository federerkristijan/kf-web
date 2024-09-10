"use client";

import { HeroSectionPayload } from "@/types/global";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";

export const MobileHeroSection = ({ title, subtitle, image }: HeroSectionPayload) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 920;

  if (!isMobile) {
    return null; // Return nothing if it's not a mobile device.
  }

  return (
    <div className="mobile-hero-section">
      <h1 className="mobile-title">Kristijan Federer</h1>
      <Image
        src={Foto}
        alt="foto"
        className="mobile-background-image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

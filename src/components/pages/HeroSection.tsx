"use client";

import { HeroSectionPayload } from "@/types/global";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";
import { Button } from "@/components/ui/Button";
import Moustache from "@/assets/moustache.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = ({ title, subtitle, image }: HeroSectionPayload) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderHeaderName = () => {
    const name1 = "Kristijan Fe";
    const name2 = "d";
    const name3 = "erer";

    return (
      <div className="relative inline-flex items-center">
        <span className="text-5xl sm:text-6xl md:text-7xl font-bold">{name1}</span>
        <div className="relative inline-block">
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none"
            animate={{ y: [-5, 0, -5] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src={Moustache}
              alt="Moustache Animation"
              className="moustache-animation"
              width={50}
              height={24}
            />
          </motion.div>
          <span className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold">{name2}</span>
        </div>
        <span className="text-5xl sm:text-6xl md:text-7xl font-bold">{name3}</span>
      </div>
    );
  };

  return (
    <div className="hero-section min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="hero-text flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-0 w-full lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl py-4">{renderHeaderName()}</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl py-2">{subtitle}</h2>
        <p className="text-base sm:text-lg md:text-xl py-2 max-w-md">
          I write clean code to create quality applications with intuitive user experience.
        </p>
        <div className="flex flex-col sm:flex-row sm:px-4 gap-4 py-4">
          <Button href="/about">Discover a Talent</Button>
          <Button className="button2" href="/projects">
            See Projects
          </Button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8 hidden md:block w-full lg:w-1/2">
        <Image
          src={Foto}
          alt="Kristijan Federer"
          width={500}
          height={600}
          className="profile-picture rounded-xl w-80 sm:w-96 md:w-104 lg:w-120"
          priority
        />
      </div>
    </div>
  );
};

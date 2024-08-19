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
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate left and right slowly
      setRotation((prevRotation) => (prevRotation >= 0 ? -5 : 5));
    }, 3000);

    const pauseIntervalId = setInterval(() => {
      clearInterval(intervalId);
      setTimeout(() => {
        const newIntervalId = setInterval(() => {
          setRotation((prevRotation) => (prevRotation >= 0 ? -5 : 5));
        }, 2000);

        setTimeout(() => {
          clearInterval(newIntervalId);
        }, 2000);
      }, 10000);
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearInterval(pauseIntervalId);
    };
  }, []);

  const renderHeaderName = () => {
    const name1 = "Kristijan Fe";
    const name2 = "d";
    const name3 = "erer";

    return (
      <div className="hero-section flex items-start">
        <h1 className="inline-flex">
          {name1}
          <div className="flex ">
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
              animate={{ rotate: [rotation, 0, rotation] }}
              transition={{
                from: 60,
                duration: 0.5,
                ease: "linear",
              }}
            >
              <Image
                src={Moustache}
                alt="Moustache Animation"
                className="moustache-animation"
                width={55}
                height={24}
              />
            </motion.div>
            {name2}
          </div>
          {name3}
        </h1>
      </div>
    );
  };

  return (
    <div className="hero-section min-h-full">
      <div className="flex flex-col relative">
        <div className="heading-moustache ">
          <h1 className="text-9xl py-4 ">{renderHeaderName()}</h1>
        </div>
        <div className="pl-[2rem]">
          <h2 className="text-5xl py-4">{subtitle}</h2>
          <span className="sub-header text-3xl py-4">
            I write clean code to create quality applications with intuitive
            user experience.
          </span>
        </div>
        <div className="buttons">
          <Button
            href="/about"
          >
            Discover a talent
          </Button>
          <Button
            className="button2"
            href="/projects"
          >
            See projects
          </Button>
        </div>
      </div>
      <div className="foto px-10 py-20">
        <Image
          src={Foto}
          alt="foto"
          width={550}
          height={600}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

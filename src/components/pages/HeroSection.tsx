'use client';

import { HeroSectionPayload } from "@/types/global";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";
import { Button } from "../ui/Button";
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
    }, 3000); // Set the duration for each half rotation to 2 seconds

    // After 10 seconds, clear the interval to pause the animation
    const pauseIntervalId = setInterval(() => {
      clearInterval(intervalId);
      setTimeout(() => {
        // Restart the rotation after the pause
        const newIntervalId = setInterval(() => {
          setRotation((prevRotation) => (prevRotation >= 0 ? -5 : 5));
        }, 2000);

        // Clear the interval after 2 seconds to stop the rotation
        setTimeout(() => {
          clearInterval(newIntervalId);
        }, 2000);
      }, 10000); // Set the pause duration to 10 seconds
    }, 10000); // Set the initial pause duration to 10 seconds

    // Clear the pause interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      clearInterval(pauseIntervalId);
    };
  }, []);

  const headerName = () => {
    const name1 = "Kristijan Fe";

    const name2 = "d";

    const name3 = "erer";

    return (
      <div className="hero-section">
        <h1>{name1}</h1>
        <div className="moustache">
          <motion.div
            animate={{ rotate: [rotation, 0, rotation] }}
            transition={{
              from: 60,
              duration: 0.5,
              ease: "linear",
            }}
          >
            <Image
              src={Moustache}
              alt="animation"
              className="moustache-animation absolute top-0 left-3 right-0 bottom-0 m-auto w-[1px] h-auto"
              width={55}
              height={24}
            />
          </motion.div>
          <h1 className="">{name2}</h1>
        </div>
        <h1>{name3}</h1>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between px-6 w-full min-h-full">
      <div className="p-20 relative">
        <div className="heading-moustache">
          <h1 className="text-7xl py-4">{headerName()}</h1>
        </div>
        <h2 className="text-5xl py-4">{subtitle}</h2>
        <span className="text-3xl py-4">
          I write clean code to create quality applications with intuitive user
          experience.
        </span>
        <div className="flex gap-8 py-12">
          <Link href="/about">
            <Button
              className="bg-[#9B51E0] rounded-3xl text-white px-6 py-3 shadow-btn-primary w-full"
              onClick={() => console.log("/about")}
            >
              Discover a talent
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              className="border-2 border-[#9B51E0] rounded-3xl text-white px-6 py-3 shadow-btn-primary w-full"
              onClick={() => console.log("/projects")}
            >
              See projects
            </Button>
          </Link>
        </div>
      </div>
      <div className="px-10 py-20">
        <Image src={Foto} alt="foto" width={600} height={600} className="rounded-xl" />
      </div>
    </div>
  );
};

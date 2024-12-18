'use client';

import Image from "next/image";
import logo from '@/assets/logo.png';
import Link from "next/link";
import React from "react";
import { LogoProps } from "@/types/global";

const Logo = ({ setMobileMenuOpen }: LogoProps) => {
  return (
    <div>
      <Link
        href="/"
        className="-m-1.5 -mt-1 p-1.5"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Image src={logo} alt="logo" width={48} height={48}/>
      </Link>
    </div>
  );
};

export default Logo;

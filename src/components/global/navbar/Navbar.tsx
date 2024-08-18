'use client';

<<<<<<< HEAD
import { NavbarProps } from "@/types";
=======
import { NavbarProps } from "@/types/global";
>>>>>>> 1f7c73fc3df59675f56dbf9888f089c3a6e3df9e
import { useState } from "react";
import Logo from "../../ui/Logo";
import NavigationItems from "./NavigationItems";
import { menuItems } from "./menuItems";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <nav
        className="flex flex-row z-0 items-center justify-between border-white"
      >
        <div>
          <Logo setMobileMenuOpen={setMobileMenuOpen} />
        </div>
        <NavigationItems menuItems={menuItems}/>
      </nav>
  );
}

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <NavigationMenu className="grid grid-cols-3 w-full p-2">
        <NavigationMenuItem className="flex mx-5 p-2 items-center justify-center border-b border-gray-300">
          <Link href="/" passHref legacyBehavior>
            <NavigationMenuLink>About Me</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex mx-5 p-2 items-center justify-center border-b border-gray-300">
          <Link href="/Projects" passHref legacyBehavior>
            <NavigationMenuLink>Projects</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex mx-5 p-2 items-center justify-center border-b border-gray-300">
          <Link href="/Work" passHref legacyBehavior>
            <NavigationMenuLink>Experience</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

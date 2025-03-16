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
      <NavigationMenu className="grid grid-cols-3 w-full p-3">
        <div className="transition-all duration-400 ease-in-out text-lg hover:scale-110">
          <NavigationMenuItem className="flex mx-5 p-2 items-center justify-center border-b border-gray-300 hover:animate-pulse">
            <Link href="/" passHref legacyBehavior>
              <NavigationMenuLink>
                About Me
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
        <div className="transition-all duration-400 ease-in-out text-lg hover:scale-110">
          <NavigationMenuItem className="flex mx-5 p-2 items-center justify-center border-b border-gray-300 hover:animate-pulse">
            <Link href="/Projects" passHref legacyBehavior>
              <NavigationMenuLink>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
        <div className="transition-all duration-400 ease-in-out text-lg hover:scale-110">
          <NavigationMenuItem className="flex mx-5 p-2 items-center justify-center border-b border-gray-300 hover:animate-pulse">
            <Link href="/Work" passHref legacyBehavior>
              <NavigationMenuLink>
                Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu className="w-full p-3">
      <NavigationMenuList className="grid grid-cols-3 w-full">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="transition-all duration-400 ease-in-out text-lg hover:scale-110 mx-5 p-2 border-b border-gray-300 hover:animate-pulse flex justify-center items-center"
            >
              About Me
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/Projects"
              className="transition-all duration-400 ease-in-out text-lg hover:scale-110 mx-5 p-2 border-b border-gray-300 hover:animate-pulse flex justify-center items-center"
            >
              Projects
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/Work"
              className="transition-all duration-400 ease-in-out text-lg hover:scale-110 mx-5 p-2 border-b border-gray-300 hover:animate-pulse flex justify-center items-center"
            >
              Experience
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;

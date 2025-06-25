"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <NavigationMenu className="w-full p-3">
        <NavigationMenuList className="grid grid-cols-3 w-full">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className={`font-medium text-lg mx-5 p-2 border-b border-gray-300 flex justify-center items-center ${
                  pathname === "/"
                    ? "text-blue-600 border-blue-600"
                    : "hover:text-blue-600 hover:border-blue-600"
                }`}
                prefetch={true}
              >
                About Me
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/Projects"
                className={`font-medium text-lg mx-5 p-2 border-b border-gray-300 flex justify-center items-center ${
                  pathname === "/Projects"
                    ? "text-blue-600 border-blue-600"
                    : "hover:text-blue-600 hover:border-blue-600"
                }`}
                prefetch={true}
              >
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/Work"
                className={`font-medium text-lg mx-5 p-2 border-b border-gray-300 flex justify-center items-center ${
                  pathname === "/Work"
                    ? "text-blue-600 border-blue-600"
                    : "hover:text-blue-600 hover:border-blue-600"
                }`}
                prefetch={true}
              >
                Experience
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

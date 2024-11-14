import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
const AboutMe = () => {
  return (
    <div className="grid grid-rows-3 mt-6 ">
      <div className="grid grid-cols-2 ">
        <div className="">
          <div className="grid grid-rows-2">
            <p className="text-2xl">Hello, I&apos;m Raphael</p>
            <div className="">
              <p className="text-md">
                Senior Computer Science and Engineering Major at SCU.
              </p>
              <Separator className="my-2" />
              <div className="flex flex-row items-center text-sm">
                <p className="border-r px-4 border-gray-300">Pickleball</p>
                <Separator orientation="vertical" />
                <p className="border-r px-4 border-gray-300">
                  Ultimate Frisbee
                </p>
                <Separator orientation="vertical" />
                <p className="border-r px-4 border-gray-300">Coffee</p>
                <Separator orientation="vertical" />
                <p className="px-4 ">Boxing</p>
              </div>
            </div>
            {/* Contact & Social Media */}
            <div className="mt-8 flex flex-row items-center justify-between">
              <Button>
                {" "}
                <p className="text-sm">Contact Me</p>
              </Button>
              <div className="space-x-4">
                <SocialIcon url="https://github.com/RaphaLK" />
                <SocialIcon url="https://www.linkedin.com/in/raphaelkusuma/" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/Assets/MyPhoto.jpg"
            width={220}
            height={200}
            className="rounded-xl shadow-2xl"
            alt={"My Headshot"}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;

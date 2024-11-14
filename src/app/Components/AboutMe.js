import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
const AboutMe = () => {
  return (
    <div className="grid grid-rows-3 mt-6">
      <div className="grid grid-cols-2 mx-auto">
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
              <a href="mailto:raphaelkusuma5@gmail.com">
                <Button>
                  {" "}
                  <p className="text-sm">Contact Me</p>
                </Button>
              </a>
              <div className="space-x-4">
                <SocialIcon url="https://github.com/RaphaLK" />
                <SocialIcon url="https://www.linkedin.com/in/raphaelkusuma/" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end max-h-72">
          <Image
            src="/Assets/MyPhoto.jpg"
            width={275}
            height={200}
            className="rounded-xl shadow-2xl"
            alt={"My Headshot"}
          />
        </div>
      </div>
      {/* Second Half */}
      <div className="grid grid-cols-2 mt-8 w-screen">
        <div className="flex flex-col justify-start ml-2">
          <p className="text-4xl font-semibold">Team Player</p>
          <p className="text-sm font-light text-gray-500">
            {" "}
            RA, Ultimate Frisbee Player, Recreational Pickleball player, and
            retired Hackathon Participant
          </p>
          <Carousel2 />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-4xl font-light">Photography</p>
          <p className="text-sm font-light text-gray-500">
            {" "}
            As an RA, I was an avid photographer for a while. I captured
            professional headshots and nature.
          </p>
          <Carousel1 />
        </div>
        <div className="flex flex-col justify-start items-center">
          <p className="text-4xl font-light">Full Stack Developer</p>
          <p className="text-sm font-light text-gray-500">
            {" "}
            Lots of React and React-Native Experience.
          </p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <p className="text-4xl font-semibold">Competitive Programmer</p>
          <p className="text-sm font-light text-gray-500">
            {" "}
            Attended ICPC, representing Santa Clara University in the D2 rank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

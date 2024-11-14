import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="grid grid-rows-2 bg-blue">
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <p className="text-2xl">Hello, I'm Raphael</p>
        </div>
        <Image
          src="/Assets/MyPhoto.jpg"
          width={220}
          height={200}
          className="rounded-xl"
          alt={"My Headshot"}
        />
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;

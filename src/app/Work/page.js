import React from "react";
import Navbar from "../Components/Navbar";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Work() {
  return (
    <div className="flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <ExperienceTimeline/>
    </div>
  );
}

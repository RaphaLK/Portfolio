import React from "react";
import Navbar from "../Components/Navbar";
import ExperienceTimeline from "./ExperienceTimeline";
import PageTransition from "@/components/PageTransitions";

export default function Work() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <ExperienceTimeline />
      </div>
    </PageTransition>
  );
}

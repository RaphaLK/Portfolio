import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Work() {
  return (
    <div className="flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)] bg-gray-50 min-h-screen pb-20">
      <div className="w-full max-w-6xl">
        <div className="mb-2 p-4 bg-gray-800 text-white rounded-b-lg shadow-md">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 font-mono text-sm">~/experience-timeline</span>
          </div>
        </div>

        <ExperienceTimeline />
      </div>
    </div>
  );
}
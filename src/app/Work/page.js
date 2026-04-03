import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Work() {
  return (
    <div className="flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)] bg-white min-h-screen pb-24">
      <div className="w-full max-w-4xl">
        {/* Terminal bar */}
        <div className="px-5 py-3 bg-gray-900 rounded-b-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="font-mono text-sm text-gray-400">
            <span className="text-gray-500">raphael@portfolio</span>
            <span className="text-gray-600">:~/experience-timeline</span>
            <span className="text-gray-200"> $ cat experience.log</span>
            <span className="ml-0.5 animate-pulse text-gray-200">|</span>
          </p>
        </div>

        <div className="px-6 pt-12">
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}

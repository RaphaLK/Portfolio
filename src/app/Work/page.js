import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Work() {
  return (
    <div
      className="flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)] 
      bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 min-h-screen pb-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-5 animate-float"></div>
        <div
          className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-5 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-5 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-5 animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Enhanced terminal header */}
      <div className="w-full max-w-6xl relative">
        <div className="mb-2 p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-b-2xl shadow-2xl border border-gray-700 relative overflow-hidden">
          {/* Terminal background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
              </div>
              <span className="ml-4 font-mono text-lg bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                📂 ~/experience-timeline
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Connected
              </span>
              <span className="font-mono">git status</span>
            </div>
          </div>

          {/* Terminal command line */}
          <div className="mt-4 font-mono text-sm text-green-400 flex items-center">
            <span className="text-blue-400">raphael@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-purple-400">~/work$</span>
            <span className="ml-2 animate-pulse">cat experience.log</span>
            <span className="ml-1 animate-ping">|</span>
          </div>
        </div>
        <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 mx-4">
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}

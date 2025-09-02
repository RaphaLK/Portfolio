"use client";
import React, { useState, useEffect } from "react";
import "./timeline.css";

const ExperienceTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".timeline-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Cool tech icons for different roles
  const getTechIcon = (title) => {
    if (title.includes("Engineering") || title.includes("Developer"))
      return "⚡";
    if (title.includes("Lab")) return "🔬";
    if (title.includes("Intern")) return "💻";
    if (title.includes("Tutor")) return "👩‍🏫";
    if (title.includes("Advisor")) return "🏠";
    if (title.includes("Library")) return "📚";
    if (title.includes("Musical")) return "🎵";
    return "🚀";
  };

  const getGradientClass = (index) => {
    const gradients = [
      "from-purple-600 to-blue-600",
      "from-green-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-pink-500 to-purple-600",
      "from-blue-500 to-indigo-600",
      "from-yellow-500 to-orange-600",
      "from-teal-500 to-green-600",
      "from-red-500 to-pink-600",
      "from-indigo-500 to-purple-600",
    ];
    return gradients[index % gradients.length];
  };
  const experiences = [
    {
      title: "SCU School of Engineering - Grader",
      year: "Sept. 2025 - Present",
      location: "Santa Clara, CA",
      details: [
        "Grading for CSEN 275: Object Oriented Programming, Design, and Analysis.",
      ],
    },
    {
      title: "HCI Lab - Full Stack Developer (SMAR)",
      year: "April 2025 - Present",
      location: "Santa Clara, CA",
      details: [
        "Contributed and maintained a React Webapp that allows non-technical researchers to systematically scrape and analyze information of mobile applications on the Google Play Store and the App Store",
        "Updated dependencies to ensure project is kept up-to-date.",
        "Implemented automated email reminders, and integrated this functionality with BullMQ scheduled requests.",
      ],
    },
    {
      title: "EPIC Lab - Mobile Team Lead (PTHub)",
      year: "May 2023 - Present",
      location: "Santa Clara, CA",
      details: [
        "Acted as the lead for the mobile development team, spearheading development for an experimental method for encouraging public transportation.",
        "Handled task division, coordinated progress with the Web, QA, and Backend Team.",
        "Worked under Dr. Navid Shaghaghi in SCU's EPIC Lab alongside fellow undergraduate and graduate students.",
        "Created Web Scrapers, Hosted API Endpoints on cPanel and created database automation scripts to fill our MySQL database.",
        "Developed a lot of the mobile app's functionality, updated UI/UX, and integrated Firebase with the project.",
      ],
    },
    {
      title: "Anritsu - Software Engineering Intern",
      year: "Jun. 2024 - Sept. 2024",
      location: "Morgan Hill, CA",
      details: [
        "Worked alongside the Signal Generator Backend team.",
        "Fixed bugs, created test builds, worked on internal tools, and attended Scrum meetings.",
        "Created unit tests, began development on a Linux Kernel Driver to enable communication between a signal generator and a power meter through GPIB (IEEE-488).",
        "Contributed to backend development for the latest model of Signal Generators using C++ and the Qt Framework, and implemented new functionalities, such as SCPI commands and NTFS support.",
        "Developed a C++/Qt GUI for a prototype VSG to interface with its backend build to manage calibration sequences.",
      ],
    },
    {
      title: "SWE++ Volunteer Stem Tutor",
      year: "Apr. 2024 - Jun. 2024",
      location: "Santa Clara, CA",
      details: [
        "Taught Python basics to middle and high school girls to promote women in STEM.",
        "Motivated students and encouraged engagement during Saturday morning sessions.",
        "Inspired students to expand on their projects and answered clarifying questions.",
        "Planned fun ice-breaker games during break time!",
      ],
    },
    {
      title: "Resident Advisor",
      year: "Apr. 2023 - Jun. 2024",
      location: "Santa Clara, CA",
      details: [
        "Hosted 12-15 events throughout the school year focused on professional development, DEI, community, and fun.",
        "Handled roommate conflicts and assessed the needs of students in the residence hall.",
        "Brought up concerns and ideas to improve the residence hall, such as a pool table in the multi-purpose room, and requesting more trash bags.",
      ],
    },
    {
      title: "University Library Student Assistant",
      year: "Apr. 2022 - Present",
      location: "Santa Clara, CA",
      details: [
        "Audited archival materials, moved current materials into the archive.",
        "Reshelved books and maintained proper organization within the library's offerings.",
        "Provided proper customer service to library patrons, helping them find what they need.",
      ],
    },
    {
      title: "Musical Streaming Operator",
      year: "2021-2021",
      location: "Jakarta, Indonesia",
      details: [
        "Handled YouTube streaming for an online musical.",
        "Managed timing of technical effects.",
      ],
    },
    {
      title: "Springfield Cup Head of Logistics",
      year: "2020-2021",
      location: "Jakarta, Indonesia",
      details: [
        "Led a team of 6 to handle logistics for a city-wide highschool event.",
        "Managed budget handling, staff meals, and event materials requests.",
        "Facilitated communication between different team leads to ensure smooth event execution.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center mt-2 w-full max-w-5xl px-4 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10 animate-ping"></div>
      </div>

      <div className="relative mb-8 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-lg blur-md opacity-10"></div>
        <h2 className="relative text-4xl font-bold text-center bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent py-4">
          💻 Work Experience Journey 🚀
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-center mb-3">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              9+
            </div>
            <div className="text-sm text-gray-600">Total Commits</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-sm text-gray-600">Years Active</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
        <div className="relative h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full mx-auto w-32"></div>
      </div>

      {/* Timeline container with enhanced styling */}
      <div className="relative w-full">
        {/* Animated central line */}
        <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-teal-600 opacity-30"></div>

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleItems.has(index);
          const isHovered = hoveredIndex === index;
          const gradient = getGradientClass(index);
          const techIcon = getTechIcon(exp.title);

          return (
            <div
              key={index}
              className={`timeline-item mb-20 flex items-start relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              data-index={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Git branch structure */}
              <div className="absolute left-0 top-0 bottom-0 w-24 flex justify-center">
                {/* Animated commit node */}
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} z-20 absolute top-0 
                  border-4 border-white shadow-lg flex items-center justify-center text-white text-lg
                  transform transition-all duration-300 ${
                    isHovered ? "scale-125 rotate-12" : "scale-100"
                  }
                  hover:shadow-2xl`}
                >
                  {techIcon}
                </div>

                {/* Glowing branch line */}
                <div
                  className={`h-2 ${
                    isEven ? "w-20" : "w-12"
                  } bg-gradient-to-r ${gradient} absolute top-3
                  ${isEven ? "left-8" : "right-6"} rounded-full opacity-60 
                  ${
                    isHovered ? "opacity-100 shadow-lg" : ""
                  } transition-all duration-300`}
                ></div>

                {/* Pulse effect */}
                {isHovered && (
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} absolute top-[-4px] left-[-4px]
                    opacity-20 animate-ping`}
                  ></div>
                )}
              </div>

              {/* Enhanced content card */}
              <div
                className={`ml-28 relative group transition-all duration-500 w-full md:w-4/5
                ${isHovered ? "transform -translate-y-2" : ""}`}
              >
                {/* Glowing background effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-xl blur-sm opacity-0
                  group-hover:opacity-25 transition-all duration-300`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative p-6 rounded-xl border-l-4 bg-white/95 backdrop-blur-sm
                  border-gradient-to-b ${gradient.replace(
                    "to-",
                    "to-transparent "
                  )}
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  ${isHovered ? "shadow-2xl border-l-8" : ""}`}
                >
                  {/* Header with animated elements */}
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl animate-bounce">
                        {techIcon}
                      </span>
                      <h3
                        className={`font-bold text-xl bg-gradient-to-r ${gradient} bg-clip-text text-transparent
                        ${isHovered ? "animate-pulse" : ""}`}
                      >
                        {exp.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span
                        className={`text-sm bg-gradient-to-r ${gradient} text-white rounded-full px-4 py-1 
                        font-semibold shadow-lg whitespace-nowrap ${
                          isHovered ? "animate-pulse" : ""
                        }`}
                      >
                        📅 {exp.year}
                      </span>
                      <span
                        className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700 
                        font-medium border border-gray-200 whitespace-nowrap"
                      >
                        📍 {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Animated separator */}
                  <div
                    className={`h-0.5 bg-gradient-to-r ${gradient} rounded-full mb-4 
                    transform origin-left transition-all duration-500 
                    ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  ></div>

                  {/* Enhanced details */}
                  <div className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <div
                        key={i}
                        className={`flex items-start group/item transition-all duration-300
                        ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-4"
                        }`}
                        style={{
                          transitionDelay: `${index * 100 + 300 + i * 100}ms`,
                        }}
                      >
                        <span
                          className={`text-lg mr-3 mt-0.5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent
                          group-hover/item:animate-bounce`}
                        >
                          ✨
                        </span>
                        <span
                          className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 
                          transition-colors duration-200"
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Animated git hash with selective tech stack indicators */}
                  <div className="mt-6 flex justify-between items-center">
                    <span
                      className={`text-xs font-mono text-gray-400 transition-all duration-300
                      ${isHovered ? "text-gray-600 font-semibold" : ""}`}
                    >
                      commit {Math.random().toString(16).slice(2, 10)} 🔗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Enhanced initial commit with animation */}
        <div className="absolute bottom-[-80px] left-0 flex items-center justify-center flex-col">
          <div className="w-1 bg-gradient-to-b from-gray-300 to-transparent h-20 animate-pulse"></div>
          <div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 
            flex items-center justify-center text-white text-sm font-bold shadow-lg
            animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            🎯
          </div>
          <span className="text-xs font-mono text-gray-500 mt-2 animate-pulse">
            git init
          </span>
        </div>

        {/* Floating success metrics */}
        <div
          className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg
          border border-gray-200 animate-float hidden lg:block"
        >
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              {experiences.length}+
            </div>
            <div className="text-xs text-gray-600">Positions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

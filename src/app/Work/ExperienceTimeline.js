"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./timeline.css";

// Static data and helpers moved outside component — no re-creation on every render

const GRADIENTS = [
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

// Deterministic commit hashes — Math.random() in render caused new values every re-render
const COMMIT_HASHES = [
  "a3f2c1d8", "b7e4a9c2", "c1d5f3b7", "d8a2e6f1",
  "e5c3b9a4", "f2d7e1c8", "a4b8c3f5", "h1e6d2b9",
  "i7f3c5a1", "j2a8e4d6", "k9b1f7c3",
];

const getCompanyLogo = (title) => {
  if (title.includes("Google")) return "/Assets/Google.png";
  if (title.includes("Grader") || title.includes("Library") || title.includes("Advisor"))
    return "/Assets/Santa_Clara_U_Seal.png";
  if (title.includes("HCI Lab") || title.includes("SMAR")) return "/Assets/SCU_HCI.jpeg";
  if (title.includes("EPIC Lab") || title.includes("PTHub")) return "/Assets/EPIC_Lab.png";
  if (title.includes("Anritsu")) return "/Assets/Anritsu.png";
  return null;
};

const getTechIcon = (title) => {
  if (title.includes("Google")) return "🔍";
  if (title.includes("Grader")) return "📝";
  if (title.includes("HCI Lab") || title.includes("SMAR")) return "🔬";
  if (title.includes("EPIC Lab") || title.includes("PTHub")) return "💡";
  if (title.includes("Anritsu")) return "📡";
  if (title.includes("Tutor")) return "👩‍🏫";
  if (title.includes("Advisor")) return "🏠";
  if (title.includes("Library")) return "📚";
  if (title.includes("Musical")) return "🎵";
  if (title.includes("Springfield")) return "🏆";
  return "⚙️";
};

const experiences = [
  {
    title: "Google - Software Engineering Intern",
    year: "Upcoming Summer 2026",
    location: "Kirkland, WA",
    isHighlighted: true,
    details: ["🎉 Excited to join Google's Chrome Remote Desktop team!"],
  },
  {
    title: "EPIC Lab - Full Stack Mobile Developer (GoodBuys)",
    year: "May 2023 - Present",
    location: "Santa Clara, CA",
    details: ["Built a React Native mobile app to trace the ethical labels of brands."],
  },
  {
    title: "SCU School of Engineering - Grader",
    year: "Sept. 2025 - Present",
    location: "Santa Clara, CA",
    details: [
      "Grading for CSEN 275: Object Oriented Programming, Design, and Analysis.",
      "Checking assignments written in Java, and assessing knowledge in Design Patterns",
      "Grading for CSEN 225: Secure Coding in C/C++.",
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
    title: "EPIC Lab - Full Stack Developer & Team Lead (PTHub)",
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
    year: "Apr. 2022 - Jun. 2025",
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

  return (
    <div className="flex flex-col items-center mt-2 w-full max-w-5xl px-4 relative">
      {/* Header */}
      <div className="relative mb-8 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-lg blur-md opacity-10"></div>
        <h2 className="relative text-4xl font-bold text-center bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent py-4">
          Work Experience
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-center mb-3">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {experiences.length}+
            </div>
            <div className="text-sm text-gray-600">Total Roles</div>
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

      {/* Timeline */}
      <div className="relative w-full">
        {/* Central line */}
        <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-teal-600 opacity-30"></div>

        {experiences.map((exp, index) => {
          const isVisible = visibleItems.has(index);
          const isHovered = hoveredIndex === index;
          const gradient = GRADIENTS[index % GRADIENTS.length];
          const techIcon = getTechIcon(exp.title);
          const companyLogo = getCompanyLogo(exp.title);

          return (
            <div
              key={index}
              className={`timeline-item mb-20 flex items-start relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${exp.isHighlighted ? "scale-105" : ""}`}
              data-index={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Commit node */}
              <div className="absolute left-0 top-0 bottom-0 w-24 flex justify-center">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} z-20 absolute top-0
                  border-4 border-white shadow-lg flex items-center justify-center text-white text-lg
                  transform transition-transform duration-300 ${isHovered ? "scale-125" : "scale-100"}`}
                >
                  {techIcon}
                </div>

                {/* Branch line */}
                <div
                  className={`h-2 w-16 bg-gradient-to-r ${gradient} absolute top-3 left-8 rounded-full
                  transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-60"}`}
                ></div>
              </div>

              {/* Content card */}
              <div
                className={`ml-28 relative group transition-transform duration-300 w-full md:w-4/5
                ${isHovered ? "-translate-y-1" : ""}`}
              >
                {/* Google highlight ring */}
                {exp.isHighlighted && (
                  <>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-xl blur-lg opacity-20"></div>
                    <div className="absolute -top-6 -right-2 text-3xl">⭐</div>
                  </>
                )}

                {/* Hover glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-xl blur-sm
                  opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Card */}
                <div
                  className={`relative p-6 rounded-xl border-l-4 bg-white/95 backdrop-blur-sm
                  shadow-lg transition-shadow duration-300 group-hover:shadow-2xl
                  ${isHovered ? "border-l-8" : ""}
                  ${exp.isHighlighted ? "border-l-8 shadow-xl ring-2 ring-blue-400/50" : ""}`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {companyLogo ? (
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                          <Image
                            src={companyLogo}
                            alt={`${exp.title} logo`}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      ) : (
                        <span className="text-2xl">{techIcon}</span>
                      )}
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent
                          ${exp.isHighlighted ? "text-2xl" : "text-xl"}`}
                        >
                          {exp.title}
                        </h3>
                        {exp.isHighlighted && (
                          <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full font-bold">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span
                        className={`text-sm bg-gradient-to-r ${gradient} text-white rounded-full px-4 py-1
                        font-semibold shadow-md whitespace-nowrap`}
                      >
                        📅 {exp.year}
                      </span>
                      <span className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700 font-medium border border-gray-200 whitespace-nowrap">
                        📍 {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div
                    className={`h-0.5 bg-gradient-to-r ${gradient} rounded-full mb-4
                    transform origin-left transition-transform duration-500
                    ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                  ></div>

                  {/* Details */}
                  <div className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <div key={i} className="flex items-start">
                        <span
                          className={`text-lg mr-3 mt-0.5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                        >
                          ✨
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Commit hash */}
                  <div className="mt-6">
                    <span className="text-xs font-mono text-gray-400">
                      commit {COMMIT_HASHES[index % COMMIT_HASHES.length]} 🔗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Initial commit */}
        <div className="absolute bottom-[-80px] left-0 flex items-center justify-center flex-col">
          <div className="w-1 bg-gradient-to-b from-gray-300 to-transparent h-20"></div>
          <div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900
            flex items-center justify-center text-white text-sm font-bold shadow-lg
            hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            🎯
          </div>
          <span className="text-xs font-mono text-gray-500 mt-2">git init</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

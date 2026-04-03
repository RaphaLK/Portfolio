"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const COLORS = [
  { node: "bg-violet-500", border: "border-l-violet-500", dot: "bg-violet-500" },
  { node: "bg-emerald-500", border: "border-l-emerald-500", dot: "bg-emerald-500" },
  { node: "bg-amber-500", border: "border-l-amber-500", dot: "bg-amber-500" },
  { node: "bg-rose-500", border: "border-l-rose-500", dot: "bg-rose-500" },
  { node: "bg-sky-500", border: "border-l-sky-500", dot: "bg-sky-500" },
  { node: "bg-orange-500", border: "border-l-orange-500", dot: "bg-orange-500" },
  { node: "bg-teal-500", border: "border-l-teal-500", dot: "bg-teal-500" },
  { node: "bg-pink-500", border: "border-l-pink-500", dot: "bg-pink-500" },
  { node: "bg-indigo-500", border: "border-l-indigo-500", dot: "bg-indigo-500" },
];

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

const experiences = [
  {
    title: "Google - Software Engineering Intern",
    year: "Upcoming Summer 2026",
    location: "Kirkland, WA",
    isHighlighted: true,
    details: ["Excited to join Google's Chrome Remote Desktop team!"],
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
      "Checking assignments written in Java, and assessing knowledge in Design Patterns.",
      "Grading for CSEN 225: Secure Coding in C/C++.",
    ],
  },
  {
    title: "HCI Lab - Full Stack Developer (SMAR)",
    year: "April 2025 - Present",
    location: "Santa Clara, CA",
    details: [
      "Contributed and maintained a React Webapp that allows non-technical researchers to systematically scrape and analyze information of mobile applications on the Google Play Store and the App Store.",
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
      "Created Web scrapers, hosted API endpoints on cPanel, and created database automation scripts to fill a MySQL database.",
      "Developed the mobile app's functionality, updated UI/UX, and integrated Firebase with the project.",
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
      "Contributed to backend development for the latest model of Signal Generators using C++ and the Qt Framework, implementing new functionalities such as SCPI commands and NTFS support.",
      "Developed a C++/Qt GUI for a prototype VSG to interface with its backend and manage calibration sequences.",
    ],
  },
  {
    title: "SWE++ Volunteer STEM Tutor",
    year: "Apr. 2024 - Jun. 2024",
    location: "Santa Clara, CA",
    details: [
      "Taught Python basics to middle and high school girls to promote women in STEM.",
      "Motivated students and encouraged engagement during Saturday morning sessions.",
      "Inspired students to expand on their projects and answered clarifying questions.",
    ],
  },
  {
    title: "Resident Advisor",
    year: "Apr. 2023 - Jun. 2024",
    location: "Santa Clara, CA",
    details: [
      "Hosted 12–15 events throughout the school year focused on professional development, DEI, community, and fun.",
      "Handled roommate conflicts and assessed the needs of students in the residence hall.",
      "Brought up concerns and ideas to improve the residence hall experience.",
    ],
  },
  {
    title: "University Library Student Assistant",
    year: "Apr. 2022 - Jun. 2025",
    location: "Santa Clara, CA",
    details: [
      "Audited archival materials and moved current materials into the archive.",
      "Reshelved books and maintained proper organization within the library's offerings.",
      "Provided customer service to library patrons, helping them find resources.",
    ],
  },
  {
    title: "Musical Streaming Operator",
    year: "2021",
    location: "Jakarta, Indonesia",
    details: [
      "Handled YouTube streaming for an online musical.",
      "Managed timing of technical effects.",
    ],
  },
  {
    title: "Springfield Cup Head of Logistics",
    year: "2020 - 2021",
    location: "Jakarta, Indonesia",
    details: [
      "Led a team of 6 to handle logistics for a city-wide high school event.",
      "Managed budget, staff meals, and event materials requests.",
      "Facilitated communication between team leads to ensure smooth event execution.",
    ],
  },
];

const ExperienceTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

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
    <div className="w-full max-w-3xl">
      {/* Page header */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        <p className="text-sm text-gray-400 mt-1">{experiences.length} roles · 5+ years</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gray-200" />

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const color = COLORS[index % COLORS.length];
            const logo = getCompanyLogo(exp.title);
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative pl-8 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {/* Node */}
                <div
                  className={`absolute left-0 top-[14px] w-[15px] h-[15px] rounded-full ${color.node} border-2 border-white shadow-sm`}
                />

                {/* Card */}
                <div
                  className={`border border-gray-100 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 ${color.border} ${
                    exp.isHighlighted ? "ring-1 ring-blue-200" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    {logo && (
                      <div className="relative w-8 h-8 flex-shrink-0 mt-0.5">
                        <Image
                          src={logo}
                          alt={`${exp.title} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                          {exp.title}
                        </h3>
                        {exp.isHighlighted && (
                          <span className="text-xs font-medium text-blue-600 border border-blue-200 rounded px-1.5 py-0.5 leading-none">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {exp.year} · {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <ul className="mt-3 space-y-1.5">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`mt-[7px] w-1 h-1 rounded-full flex-shrink-0 ${color.dot}`} />
                        <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Commit hash */}
                  <p className="mt-4 text-xs font-mono text-gray-300">
                    commit {COMMIT_HASHES[index % COMMIT_HASHES.length]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* git init */}
        <div className="relative pl-8 mt-8 flex items-center gap-3">
          <div className="absolute left-0 w-[15px] h-[15px] rounded-full bg-gray-400 border-2 border-white" />
          <span className="text-xs font-mono text-gray-400">git init</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

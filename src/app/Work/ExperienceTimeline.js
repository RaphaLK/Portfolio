import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "HCI Lab - Full Stack Developer (SMAR)",
      year: "April 2025 - Present",
      location: "Santa Clara, CA",
      details: [
        "Contributed and maintained a React Webapp that allows non-technical researchers to systematically scrape and analyze information of mobile applications on the Google Play Store and the App Store",
        "Updated dependencies to ensure project is kept up-to-date.",
        "Implemented automated email reminders, and integrated this functionality with BullMQ scheduled requests."
      ],
    },
    {
      title: "EPIC Lab - Mobile App Development Team Lead (Public Transit Hub)",
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
        "Planned fun ice-breaker games during break time!"
      ],
    },
    {
      title: "Resident Advisor",
      year: "Apr. 2023 - Jun. 2024",
      location: "Santa Clara, CA",
      details: [
        "Hosted 12-15 events throughout the school year focused on professional development, DEI, community, and fun.",
        "Handled roommate conflicts and assessed the needs of students in the residence hall.",
        "Brought up concerns and ideas to improve the residence hall, such as a pool table in the multi-purpose room, and requesting more trash bags."
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
      title: "Streaming Operator",
      year: "2021-2021",
      location: "Jakarta, Indonesia",
      details: [
        "Handled YouTube streaming for an online musical.",
        "Managed timing of technical effects.",
      ],
    },
    {
      title: "Head of Logistics",
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
    <div className="flex flex-col items-center mt-10">
      {/* Timeline container */}
      <div className="relative border-l-2 border-gray-300 pl-8">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 flex items-start">
            {/* Branch Lines -- The left design thingy*/}
            <div className="absolute left-[-2.5rem] flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full bg-blue-500 mb-1 ${
                  index % 2 === 0 ? "ml-7" : "-ml-6"
                }`}
              />
              {index < experiences.length && (
                <div
                  className={`h-20 ${
                    index % 2 === 0 ? "ml-6" : "-ml-6"
                  } border-l-2 border-gray-300`}
                />
              )}
            </div>

            {/* Content */}
            <div className="ml-4">
              <p className="font-semibold text-lg">{exp.title}</p>
              <div className="flex flex-row">
                <p className="text-sm text-gray-500">{exp.year}</p>
                <p className="text-sm text-gray-500 ml-4">{exp.location}</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

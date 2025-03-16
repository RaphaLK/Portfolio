import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "EPIC Lab - Mobile App Development Team Lead (Public Transit Hub)",
      year: "May 2023 - Present",
      location: "Santa Clara, CA",
      details: [
        "Acted as the team lead for the Mobile App Dev. Team.",
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
        "Translated 68k Motorola Assembly to C and identified needed changes through analysis of the system's memory map.",
        "Spoke with Senior and Junior engineers to ramp up quickly and to learn key technologies in the industry.",
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
        "Planned fun game during break time!"
      ],
    },
    {
      title: "Resident Advisor",
      year: "Apr. 2023 - Jun. 2024",
      location: "Santa Clara, CA",
      details: [
        "Hosted events throughout the school year focused on professional development, DEI, community, and fun.",
        "Handled roommate conflicts and assessed the needs of students in the residence hall.",
        "Brought up concerns and ideas to improve the residential hall."
      ],
    },
    {
      title: "University Library Student Assistant",
      year: "Apr. 2022 - Present",
      location: "Santa Clara, CA",
      details: [
        "Audited archival materials.",
        "Reshelved books and maintained proper organization.",
        "Provided excellent customer service to library patrons.",
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
        "Led a team of 6 to handle logistics for a city-wide high school competition.",
        "Managed budget handling and materials requests.",
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

import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Undergraduate Researcher (Mobile App Team Lead)",
      year: "May 2023 - Present",
      location: "Santa Clara, CA",
      details:
        "Acted as the team lead for the Mobile App Dev. Team. Worked under Dr. Navid Shaghaghi in SCU's EPIC Lab.\n Created Web Scrapers, Hosted API Endpoints on cPanel and created database automation scripts to fill our mySQL database.\n Developed a lot of the mobile app's functionality, updated UI/UX, and integrated Firebase with the project. ",
    },
    {
      title: "Anritsu - Software Engineering Intern",
      year: "Jun. 2024 - Sept. 2024",
      location: "Morgan Hill, CA",
      details: "Worked in the Signal Generator Backend team. Fixed bugs, created test builds,  worked on internal tools, attended Scrum meetings, \ncreated unit tests, began development on a Linux Kernel Driver to enable inter-instrument communication through GPIB (IEEE-488).\n Took inspiration from an older driver written in 68k Motorola Assembly, translated some of it to C and identified other needed changes through the system's memory map.\n Asked a lot of questions to Senior and Junior engineers to get a handle on the task and to ramp up quickly.",
    },
    {
      title: "SWE++ Volunteer Stem Tutor",
      year: "Apr. 2024 - Jun. 2024",
      location: "Santa Clara, CA",
      details: "Taught Python basics to girls in middle school and highschool to further an initiative to promote women in STEM.\n Somehow managed to get a decent amount of students motivated on a Saturday morning! Inspired students to do more with their projects and answered clarifying questions.",
    },
    {
      title: "Resident Advisor",
      year: "Apr. 2023 - Jun. 2024",
      location: "Santa Clara, CA",
      details: "Hosted events throughout the school year, targeted at professional development, DEI, community, and fun! \nAlso handled roommate conflicts in addition to assessing need of students in the residence hall.",
    },
    {
      title: "University Library Student Assistant",
      year: "Apr. 2022 - Present",
      location: "Santa Clara, CA",
      details: "Audited archival materials, reshelved books, provided excellent customer service to Library patrons.",
    },
    {
      title: "Streaming Operator",
      year: "2021-2021",
      location: "Jakarta, ID",
      details: "Handled Youtube streaming for an online musical. Dealt with timing of technical effects.",
    },
    {
      title: "Head of Logistics",
      year: "2020-2021",
      location: "Jakarta, ID",
      details: "Led a team of 6 to handle the Logistics of my a city-wide high school competition. Budget handling, materials requests, \n and communication between different team leads to ensure a smooth running of events.",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Timeline container */}
      <div className="relative border-l-2 border-gray-300 pl-8">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 flex items-start">
            {/* Branch Lines */}
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
              <p className="text-gray-700 mt-1 whitespace-pre-line">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

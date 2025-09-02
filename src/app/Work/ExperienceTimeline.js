import React from "react";

const ExperienceTimeline = () => {
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
        "Implemented automated email reminders, and integrated this functionality with BullMQ scheduled requests."
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
    <div className="flex flex-col items-center mt-10 w-full max-w-5xl px-4">
      <h2 className="text-2xl font-bold mb-6 text-left w-full border-b pb-2">Work Experience Source Tree</h2>
      
      {/* Timeline container */}
      <div className="relative w-full">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          const branchColor = isEven ? "bg-blue-500" : "bg-green-500";
          const commitColor = isEven ? "border-blue-500" : "border-green-500";
          const textColor = isEven ? "text-blue-700" : "text-green-700";
          
          return (
            <div key={index} className="mb-16 flex items-start relative">
              {/* Git branch structure */}
              <div className="absolute left-0 top-0 bottom-0 w-24 flex justify-center">
                {/* Main vertical line */}
                <div className="w-1 bg-gray-300 h-full absolute"></div>
                
                {/* Commit node */}
                <div 
                  className={`w-5 h-5 rounded-full ${branchColor} z-10 absolute top-0 
                    border-2 border-white flex items-center justify-center`}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Branch line */}
                <div 
                  className={`h-1 ${isEven ? 'w-20' : 'w-12'} ${branchColor} absolute top-2.5 
                    ${isEven ? 'left-4' : 'right-2.5'}`}
                ></div>
                
                {/* Merge lines for some commits */}
                {(index === 2 || index === 5) && (
                  <div 
                    className={`h-20 w-1 ${isEven ? 'bg-purple-400' : 'bg-orange-400'} 
                      absolute top-5 ${isEven ? 'left-8' : 'right-4'}`}
                  ></div>
                )}
              </div>

              {/* Content card */}
              <div 
                className={`ml-28 p-4 rounded-lg shadow-md border-l-4 ${commitColor} 
                  bg-white w-full md:w-4/5 transition-all hover:shadow-lg`}
              >
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <p className={`font-mono font-semibold text-lg ${textColor}`}>{exp.title}</p>
                  <div className="flex items-center mt-1 md:mt-0">
                    <span className="text-xs bg-gray-200 rounded-full px-2 py-1 font-mono">
                      {exp.year}
                    </span>
                    <span className="text-xs bg-gray-100 rounded-full px-2 py-1 ml-2 text-gray-600 font-mono">
                      @{exp.location}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-dashed border-gray-200 pt-2 mt-2">
                  <ul className="space-y-1.5">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Git hash - decorative */}
                <div className="mt-3 text-right">
                  <span className="text-xs font-mono text-gray-400">
                    {`commit ${Math.random().toString(16).slice(2, 10)}`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Git initial commit */}
        <div className="absolute bottom-0 left-0 flex items-center justify-center flex-col">
          <div className="w-1 bg-gray-300 h-20"></div>
          <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold">
            init
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

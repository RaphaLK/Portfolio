export function getCompanyLogo(title) {
  if (title.includes("Google")) return "/Assets/Google.png";
  if (
    title.includes("Grader") ||
    title.includes("Library") ||
    title.includes("Advisor")
  )
    return "/Assets/Santa_Clara_U_Seal.png";
  if (title.includes("HCI Lab") || title.includes("SMAR"))
    return "/Assets/SCU_HCI.jpeg";
  if (title.includes("EPIC Lab") || title.includes("PTHub"))
    return "/Assets/EPIC_Lab.png";
  if (title.includes("Anritsu")) return "/Assets/Anritsu.png";
  return null;
}

export const COMMIT_HASHES = [
  "a3f2c1d",
  "b7e4a9c",
  "c1d5f3b",
  "d8a2e6f",
  "e5c3b9a",
  "f2d7e1c",
  "a4b8c3f",
  "1e6d2b9",
  "7f3c5a1",
  "2a8e4d6",
  "9b1f7c3",
];

export const EXPERIENCES = [
  {
    title: "Google - Software Engineering Intern",
    year: "June 2026 - September 2026",
    location: "Kirkland, WA",
    isHighlighted: true,
    details: [
      "Implemented a standalone companion web terminal for Chrome Remote Desktop.",
      "Reduced bandwidth requirement for agentic CLI tool usage from 0.2-3 Mbps to 0.1-2 Kbps.",
      "Code fragments are in Chromium & Google3."
    ],
  },
  {
    title: "EPIC Lab - Full Stack Mobile Developer (GoodBuys)",
    year: "May 2025 - June 2026",
    location: "Santa Clara, CA",
    details: [
      "Built a React Native mobile app to trace the ethical labels of brands.",
    ],
  },
  {
    title: "SCU School of Engineering - Grader & Teaching Assistant",
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
    year: "April 2025 - June 2026",
    location: "Santa Clara, CA",
    details: [
      "Contributed and maintained a React Webapp that allows non-technical researchers to systematically scrape and analyze information of mobile applications on the Google Play Store and the App Store.",
      "Updated dependencies to ensure project is kept up-to-date.",
      "Implemented automated email reminders, and integrated this functionality with BullMQ scheduled requests.",
    ],
  },
  {
    title: "EPIC Lab - Full Stack Developer & Team Lead (PTHub)",
    year: "May 2023 - June 2026",
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

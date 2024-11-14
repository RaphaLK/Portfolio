import React from "react";
import Navbar from "../Components/Navbar";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="grid grid-cols-3 grid-rows-2 ">
        <ProjectCard
          ProjectTitle={"Public Transit Hub"}
          ProjectDescription={
            "React Native, Expo, JavaScript, Python, Flask, MySQL, cPanel, Firebase"
          }
          ProjectInfo={
            "Full Stack Mobile and Web Application. Main goal of assessing demand of public transportation at SCU. I currently act as the team lead for the Mobile App team, in addition to one of the core maintainers for the Backend."
          }
          ProjectImage={"/Assets/PublicTransitHub.png"}
        />
        <ProjectCard
          ProjectTitle={"SCU Course Planner"}
          ProjectDescription={
            "Next.js, TypeScript, TailwindCSS, Firebase, Digital Ocean, Sentry, Docker"
          }
          ProjectInfo={
            "Web App to enable students to create their Academic four year plan. Acted as the scrum master during weekly meetings, identifying tasks and assessing priority. I was also one of the main developers in this project, created some of the main component such as the course requirements and the 'Drag & Drop' cards. Spearheaded design choices, integrated Firebase authentication and Cloud storage to our WebApp. Ensured that the database schema did not have redundancies."
          }
          ProjectImage={"/Assets/SCU_Course.png"}
        />
        <ProjectCard
          ProjectTitle={"Vocal EMG Identifier"}
          ProjectDescription={
            "Python, Jupyter Notebook, Seaborn, Pandas, Pytorch"
          }
          ProjectInfo={
            "A fun little side project related to my Capstone project! Visualized EMG Data from research papers to identify potential experiment procedures. Trained and tested an ML Model using KNNs to identify whether an individual is speaking based on Facial EMG Signals with an Accuracy of 92.5%."
          }
          ProjectImage={"/Assets/emg_signals.png"}
        />
        <ProjectCard
          ProjectTitle={"License Quest"}
          ProjectDescription={
            "React Native, JavaScript, Expo, Inrix API, Firebase, AWS Amplify"
          }
          ProjectInfo={
            "Mobile app created to assist new/student drivers with acclimating to driving. Used Inrix APIs to handle navigation and routing to less crowded areas. Mostly responsible for the Front-End, but also created Web Scrapers and Excel Parsers using JavaScript. "
          }
          ProjectImage={"/Assets/LicenseQuest.jpg"}
        />
        <ProjectCard
          ProjectTitle={"Bottom Tab Navigator"}
          ProjectDescription={"React Native, Expo, TypeScript"}
          ProjectInfo={
            "An experimental component. Was meant to test the viability of a Bottom Tab Navigator and a 'Pull-Up' Sheet for Public Transport Hub. This was something I made when I first hopped onto the Public Transit Hub project, and I was tasked with UI updates! One of the first things I made with React Native, and this set me up for my other projects."
          }
          ProjectImage={"/Assets/React_Navigation.png"}
        />
        <ProjectCard
          ProjectTitle={"Allescan"}
          ProjectDescription={"Flutter, Firebase, Google Vision API"}
          ProjectInfo={
            "Allescan was my first Hackathon Project. I worked on the Front End and Firebase Integration. We utilized the Google Vision API to identify nutrient labels and identify and user allergens. This was an incredible learning experience and was my first introduction to Mobile App Development."
          }
          ProjectImage={"/Assets/Allescan.jpg"}
        />
      </div>
    </div>
  );
}

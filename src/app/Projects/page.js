import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-3 grid-rows-2 mt-4">
        <ProjectCard
          ProjectTitle={"Music Genre Classifier"}
          ProjectDescription={
            "Python, Librosa, Sci-Kit Learn, XGBoost, Pandas, Numpy"
          }
          ProjectInfo={
            "Developed a music genre classifier. Built the pre-processor and feature extraction pipeline to handle 30 second audio clips. Achieved an 84.5% accuracy with XGBoost, also tested out a Random Forest Classifier and achieved an accuracy of 82.5%."
          }
          ProjectImage={"/Assets/emg_signals.png"}
        />
        <ProjectCard
          ProjectTitle={"React Native Flippable Card"}
          ProjectDescription={"React-Native, JavaScript"}
          ProjectInfo={
            "Created an open-source package to replace a deprecated React-Native package for proper dependency management. Removed old dependencies from the previous package and updated it to suit my need more and ported it over to modern React component standards."
          }
          ProjectImage={"/Assets/React_Navigation.png"}
        />
        <ProjectCard
          ProjectTitle={"Vocal sEMG Translations"}
          ProjectDescription={"Python, Librosa, Sci-kit Learn, Pandas, Numpy"}
          ProjectInfo={
            "Developed a multilabel classifier which takes in windowed data from 4 sEMG channels. Utilized a novel approach of classifying phonetic symbols to build up speech. Created data pipelines for pre-processing and labelling. Currently at a 20% accuracy, working to improve the model through data acquistion and data pre-processing research."
          }
          ProjectImage={"/Assets/emg_signals.png"}
        />
        <ProjectCard
          ProjectTitle={"Public Transit Hub"}
          ProjectDescription={
            "React Native, Expo, JavaScript, Python, Flask, MySQL, cPanel, Firebase"
          }
          ProjectInfo={
            "Full Stack Mobile and Web Application. Main goal of assessing demand of public transportation at SCU. I currently act as the team lead for the Mobile App team, in addition to one of the core maintainers for the Backend repo. I handle Mobile App development, Backend Development, and DevOps. Created new designs and developed multiple features in the mobile app. Developed Web Scrapers, Rest APIs, and Database Automation Scripts."
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
          ProjectTitle={"Vocal sEMG Identifier"}
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
   
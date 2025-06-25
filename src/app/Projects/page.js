import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Music Genre Classifier",
      description: "Python, Librosa, Sci-Kit Learn, XGBoost, Pandas, Numpy",
      info: "Developed a music genre classifier. Built the pre-processor and feature extraction pipeline to handle 30 second audio clips. Achieved an 84.5% accuracy with XGBoost, also tested out a Random Forest Classifier and achieved an accuracy of 82.5%.",
      image: "/Assets/emg_signals.png",
      githubLink: "https://github.com/RaphaLK/MusicGenreClassifier",
    },
    {
      title: "React Native Flippable Card",
      description: "React-Native, JavaScript",
      info: "Created an open-source package to replace a deprecated React-Native package for proper dependency management. Removed old dependencies from the previous package and updated it to suit my need more and ported it over to modern React component standards.",
      image: "/Assets/React_Navigation.png",
      githubLink: "https://github.com/RaphaLK/react-native-flip-card",
      projectLink: "https://www.npmjs.com/package/react-native-flip-card-plus",
    },
    {
      title: "Vocal sEMG Translations",
      description: "Python, Librosa, Sci-kit Learn, Pandas, Numpy",
      info: "Developed a multilabel classifier which takes in windowed data from 4 sEMG channels. Utilized a novel approach of classifying phonetic symbols to build up speech. Created data pipelines for pre-processing and labelling. Currently at a 20% accuracy, working to improve the model through data acquistion and data pre-processing research.",
      image: "/Assets/emg_signals.png",
      githubLink: "https://github.com/RaphaLK/VocalsEMG",
    },
    {
      title: "Public Transit Hub",
      description: "React Native, Expo, JavaScript, Python, Flask, MySQL, cPanel, Firebase",
      info: "Full Stack Mobile and Web Application. Main goal of assessing demand of public transportation at SCU. I currently act as the team lead for the Mobile App team, in addition to one of the core maintainers for the Backend repo. I handle Mobile App development, Backend Development, and DevOps. Created new designs and developed multiple features in the mobile app. Developed Web Scrapers, Rest APIs, and Database Automation Scripts.",
      image: "/Assets/PublicTransitHub.png",
      projectLink: "https://publictransithub.com",
    },
    {
      title: "SCU Course Planner",
      description: "Next.js, TypeScript, TailwindCSS, Firebase, Digital Ocean, Sentry, Docker",
      info: "Web App to enable students to create their Academic four year plan. Acted as the scrum master during weekly meetings, identifying tasks and assessing priority. I was also one of the main developers in this project, created some of the main component such as the course requirements and the 'Drag & Drop' cards. Spearheaded design choices, integrated Firebase authentication and Cloud storage to our WebApp. Ensured that the database schema did not have redundancies.",
      image: "/Assets/SCU_Course.png",
      projectLink: "https://scu-course-planner.web.app",
    },
    {
      title: "Vocal sEMG Identifier",
      description: "Python, Jupyter Notebook, Seaborn, Pandas, Pytorch",
      info: "A fun little side project related to my Capstone project! Visualized EMG Data from research papers to identify potential experiment procedures. Trained and tested an ML Model using KNNs to identify whether an individual is speaking based on Facial EMG Signals with an Accuracy of 92.5%.",
      image: "/Assets/emg_signals.png", 
      githubLink: "https://github.com/RaphaLK/EMG-Speech-Detection",
    },
    {
      title: "RustOS",
      description: "Rust, Operating Systems, Kernel Development",
      info: "Building a microkernel operating system in Rust following Philip Opperman's blog. Learning OS development concepts including memory management, scheduling, and drivers implementation. Currently implementing basic kernel features and planning to add a simple shell interface.",
      // No image for this one - demonstrates optional image
      githubLink: "https://github.com/RaphaLK/RustOS",
    },
    {
      title: "License Quest",
      description: "React Native, JavaScript, Expo, Inrix API, Firebase, AWS Amplify",
      info: "Mobile app created to assist new/student drivers with acclimating to driving. Used Inrix APIs to handle navigation and routing to less crowded areas. Mostly responsible for the Front-End, but also created Web Scrapers and Excel Parsers using JavaScript.",
      image: "/Assets/LicenseQuest.jpg",
      projectLink: "https://devpost.com/software/license-quest",
    },
    {
      title: "Allescan",
      description: "Flutter, Firebase, Google Vision API",
      info: "Allescan was my first Hackathon Project. I worked on the Front End and Firebase Integration. We utilized the Google Vision API to identify nutrient labels and identify and user allergens. This was an incredible learning experience and was my first introduction to Mobile App Development.",
      image: "/Assets/Allescan.jpg",
      projectLink: "https://devpost.com/software/allescan",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my technical work across systems programming, 
            web/mobile development, and machine learning
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-l-lg border border-blue-300">All</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">Systems</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">Mobile</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-lg">ML/AI</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              ProjectTitle={project.title}
              ProjectDescription={project.description}
              ProjectInfo={project.info}
              ProjectImage={project.image}
              GithubLink={project.githubLink}
              ProjectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

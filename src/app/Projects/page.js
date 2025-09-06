"use client"
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Netfilter Packet Sniffer",
      description: "C, Netfilter, QEMU, Kernel Development",
      info: "Developed a kernel module for a packet sniffer using C and the Netfilter library. Tested on an Ubuntu VM, creates kernel logs displaying outputs of incoming/outgoing packets.",
      githubLink: "https://github.com/RaphaLK/Netfilter-Packet-Sniffer",
    },
    {
      title: "RustOS",
      description: "Rust, x86_64, QEMU, Assembly, OS Development",
      info: "Developed a operating system in Rust based on the principles from Philip Opperman's blog. Implemented interrupt handling, and a basic VGA text buffer driver. Currently working on process scheduling and a minimal shell interface.",
      githubLink: "https://github.com/RaphaLK/MiniRustOS",
    },
    {
      title: "NextGig",
      description: "C++17, Qt, Firebase SDK, TCP/IP, CMake, JSON",
      info: "Built a freelancer job portal using C++ and the Qt framework, demonstrating SOLID principles and design patterns like Observer and Singletons. Implemented a client-server architecture with JSON-based RPC protocol and Firebase C++ SDK integration for user authentication and data persistence.",
      githubLink: "https://github.com/RaphaLK/NextGig",
    },
    {
      title: "SCU ISA CPU Design",
      description: "Verilog, RISC-V ISA, Vivado, Hardware Design, Pipelining",
      info: "Designed and implemented a 5-stage pipelined CPU with a custom instruction set architecture inspired by RISC-V. Created logic for instruction fetch, decode, execute, memory access, and writeback stages. Verified functionality through simulation and FPGA implementation.",
    },
    {
      title: "Simple C Compiler",
      description: "C++, Flex, x86-64 Assembly",
      info: "Built a compiler for a subset of C under Dr. Darren Atkinson. Implemented lexical analysis with Flex, syntax parsing with recursive descent, semantic analysis with symbol tables, type checking, and x86-64 code generation. Supports variables, functions, control structures, and basic error handling.",
    },
    {
      title: "Systemic Mobile App Reviews",
      description: "React, Node.js, BullMQ, AWS, MongoDB, Nginx",
      info: "Enhanced a web platform for non-technical researchers to systematically analyze mobile applications.",
      githubLink: "https://github.com/RaphaLK/SMAR",
    },
    {
      title: "Vocal sEMG Translation System",
      description: "Python, TensorFlow, Librosa, NumPy, Signal Processing",
      info: "Developed an innovative system for translating facial electromyography signals into speech. Designed a multi-label neural network classifier trained on windowed sEMG data from four facial muscle channels. Implemented custom feature extraction for time and frequency domains, achieving 30% accuracy in phoneme classification.",
      githubLink: "https://github.com/CSEN196Lab-S2025/senior-design-project-19_kkah_emgspeechrecognition",
    },
    {
      title: "OpenBCI Recording Script",
      description: "Python, Librosa, OpenBCI SDK",
      info: "To collect synchronized sEMG-Audio files I needed to create a custom script that leveraged Python libraries and the OpenBCI SDK to interface with the biosensing board.",
      githubLink: "https://github.com/RaphaLK/auto_recording_script",
    },
    {
      title: "Music Genre Classifier",
      description: "Python, Librosa, Sci-Kit Learn, XGBoost, Pandas, Numpy",
      info: "Developed a music genre classifier. Built the pre-processor and feature extraction pipeline to handle 30 second audio clips. Achieved an 84.5% accuracy with XGBoost, also tested out a Random Forest Classifier and achieved an accuracy of 82.5%.",
      githubLink: "https://github.com/RaphaLK/MusicGenreClassifier",
    },
    {
      title: "Portfolio/Personal Website",
      description: "Next.js, JavaScript, TailwindCSS",
      info: "This entire website! Built with Next.js and TailwindCSS. Continuously a work in progress as I try to do experimental things.",
      githubLink: "https://github.com/RaphaLK/Portfolio",
    },
    {
      title: "React Native Flippable Card",
      description: "React-Native, JavaScript",
      info: "Created an open-source package to replace a deprecated React-Native package for proper dependency management. Removed old dependencies from the previous package and updated it to suit my need more and ported it over to modern React component standards. So far achieved 150+ downloads!",
      githubLink: "https://github.com/RaphaLK/rn-card-flip",
      projectLink: "https://www.npmjs.com/package/rn-flippable-card",
    },

    {
      title: "Public Transit Hub",
      description: "React Native, Expo, JavaScript, Python, Flask, MySQL, cPanel, Firebase",
      info: "Full Stack Mobile and Web Application. Main goal of assessing demand of public transportation at SCU. I currently act as the team lead for the Mobile App team, in addition to one of the core maintainers for the Backend repo. I handle Mobile App development, Backend Development, and DevOps. Created new designs and developed multiple features in the mobile app. Developed Web Scrapers, Rest APIs, and Database Automation Scripts.",
      projectLink: "https://publictransithub.com",
    },
    {
      title: "SCU Course Planner",
      description: "Next.js, TypeScript, TailwindCSS, Firebase, Digital Ocean, Sentry, Docker",
      info: "Web App to enable students to create their Academic four year plan. Acted as the scrum master during weekly meetings, identifying tasks and assessing priority. I was also one of the main developers in this project, created some of the main component such as the course requirements and the 'Drag & Drop' cards. Spearheaded design choices, integrated Firebase authentication and Cloud storage to our WebApp. Ensured that the database schema did not have redundancies.",
      githubLink: "https://github.com/CSEN-SCU/SCU-Course-Planner"
    },
    {
      title: "Vocal sEMG Identifier",
      description: "Python, Jupyter Notebook, Seaborn, Pandas, Pytorch",
      info: "A fun little side project related to my Capstone project! Visualized EMG Data from research papers to identify potential experiment procedures. Trained and tested an ML Model using KNNs to identify whether an individual is speaking based on Facial EMG Signals with an Accuracy of 92.5%.",
      githubLink: "https://github.com/RaphaLK/EMG-Speech-Detection",
    },
    {
      title: "License Quest",
      description: "React Native, JavaScript, Expo, Inrix API, Firebase, AWS Amplify",
      info: "Mobile app created to assist new/student drivers with acclimating to driving. Used Inrix APIs to handle navigation and routing to less crowded areas. Mostly responsible for the Front-End, but also created Web Scrapers and Excel Parsers using JavaScript.",
      githubLink: "https://github.com/RaphaLK/LicenseQuest-",
      projectLink: "https://devpost.com/software/license-quest",
    },
    {
      title: "Allescan",
      description: "Flutter, Firebase, Google Vision API",
      info: "Allescan was my first Hackathon Project. I worked on the Front End and Firebase Integration. We utilized the Google Vision API to identify nutrient labels and identify and user allergens. This was an incredible learning experience and was my first introduction to Mobile App Development.",
      projectLink: "https://devpost.com/software/allescan",
    },
  ];

  // Filter projects based on selection
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => {
        const category = getProjectCategory(project.description);
        return category === filter;
      });
      
  // Helper function to determine project category
  function getProjectCategory(description) {
    const desc = description.toLowerCase();
    if (desc.includes('c++') || desc.includes('rust') || desc.includes('os development') || desc.includes('kernel') ||
        desc.includes('assembly') || desc.includes('verilog') || desc.includes('llvm')) {
      return 'systems';
    } else if (desc.includes('react native') || desc.includes('flutter') || desc.includes('expo')) {
      return 'mobile';
    } else if (desc.includes('react') || desc.includes('next.js') || desc.includes('node')) {
      return 'web';
    } else if (desc.includes('python') || desc.includes('tensorflow') || 
               desc.includes('numpy') || desc.includes('scikit') || desc.includes('pandas')) {
      return 'ml';
    }
    return 'other';
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical work, focusing on systems programming, 
            compiler design, and signal processing
          </p>
        </div>
        
        <div className={`flex justify-center mb-8 transition-all duration-700 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex rounded-md shadow-sm">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-md ${
                filter === 'all' 
                  ? 'text-white bg-gray-800 border-gray-800 shadow-lg' 
                  : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
              } rounded-l-lg`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('systems')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r transition-all duration-300 hover:scale-105 hover:shadow-md ${
                filter === 'systems' 
                  ? 'text-white bg-blue-600 border-blue-600 shadow-lg' 
                  : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
              }`}
            >
              Systems
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r transition-all duration-300 hover:scale-105 hover:shadow-md ${
                filter === 'web' 
                  ? 'text-white bg-green-600 border-green-600 shadow-lg' 
                  : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r transition-all duration-300 hover:scale-105 hover:shadow-md ${
                filter === 'mobile' 
                  ? 'text-white bg-purple-600 border-purple-600 shadow-lg' 
                  : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
              }`}
            >
              Mobile
            </button>
            <button 
              onClick={() => setFilter('ml')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r transition-all duration-300 hover:scale-105 hover:shadow-md ${
                filter === 'ml' 
                  ? 'text-white bg-amber-600 border-amber-600 shadow-lg' 
                  : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
              } rounded-r-lg`}
            >
              ML/AI
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`h-full transition-all duration-700 hover:scale-105 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <ProjectCard
                ProjectTitle={project.title}
                ProjectDescription={project.description}
                ProjectInfo={project.info}
                ProjectImage={project.image}
                GithubLink={project.githubLink}
                ProjectLink={project.projectLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
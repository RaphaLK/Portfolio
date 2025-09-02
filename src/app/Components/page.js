"use client"
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import { Card } from "@/components/ui/card";
import "./animations.css";

// Add cool animations and effects
const FloatingIcon = ({ children, delay = 0 }) => (
  <div 
    className="animate-bounce inline-block" 
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: '3s'
    }}
  >
    {children}
  </div>
);

const GlowingCard = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-white rounded-lg">
      {children}
    </div>
  </div>
);

const TypingAnimation = ({ text, className = "" }) => (
  <div className={className}>
    <span className="typing-animation font-mono">
      {text}
    </span>
    <span className="blinking-cursor">|</span>
    <style jsx>{`
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange }
      }
      .typing-animation {
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
      }
      .blinking-cursor {
        animation: blink-caret .75s step-end infinite;
        color: orange;
      }
    `}</style>
  </div>
);

export default function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-10 pb-16 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section with enhanced styling */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 relative z-10">
        {/* Profile Image with cool effects */}
        <div className="shrink-0 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative">
            <Image
              src="/Assets/MyPhoto.jpg"
              width={280}
              height={280}
              className="rounded-xl shadow-2xl object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
              alt="Raphael Kusuma - Software Engineer and Computer Science student at Santa Clara University"
            />
          </div>
        </div>

        {/* Introduction & Contact with enhanced styling */}
        <div className="flex flex-col relative">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Hello, I'm Raphael
            </h1>
            <TypingAnimation 
              text="MS Computer Science and Engineering @ SCU" 
              className="text-lg text-orange-600 font-semibold mb-4"
            />
          </div>
        
          {/* Technical Skills with enhanced visual design */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="mr-3">🚀</span>
              Technical Arsenal
            </h2>
            
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 rounded-lg text-sm font-mono border border-slate-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">C++</span>
                <span className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 rounded-lg text-sm font-mono border border-slate-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">C</span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 rounded-lg text-sm font-mono border border-orange-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Rust</span>
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-800 rounded-lg text-sm font-mono border border-yellow-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Python</span>
                <span className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 rounded-lg text-sm font-mono border border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Bash</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-mono border border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">JavaScript</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-mono border border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">TypeScript</span>
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 rounded-lg text-sm font-mono border border-indigo-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">SQL</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-800 rounded-lg text-sm font-mono border border-red-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">CMake</span>
                <span className="px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-800 rounded-lg text-sm font-mono border border-red-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">gdb</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-mono border border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Linux</span>
                <span className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 rounded-lg text-sm font-mono border border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Git</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-mono border border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Docker</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-lg text-sm font-mono border border-green-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">GCP</span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 rounded-lg text-sm font-mono border border-orange-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Firebase</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-mono border border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Jenkins</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-lg text-sm font-mono border border-green-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Qt</span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-800 rounded-lg text-sm font-mono border border-cyan-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">React</span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-800 rounded-lg text-sm font-mono border border-cyan-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">React Native</span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 rounded-lg text-sm font-mono border border-purple-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Next.js</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-lg text-sm font-mono border border-green-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Node.js</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-lg text-sm font-mono border border-green-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Express.js</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-mono border border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">Flask</span>
              </div>
            </div>
          </div>

          {/* Personal Interests with enhanced styling */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="mr-3">🎯</span>
              Beyond Code
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                🏓 Pickleball
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                🥏 Ultimate Frisbee
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                ☕ Coffee
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                🥊 Boxing
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                📸 Photography
              </span>
            </div>
          </div>

          {/* Enhanced contact section */}
          <div className="flex items-center gap-6 mt-auto">
            <a href="mailto:raphaelkusuma5@gmail.com" className="group">
              <Button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white px-4 py-3 rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-200">
                <span className="flex items-center gap-2">
                  💬 Let's Connect
                </span>
              </Button>
            </a>
            <div className="flex gap-3">
              <div className="transform hover:scale-110 transition-transform duration-200">
                <SocialIcon
                  url="https://github.com/RaphaLK"
                  bgColor="#333"
                  style={{ height: 44, width: 44 }}
                />
              </div>
              <div className="transform hover:scale-110 transition-transform duration-200">
                <SocialIcon
                  url="https://www.linkedin.com/in/raphaelkusuma/"
                  style={{ height: 44, width: 44 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Project Highlight with enhanced styling */}
      <GlowingCard className="mb-12">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-10 rounded-xl shadow-2xl border border-slate-700 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="md:w-3/4">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">⚡</span>
                <h2 className="text-3xl font-mono font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Current Focus: Systems Development
                </h2>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                I'm currently developing a microkernel operating system in <span className="text-orange-400 font-semibold">Rust</span>,
                focusing on memory safety and high performance based on Philip
                Opperman's blog. I'm also strengthening my <span className="text-blue-400 font-semibold">C++</span> expertise through advanced 
                system programming, studying Scott Meyer's Effective Modern C++, and implementing
                low-level network interfaces with tools like CMake, gdb, and Qt.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-orange-500 bg-opacity-20 text-orange-200 rounded-lg text-sm font-mono border border-orange-600 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200">
                  🧠 Memory Management
                </span>
                <span className="px-4 py-2 bg-purple-500 bg-opacity-20 text-purple-200 rounded-lg text-sm font-mono border border-purple-600 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200">
                  🔧 Kernel Development
                </span>
                <span className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-200 rounded-lg text-sm font-mono border border-blue-600 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200">
                  🐧 Linux Systems
                </span>
                <span className="px-4 py-2 bg-green-500 bg-opacity-20 text-green-200 rounded-lg text-sm font-mono border border-green-600 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200">
                  🌐 Low-level Networking
                </span>
              </div>
            </div>
            <div className="md:w-1/4 flex flex-col items-center justify-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">Rust</span>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">C++</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlowingCard>

      {/* Additional Highlights with enhanced cards */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-inner border border-slate-200">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🌟 Additional Highlights
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlowingCard>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎓</span>
                <h3 className="text-xl font-bold text-slate-800">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-slate-800">
                    M.S. Computer Science and Engineering
                  </p>
                  <p className="text-blue-700 font-medium">Santa Clara University</p>
                  <p className="text-slate-600 text-sm">
                    Focus: Systems & Robotics
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-sm">⭐</span>
                    <p className="text-slate-500 text-sm ml-1">
                      GPA: 3.91/4.0
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-slate-800">
                    B.S. Computer Science and Engineering
                  </p>
                  <p className="text-green-700 font-medium">Santa Clara University</p>
                  <p className="text-slate-600 text-sm">
                    Awards: ICPC D2 - 4th in California (7th in the Pacific NW)
                  </p>
                  <p className="text-slate-600 text-sm">
                    Involvements: SCU EPIC Lab, SCU HCI Lab, SCU Boxing
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-sm">⭐</span>
                    <p className="text-slate-500 text-sm ml-1">
                      GPA: ~3.5/4.0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🤝</span>
                <h3 className="text-xl font-bold text-slate-800">
                  Leadership & Teamwork
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experienced Resident Assistant, University Library Student
                Assistant. Got an award for "Most Caring" and "Most likely to know
                a resident's name" :)
              </p>
              <div className="h-48 overflow-hidden rounded-lg relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  className="rounded-lg object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  src={"/Assets/ImagesAbout/Teamwork/TeamPhoto.JPG"}
                  alt={"Team photo showcasing leadership and collaboration skills"}
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📸</span>
                <h3 className="text-xl font-bold text-slate-800">
                  Creative Photography
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As an RA, I had access to the residence hall's camera. I took professional headshots and macroshots of nature.
              </p>
              <div className="h-48 flex overflow-hidden rounded-lg justify-center">
                <div className="rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <Carousel1 />
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🏆</span>
                <h3 className="text-xl font-bold text-slate-800">
                  Competitive Programming
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Attended ICPC Division 2 representing Santa Clara University, achieved <span className="font-semibold text-orange-600">#4 in California</span>. 
              </p>
              <div className="h-48 rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  className="rounded-lg h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  src={"/Assets/ICPC/ICPC1.jpg"}
                  alt={"ICPC Competition - 4th place in California"}
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
    </div>
  );
}

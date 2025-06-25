import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import { Card } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-4 pb-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        {/* Profile Image - Moved to left side for better visual hierarchy */}
        <div className="shrink-0">
          <Image
            src="/Assets/MyPhoto.jpg"
            width={280}
            height={280}
            className="rounded-xl shadow-lg object-cover"
            alt="Raphael Kusuma"
          />
        </div>

        {/* Introduction & Contact */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-3">Hello, I&apos;m Raphael</h1>
          <p className="text-lg mb-4 text-gray-700 max-w-2xl">
            M.S Computer Science and Engineering at SCU, with a passion for
            systems programming and low-level software development. I also have
            a strong foundation in Web and Mobile Development.
          </p>

          {/* Technical Skills - Updated with comprehensive skills */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              Technical Skills
            </h2>
            
            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-600 mb-1.5">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-md text-xs font-mono border border-slate-200">C++</span>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-md text-xs font-mono border border-slate-200">C</span>
                <span className="px-3 py-1.5 bg-orange-50 text-orange-800 rounded-md text-xs font-mono border border-orange-200">Rust</span>
                <span className="px-3 py-1.5 bg-yellow-50 text-yellow-800 rounded-md text-xs font-mono border border-yellow-200">Python</span>
                <span className="px-3 py-1.5 bg-gray-50 text-gray-800 rounded-md text-xs font-mono border border-gray-200">Bash</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">JavaScript</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">TypeScript</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">SQL</span>
              </div>
            </div>
            
            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-600 mb-1.5">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-green-50 text-green-800 rounded-md text-xs font-mono border border-green-200">Qt</span>
                <span className="px-3 py-1.5 bg-red-50 text-red-800 rounded-md text-xs font-mono border border-red-200">CMake</span>
                <span className="px-3 py-1.5 bg-red-50 text-red-800 rounded-md text-xs font-mono border border-red-200">gdb</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">Linux</span>
                <span className="px-3 py-1.5 bg-gray-50 text-gray-800 rounded-md text-xs font-mono border border-gray-200">Git</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">Docker</span>
                <span className="px-3 py-1.5 bg-green-50 text-green-800 rounded-md text-xs font-mono border border-green-200">GCP</span>
                <span className="px-3 py-1.5 bg-orange-50 text-orange-800 rounded-md text-xs font-mono border border-orange-200">Firebase</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">Jenkins</span>
              </div>
            </div>
            
            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-600 mb-1.5">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">React</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">React Native</span>
                <span className="px-3 py-1.5 bg-purple-50 text-purple-800 rounded-md text-xs font-mono border border-purple-200">Next.js</span>
                <span className="px-3 py-1.5 bg-green-50 text-green-800 rounded-md text-xs font-mono border border-green-200">Node.js</span>
                <span className="px-3 py-1.5 bg-green-50 text-green-800 rounded-md text-xs font-mono border border-green-200">Express.js</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md text-xs font-mono border border-blue-200">Flask</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              Personal Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                Pickleball
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                Ultimate Frisbee
              </span>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">
                Coffee
              </span>
              <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                Boxing
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                Photography
              </span>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex items-center gap-4 mt-auto">
            <a href="mailto:raphaelkusuma5@gmail.com">
              <Button className="bg-slate-700 hover:bg-slate-700">
                <p className="text-white">Contact Me</p>
              </Button>
            </a>
            <SocialIcon
              url="https://github.com/RaphaLK"
              bgColor="#333"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/raphaelkusuma/"
              style={{ height: 40, width: 40 }}
            />
          </div>
        </div>
      </div>

      {/* Current Project Highlight - Update to mention C++ skills */}
      <div className="mb-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 rounded-xl shadow-lg border border-slate-700">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h2 className="text-2xl font-mono font-bold mb-4">
              Current Focus: Systems Development
            </h2>
            <p className="text-slate-300 mb-5 leading-relaxed">
              I&apos;m currently developing a microkernel operating system in Rust,
              focusing on memory safety and high performance based on Philip
              Opperman&apos;s blog. I&apos;m also strengthening my C++ expertise through advanced 
              system programming, studying Scott Meyer&apos;s Effective Modern C++, and implementing
              low-level network interfaces with tools like CMake, gdb, and Qt.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-orange-900 bg-opacity-40 text-orange-100 rounded-md text-xs font-mono border border-orange-800">
                Memory Management
              </span>
              <span className="px-3 py-1.5 bg-orange-900 bg-opacity-40 text-orange-100 rounded-md text-xs font-mono border border-orange-800">
                Kernel Development
              </span>
              <span className="px-3 py-1.5 bg-orange-900 bg-opacity-40 text-orange-100 rounded-md text-xs font-mono border border-orange-800">
                Linux Systems
              </span>
              <span className="px-3 py-1.5 bg-orange-900 bg-opacity-40 text-orange-100 rounded-md text-xs font-mono border border-orange-800">
                Low-level Networking
              </span>
            </div>
          </div>
          <div className="md:w-1/4 flex flex-col items-center justify-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">Rust</span>
            </div>
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">C++</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Skills */}
      <div className="bg-slate-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          Additional Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">
              Education
            </h3>
            <div className="mb-3">
              <p className="font-medium">
                M.S. Computer Science and Engineering
              </p>
              <p className="text-gray-600">Santa Clara University</p>
              <p className="text-gray-500 text-sm">
                Focus: Systems Programming
              </p>
              <p className="text-gray-400 text-sm">
                GPA: 3.91/4.0
              </p>
            </div>
            <div>
              <p className="font-medium">
                B.S. Computer Science and Engineering
              </p>
              <p className="text-gray-600">Santa Clara University</p>
              <p className="text-gray-400 text-sm">
                GPA: ~3.5/4.0
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Teamwork
            </h3>
            <p className="text-gray-600 mb-5">
              Experienced Resident Assistant, University Library Student
              Assistant. Got an award for &quot;Most Caring&quot; and &quot;Most likely to know
              a resident&quot;s name&quot; :)
            </p>
            <div className="h-48 overflow-hidden rounded-lg">
              <div className="rounded-lg">
                  <Image
                    className="rounded-md"
                    src={"/Assets/ImagesAbout/Teamwork/TeamPhoto.JPG"}
                    alt={"Oops!"}
                    height={300}
                    width={300}
                  />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Photography
            </h3>
            <p className="text-gray-600 mb-5">
              As an RA, I had access to the residence hall&apos;s camera. I took professional headshots and macroshots of nature.
            </p>
            <div className="h-48 flex overflow-hidden rounded-lg justify-center">
              <div className="rounded-lg">
                <Carousel1 />
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">
              Competitive Programming
            </h3>
            <p className="text-gray-600 mb-4">
              Attended ICPC Division 2 representing Santa Clara University, achieved #4
              in California. 
            </p>
            <div className="h-50 rounded-md align-center">
                <Image
                  className="rounded-md h-full"
                  src={"/Assets/ICPC/ICPC1.jpg"}
                  alt={"Oops!"}
                  height={300}
                  width={300}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

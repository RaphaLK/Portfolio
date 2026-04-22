"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
import Carousel1 from "./Carousel1";
import FloatingCube3D from "./FloatingCube3D";

const SKILLS = {
  Languages: { items: ["C++", "C", "Rust", "Java", "Python", "Bash", "JavaScript", "TypeScript", "SQL"], color: "text-blue-600", pillClass: "bg-blue-50 text-blue-700 border-blue-200" },
  "Tools & DevOps": { items: ["CMake", "gdb", "Linux", "Git", "Docker", "GCP", "Firebase", "Jenkins"], color: "text-emerald-600", pillClass: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "Frameworks": { items: ["Qt", "React", "React Native", "Next.js", "Node.js", "Express.js", "Flask"], color: "text-violet-600", pillClass: "bg-violet-50 text-violet-700 border-violet-200" },
};

const INTERESTS = ["Pickleball", "Ultimate Frisbee", "Coffee", "Boxing", "Photography"];

export default function AboutMe() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-10 pb-16">
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <div className="flex-shrink-0">
          <Image
            src="/Assets/MyPhoto.jpg"
            width={220}
            height={220}
            className="rounded-xl object-cover border border-gray-200 shadow-sm"
            alt="Raphael Kusuma"
          />
          <div className="mt-6">
            <FloatingCube3D />
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, I&apos;m Raphael</h1>
            <p className="text-gray-500 mt-1 text-sm">MS Computer Science and Engineering @ SCU</p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {Object.entries(SKILLS).map(([category, { items, color, pillClass }]) => (
              <div key={category}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${color}`}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded text-xs font-mono border ${pillClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interests */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Beyond Code</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs border border-gray-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a href="mailto:raphaelkusuma5@gmail.com">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg">
                Let&apos;s Connect
              </Button>
            </a>
            <SocialIcon url="https://github.com/RaphaLK" bgColor="#333" style={{ height: 38, width: 38 }} />
            <SocialIcon url="https://www.linkedin.com/in/raphaelkusuma/" style={{ height: 38, width: 38 }} />
          </div>
        </div>
      </div>

      {/* Currently */}
      <div className="border border-gray-200 rounded-xl p-8 mb-10 border-t-4 border-t-sky-500 bg-sky-50/30">
        <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-4">Currently</h2>
        <div className="space-y-2">
          <p className="text-gray-700 text-sm">Finishing my MS in Computer Science and Engineering at SCU (December 2026).</p>
          <p className="text-gray-700 text-sm">Preparing for my Software Engineering internship at Google (Chrome Remote Desktop team, Summer 2026).</p>
        </div>
      </div>

      {/* Highlights grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="border border-gray-100 rounded-xl p-6 shadow-sm border-t-4 border-t-blue-500">
          <h3 className="font-semibold text-gray-900 mb-4">Education</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="font-medium text-gray-900 text-sm">M.S. Computer Science and Engineering</p>
              <p className="text-blue-600 text-xs mt-0.5">Santa Clara University</p>
              <p className="text-gray-400 text-xs mt-1">GPA: 3.903/4.0 · HCI Lab & EPIC Lab · TA/Grader</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="font-medium text-gray-900 text-sm">B.S. Computer Science and Engineering</p>
              <p className="text-emerald-600 text-xs mt-0.5">Santa Clara University</p>
              <p className="text-gray-400 text-xs mt-1">GPA: ~3.5/4.0 · ICPC D2 — 4th in California</p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="border border-gray-100 rounded-xl p-6 shadow-sm border-t-4 border-t-violet-500">
          <h3 className="font-semibold text-gray-900 mb-3">Leadership & Teamwork</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Experienced Resident Assistant and Library Student Assistant. Awarded{" "}
            <span className="font-medium text-gray-800">&quot;Most Caring&quot;</span> and{" "}
            <span className="font-medium text-gray-800">&quot;Most likely to know a resident&apos;s name&quot;</span>.
          </p>
          <div className="h-40 overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/Assets/ImagesAbout/Teamwork/TeamPhoto.JPG"
              alt="Team photo"
              height={300}
              width={300}
            />
          </div>
        </div>

        {/* Photography */}
        <div className="border border-gray-100 rounded-xl p-6 shadow-sm border-t-4 border-t-pink-500">
          <h3 className="font-semibold text-gray-900 mb-3">Creative Photography</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            As an RA, I had access to the residence hall&apos;s camera. Here&apos;s a small set of what I took.
          </p>
          <div className="h-40 overflow-hidden rounded-lg">
            <Carousel1 />
          </div>
        </div>

        {/* Competitive Programming */}
        <div className="border border-gray-100 rounded-xl p-6 shadow-sm border-t-4 border-t-orange-500">
          <h3 className="font-semibold text-gray-900 mb-3">Competitive Programming</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Attended ICPC Division 2 representing Santa Clara University, achieving{" "}
            <span className="font-medium text-orange-600">#4 in California</span> (7th in the Pacific NW).
          </p>
          <div className="h-40 overflow-hidden rounded-lg">
            <Image
              className="rounded-lg h-full w-full object-cover"
              src="/Assets/ICPC/ICPC1.jpg"
              alt="ICPC Competition"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

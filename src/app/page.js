"use client"
import AboutMe from './Components/page'; 

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)]">
      <AboutMe />
    </div>
  );
}
import Hero from "@/components/about/Hero";
import Skills from "@/components/about/Skills";
import Currently from "@/components/about/Currently";
import Highlights from "@/components/about/Highlights";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6">
      <Hero />
      <Currently />
      <Skills />
      <Highlights />
    </div>
  );
}

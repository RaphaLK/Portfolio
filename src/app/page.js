import Hero from "@/components/about/Hero";
import SelectedWork from "@/components/about/SelectedWork";
import Highlights from "@/components/about/Highlights";
import RecentExperience from "@/components/about/RecentExperience";
import Skills from "@/components/about/Skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6">
      <Hero />
      <SelectedWork />
      <Highlights />
      <RecentExperience />
      <Skills />
    </div>
  );
}

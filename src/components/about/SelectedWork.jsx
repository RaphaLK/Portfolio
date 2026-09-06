import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/app/projects/ProjectCard";
import { FEATURED_PROJECTS, PROJECTS } from "@/lib/projects";

export default function SelectedWork() {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="selected work" title="Things I've built" className="mb-0" />
        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-1 font-mono text-xs text-brand transition-colors hover:text-brand-hover"
        >
          all {PROJECTS.length}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.slice(0, 3).map((project, i) => (
          <Reveal key={project.title} delay={i * 60} className="h-full">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";
import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { PROJECTS, CATEGORIES } from "@/lib/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
          ~/projects — {PROJECTS.length} builds
        </p>
        <h1 className="text-[clamp(2rem,5vw,2.75rem)] leading-tight">Projects</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Technical work across systems programming, compiler design, signal
          processing, and full-stack apps.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-1.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            aria-pressed={filter === cat.id}
            className={cn(
              "rounded-md border px-3 py-1.5 font-mono text-xs transition-colors",
              filter === cat.id
                ? "border-transparent bg-brand-tint text-brand"
                : "border-line text-ink-faint hover:border-line-strong hover:text-ink-muted"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i, 8) * 45} className="h-full">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

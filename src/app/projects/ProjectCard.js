import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Tag from "@/components/ui/Tag";
import { CATEGORY_LABELS } from "@/lib/projects";

const MAX_TAGS = 5;

export default function ProjectCard({
  title,
  category,
  description,
  info,
  year,
  wip,
  featured,
  githubLink,
  projectLink,
}) {
  const tech = description.split(",").map((t) => t.trim());
  const primaryLink = githubLink || projectLink;

  return (
    <article
      className={`group flex h-full flex-col rounded-xl border bg-surface p-5 transition-colors hover:border-line-strong ${
        featured ? "border-brand/25" : "border-line"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            <span>{CATEGORY_LABELS[category]}</span>
            {year && <span className="text-line-strong">· {year}</span>}
            {wip && <span className="text-brand">· wip</span>}
          </p>
          <h3 className="mt-1 text-base font-semibold leading-snug">{title}</h3>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source`}
              className="grid h-8 w-8 place-items-center rounded-md text-ink-faint transition-colors hover:bg-surface-hover hover:text-ink"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live`}
              className="grid h-8 w-8 place-items-center rounded-md text-ink-faint transition-colors hover:bg-surface-hover hover:text-ink"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tech.slice(0, MAX_TAGS).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {tech.length > MAX_TAGS && (
          <Tag variant="ghost">+{tech.length - MAX_TAGS}</Tag>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{info}</p>

      {primaryLink && (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-brand transition-colors hover:text-brand-hover"
        >
          learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </article>
  );
}

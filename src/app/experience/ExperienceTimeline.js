"use client";
import Reveal from "@/components/Reveal";
import { MAIN_EXPERIENCES, EARLIER_EXPERIENCES } from "@/lib/experience";
import { useTilt } from "@/lib/useTilt";

function TimelineCard({ exp, index }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt();
  return (
    <li>
      <Reveal className="relative pl-8" delay={Math.min(index, 6) * 40}>
        <span className="absolute left-0 top-[18px] h-[13px] w-[13px] rounded-full border-2 border-bg bg-brand" />
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className={`tilt-card relative rounded-xl border bg-surface p-5 transition-colors hover:border-line-strong ${
            exp.isHighlighted ? "border-brand/40" : "border-line"
          }`}
        >
          <div
            className="tilt-spotlight pointer-events-none absolute inset-0 rounded-[inherit]"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold leading-snug">{exp.title}</h3>
              {exp.isHighlighted && (
                <span className="rounded border border-brand/40 px-1.5 py-0.5 font-mono text-[10px] uppercase leading-none text-brand">
                  current
                </span>
              )}
            </div>
            <p className="mt-1 font-mono text-xs text-ink-faint">
              {exp.year} · {exp.location}
            </p>

            <ul className="mt-3 space-y-1.5">
              {exp.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                  <span className="text-sm leading-relaxed text-ink-muted">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </li>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* rail */}
      <div className="absolute bottom-0 left-[6px] top-1 w-px bg-line" />

      <ol className="space-y-7">
        {MAIN_EXPERIENCES.map((exp, index) => (
          <TimelineCard key={exp.title} exp={exp} index={index} />
        ))}
      </ol>

      {EARLIER_EXPERIENCES.length > 0 && (
        <div className="relative mt-8 pl-8">
          <span className="absolute left-0 top-[6px] h-[13px] w-[13px] rounded-full border-2 border-bg bg-line-strong" />
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
            earlier
          </p>
          <ul className="space-y-3">
            {EARLIER_EXPERIENCES.map((exp) => (
              <li
                key={exp.title}
                className="flex flex-col gap-0.5 border-l border-line pl-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="text-sm text-ink-muted">{exp.title}</span>
                <span className="shrink-0 font-mono text-xs text-ink-faint">
                  {exp.year} · {exp.location}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="relative mt-8 flex items-center gap-3 pl-8">
        <span className="absolute left-0 h-[13px] w-[13px] rounded-full border-2 border-bg bg-line-strong" />
        <span className="font-mono text-xs text-ink-faint">git init</span>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { RECENT_EXPERIENCES } from "@/lib/experience";

export default function RecentExperience() {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="experience" title="Where I've worked" className="mb-0" />
        <Link
          href="/experience"
          className="group inline-flex shrink-0 items-center gap-1 font-mono text-xs text-brand transition-colors hover:text-brand-hover"
        >
          full timeline
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <ul className="mt-8 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
        {RECENT_EXPERIENCES.map((exp, i) => (
          <Reveal key={exp.title} as="li" delay={i * 60} className="block p-5">
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
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {exp.details[0]}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

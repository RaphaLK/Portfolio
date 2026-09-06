"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { EXPERIENCES, COMMIT_HASHES, getCompanyLogo } from "@/lib/experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Rail */}
      <div className="absolute bottom-0 left-[6px] top-1 w-px bg-line" />

      <ol className="space-y-7">
        {EXPERIENCES.map((exp, index) => {
          const logo = getCompanyLogo(exp.title);
          return (
            <li key={exp.title}>
              <Reveal className="relative pl-8" delay={Math.min(index, 6) * 40}>
                <span className="absolute left-0 top-[18px] h-[13px] w-[13px] rounded-full border-2 border-bg bg-brand" />

                <div
                  className={`rounded-xl border bg-surface p-5 transition-colors hover:border-line-strong ${
                    exp.isHighlighted ? "border-brand/40" : "border-line"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {logo && (
                      <span className="relative mt-0.5 h-8 w-8 shrink-0 overflow-hidden rounded-md border border-line bg-bg-subtle">
                        <Image
                          src={logo}
                          alt=""
                          fill
                          sizes="32px"
                          className="object-contain p-1"
                        />
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold leading-snug">
                          {exp.title}
                        </h3>
                        {exp.isHighlighted && (
                          <span className="rounded border border-brand/40 px-1.5 py-0.5 font-mono text-[10px] uppercase leading-none text-brand">
                            current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-mono text-xs text-ink-faint">
                        {exp.year} · {exp.location}
                      </p>
                    </div>
                  </div>

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

                  <p className="mt-4 font-mono text-[11px] text-ink-faint">
                    commit {COMMIT_HASHES[index % COMMIT_HASHES.length]}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <div className="relative mt-7 flex items-center gap-3 pl-8">
        <span className="absolute left-0 h-[13px] w-[13px] rounded-full border-2 border-bg bg-line-strong" />
        <span className="font-mono text-xs text-ink-faint">git init</span>
      </div>
    </div>
  );
}

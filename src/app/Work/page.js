import TerminalFrame from "@/components/site/TerminalFrame";
import ExperienceTimeline from "./ExperienceTimeline";
import { EXPERIENCES } from "@/lib/experience";

export const metadata = { title: "Experience" };

export default function Work() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
      <TerminalFrame
        command="git log --all --oneline"
        path="~/experience"
        caret
      />

      <div className="mt-10">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
          {EXPERIENCES.length} roles · 5+ years
        </p>
        <h1 className="text-[clamp(1.75rem,4vw,2.25rem)]">Work Experience</h1>
      </div>

      <div className="mt-10">
        <ExperienceTimeline />
      </div>
    </div>
  );
}

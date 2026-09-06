import TerminalFrame from "@/components/site/TerminalFrame";

const LINES = [
  "Finishing my M.S. in Computer Science and Engineering at SCU (December 2026).",
  "Software Engineering intern at Google — Chrome Remote Desktop team (Summer 2026).",
];

export default function Currently() {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <TerminalFrame command="cat status.txt" path="~/now" caret>
        <div className="space-y-3">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-live"
                style={{ animation: "live-pulse 2.4s ease-out infinite" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            currently
          </p>
          <ul className="space-y-2">
            {LINES.map((line) => (
              <li key={line} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </TerminalFrame>
    </section>
  );
}

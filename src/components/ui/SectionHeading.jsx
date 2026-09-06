import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, children, className }) {
  return (
    <div className={cn("mb-8", className)}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-[1.75rem]">{title}</h2>
      {children && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {children}
        </p>
      )}
    </div>
  );
}

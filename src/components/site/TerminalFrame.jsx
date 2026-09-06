import { cn } from "@/lib/utils";

/**
 * Terminal-window chrome: traffic lights + a command prompt line, then children
 * as the "output". Used for the Experience header and the About "currently" card.
 */
export default function TerminalFrame({
  command,
  path = "~",
  caret = true,
  className,
  children,
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-surface",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-bg-subtle px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-xs text-ink-faint">
          raphael@portfolio: {path}
        </span>
      </div>
      {command && (
        <p className="border-b border-line px-4 py-3 font-mono text-sm text-ink-muted">
          <span className="text-brand">$</span> {command}
          {caret && <span className="caret ml-1 text-ink">▋</span>}
        </p>
      )}
      {children && <div className="px-4 py-4 sm:px-5">{children}</div>}
    </div>
  );
}

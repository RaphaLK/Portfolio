import { cn } from "@/lib/utils";

/**
 * Monospace chip used for skills, tech stacks and small labels.
 * variant: "default" (hairline) | "brand" (accent-tinted) | "ghost"
 */
export default function Tag({ children, variant = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs leading-5 whitespace-nowrap",
        variant === "default" &&
          "border-line bg-bg-subtle text-ink-muted",
        variant === "brand" &&
          "border-transparent bg-brand-tint text-brand",
        variant === "ghost" && "border-transparent bg-transparent text-ink-faint",
        className
      )}
    >
      {children}
    </span>
  );
}

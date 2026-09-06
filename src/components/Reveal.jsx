"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades + lifts its children into view on scroll. Generalizes the
 * IntersectionObserver pattern the experience timeline used inline.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
  ...props
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || reduce) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out-expo motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className
      )}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Tag>
  );
}

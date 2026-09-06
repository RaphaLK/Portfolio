"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps a button/link so it gently pulls toward the cursor while hovered,
 * snapping back on leave. Disabled for touch input and prefers-reduced-motion.
 */
export default function MagneticLink({ children, strength = 0.35, className }) {
  const ref = useRef(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    enabledRef.current = fine && !reduced;
  }, []);

  function handleMove(e) {
    if (!enabledRef.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "inline-block transition-transform duration-200 ease-out-expo will-change-transform motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </span>
  );
}

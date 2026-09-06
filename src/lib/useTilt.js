"use client";
import { useEffect, useRef } from "react";

/**
 * Cursor-reactive tilt + spotlight for a card. Spread the returned
 * {ref, onMouseMove, onMouseLeave} onto the card's root element, and drop a
 * `<div className="tilt-spotlight pointer-events-none absolute inset-0
 * rounded-[inherit]" />` as its first child (styles in globals.css). Disabled
 * automatically for touch input and prefers-reduced-motion.
 */
export function useTilt({ max = 7 } = {}) {
  const ref = useRef(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    enabledRef.current = fine && !reduced;
  }, []);

  function onMouseMove(e) {
    if (!enabledRef.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * max * 2;
    const rotateX = (0.5 - y / rect.height) * max * 2;
    el.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
    el.style.setProperty("--spot-opacity", "1");
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--spot-opacity", "0");
  }

  return { ref, onMouseMove, onMouseLeave };
}

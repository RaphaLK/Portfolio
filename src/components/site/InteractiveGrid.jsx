"use client";
import { useEffect, useRef } from "react";

const SPACING = 34;
const RADIUS = 160;

/**
 * Canvas replacement for the old static dot-grid: draws the same blueprint
 * grid, but dots near the cursor brighten toward the brand color and thread a
 * faint line back to it, like a circuit lighting up. Listens on `window` so
 * it reacts everywhere, not just where the backdrop peeks out from under
 * content. Frozen (one static frame, no listener-driven redraws) under
 * prefers-reduced-motion.
 */
export default function InteractiveGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const styles = getComputedStyle(document.documentElement);
    const dotColor = styles.getPropertyValue("--color-line-strong").trim() || "#4a5568";
    const glowColor = styles.getPropertyValue("--color-brand").trim() || "#5eead4";

    let width = 0;
    let height = 0;
    let points = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = null;
    let visible = true;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      points = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          points.push({ x: c * SPACING, y: r * SPACING });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / RADIUS);

        if (proximity > 0) {
          ctx.globalAlpha = 0.5 * proximity;
          ctx.strokeStyle = glowColor;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.globalAlpha = 0.3 + proximity * 0.7;
        ctx.fillStyle = proximity > 0.05 ? glowColor : dotColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1 + proximity * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    }

    function handlePointerMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function handlePointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function handleVisibility() {
      visible = document.visibilityState === "visible";
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    if (!reduced) {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="backdrop-grid-canvas absolute inset-0 h-full w-full" />;
}

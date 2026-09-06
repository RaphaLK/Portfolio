/**
 * Ambient page background: a fading blueprint dot-grid, two slow-drifting
 * aurora blooms, and a faint film grain. Fixed to the viewport, behind all
 * content, non-interactive. Styling lives in globals.css.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="backdrop-grid" />
      <div className="backdrop-aurora backdrop-aurora--brand" />
      <div className="backdrop-aurora backdrop-aurora--cool" />
      <div className="backdrop-grain" />
    </div>
  );
}

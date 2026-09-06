import InteractiveGrid from "./InteractiveGrid";

/**
 * Ambient page background: a fading blueprint dot-grid that lights up near
 * the cursor, two slow-drifting aurora blooms, and a faint film grain. Fixed
 * to the viewport, behind all content. The grid reacts to the mouse (see
 * InteractiveGrid) but nothing here intercepts clicks. Styling lives in
 * globals.css.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <InteractiveGrid />
      <div className="backdrop-aurora backdrop-aurora--brand" />
      <div className="backdrop-aurora backdrop-aurora--cool" />
      <div className="backdrop-grain" />
    </div>
  );
}

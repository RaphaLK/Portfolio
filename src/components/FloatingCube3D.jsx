"use client";
import dynamic from "next/dynamic";

const skeleton = (
  <div className="flex h-full w-full items-center justify-center">
    <span className="font-mono text-xs tracking-widest text-ink-faint uppercase">
      rendering scene<span className="caret">_</span>
    </span>
  </div>
);

const VoxelCatScene = dynamic(() => import("./voxel-cat-scene"), {
  ssr: false,
  loading: () => skeleton,
});

/** Fills its parent — the caller controls the height. */
export default function FloatingCube3D({ className = "" }) {
  return (
    <div
      className={`relative h-full min-h-[18rem] w-full overflow-hidden rounded-xl border border-line bg-bg-subtle/60 ${className}`}
    >
      <VoxelCatScene fallback={skeleton} />
      <span className="pointer-events-none absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        drag to orbit
      </span>
    </div>
  );
}

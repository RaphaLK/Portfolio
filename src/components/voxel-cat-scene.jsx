"use client";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";

/* ------------------------------------------------------------------ palette */
const FUR = "#ef9743"; // orange tabby coat
const FUR_DARK = "#bd6626"; // tabby stripes
const FUR_LIGHT = "#ffc98a"; // paws / ear backs
const CREAM = "#ffe9cf"; // chest, muzzle, socks
const PINK = "#ff9db2"; // nose, inner ear, toe beans
const EYE = "#8fd06a"; // green eyes
const PUPIL = "#1c211b";
const WHITE = "#ffffff";
const WHISKER = "#f7ecdc";
const SCREEN = "#3ce7a6";
const METAL = "#2b3440";
const METAL_DARK = "#171c24";
const KEY = "#3f4a59";

/* --------------------------------------------------------------- primitives */
function V({ pos, size = 0.2, color = FUR, rot }) {
  const s = Array.isArray(size) ? size : [size, size, size];
  return (
    <mesh position={pos} rotation={rot}>
      <boxGeometry args={s} />
      <meshStandardMaterial color={color} roughness={0.72} metalness={0} flatShading />
    </mesh>
  );
}

/* Static voxel list for the cat body — kept out of render for clarity. */
const BODY = [
  // seated mass: wide haunches tapering up to the shoulders
  { pos: [0, 0.3, -0.05], size: [0.82, 0.6, 0.74] },
  { pos: [0, 0.64, 0.03], size: [0.66, 0.46, 0.62] },
  { pos: [0, 0.94, 0.05], size: [0.54, 0.42, 0.52] },
  // thighs poking forward at the base
  { pos: [-0.36, 0.18, 0.26], size: [0.26, 0.34, 0.4] },
  { pos: [0.36, 0.18, 0.26], size: [0.26, 0.34, 0.4] },
  // rounded shoulders
  { pos: [-0.3, 1.0, 0.02], size: [0.2, 0.3, 0.36] },
  { pos: [0.3, 1.0, 0.02], size: [0.2, 0.3, 0.36] },
  // chest + belly blaze
  { pos: [0, 0.66, 0.3], size: [0.32, 0.66, 0.16], color: CREAM },
  { pos: [0, 0.3, 0.34], size: [0.28, 0.34, 0.14], color: CREAM },
  // back tabby stripes
  { pos: [0, 1.06, -0.08], size: [0.44, 0.07, 0.14], color: FUR_DARK },
  { pos: [0, 0.9, -0.22], size: [0.52, 0.07, 0.14], color: FUR_DARK },
  { pos: [0, 0.7, -0.3], size: [0.52, 0.07, 0.14], color: FUR_DARK },
  { pos: [0, 0.48, -0.32], size: [0.46, 0.07, 0.14], color: FUR_DARK },
  // hind paws peeking out front
  { pos: [-0.32, 0.05, 0.34], size: [0.24, 0.12, 0.3], color: FUR_LIGHT },
  { pos: [0.32, 0.05, 0.34], size: [0.24, 0.12, 0.3], color: FUR_LIGHT },
  { pos: [-0.32, 0.03, 0.48], size: [0.2, 0.06, 0.06], color: PINK },
  { pos: [0.32, 0.03, 0.48], size: [0.2, 0.06, 0.06], color: PINK },
];

const HEAD = [
  { pos: [0, 0, 0], size: [0.52, 0.48, 0.46] }, // skull
  { pos: [-0.31, -0.05, 0.03], size: [0.14, 0.28, 0.32] }, // cheek ruff L
  { pos: [0.31, -0.05, 0.03], size: [0.14, 0.28, 0.32] }, // cheek ruff R
  { pos: [0, -0.17, 0.24], size: [0.28, 0.2, 0.14], color: CREAM }, // muzzle
  { pos: [0, -0.26, 0.19], size: [0.2, 0.1, 0.12], color: CREAM }, // chin
  { pos: [0, -0.12, 0.33], size: [0.09, 0.07, 0.05], color: PINK }, // nose
  // forehead "M" tabby marking
  { pos: [0, 0.25, 0.16], size: [0.06, 0.14, 0.05], color: FUR_DARK },
  { pos: [-0.1, 0.25, 0.14], size: [0.05, 0.1, 0.05], color: FUR_DARK },
  { pos: [0.1, 0.25, 0.14], size: [0.05, 0.1, 0.05], color: FUR_DARK },
  { pos: [-0.17, 0.22, 0.1], size: [0.05, 0.08, 0.05], color: FUR_DARK },
  { pos: [0.17, 0.22, 0.1], size: [0.05, 0.08, 0.05], color: FUR_DARK },
  // dark eye liner
  { pos: [-0.14, 0.12, 0.2], size: [0.17, 0.035, 0.05], color: FUR_DARK },
  { pos: [0.14, 0.12, 0.2], size: [0.17, 0.035, 0.05], color: FUR_DARK },
];

const WHISKERS = [
  { pos: [-0.34, -0.1, 0.14], rot: [0, 0, 0.12] },
  { pos: [-0.34, -0.14, 0.14], rot: [0, 0, -0.04] },
  { pos: [-0.34, -0.18, 0.14], rot: [0, 0, -0.2] },
  { pos: [0.34, -0.1, 0.14], rot: [0, 0, -0.12] },
  { pos: [0.34, -0.14, 0.14], rot: [0, 0, 0.04] },
  { pos: [0.34, -0.18, 0.14], rot: [0, 0, 0.2] },
];

/* Tail centre-line (relative to a pivot at the rump): rises, arcs over to the
   cat's right, then curls forward. */
const TAIL = [
  { pos: [0.0, 0.05, -0.04], size: 0.2 },
  { pos: [0.07, 0.17, -0.1], size: 0.19 },
  { pos: [0.21, 0.25, -0.1], size: 0.18, color: FUR_DARK },
  { pos: [0.35, 0.25, 0.0], size: 0.17 },
  { pos: [0.43, 0.2, 0.14], size: 0.16, color: FUR_DARK },
];
const TAIL_TIP = [
  { pos: [0.0, -0.02, 0.13], size: 0.15 },
  { pos: [-0.11, 0.0, 0.26], size: 0.14, color: FUR_DARK },
  { pos: [-0.24, 0.06, 0.34], size: 0.12, color: CREAM },
];

/* ---------------------------------------------------------------- the cat */
function VoxelCat({ typing = true }) {
  const root = useRef();
  const head = useRef();
  const earL = useRef();
  const earR = useRef();
  const eyeL = useRef();
  const eyeR = useRef();
  const tail = useRef();
  const tailTip = useRef();
  const pawL = useRef();
  const pawR = useRef();
  const blink = useRef({ t0: -10, next: 2 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (root.current) {
      root.current.position.y = 0.03 + Math.sin(t * 0.9) * 0.025;
      root.current.rotation.y = Math.sin(t * 0.32) * 0.06;
      const breathe = 1 + Math.sin(t * 2.1) * 0.014;
      root.current.scale.set(1, breathe, 1);
    }

    if (head.current) {
      const lookUp = Math.max(0, Math.sin(t * 0.22)) ** 3 * 0.18;
      head.current.rotation.x = -0.09 + lookUp + Math.sin(t * 5.5) * 0.015;
      head.current.rotation.z = Math.sin(t * 0.5 + 1) * 0.045;
    }

    if (earL.current)
      earL.current.rotation.z = 0.14 + Math.sin(t * 3.1) * 0.05 + earFlick(t, 0);
    if (earR.current)
      earR.current.rotation.z =
        -0.14 - Math.sin(t * 2.7 + 1) * 0.05 - earFlick(t, 1.9);

    // blink
    const b = blink.current;
    if (t > b.next) {
      b.t0 = t;
      b.next = t + 2.4 + Math.random() * 3.6;
    }
    const dt = t - b.t0;
    const ey = dt >= 0 && dt < 0.15 ? 1 - Math.sin((dt / 0.15) * Math.PI) * 0.9 : 1;
    if (eyeL.current) eyeL.current.scale.y = ey;
    if (eyeR.current) eyeR.current.scale.y = ey;

    if (tail.current) {
      tail.current.rotation.y = Math.sin(t * 1.3) * 0.13;
      tail.current.rotation.z = Math.sin(t * 1.05) * 0.06;
    }
    if (tailTip.current)
      tailTip.current.rotation.z =
        Math.sin(t * 2.6) * 0.22 + Math.sin(t * 0.55) * 0.12;

    // front paws reach forward onto the keyboard (−x tips the leg forward),
    // with an alternating downward tap
    const reach = -0.34;
    const tap = typing ? 0.12 : 0;
    if (pawL.current)
      pawL.current.rotation.x = reach - Math.abs(Math.sin(t * 7)) * tap;
    if (pawR.current)
      pawR.current.rotation.x = reach - Math.abs(Math.sin(t * 7 + 2)) * tap;
  });

  return (
    <group ref={root}>
      {BODY.map((v, i) => (
        <V key={`b${i}`} {...v} />
      ))}

      {/* front legs — pivot at the shoulder, base lean forward so the paws
          rest on the keyboard; useFrame adds the typing tap */}
      <group ref={pawL} position={[-0.2, 0.56, 0.22]} rotation={[-0.34, 0, 0]}>
        <V pos={[0, -0.26, 0.04]} size={[0.19, 0.5, 0.19]} />
        <V pos={[0, -0.48, 0.12]} size={[0.22, 0.13, 0.26]} color={CREAM} />
        <V pos={[0, -0.5, 0.24]} size={[0.14, 0.05, 0.05]} color={PINK} />
      </group>
      <group ref={pawR} position={[0.2, 0.56, 0.22]} rotation={[-0.34, 0, 0]}>
        <V pos={[0, -0.26, 0.04]} size={[0.19, 0.5, 0.19]} />
        <V pos={[0, -0.48, 0.12]} size={[0.22, 0.13, 0.26]} color={CREAM} />
        <V pos={[0, -0.5, 0.24]} size={[0.14, 0.05, 0.05]} color={PINK} />
      </group>

      {/* tail — pivot at the rump */}
      <group ref={tail} position={[0.12, 0.14, -0.34]}>
        {TAIL.map((v, i) => (
          <V key={`t${i}`} {...v} />
        ))}
        <group ref={tailTip} position={[0.43, 0.2, 0.14]}>
          {TAIL_TIP.map((v, i) => (
            <V key={`tt${i}`} {...v} />
          ))}
        </group>
      </group>

      {/* head */}
      <group ref={head} position={[0, 1.36, 0.12]}>
        {HEAD.map((v, i) => (
          <V key={`h${i}`} {...v} />
        ))}
        {WHISKERS.map((w, i) => (
          <V
            key={`w${i}`}
            pos={w.pos}
            rot={w.rot}
            size={[0.26, 0.012, 0.012]}
            color={WHISKER}
          />
        ))}

        {/* eyes (scale.y animates the blink) */}
        <group ref={eyeL} position={[-0.14, 0.03, 0.22]}>
          <V pos={[0, 0, 0]} size={[0.14, 0.16, 0.06]} color={EYE} />
          <V pos={[0, -0.01, 0.03]} size={[0.06, 0.12, 0.05]} color={PUPIL} />
          <V pos={[0.035, 0.045, 0.05]} size={[0.032, 0.032, 0.04]} color={WHITE} />
        </group>
        <group ref={eyeR} position={[0.14, 0.03, 0.22]}>
          <V pos={[0, 0, 0]} size={[0.14, 0.16, 0.06]} color={EYE} />
          <V pos={[0, -0.01, 0.03]} size={[0.06, 0.12, 0.05]} color={PUPIL} />
          <V pos={[0.035, 0.045, 0.05]} size={[0.032, 0.032, 0.04]} color={WHITE} />
        </group>

        {/* ears (rotate around the base for the twitch) */}
        <group ref={earL} position={[-0.2, 0.24, 0]}>
          <V pos={[-0.02, 0.06, 0]} size={[0.22, 0.26, 0.14]} />
          <V pos={[-0.02, 0.17, 0]} size={[0.13, 0.11, 0.12]} color={FUR_DARK} />
          <V pos={[0, 0, 0.05]} size={[0.11, 0.16, 0.06]} color={PINK} />
        </group>
        <group ref={earR} position={[0.2, 0.24, 0]}>
          <V pos={[0.02, 0.06, 0]} size={[0.22, 0.26, 0.14]} />
          <V pos={[0.02, 0.17, 0]} size={[0.13, 0.11, 0.12]} color={FUR_DARK} />
          <V pos={[0, 0, 0.05]} size={[0.11, 0.16, 0.06]} color={PINK} />
        </group>
      </group>
    </group>
  );
}

function earFlick(t, offset) {
  const p = (t + offset) % 4.7;
  return p < 0.16 ? Math.sin((p / 0.16) * Math.PI) * 0.24 : 0;
}

/* -------------------------------------------------------------- the laptop */
// [indent, width] per line — tiled twice for a seamless scroll
const CODE_LINES = [
  [0.0, 0.34], [0.12, 0.46], [0.12, 0.22], [0.24, 0.4],
  [0.0, 0.5], [0.12, 0.3], [0.0, 0.24], [0.12, 0.44],
  [0.24, 0.36], [0.12, 0.5], [0.0, 0.28], [0.12, 0.4],
];
const CODE_SPAN = CODE_LINES.length * 0.09;

function VoxelLaptop() {
  const screen = useRef();
  const code = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (screen.current)
      screen.current.material.emissiveIntensity =
        0.55 + Math.sin(t * 9) * 0.1 + Math.sin(t * 2.3) * 0.05;
    if (code.current) code.current.position.y = (t * 0.32) % CODE_SPAN;
  });

  return (
    <group position={[0, 0, 0.55]}>
      {/* base + recessed keyboard (keyboard half sits toward the cat) */}
      <V pos={[0, 0.05, 0]} size={[1.06, 0.08, 0.64]} color={METAL} />
      <V pos={[0, 0.092, -0.03]} size={[0.94, 0.02, 0.46]} color={METAL_DARK} />
      {Array.from({ length: 24 }, (_, i) => (
        <V
          key={i}
          pos={[
            -0.36 + (i % 8) * 0.103,
            0.115,
            -0.17 + Math.floor(i / 8) * 0.12,
          ]}
          size={[0.075, 0.03, 0.075]}
          color={KEY}
        />
      ))}
      <V pos={[0, 0.108, 0.19]} size={[0.24, 0.02, 0.12]} color={KEY} />

      {/* upright screen at the far edge; screen face toward the camera */}
      <group position={[0, 0.08, 0.32]} rotation={[0.1, 0, 0]}>
        <V pos={[0, 0.46, -0.02]} size={[1.04, 0.9, 0.05]} color={METAL} />
        <mesh ref={screen} position={[0, 0.46, 0.012]}>
          <boxGeometry args={[0.88, 0.74, 0.02]} />
          <meshStandardMaterial
            color="#0c1411"
            emissive={SCREEN}
            emissiveIntensity={0.55}
          />
        </mesh>
        {/* scrolling code, masked to the screen face */}
        <group position={[0, 0.46, 0.03]}>
          <group ref={code}>
            {[...CODE_LINES, ...CODE_LINES].map(([indent, w], i) => (
              <V
                key={i}
                pos={[-0.32 + indent + w / 2, -0.46 + i * 0.09, 0]}
                size={[w, 0.03, 0.006]}
                color={SCREEN}
              />
            ))}
          </group>
          <V pos={[0, 0.54, 0.02]} size={[0.94, 0.34, 0.05]} color={METAL} />
          <V pos={[0, -0.54, 0.02]} size={[0.94, 0.34, 0.05]} color={METAL} />
        </group>
      </group>
    </group>
  );
}

/* ------------------------------------------------------------ floating code */
function FloatingGlyph({ position, seed }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.6 + seed) * 0.18;
    ref.current.rotation.y = t * 0.25 + seed;
    ref.current.rotation.x = Math.sin(t * 0.4 + seed) * 0.25;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.085, 0.085, 0.085]} />
      <meshStandardMaterial
        color={SCREEN}
        emissive={SCREEN}
        emissiveIntensity={0.4}
        flatShading
      />
    </mesh>
  );
}

const GLYPHS = [
  [1.9, 1.5, -0.3],
  [-1.85, 1.1, 0.2],
  [1.4, 2.1, -0.8],
  [-1.3, 2.3, -0.4],
  [0.2, 2.6, 0.6],
  [-1.9, 0.4, 0.9],
];

/* ------------------------------------------------------------------- scene */
function Scene() {
  const glyphs = useMemo(
    () => GLYPHS.map((p, i) => ({ p, seed: i * 1.7 })),
    []
  );
  return (
    <>
      <ambientLight intensity={0.5} />
      <hemisphereLight args={["#fff4e6", "#1b1f27", 0.55]} />
      <directionalLight position={[4, 6, 5]} intensity={1.15} color="#fff2df" />
      <directionalLight position={[-5, 2, -3]} intensity={0.28} color="#9fb8ff" />
      {/* screen backlight rimming the cat */}
      <pointLight position={[0, 0.7, 0.7]} intensity={0.5} distance={3.2} color={SCREEN} />

      <group scale={1.05} position={[0, 0.02, 0]}>
        <VoxelCat />
        <VoxelLaptop />
      </group>

      {glyphs.map(({ p, seed }, i) => (
        <FloatingGlyph key={i} position={p} seed={seed} />
      ))}

      <ContactShadows
        position={[0, 0.001, 0]}
        scale={5}
        blur={2.6}
        opacity={0.45}
        far={3}
        color="#0a0d10"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        target={[0, 0.9, 0]}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.05}
      />
    </>
  );
}

class SceneErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

export default function VoxelCatScene({ fallback }) {
  return (
    <SceneErrorBoundary fallback={fallback}>
      <Canvas
        camera={{ position: [2.9, 2.0, 4.0], fov: 42, near: 0.1, far: 100 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </SceneErrorBoundary>
  );
}

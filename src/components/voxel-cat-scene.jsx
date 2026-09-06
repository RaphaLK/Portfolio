"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const FUR = "#ff8c42";
const FUR_LIGHT = "#ffb366";
const NOSE = "#ff6b9d";
const SCREEN = "#00ff41";

function Cube({ position, color = FUR, size = 0.2 }) {
  const args = Array.isArray(size) ? size : [size, size, size];
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
}

function VoxelCat({ position = [0, 0, 0] }) {
  const catRef = useRef();

  useFrame((state) => {
    if (!catRef.current) return;
    catRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    catRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <group ref={catRef} position={position}>
      {/* Torso */}
      <Cube position={[0, 0, 0]} size={0.4} />
      <Cube position={[0, 0, -0.4]} size={0.4} />
      {/* Head */}
      <Cube position={[0, 0.4, 0.2]} size={0.35} />
      {/* Ears */}
      <Cube position={[-0.15, 0.65, 0.15]} size={0.15} />
      <Cube position={[0.15, 0.65, 0.15]} size={0.15} />
      <Cube position={[-0.15, 0.65, 0.15]} color={FUR_LIGHT} size={0.08} />
      <Cube position={[0.15, 0.65, 0.15]} color={FUR_LIGHT} size={0.08} />
      {/* Eyes + nose */}
      <Cube position={[-0.1, 0.45, 0.35]} color="#111111" size={0.08} />
      <Cube position={[0.1, 0.45, 0.35]} color="#111111" size={0.08} />
      <Cube position={[0, 0.35, 0.38]} color={NOSE} size={0.05} />
      {/* Legs */}
      <Cube position={[-0.15, -0.3, 0.15]} size={0.15} />
      <Cube position={[0.15, -0.3, 0.15]} size={0.15} />
      <Cube position={[-0.15, -0.3, -0.25]} size={0.15} />
      <Cube position={[0.15, -0.3, -0.25]} size={0.15} />
      {/* Paws */}
      <Cube position={[-0.15, -0.45, 0.15]} color={FUR_LIGHT} size={0.12} />
      <Cube position={[0.15, -0.45, 0.15]} color={FUR_LIGHT} size={0.12} />
      <Cube position={[-0.15, -0.45, -0.25]} color={FUR_LIGHT} size={0.12} />
      <Cube position={[0.15, -0.45, -0.25]} color={FUR_LIGHT} size={0.12} />
      {/* Tail */}
      <Cube position={[0, 0.1, -0.7]} size={0.15} />
      <Cube position={[0, 0.25, -0.9]} size={0.12} />
      <Cube position={[0, 0.4, -1.0]} size={0.1} />
      {/* Belly */}
      <Cube position={[0, -0.1, 0.1]} color={FUR_LIGHT} size={0.25} />
    </group>
  );
}

function VoxelLaptop({ position = [0, 0, 0] }) {
  const screenRef = useRef();

  useFrame((state) => {
    if (screenRef.current) {
      screenRef.current.material.emissiveIntensity =
        0.28 + Math.sin(state.clock.elapsedTime * 5) * 0.14;
    }
  });

  return (
    <group position={position}>
      <Cube position={[0, -0.15, 0]} color="#2d3748" size={[1.0, 0.1, 0.7]} />
      <mesh ref={screenRef} position={[0, 0.2, -0.3]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[0.9, 0.6, 0.05]} />
        <meshLambertMaterial color="#1a202c" emissive={SCREEN} emissiveIntensity={0.28} />
      </mesh>
      {Array.from({ length: 12 }, (_, i) => (
        <Cube
          key={i}
          position={[-0.35 + i * 0.07, -0.08, 0.15]}
          color="#4a5568"
          size={[0.05, 0.03, 0.05]}
        />
      ))}
      <Cube position={[-0.2, 0.25, -0.27]} color={SCREEN} size={[0.3, 0.02, 0.01]} />
      <Cube position={[-0.1, 0.2, -0.27]} color={SCREEN} size={[0.4, 0.02, 0.01]} />
      <Cube position={[-0.15, 0.15, -0.27]} color={SCREEN} size={[0.25, 0.02, 0.01]} />
    </group>
  );
}

function FloatingSymbol({ position, index }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.5 + index) * 0.25;
    ref.current.rotation.y = t * 0.2 + index;
    ref.current.rotation.x = Math.sin(t * 0.3 + index) * 0.2;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.09, 0.09, 0.09]} />
      <meshLambertMaterial color={SCREEN} emissive={SCREEN} emissiveIntensity={0.35} />
    </mesh>
  );
}

const SYMBOL_POSITIONS = [
  [2, 1, 0],
  [-2, 1, 0],
  [1.5, 2, -1],
  [-1.5, 2, -1],
  [0, 2.5, 1],
  [2, 0.5, 1],
  [-2, 0.5, 1],
  [1, -1, -1],
];

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color={SCREEN} />
      <pointLight position={[0, 3, 2]} intensity={0.4} color={FUR} />

      <VoxelCat position={[0, 0.5, 0]} />
      <VoxelLaptop position={[0, -0.1, 0.8]} />
      {SYMBOL_POSITIONS.map((pos, i) => (
        <FloatingSymbol key={i} position={pos} index={i} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 6}
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
        camera={{ position: [3, 2, 4], fov: 45, near: 0.1, far: 1000 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </SceneErrorBoundary>
  );
}

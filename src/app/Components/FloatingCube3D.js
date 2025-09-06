"use client"
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Voxel Cat built from individual cubes
function VoxelCat({ position = [0, 0, 0] }) {
  const catRef = useRef()
  
  useFrame((state) => {
    if (catRef.current) {
      // Gentle floating animation
      catRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
      // Subtle rotation
      catRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  // Voxel cube component
  const VoxelCube = ({ position, color = "#ff8c42", size = 0.2 }) => (
    <mesh position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshLambertMaterial color={color} />
    </mesh>
  )

  return (
    <group ref={catRef} position={position}>
      {/* Cat Body - Main torso */}
      <VoxelCube position={[0, 0, 0]} color="#ff8c42" size={0.4} />
      <VoxelCube position={[0, 0, -0.4]} color="#ff8c42" size={0.4} />
      
      {/* Cat Head */}
      <VoxelCube position={[0, 0.4, 0.2]} color="#ff8c42" size={0.35} />
      
      {/* Cat Ears */}
      <VoxelCube position={[-0.15, 0.65, 0.15]} color="#ff8c42" size={0.15} />
      <VoxelCube position={[0.15, 0.65, 0.15]} color="#ff8c42" size={0.15} />
      
      {/* Inner ears */}
      <VoxelCube position={[-0.15, 0.65, 0.15]} color="#ffb366" size={0.08} />
      <VoxelCube position={[0.15, 0.65, 0.15]} color="#ffb366" size={0.08} />
      
      {/* Eyes */}
      <VoxelCube position={[-0.1, 0.45, 0.35]} color="#000000" size={0.08} />
      <VoxelCube position={[0.1, 0.45, 0.35]} color="#000000" size={0.08} />
      
      {/* Nose */}
      <VoxelCube position={[0, 0.35, 0.38]} color="#ff6b9d" size={0.05} />
      
      {/* Legs */}
      <VoxelCube position={[-0.15, -0.3, 0.15]} color="#ff8c42" size={0.15} />
      <VoxelCube position={[0.15, -0.3, 0.15]} color="#ff8c42" size={0.15} />
      <VoxelCube position={[-0.15, -0.3, -0.25]} color="#ff8c42" size={0.15} />
      <VoxelCube position={[0.15, -0.3, -0.25]} color="#ff8c42" size={0.15} />
      
      {/* Paws */}
      <VoxelCube position={[-0.15, -0.45, 0.15]} color="#ffb366" size={0.12} />
      <VoxelCube position={[0.15, -0.45, 0.15]} color="#ffb366" size={0.12} />
      <VoxelCube position={[-0.15, -0.45, -0.25]} color="#ffb366" size={0.12} />
      <VoxelCube position={[0.15, -0.45, -0.25]} color="#ffb366" size={0.12} />
      
      {/* Tail */}
      <VoxelCube position={[0, 0.1, -0.7]} color="#ff8c42" size={0.15} />
      <VoxelCube position={[0, 0.25, -0.9]} color="#ff8c42" size={0.12} />
      <VoxelCube position={[0, 0.4, -1.0]} color="#ff8c42" size={0.1} />
      
      {/* Chest/belly detail */}
      <VoxelCube position={[0, -0.1, 0.1]} color="#ffb366" size={0.25} />
      
      {/* Whiskers (very small cubes) */}
      <VoxelCube position={[-0.25, 0.35, 0.3]} color="#ffffff" size={0.02} />
      <VoxelCube position={[0.25, 0.35, 0.3]} color="#ffffff" size={0.02} />
      <VoxelCube position={[-0.3, 0.4, 0.25]} color="#ffffff" size={0.02} />
      <VoxelCube position={[0.3, 0.4, 0.25]} color="#ffffff" size={0.02} />
    </group>
  )
}

// Animated typing paws for the voxel cat
function TypingPaws({ position }) {
  const leftPawRef = useRef()
  const rightPawRef = useRef()
  
  useFrame((state) => {
    if (leftPawRef.current && rightPawRef.current) {
      // Alternating typing motion
      leftPawRef.current.position.y = position[1] + Math.max(0, Math.sin(state.clock.elapsedTime * 4) * 0.05)
      rightPawRef.current.position.y = position[1] + Math.max(0, Math.sin(state.clock.elapsedTime * 4 + Math.PI) * 0.05)
    }
  })

  const VoxelCube = ({ position, color = "#ff8c42", size = 0.1 }) => (
    <mesh position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshLambertMaterial color={color} />
    </mesh>
  )

  return (
    <group>
      {/* Extended paws for typing */}
      <group ref={leftPawRef}>
        <VoxelCube position={[position[0] - 0.3, position[1], position[2]]} color="#ff8c42" size={0.12} />
        <VoxelCube position={[position[0] - 0.35, position[1] - 0.05, position[2] + 0.05]} color="#ffb366" size={0.08} />
      </group>
      <group ref={rightPawRef}>
        <VoxelCube position={[position[0] + 0.3, position[1], position[2]]} color="#ff8c42" size={0.12} />
        <VoxelCube position={[position[0] + 0.35, position[1] - 0.05, position[2] + 0.05]} color="#ffb366" size={0.08} />
      </group>
    </group>
  )
}

// Voxel-style laptop
function VoxelLaptop({ position }) {
  const screenRef = useRef()
  
  useFrame((state) => {
    if (screenRef.current) {
      // Flickering screen effect
      screenRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 6) * 0.2
    }
  })

  const VoxelCube = ({ position, color, size, emissive = false }) => (
    <mesh position={position}>
      <boxGeometry args={[size[0], size[1], size[2]]} />
      <meshLambertMaterial 
        color={color} 
        emissive={emissive ? "#00ff41" : "#000000"}
        emissiveIntensity={emissive ? 0.3 : 0}
      />
    </mesh>
  )

  return (
    <group>
      {/* Laptop base */}
      <VoxelCube position={[position[0], position[1] - 0.15, position[2]]} color="#2d3748" size={[1.0, 0.1, 0.7]} />
      
      {/* Laptop screen */}
      <mesh 
        ref={screenRef}
        position={[position[0], position[1] + 0.2, position[2] - 0.3]} 
        rotation={[-0.2, 0, 0]}
      >
        <boxGeometry args={[0.9, 0.6, 0.05]} />
        <meshLambertMaterial color="#1a202c" emissive="#00ff41" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Keyboard keys - voxel style */}
      {Array.from({ length: 12 }, (_, i) => (
        <VoxelCube
          key={i}
          position={[
            position[0] - 0.35 + (i * 0.07),
            position[1] - 0.08,
            position[2] + 0.15
          ]}
          color="#4a5568"
          size={[0.05, 0.03, 0.05]}
        />
      ))}
      
      {/* Screen details - code lines */}
      <VoxelCube position={[position[0] - 0.2, position[1] + 0.25, position[2] - 0.27]} color="#00ff41" size={[0.3, 0.02, 0.01]} />
      <VoxelCube position={[position[0] - 0.1, position[1] + 0.2, position[2] - 0.27]} color="#00ff41" size={[0.4, 0.02, 0.01]} />
      <VoxelCube position={[position[0] - 0.15, position[1] + 0.15, position[2] - 0.27]} color="#00ff41" size={[0.25, 0.02, 0.01]} />
    </group>
  )
}

// Floating voxel code symbols
function VoxelCodeSymbols() {
  const symbols = [
    { text: '{', pos: [2, 1, 0] },
    { text: '}', pos: [-2, 1, 0] },
    { text: '<', pos: [1.5, 2, -1] },
    { text: '>', pos: [-1.5, 2, -1] },
    { text: '++', pos: [0, 2.5, 1] },
    { text: 'fn', pos: [2, 0.5, 1] },
    { text: 'if', pos: [-2, 0.5, 1] },
    { text: '/*', pos: [1, -1, -1] }
  ]
  
  return (
    <>
      {symbols.map((symbol, i) => (
        <VoxelFloatingSymbol key={i} symbol={symbol.text} position={symbol.pos} index={i} />
      ))}
    </>
  )
}

function VoxelFloatingSymbol({ symbol, position, index }) {
  const symbolRef = useRef()
  
  useFrame((state) => {
    if (symbolRef.current) {
      const time = state.clock.elapsedTime
      symbolRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.3
      symbolRef.current.rotation.y = time * 0.2 + index
      symbolRef.current.rotation.x = Math.sin(time * 0.3 + index) * 0.2
    }
  })

  // Create voxel text using small cubes
  const createVoxelText = (text) => {
    const cubes = []
    const chars = text.split('')
    
    chars.forEach((char, charIndex) => {
      // Simple voxel representation of characters
      const charCubes = getCharacterVoxels(char, charIndex * 0.3)
      cubes.push(...charCubes)
    })
    
    return cubes
  }

  const getCharacterVoxels = (char, offsetX) => {
    const cubes = []
    const cubeSize = 0.05
    const color = "#00ff41"
    
    // Simple voxel patterns for different characters
    switch (char) {
      case '{':
        cubes.push(<VoxelTextCube key={`${char}-0`} position={[offsetX, 0.1, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-1`} position={[offsetX, 0, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-2`} position={[offsetX, -0.1, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-3`} position={[offsetX + 0.05, 0.05, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-4`} position={[offsetX + 0.05, -0.05, 0]} color={color} size={cubeSize} />)
        break
      case '}':
        cubes.push(<VoxelTextCube key={`${char}-0`} position={[offsetX, 0.1, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-1`} position={[offsetX, 0, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-2`} position={[offsetX, -0.1, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-3`} position={[offsetX - 0.05, 0.05, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-4`} position={[offsetX - 0.05, -0.05, 0]} color={color} size={cubeSize} />)
        break
      case '<':
        cubes.push(<VoxelTextCube key={`${char}-0`} position={[offsetX, 0, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-1`} position={[offsetX + 0.05, 0.05, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-2`} position={[offsetX + 0.05, -0.05, 0]} color={color} size={cubeSize} />)
        break
      case '>':
        cubes.push(<VoxelTextCube key={`${char}-0`} position={[offsetX, 0, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-1`} position={[offsetX - 0.05, 0.05, 0]} color={color} size={cubeSize} />)
        cubes.push(<VoxelTextCube key={`${char}-2`} position={[offsetX - 0.05, -0.05, 0]} color={color} size={cubeSize} />)
        break
      default:
        // For text like 'fn', 'if', '++', '/*' - create simple block patterns
        for (let i = 0; i < char.length; i++) {
          cubes.push(<VoxelTextCube key={`${char}-${i}`} position={[offsetX + i * 0.06, 0, 0]} color={color} size={cubeSize} />)
        }
    }
    
    return cubes
  }

  const VoxelTextCube = ({ position, color, size }) => (
    <mesh position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshLambertMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )

  return (
    <group ref={symbolRef} position={position}>
      {createVoxelText(symbol)}
    </group>
  )
}

// Voxel "Coding Cat" text
function VoxelCodingText() {
  const textRef = useRef()
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      textRef.current.position.y = -2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  const VoxelTextCube = ({ position, color = "#ff8c42" }) => (
    <mesh position={position}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshLambertMaterial color={color} />
    </mesh>
  )

}

// Main 3D Scene component
function Scene3D() {
  return (
    <>
      {/* Lighting optimized for voxel style */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#00ff41" />
      <pointLight position={[0, 3, 2]} intensity={0.4} color="#ff8c42" />
      
      {/* Voxel Coding Cat Scene */}
      <VoxelCat position={[0, 0.5, 0]} />
      <TypingPaws position={[0, 0.3, 0.6]} />
      <VoxelLaptop position={[0, -0.1, 0.8]} />
      
      {/* Floating voxel code symbols */}
      <VoxelCodeSymbols />
      
      {/* Voxel Text */}
      <VoxelCodingText />
      
      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 6}
        maxDistance={6}
        minDistance={2}
      />
    </>
  )
}

// Error Boundary Component
class ThreeJSErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('3D Animation Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <p className="text-gray-600">3D Animation Loading...</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Main Component Export - Voxel Cat similar to craftzdog's voxel dog
export default function FloatingCube3D() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for voxel cat
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThreeJSErrorBoundary>
      <div className="w-full h-64 rounded-xl overflow-hidden  bg-transparent relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent">
            <div className="text-center">
              <div className="text-2xl mb-2 animate-bounce">🐱</div>
              <p className="text-orange-600 text-sm">Loading Voxel Cat...</p>
            </div>
          </div>
        )}
        <Canvas
          camera={{ 
            position: [3, 2, 4], 
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          style={{ 
            width: '100%', 
            height: '100%',
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out'
          }}
          gl={{ 
            alpha: true, 
            antialias: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
        >
          <Scene3D />
        </Canvas>
      </div>
    </ThreeJSErrorBoundary>
  )
}

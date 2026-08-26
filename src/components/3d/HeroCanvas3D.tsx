import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Interactive Node 1: Desktop (Octahedron - Sharp Metallic Cyber)
function DesktopNode(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh
        {...props}
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.25 : 1}
      >
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color={hovered ? '#06b6d4' : '#38bdf8'}
          metalness={0.8}
          roughness={0.1}
          wireframe={hovered}
        />
      </mesh>
    </Float>
  );
}

// Interactive Node 2: Mobile (Glowing Torus - Fluid Synergy)
function MobileNode(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * -0.5;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        {...props}
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <torusGeometry args={[1, 0.35, 32, 64]} />
        <meshStandardMaterial
          color={hovered ? '#c084fc' : '#8b5cf6'}
          metalness={0.6}
          roughness={0.2}
          emissive={hovered ? '#8b5cf6' : '#000000'}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Interactive Node 3: Web (Distorted Sphere - Organic Fluid 3D)
function WebNode(props: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.8}>
      <Sphere
        {...props}
        args={[1.1, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <MeshDistortMaterial
          color={hovered ? '#818cf8' : '#6366f1'}
          attach="material"
          distort={0.45}
          speed={3}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

// Particle Stars Effect
function ParticleField() {
  const count = 300;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a5b4fc"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export const HeroCanvas3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[450px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#8b5cf6" />
        
        {/* Core ADI Nodes */}
        <DesktopNode position={[-2.4, 0.8, 0]} />
        <MobileNode position={[2.2, 1.2, -0.5]} />
        <WebNode position={[0, -1, 0.5]} />
        
        <ParticleField />
      </Canvas>

      {/* Floating 3D Control Tips Badge */}
      <div className="absolute bottom-4 right-4 text-[12px] text-slate-400 glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>حرك الماوس فوق الأشكال ثلاثية الأبعاد للتفاعل (WebGL 3D Active)</span>
      </div>
    </div>
  );
};

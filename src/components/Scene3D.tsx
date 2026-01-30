import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Torus, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape, speed = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  shape: 'sphere' | 'box' | 'torus';
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
        {shape === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
        {shape === 'torus' && <torusGeometry args={[1, 0.4, 16, 32]} />}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const AnimatedTorus = () => {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={torusRef} position={[0, 0, 0]} scale={2.5}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <MeshWobbleMaterial
        color="#a855f7"
        attach="material"
        factor={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i * 3] = 0.66;
      colors[i * 3 + 1] = 0.33;
      colors[i * 3 + 2] = 0.97;
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0;
      colors[i * 3 + 1] = 0.8;
      colors[i * 3 + 2] = 0.8;
    } else {
      colors[i * 3] = 0.93;
      colors[i * 3 + 1] = 0.33;
      colors[i * 3 + 2] = 0.6;
    }
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#00cccc" intensity={0.5} />
          <pointLight position={[10, -10, 5]} color="#a855f7" intensity={0.5} />
          
          <AnimatedTorus />
          <Particles />
          
          <FloatingShape position={[-4, 2, -2]} color="#00cccc" shape="sphere" speed={0.8} />
          <FloatingShape position={[4, -2, -3]} color="#ec4899" shape="box" speed={1.2} />
          <FloatingShape position={[-3, -2, -1]} color="#facc15" shape="torus" speed={0.6} />
          <FloatingShape position={[3, 2.5, -2]} color="#22c55e" shape="sphere" speed={1} />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;

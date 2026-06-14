import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

// Animated wavy background
const WavyBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial
        color="#1a0b2e"
        distort={0.4}
        speed={2}
        roughness={0.8}
      />
    </mesh>
  );
};

// Purple wavy lines
const WavyLines = () => {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group1.current) {
      group1.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
    if (group2.current) {
      group2.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <>
      <group ref={group1} position={[8, 0, -5]}>
        <mesh>
          <torusGeometry args={[3, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>
      <group ref={group2} position={[-8, 0, -5]}>
        <mesh>
          <torusGeometry args={[3, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>
    </>
  );
};

// 3D Desk Setup
const DeskSetup = () => {
  const monitorRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (monitorRef.current) {
      monitorRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Desk */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[6, 0.2, 3]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Monitor */}
      <group ref={monitorRef} position={[0, 1.5, -0.5]}>
        {/* Screen */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial
            color="#0a0a1f"
            emissive="#a855f7"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Monitor border */}
        <mesh position={[0, 0, -0.06]}>
          <boxGeometry args={[3.2, 2.2, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>

      {/* Keyboard */}
      <mesh position={[0, 0.3, 1]}>
        <boxGeometry args={[1.5, 0.1, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* RGB PC Case (right side) */}
      <group position={[3.5, 1, -0.5]}>
        <mesh>
          <boxGeometry args={[0.5, 2, 1]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* RGB Lights */}
        <pointLight position={[0, 0.5, 0.6]} color="#ff00ff" intensity={2} distance={3} />
        <pointLight position={[0, -0.5, 0.6]} color="#00ffff" intensity={2} distance={3} />
      </group>
    </group>
  );
};

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
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }} style={{ background: 'linear-gradient(180deg, #0a0a1f 0%, #1a0b2e 50%, #0a0a1f 100%)' }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[0, 5, 0]} color="#a855f7" intensity={1} />
          <pointLight position={[-5, 2, 2]} color="#ff00ff" intensity={1.5} />
          <pointLight position={[5, 2, 2]} color="#00ffff" intensity={1.5} />
          
          {/* Wavy background */}
          <WavyBackground />
          
          {/* Wavy purple lines */}
          <WavyLines />
          
          {/* Main desk setup */}
          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <DeskSetup />
          </Float>
          
          {/* Particles for atmosphere */}
          <Particles />
          
          {/* Camera controls */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;

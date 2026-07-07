import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const ACCENT = new THREE.Color("#478CFF");
const ACCENT_SOFT = new THREE.Color("#8FB5FF");
const WHITE = new THREE.Color("#FFFFFF");

/** Soft round sprite so points render as glowing dots, not squares. */
function makeCircleTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.6)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/** Deep-space particle field with a subtle accent tint. */
function ParticleField({ count = 1400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const sprite = useMemo(makeCircleTexture, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      // Distribute in a hollow sphere so particles wrap the camera
      const radius = 6 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const t = Math.random();
      color.copy(t < 0.75 ? WHITE : t < 0.92 ? ACCENT_SOFT : ACCENT);
      color.multiplyScalar(0.35 + Math.random() * 0.65);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.015;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={sprite}
        alphaMap={sprite}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Slowly breathing wireframe sphere — the scene's quiet centerpiece. */
function WireSphere() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.06;
    group.current.rotation.z = t * 0.015;
    const breathe = 1 + Math.sin(t * 0.4) * 0.02;
    group.current.scale.setScalar(breathe);
  });

  return (
    <group ref={group} position={[0, 0, -2]}>
      <mesh>
        <icosahedronGeometry args={[3.2, 2]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.07} />
      </mesh>
      <mesh rotation={[0.4, 0.2, 0]}>
        <icosahedronGeometry args={[4.4, 1]} />
        <meshBasicMaterial color={ACCENT_SOFT} wireframe transparent opacity={0.035} />
      </mesh>
    </group>
  );
}

/** Eases the camera toward the pointer for gentle parallax. */
function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.35 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, -2);
  });
  return null;
}

/**
 * Hero background. Falls back to a static gradient for reduced-motion users
 * (no WebGL cost, no movement).
 */
export function HeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className="absolute inset-0 bg-halo" aria-hidden />;
  }

  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.75]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ParticleField />
          <WireSphere />
          <CameraRig />
        </Suspense>
      </Canvas>
      {/* Readability vignette over the canvas */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,hsl(0_0%_5%)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

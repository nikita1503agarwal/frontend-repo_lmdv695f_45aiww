import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

function RotatingGlobe() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <group ref={ref}>
      <Sphere args={[1.4, 64, 64]}>
        <meshStandardMaterial color="#1F3A93" roughness={0.3} metalness={0.4} />
      </Sphere>
      <Sphere args={[1.405, 64, 64]}>
        <meshStandardMaterial color="#3CF2F2" transparent opacity={0.15} emissive="#3CF2F2" emissiveIntensity={0.6} />
      </Sphere>
      {/* Simple arcs representing routes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Line
          key={i}
          points={[
            [Math.sin(i) * 1.2, Math.cos(i * 1.4) * 0.8, Math.cos(i) * 1.2],
            [0, Math.sin(i * 1.7) * 1.3, 0],
            [Math.cos(i) * -1.2, Math.sin(i * 1.2) * -0.8, Math.sin(i) * -1.2],
          ]}
          color="#3CF2F2"
          lineWidth={1.5}
          dashed
          dashSize={0.2}
          gapSize={0.1}
        />
      ))}
    </group>
  );
}

function MovingDots() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.children.forEach((m, i) => {
      m.position.x = Math.sin(t + i) * 2.2;
      m.position.y = Math.cos(t * 1.3 + i) * 1.2;
      m.position.z = Math.cos(t + i) * 1.8;
    });
  });
  return (
    <group ref={ref}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#52FF8F" emissive="#52FF8F" emissiveIntensity={1.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[520px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#3CF2F2" />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
            <RotatingGlobe />
            <MovingDots />
          </Float>
          <Stars radius={50} depth={40} count={1200} factor={4} saturation={0} fade speed={1} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/0 via-[#0A1A2F]/20 to-[#0A1A2F]" />
    </div>
  );
}

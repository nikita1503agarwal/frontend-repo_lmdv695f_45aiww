import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Truck() {
  return (
    <group>
      <mesh position={[0, -0.08, 0]}>
        <boxGeometry args={[1.2, 0.4, 0.5]} />
        <meshStandardMaterial color="#1F3A93" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0.2, 0.2, 0]}>
        <boxGeometry args={[0.7, 0.4, 0.5]} />
        <meshStandardMaterial color="#3CF2F2" emissive="#3CF2F2" emissiveIntensity={0.2} />
      </mesh>
      {/* wheels */}
      {[-0.45, 0.45].map((x, i) => (
        <mesh key={i} position={[x, -0.35, 0.22]}>
          <cylinderGeometry args={[0.12, 0.12, 0.2, 24]} />
          <meshStandardMaterial color="#E2E8F0" />
          <group rotation={[0, 0, Math.PI / 2]} />
        </mesh>
      ))}
      {[-0.45, 0.45].map((x, i) => (
        <mesh key={`w2-${i}`} position={[x, -0.35, -0.22]}>
          <cylinderGeometry args={[0.12, 0.12, 0.2, 24]} />
          <meshStandardMaterial color="#E2E8F0" />
          <group rotation={[0, 0, Math.PI / 2]} />
        </mesh>
      ))}
    </group>
  );
}

function Warehouse() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1.2, 0.5, 0.9]} />
        <meshStandardMaterial color="#1F3A93" metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[1.2, 0.3, 0.9]} />
        <meshStandardMaterial color="#3CF2F2" emissive="#3CF2F2" emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[0, 0.2, 0.5]}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
        <meshStandardMaterial color="#52FF8F" emissive="#52FF8F" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function Fleet() {
  return (
    <group>
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.6, 0.25, 0.3]} />
        <meshStandardMaterial color="#1F3A93" />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.6, 0.25, 0.3]} />
        <meshStandardMaterial color="#3CF2F2" />
      </mesh>
      <mesh position={[0.5, -0.05, 0]}>
        <boxGeometry args={[0.6, 0.25, 0.3]} />
        <meshStandardMaterial color="#1F3A93" />
      </mesh>
    </group>
  );
}

export default function Card3DIcon({ type = "truck" }) {
  const Comp = type === "truck" ? Truck : type === "warehouse" ? Warehouse : Fleet;
  return (
    <div className="h-20 w-20">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#3CF2F2" />
        <Float speed={2} rotationIntensity={1} floatIntensity={1.6}>
          <Comp />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}


import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Shapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Dodecahedron position={[0, 0, 0]} scale={1.5} />
      <Torus position={[2, 1, -2]} scale={0.7} />
      <Sphere position={[-2.5, -0.5, -1]} scale={0.8} />
      <Cylinder position={[-0.5, -1.5, 2]} scale={0.8} />
    </group>
  );
}

function Dodecahedron({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#9b87f5" wireframe roughness={0.1} metalness={0.8} />
    </mesh>
  );
}

function Torus({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 16, 50]} />
      <meshStandardMaterial color="#D6BCFA" wireframe roughness={0.1} metalness={0.5} />
    </mesh>
  );
}

function Sphere({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#8B5CF6" roughness={0.1} metalness={0.3} />
    </mesh>
  );
}

function Cylinder({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <cylinderGeometry args={[0.5, 0.5, 2, 24]} />
      <meshStandardMaterial color="#7E69AB" roughness={0.1} metalness={0.2} />
    </mesh>
  );
}

function ThreeBackground() {
  console.log("ThreeBackground rendering");
  
  return (
    <Canvas 
      dpr={[1, 2]}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
      onCreated={(state) => {
        console.log("Canvas created successfully", state);
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        <Shapes />
      </Suspense>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.15}
      />
    </Canvas>
  );
}

export default function ThreeScene() {
  console.log("ThreeScene rendering");
  const [canRender, setCanRender] = useState(false);
  
  useEffect(() => {
    // Delay rendering to ensure React is fully initialized
    const timer = setTimeout(() => {
      setCanRender(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!canRender) {
    return <div className="absolute inset-0 -z-10" />;
  }
  
  return (
    <div className="absolute inset-0 -z-10">
      <ThreeBackground />
    </div>
  );
}

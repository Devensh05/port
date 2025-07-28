import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveSphereProps {
  position: [number, number, number];
  color: string;
}

const InteractiveSphere: React.FC<InteractiveSphereProps> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </mesh>
  );
};

const WobblySphere: React.FC<InteractiveSphereProps> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <Sphere args={[0.8, 64, 64]}>
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.6}
          speed={1.5}
          roughness={0.1}
          metalness={0.5}
        />
      </Sphere>
    </mesh>
  );
};

const InteractiveGeometry: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#764ba2" />
        
        <InteractiveSphere position={[-2, 0, 0]} color="#667eea" />
        <WobblySphere position={[2, 0, 0]} color="#f093fb" />
      </Canvas>
    </div>
  );
};

export default InteractiveGeometry;
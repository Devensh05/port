import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  shape: 'sphere' | 'box' | 'torus' | 'octahedron' | 'icosahedron';
  color: string;
  speed: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, shape, color, speed }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.4;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.8 + position[1]) * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.6 + position[2]) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5 + position[1]) * 0.1;
    }
  });

  const material = (
    <meshStandardMaterial
      color={color}
      transparent
      opacity={0.4}
      roughness={0.1}
      metalness={0.8}
      emissive={color}
      emissiveIntensity={0.1}
    />
  );

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      {shape === 'sphere' && <Sphere args={[0.4, 32, 32]}>{material}</Sphere>}
      {shape === 'box' && <Box args={[0.5, 0.5, 0.5]}>{material}</Box>}
      {shape === 'torus' && <Torus args={[0.4, 0.15, 16, 100]}>{material}</Torus>}
      {shape === 'octahedron' && <Octahedron args={[0.4]}>{material}</Octahedron>}
      {shape === 'icosahedron' && <Icosahedron args={[0.4]}>{material}</Icosahedron>}
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  const shapes: Array<{
    position: [number, number, number];
    shape: 'sphere' | 'box' | 'torus' | 'octahedron' | 'icosahedron';
    color: string;
    speed: number;
  }> = [
    { position: [-3, 2, -2], shape: 'sphere', color: '#667eea', speed: 0.8 },
    { position: [3, -1, -3], shape: 'box', color: '#764ba2', speed: 1.2 },
    { position: [0, 3, -2.5], shape: 'torus', color: '#f093fb', speed: 0.6 },
    { position: [-2, -2, -1.5], shape: 'octahedron', color: '#f5576c', speed: 1.0 },
    { position: [2.5, 1.5, -3], shape: 'icosahedron', color: '#4facfe', speed: 0.9 },
    { position: [-1, 0, -1], shape: 'sphere', color: '#43e97b', speed: 1.1 },
    { position: [1, -3, -2], shape: 'box', color: '#38f9d7', speed: 0.7 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 75 }} 
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#764ba2" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingElements;
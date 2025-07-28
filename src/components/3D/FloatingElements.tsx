import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape: React.FC<{ position: [number, number, number]; shape: 'sphere' | 'box' | 'torus' }> = ({ position, shape }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + position[1]) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  const material = (
    <meshStandardMaterial
      color="#667eea"
      transparent
      opacity={0.3}
      roughness={0.1}
      metalness={0.8}
    />
  );

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'sphere' && <Sphere args={[0.3, 32, 32]}>{material}</Sphere>}
      {shape === 'box' && <Box args={[0.4, 0.4, 0.4]}>{material}</Box>}
      {shape === 'torus' && <Torus args={[0.3, 0.1, 16, 100]}>{material}</Torus>}
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  const shapes: Array<{ position: [number, number, number]; shape: 'sphere' | 'box' | 'torus' }> = [
    { position: [-2, 1, -1], shape: 'sphere' },
    { position: [2, -1, -2], shape: 'box' },
    { position: [0, 2, -1.5], shape: 'torus' },
    { position: [-1.5, -2, -1], shape: 'sphere' },
    { position: [1.5, 1.5, -2], shape: 'box' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingElements;
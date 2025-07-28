import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const MorphingShape: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#764ba2" />
        
        <mesh ref={meshRef}>
          <Sphere args={[1.2, 64, 64]}>
            <MeshDistortMaterial
              color="#667eea"
              attach="material"
              distort={0.6}
              speed={3}
              roughness={0.1}
              metalness={0.8}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </mesh>
      </Canvas>
    </div>
  );
};

export default MorphingShape;
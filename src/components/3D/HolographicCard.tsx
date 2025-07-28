import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

const HolographicPlane: React.FC<{ mousePosition: { x: number; y: number } }> = ({ mousePosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = (mousePosition.y - 0.5) * 0.3;
      meshRef.current.rotation.y = (mousePosition.x - 0.5) * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Plane args={[4, 3, 32, 32]}>
        <MeshDistortMaterial
          color="#667eea"
          transparent
          opacity={0.1}
          distort={0.2}
          speed={2}
          roughness={0}
          metalness={1}
        />
      </Plane>
    </mesh>
  );
};

const HolographicCard: React.FC<HolographicCardProps> = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      style={{
        background: `linear-gradient(
          ${mousePosition.x * 360}deg,
          rgba(102, 126, 234, 0.1) 0%,
          rgba(118, 75, 162, 0.1) 50%,
          rgba(240, 147, 251, 0.1) 100%
        )`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <HolographicPlane mousePosition={mousePosition} />
        </Canvas>
      </div>
      
      <div className="relative z-10 backdrop-blur-sm">
        {children}
      </div>
      
      {/* Holographic border effect */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `linear-gradient(
            ${mousePosition.x * 360}deg,
            transparent 0%,
            rgba(102, 126, 234, 0.3) 50%,
            transparent 100%
          )`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          padding: '2px',
        }}
      />
    </motion.div>
  );
};

export default HolographicCard;
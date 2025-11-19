
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

const TechNode = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Icosahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
      {/* @ts-ignore */}
      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.2}
        wireframe
      />
    </Icosahedron>
  );
};

const ConnectionLine = ({ start, end }: { start: [number, number, number], end: [number, number, number] }) => {
    // Simple line representation could be added here, 
    // but for performance/simplicity we stick to floating nodes for the abstract feel
    return null; 
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Central Node */}
          <TechNode position={[0, 0, 0]} color="#C5A059" scale={1.5} />
          
          {/* Satellite Nodes */}
          <TechNode position={[-3, 2, -2]} color="#2d3748" scale={0.8} />
          <TechNode position={[3, -2, -2]} color="#2d3748" scale={0.8} />
          <TechNode position={[4, 2, -4]} color="#C5A059" scale={0.5} />
          <TechNode position={[-4, -2, -1]} color="#C5A059" scale={0.6} />
        </Float>
        
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

// Retaining this but unused, or can be used for another section background
export const QuantumComputerScene: React.FC = () => {
  return null;
}

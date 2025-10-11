import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ParticlesBackground() {
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={1000}
          array={new Float32Array(3000)}
          itemSize={3}
          normalized={true}
        />
      </bufferGeometry>
  <pointsMaterial size={0.015} color="#5F6FFF" transparent opacity={0.6} />
    </points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
  <meshPhongMaterial color="#6B3DD6" wireframe />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingGeometry />
        <ParticlesBackground />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
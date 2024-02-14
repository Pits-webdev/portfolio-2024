"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";

export const Three = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <Scene />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate
        />
      </Canvas>
    </div>
  );
};

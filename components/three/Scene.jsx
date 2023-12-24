"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.07}
          reverseHorizontalOrbit={true}
          reverseVerticalOrbit={true}
        />
        <directionalLight position={[1, 0, 2]} color='green' intensity={1} />
        <ambientLight position={[1, 0, 0]} />
        <Suspense>
          <Stars
            radius={100}
            depth={100}
            count={1000}
            factor={0}
            saturation={0}
            fade
            speed={0}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;

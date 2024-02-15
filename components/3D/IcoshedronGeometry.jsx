"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

//Shader glsl
import fragment from "@/shaders/fragment.glsl";
import vertex from "@/shaders/vertex.glsl";

const IcoshedronGeometry = () => {
  const { viewport, mouse } = useThree();

  const ref = useRef();

  useFrame((state, delta) => {
    const { clock } = state;

    ref.current.uniforms.uTime = { value: clock.elapsedTime };
    ref.current.uniforms.uMouse = { value: mouse };
    /*  console.log(viewport, mouse); */
  });

  let uniforms = useMemo(() => {
    return {
      uTime: { value: 0.0 },
      uResolution: {
        value: new THREE.Vector2(viewport.width, viewport.height),
      },
      uMouse: { value: new THREE.Vector2(0.0) },
    };
  });

  return (
    <mesh>
      <icosahedronGeometry args={[1, 10]} />

      <shaderMaterial
        ref={ref}
        vertexShader={vertex}
        fragmentShader={fragment}
        wireframe={false}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default IcoshedronGeometry;

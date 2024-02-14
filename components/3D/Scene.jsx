import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { MeshStandardMaterial } from "three";
import * as THREE from "three";

//Shader glsl
import fragment from "@/shaders/fragment.glsl";
import vertex from "@/shaders/vertex.glsl";

//particle Geomerry
const BasicParticles = (props) => {
  const points = useRef();

  console.log(points);
  const { count, geometry } = props;

  //create Particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (geometry === "würfel") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (geometry === "kugel") {
      const distance = 1;
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, geometry]);

  useFrame((state) => {
    const { clock } = state;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;
      points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      // Add any other attributes here
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      {/* <pointsMaterial color='#5786F5' size={0.015} sizeAttenuation /> */}
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
      />
    </points>
  );
};

// Box Geometry

const BoxGeometry = () => {
  return (
    <mesh>
      <boxGeometry />
      {/*  <meshStandardMaterial color={"green"} /> */}
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
    </mesh>
  );
};

const Scene = () => {
  const boxRef = useRef();

  /*   useFrame((state, delta) => {
    boxRef.current.rotation.x += 0.005 * Math.cos(delta);
    boxRef.current.rotation.y += 2 * Math.sin(delta);
  });
 */

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={1} color={"#ffffff"} />
      {/* <directionalLight
        position={[1.4, 1.5, 1.7]}
        intensity={1.0}
        color={"blue"}
      /> */}
      <spotLight color={"red"} />

      {/* Object */}
      {/* <BasicParticles count={2000} geometry='kugel' /> */}

      <BoxGeometry />
    </>
  );
};

export default Scene;

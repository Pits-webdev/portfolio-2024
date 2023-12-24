import { MeshWobbleMaterial } from "@react-three/drei";
import React from "react";

const Box = () => {
  return (
    <>
      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[5, 5, 5]} />
        <MeshWobbleMaterial factor={5} speed={0.75} />
        {/* <meshStandardMaterial /> */}
      </mesh>
    </>
  );
};

export default Box;

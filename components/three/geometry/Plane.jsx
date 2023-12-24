"use client";

const Plane = () => {
  return (
    <>
      <mesh position={[0, 0, 1]}>
        <planeGeometry args={[1, 1]} />
      </mesh>
    </>
  );
};

export default Plane;

import React from "react";

const ButtonAnimate = ({ children }) => {
  return (
    <button
      className='relative  active flex items-center justify-center bg-[#1a1919] text-white py-4 px-10 rounded-xl
     btn_animation'
    >
      <span className='absolute inset-[1px] rounded-2xl z-[1] bg-[#0f0f11] border border-[#2d2e2e]'></span>
      <p className=' z-[3]'>{children}</p>
    </button>
  );
};

export default ButtonAnimate;

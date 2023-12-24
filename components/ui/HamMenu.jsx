"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const HamMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleHam = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='md:hidden'>
      <button
        className='w-9 h-6 flex flex-col justify-center items-center gap-2'
        onClick={() => handleHam()}
      >
        <motion.span
          animate={{ y: isOpen ? "0px" : "10px", rotate: isOpen ? 0 : 45 }}
          transition={{ duration: 0.2 }}
          className='w-full h-[2px] inline-block bg-white'
        ></motion.span>
        <motion.span
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className='w-full h-[2px] inline-block bg-white'
        ></motion.span>
        <motion.span
          animate={{ y: isOpen ? "0px" : "-10px", rotate: isOpen ? 0 : -45 }}
          transition={{ duration: 0.2 }}
          className='w-full h-[2px] inline-block bg-white'
        ></motion.span>
      </button>
    </div>
  );
};

export default HamMenu;

"use client";

import React from "react";
import { motion } from "framer-motion";

const SplitText = ({ text, Wrapper = "div" }) => {
  const demoVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <Wrapper className='wrapper'>
      <motion.div
        initial='hidden'
        animate='show'
        transition={{ staggerChildren: 0.1 }}
        className='flex gap-x-1'
      >
        {text.split("").map((char, i) => (
          <motion.span
            variants={demoVariants}
            className='inline-block '
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </Wrapper>
  );
};

export default SplitText;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontScroll = () => {
  const hzScrollRef = useRef();

  const { scrollYProgress } = useScroll({ target: hzScrollRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section className='w-full h-full overflow-x-clip'>
      <div className='h-[200vh]' ref={hzScrollRef}>
        <motion.div className='sticky top-0 flex w-[300%]' style={{ x }}>
          {/* item1 */}
          <div className='w-screen bg-lime-500'>
            <div className='h-screen flex items-center justify-center'>
              content 1
            </div>
          </div>

          {/* item2 */}
          <div className='w-screen bg-purple-500'>
            <div className='h-screen flex items-center justify-center'>
              content 2
            </div>
          </div>

          {/* item3 */}
          <div className='w-screen bg-yellow-500'>
            <div className='h-screen flex items-center justify-center'>
              <div>content 3</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontScroll;

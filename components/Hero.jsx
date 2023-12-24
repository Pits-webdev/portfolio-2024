import Scene from "./three/Scene";
import ButtonAnimate from "./ui/ButtonAnimate";

const Hero = () => {
  return (
    <section className='absolute top-0 left-0 w-full h-screen -z-[10]'>
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <Scene />
      </div>

      <div className=' mx-auto w-full h-full grid grid-cols-5 grid-rows-5 z-10'>
        <span
          className='bg-gradient-to-b from-transparent via-neutral-500/50 to-transparent inline-block w-[1px]
         h-full col-start-2 row-start-1 row-end-6'
        ></span>
        <span
          className='bg-gradient-to-b from-transparent via-neutral-500/50 to-transparent inline-block w-[1px]
         h-full col-start-3 row-start-1 row-end-6'
        ></span>
        <span
          className='bg-gradient-to-b from-transparent via-neutral-500/50 to-transparent inline-block w-[1px]
         h-full col-start-4 row-start-1 row-end-6'
        ></span>
        <span
          className='bg-gradient-to-b from-transparent via-neutral-500/50 to-transparent inline-block w-[1px]
         h-full col-start-5 row-start-1 row-end-6'
        ></span>
        <span
          className='bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent inline-block w-full
         h-[1px] col-start-1 col-end-6 row-start-2 '
        ></span>
        <span
          className='bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent inline-block w-full
         h-[1px] col-start-1 col-end-6 row-start-3 '
        ></span>
        <span
          className='bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent inline-block w-full
         h-[1px] col-start-1 col-end-6 row-start-4 '
        ></span>
        <span
          className='bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent inline-block w-full
         h-[1px] col-start-1 col-end-6 row-start-5 '
        ></span>

        <div className='flex items-center justify-center col-start-2 col-end-5 row-start-3'>
          <h1 className='text-accent text-7xl text-center'>
            Full Stack Web<br></br> Deveveloper
          </h1>
        </div>

        <div className='col-start-3 col-end-4 row-start-5 mx-auto flex justify-center items-center'>
          <ButtonAnimate>More info</ButtonAnimate>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className='_container'>
      <div className='text-center'>
        <h2 className='mb-6'>Design meets Developer</h2>
        <h1 className='text-transparent bg-clip-text _gardient_right'>
          Digitale Erlebnisse
        </h1>

        <p className='max-w-[800px] mx-auto text-gray mt-5'>
          Ich erstelle digitale Produkte, die führende globale Marken in die
          Lage versetzen, ihre Botschaften an die digitale Haustür der
          Verbraucher der Welt zu liefern.
        </p>
      </div>

      <div className='flex justify-center gap-8 mt-16'>
        <div className='max-w-[480px] p-8 border-gray border-[1px] rounded-xl'>
          <h3 className='mb-4'>Design</h3>
          <p className='text-gray'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod amet
            sint itaque aliquam similique reprehenderit dolores iure voluptatum
            vel eaque!
          </p>
        </div>
        <div className='max-w-[480px] p-8 border-gray border-[1px] rounded-xl'>
          <h3 className='mb-4'>Design</h3>
          <p className='text-gray'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod amet
            sint itaque aliquam similique reprehenderit dolores iure voluptatum
            vel eaque!
          </p>
        </div>
      </div>

      {/* arrow down */}
      <div className='flex justify-center mt-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width={92}
          height={93.281}
        >
          <defs>
            <linearGradient
              id='c'
              x1={0.5}
              x2={0.5}
              y1={0}
              y2={1}
              gradientUnits='objectBoundingBox'
            >
              <stop offset='25.554%' stopColor='#E1FF00' stopOpacity={0} />
              <stop offset='57.218%' stopColor='#FF0' stopOpacity={0.251} />
              <stop offset='100%' stopColor='#2FFF00' />
            </linearGradient>
            <linearGradient
              id='d'
              x1={0.5}
              x2={0.5}
              y1={0}
              y2={0.993}
              gradientUnits='objectBoundingBox'
            >
              <stop offset='0%' stopColor='#E1FF00' />
              <stop offset='100%' stopColor='#2FFF00' />
            </linearGradient>
            <clipPath id='b'>
              <use xlinkHref='#a' />
            </clipPath>
            <path
              id='a'
              d='M0 46C0 20.595 20.595 0 46 0s46 20.595 46 46-20.595 46-46 46S0 71.405 0 46Z'
            />
          </defs>
          <g clipPath='url(#b)'>
            <use xlinkHref='#a' fill='none' stroke='url(#c)' strokeWidth={2} />
          </g>
          <path
            fill='none'
            stroke='url(#d)'
            strokeWidth={3}
            d='M46.447.219v54.974'
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

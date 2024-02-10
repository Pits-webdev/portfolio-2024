import React from "react";

const Hero = () => {
  return (
    <div className='_container h-[calc(100vh-72px)] flex flex-col items-center justify-center'>
      <div className='text-center'>
        <h2 className='mb-6'>Design meets Developer</h2>
        <h1 className='text-transparent bg-clip-text _gardient_right py-6'>
          Digitale Erlebnisse
        </h1>

        <p className='max-w-[920px] mx-auto text-gray mt-10 '>
          Ich erstelle digitale Produkte, die führende globale Marken in die
          Lage versetzen, ihre Botschaften an die digitale Haustür der
          Verbraucher der Welt zu liefern.
        </p>
      </div>

      <div className='flex justify-center gap-8 mt-16'>
        <div className='max-w-[488px] px-7 py-8 border-gray border-[1px] rounded-xl '>
          <h3 className='mb-4'>Design</h3>
          <p className='text-gray'>
            Das Design ist absolut auf Ihre Marke abgestimmt, um ein stimmiges
            Gesamtbild in perfekter Harmonie zu präsentieren.
          </p>
        </div>
        <div className='max-w-[488px] px-7 py-8 border-gray border-[1px] rounded-xl '>
          <h3 className='mb-4'>Entwicklung</h3>
          <p className='text-gray'>
            Ich arbeite mit den neuesten Webtechnologien um das maximum und
            einen reibungslosen ablauf zu gewährleisten.
          </p>
        </div>
      </div>

      {/* arrow down */}
      <div className='flex justify-center mt-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width={92}
          height={92.5}
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
              y1={-3.538}
              y2={1}
              gradientUnits='objectBoundingBox'
            >
              <stop offset='0%' stopColor='#E1FF00' />
              <stop offset='100%' stopColor='#2FFF00' />
            </linearGradient>
            <linearGradient
              id='e'
              x1={0}
              x2={0}
              y1={0}
              y2={1}
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
          <g fill='none'>
            <path
              stroke='url(#d)'
              d='M24 46.095 11.993 59 0 46'
              transform='translate(34)'
            />
            <path
              stroke='url(#e)'
              d='M12.096 59.01 12 0'
              transform='translate(34)'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

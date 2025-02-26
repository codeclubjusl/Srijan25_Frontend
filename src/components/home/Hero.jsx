import "./hero.css";
import React, { Suspense, lazy, useRef } from 'react'
import { Link } from "react-router-dom";

const LazyMascotAnimation = lazy(() => import("./MascotAnimation"))

function Hero() {

  const container = useRef();
  const mascot = useRef();

  return (
    <div ref={container} className='h-[90vh] w-screen max-w-full grid grid-cols-7 sm:grid-cols-5 relative overflow-x-clip'>
      <div></div>
      <div className='col-span-5 sm:col-span-3 grid grid-cols-2 grid-rows-10 sm:grid-rows-6 border-l border-r border-l-greyBorder border-r-greyBorder'>
        <div className='sm:border-r border-b border-greyBorder flex items-end sm:row-span-1'>
          <img src='/inverted-commas.svg' alt="Inverted Commas" width="auto" height="auto" className='p-1 sm:p-4 border-greyBorder border-t border-r h-1/3 sm:h-3/5' />
        </div>
        <div className='border-greyBorder border-b sm:row-span-1'></div>
        <div className='relative border-greyBorder border-b border-r flex items-end p-6 text-lg text-center sm:text-2xl'>
          <h3 className='absolute top-[50%] -translate-y-[50%] left-[25%] sm:left-[5%] hero-text-1'>Coding</h3>
          <h3 className='absolute top-[50%] -translate-y-[50%] left-[20%] sm:left-[5%] hero-text-2'>Robotics</h3>
          <h3 className='absolute top-[50%] -translate-y-[50%] left-[13%] sm:left-[5%] hero-text-3'>Management</h3>
        </div>
        <div className='relative border-greyBorder border-b flex justify-end items-end p-6 text-lg text-center sm:text-2xl'>
          <h3 className='absolute top-[50%] -translate-y-[50%] right-[5%] hero-text-1'>Cultural Nights</h3>
          <h3 className='absolute top-[50%] -translate-y-[50%] right-[5%] hero-text-2'>Comedy Nights</h3>
          <h3 className='absolute top-[50%] -translate-y-[50%] right-[20%] sm:right-[5%] hero-text-3'>F5 Talks</h3>
        </div>
        <div className='row-span-[0] col-span-[0] sm:row-span-4 sm:col-span-1 border-r-greyBorder sm:border-r flex p-6'>
        </div>
        <div className='row-span-1 col-span-2 sm:row-span-4 sm:col-span-1 flex items-end justify-center sm:justify-end'>
          <Link className='p-3 border-greyBorder border sm:border-r-transparent sm:border-b-transparent text-lg sm:text-2xl z-[103] text-background bg-white' to='/signup'>Register Now</Link>
          {/* <div onClick={notify} className='p-3 border-greyBorder border sm:border-r-transparent sm:border-b-transparent text-lg sm:text-2xl z-[103] text-background bg-white cursor-pointer' >Register Now</div> */}
        </div>
      </div>
      <div></div>
      <div className='absolute hidden lg:flex flex-col items-center z-[90] bottom-0 left-[5%] h-[37.5%]'>
        <img src='/fetsu-presents-srijan-glitch.svg' alt="FETSU Presents Srijan logo with glitch effect" width="auto" height="auto" className='h-2/3' />
        <div className='bg-background border-greyBorder border border-b-transparent py-2 px-12 h-1/3 flex flex-col justify-around'>
          <h1>The Annual Techno-Management Fest of</h1>
          <h2 className='uppercase font-bold text-2xl text-center'>Jadavpur University</h2>
        </div>
      </div>
      <div className='absolute p-3 z-[90] bottom-[47%] sm:bottom-[20%] right-[3%] sm:right-[12%] bg-background border border-greyBorder'>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-3xl'><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue via-red to-red'>20-23</span> MARCH <br className='sm:hidden' /> 2025</h2>
      </div>
      {/*<img src='/mascot.svg' className='absolute z-[100] top-[32%] sm:top-[20%] left-[50%] -translate-x-[50%] h-3/4 mascot-animation'
        onMouseOut={(e) => { e.target.style.animationPlayState = "paused"; }}
        onMouseEnter={(e) => { e.target.style.animationPlayState = "running"; }}
      />*/}
      <div ref={mascot} className='absolute -bottom-8 sm:-bottom-2 left-[50%] -translate-x-[50%] h-3/4 sm:h-full w-full z-[102]'>
        <Suspense fallback={<img src="/srijan-mascot_enhanced.webp" alt="Mascot" className="absolute h-3/5 w-auto bottom-8 left-[50%] -translate-x-[50%]" />}>
          <LazyMascotAnimation />
        </Suspense>
      </div>
    </div>
  )
}

export default Hero

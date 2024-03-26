import React from 'react'
import video1  from '../assets/video1.mp4'
import video2  from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className='flex flex-col lg:mt-20 mt-6 items-center'>
        <h1 className='lg:text-6xl sm:text-4xl text-2xl  text-white text-center tracking-wide'>
           Virtual build tools <span className=' bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent '> 
          {""} 
          for developers</span>
        </h1>
        <p className='mt-10 text-neutral-500 text-lg text-center max-w-4xl '>
            Empower your creativity and bring your VR app ideas to life with our inyuative development tools get started today and emerge into immersiive reality
        </p>
           <div className='flex justify-center items-center my-10'>
           
              <a href='#' className=' bg-gradient-to-r from-orange-500 to-orange-800 tracking-tight rounded-md py-2 px-3'>
                 start for Free
              </a> 
              <a href='#' className='border ml-4 rounded-md py-2 px-3 hover:bg-gradient-to-r from-orange-500 to-orange-800'>
                 Documentation
              </a> 
              </div>
              <div className='flex justify-center mt-10'>
                <video  autoPlay loop muted className='  rounded-lg border border-orange-700 shadow-orange-400 mx-2 my-4   w-1/2 '>
                  <source src={video1} type='video/mp4' /> browser does not support
                </video>
                <video  autoPlay loop muted className='rounded-lg border border-orange-700 shadow-orange-400 mx-2 my-4   w-1/2'>
                  <source src={video2} type='video/mp4' /> browser does not support
                </video>
                

              
           </div>
    </div>
  )
}

export default Hero
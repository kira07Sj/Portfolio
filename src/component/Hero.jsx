import React from 'react'
import bg1 from '../assets/bg1.png'


const Hero = () => {
  return (
    <div className='w-full h-[100dvh] primary_bg   flex  justify-center'>
        
        <div className='h-[100%] w-[790px] flex absolute top-0 right-1 ' >
            <img src={bg1} alt="" className='object-cover'/>
        </div>
        
        
    </div>
  )
}

export default Hero

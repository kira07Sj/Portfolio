import React from 'react'
import  kira_photo from '../assets/kira_photo.png'
const About = () => {
  return (
    <div id='About' className='w-full h-[100dvh] third_bg   flex flex-col  items-center'> 
      <div className='w-full flex items-start'> 
        <h1 className='text-white text-[3rem] font-bold mt-[6rem] ml-[1rem]
         md:ml-[11rem] max-md:text-[2rem]'>About Me</h1>
      </div>

      <div className='w-[80%] h-[600px] flex flex-col md:flex-row items-center justify-between'>
          

          <div className=' bg-white flex flex-col items-start justify-center'>
              <h1>Frontend Developer</h1>
          </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import bg1 from '../assets/bg1.png'
import ReactTypingEffect from 'react-typing-effect';
import FileUrl from '../assets/Kirubel-Dagne-Resume.pdf'
import kira_photo from '../assets/kira_photo.png'

const Hero = () => {
  return (
    <div id='Home' data-nav-id className='w-full h-full  primary_bg   flex  justify-center'>

        <div className='w-[80%] md:h-[500px] flex flex-col justify-center
        items-center z-10 sm:mt-[10rem] mt-[4rem] lg:flex-row mb-[12.5rem] max-md:mb-[5rem]'>
          <div className='w-full h-full flex flex-col items-start '>
              <h1 className='text-white font-semibold ml-[3rem] mt-[3rem]
               text-[2rem] max-md:text-[1.5rem]'>Hello, I'm</h1>
               <h1 className='text-white font-semibold
                text-[4rem] ml-[3rem] max-md:text-[2rem]'>Kirubel Dagne</h1>

              <h1 className='text_primary bg-white p-[15px] font-bold text-[3rem] ml-[3rem] 
              rounded max-md:text-[1.5rem]'>
                <ReactTypingEffect
                    text={['Frontend Developer', 'Graphics Designer', 'UI/UX Designer']}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                  /></h1>

              <p className='text-white text-[20px] ml-[3rem] mt-[1rem] w-[75%]'>I'm a highly motivated Web Developer, 
                eager to learn and develop my skills through Frontend web
                  development and Graphics design.
              </p>

              <div className='flex justify-center items-center ml-[5rem] my-[2rem] gap-x-3'>
                  <a href="https://github.com/kira07Sj" target='blank' className='flex items-center
                   justify-center'>
                    <i class='bx bxl-github i rounded-full '></i>
                  </a>

                  <a href="http://www.linkedin.com/in/kirubel-dagne07" target='blank' className='flex items-center
                   justify-center'>
                    <i class='bx bxl-linkedin i rounded-full '></i>
                  </a>

                  <a href="https://t.me/Kira07sj" target='blank' className='flex items-center
                   justify-center'>
                    <i class='bx bxl-telegram i rounded-full '></i>
                  </a>
              </div>
              <div className='flex max-sm:flex-col items-center justify-center'>
              <div className='second_bg ml-[5rem]  max-sm:mb-3 rounded-md'>
                  <a className=' p-[20px] px-[25px]  
                  flex items-center justify-center shadow-2xl text-white text-[20px]
                    font-bold  a ' href={FileUrl} target='__blank'>Download CV</a>                    
              </div>

              <div className='bg-white ml-[5rem] rounded-md'>
                  <a className=' p-[20px] px-[25px]  
                  flex items-center justify-center shadow-2xl text_primary text-[20px]
                    font-bold  a ' href="#Portfolio">View Projects</a>                    
              </div>
              </div>
          </div>
          <div className='w-full h-full flex items-center justify-center'>
          <div className='w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-slate-600
           flex items-center justify-center overflow-hidden  max-md:mt-5 pulseAnimation'>
            <img src={kira_photo} alt="" />
          </div>
          </div>

        </div>
        
        <div className='h-[110%] w-[690px] max-sm:w-[200px] flex absolute top-0 right-1 ' >
            <img src={bg1} alt="" className='object-cover'/>
        </div>
        
        
    </div>
  )
}

export default Hero

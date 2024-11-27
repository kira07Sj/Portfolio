import React from 'react'
import { achievements, Skills, } from '../constant'

const About = () => {
  return (
    <div id='About' className='w-full  third_bg   flex flex-col  items-center z-20'> 
      <div className='w-full flex items-start'> 
        <h1 className='text-white text-[2.4rem] font-bold mt-[6rem] ml-[1rem]
         md:ml-[11rem] max-md:text-[2rem] max-md:ml-[2.5rem]'>About Me</h1>
      </div>
      

      <div className='w-[80%]  flex flex-col md:flex-row items-center justify-between m-[2rem] z-20'>
          <div className=' w-[90%]  flex flex-col items-start justify-center mr-[3rem] -mt-3'>
              <div className='w-full bg-purple-950/40 rounded-lg m-3  border flex
               flex-col items-start bentoBoxHover'>

                <h1 className='text-white text-[1.9rem] max-sm:text-[1.4rem] font-bold ml-[2rem] mt-[2rem]'>Hi I'm Kirubel Dagne,</h1>
                <p className='text-white/70 text-[1.2rem] mt-[1rem] ml-[2rem] w-[85%] max-sm:w-[75%] text-justify mb-5'>a passionate developer with a love for building user-friendly applications and 
                  immersive games. My goal is to bridge the gap between creativity and technology. 
                  In my free time, I enjoy exploring new gaming trends and learning about UI/UX design.</p>
                <a href="#" className='w-[120px] h-[50px] bg-white rounded-sm flex items-center justify-center
                 text_primary font-semibold ml-[2rem] mb-[3rem]'>Read more <i class='bx bx-link-external'></i></a>
              </div>

              <div className='w-full  bg-purple-950/40 rounded-lg m-5 border pb-[2rem] bentoBoxHover'>
                  <h1 className='text-white text-[1.9rem] font-bold ml-[2rem] mt-[2rem] max-sm:text-[1.4rem]'>Achievements</h1>
                  {achievements.map((items)=>(
                    <li className='text-white/70 ml-[2rem] text-[1.1rem] mt-5 max-sm:w-[85%]'
                    key={items.id}>{items.para}</li>
                  ))}
              </div>
          </div>

          <div className='w-[80%]  max-md:w-[90%] pb-[4rem] mt-[4rem] rounded-md border bentoBoxHover bg-purple-950/40 flex flex-col'>
              <h1 className='text-white text-[1.9rem] max-sm:text-[1.4rem] mb-3 font-bold ml-[2rem] mt-[2rem]'>Skills & Tools</h1>
              <p className='text-white/70 text-[1.2rem] mt-[1rem] ml-[2rem] w-[85%] max-sm:w-[75%] text-justify mb-5'>
              Over the past two years, I’ve honed my skills across a variety of tools and technologies that empower me
               to create intuitive and engaging experiences. From crafting sleek user interfaces 
               to developing immersive game worlds, These are the technologies and tools I use to bring my ideas to life.
              </p>
              <div className='flex flex-wrap mt-5 w-full items-center justify-center'>
                  {Skills.map((items)=>(
                    <div key={items}>
                      <img src={items.src} alt="icons" className='m-5 hover:rotate-12' width={60}  />
                    </div>
                  ))}
              </div>

          </div>
          
      </div>

     
    </div>
  )
}

export default About

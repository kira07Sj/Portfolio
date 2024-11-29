import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='w-full  third_bg   flex flex-col  items-center z-20'> 
      <div className='w-full flex items-center justify-center'> 
        <h1 className='text-white text-[2.4rem] font-bold mt-[6rem] 
         max-md:text-[2rem] '>Contact Me</h1>
      </div>

      <div className='w-full flex items-center justify-center p-[4rem]'> 
          <form className='flex  flex-col items-center justify-center' action="">
            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='flex items-center justify-center gap-3 max-sm:flex-col'>
                <input className='primary_bg py-[1rem] px-[2.2rem] outline-none  rounded-lg text-white ' type="text" placeholder='Full Name'/>
                <input className='primary_bg py-[1rem] px-[2.2rem] outline-none  rounded-lg text-white ' type="text" placeholder='Email Address'/>
              </div>

              <div className='flex items-center justify-center gap-3 max-sm:flex-col'>
                <input className='primary_bg py-[1rem] px-[2.2rem] outline-none  rounded-lg text-white ' type="text" placeholder='Phone Number'/>
                <input className='primary_bg py-[1rem] px-[2.2rem] outline-none  rounded-lg text-white ' type="text" placeholder='Email Subject'/>
              </div>

             
              <textarea className=' w-full h-[200px] primary_bg rounded-lg px-[2rem] pt-[1rem] text-white' placeholder='Your Message' name="" id="" ></textarea>
              
              
            </div>

            <button className='p-[1rem] primary_bg text-white my-[2rem] text-[1rem] a font-semibold rounded-md' type="submit">Send Message</button>
          </form>
          
      </div>
      
    </div>
  )
}

export default Contact

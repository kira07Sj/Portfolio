import React from 'react'
import Card from './Card'

const Portfolio = () => {
  return (
    <div id='Portfolio' className='w-full  primary_bg   flex flex-col  items-center z-20 pb-[4rem]'>
      <div className='w-full flex items-start'> 
        <h1 className='text-white text-[2.4rem] font-bold mt-[6rem] ml-[1rem]
         md:ml-[11rem] max-md:text-[1.6rem] max-md:ml-[2.5rem]'>My Portfolio highlights</h1>
      </div>

      <div className='w-[85%] flex items-center justify-center mt-[2rem]'>
            <Card/>
      </div>
    </div>
  )
}

export default Portfolio

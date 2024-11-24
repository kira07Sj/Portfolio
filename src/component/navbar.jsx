import React from 'react'
import { navLinks } from '../constant'

function navbar() {
  return (
    <div className=' w-[500px] h-[80px] z-10 flex items-center justify-center fixed
      second_bg shadow-xl mt-[1.5rem] rounded-lg '>
        {navLinks.map((items)=>(
          <a key={items.id} href={items.url} className='flex items-center justify-center w-[100px] h-[80%] text-white
          rounded-lg text-[20px] font-bold mx-1 a'>
           {items.title}
         </a>
        ))}
      
      
    </div>
  )
}

export default navbar
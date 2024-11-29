import React from 'react'
import { navLinks } from '../constant'


const footer = () => {
  return (
    <section className='w-full h-[200px] primary_bg flex items-center justify-center'>
      <div className='w-[80%] border-b-2 flex max-md:flex-col-reverse items-center justify-between px-5'>
        <p className='text-white text-center max-md:mb-[1rem]'>Copyright@ 2024 by Kirubel Dagne | All Rights Reserved.</p>
        <div className='flex flex-row items-center justify-center'>
            {navLinks.map((items)=>(
                <a className='text-white m-3' key={items.id} href={items.url}>{items.title}</a>
            ))}
      </div>
      </div>

      
    </section>
  )
}

export default footer

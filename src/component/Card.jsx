import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col items-start 
    justify-center  fourth_bg rounded-xl p-[15px]'>
        <div className='bg-black/25 flex items-center justify-center
         w-[290px] h-[290px] rounded-lg overflow-hidden'>
            <img src="" alt="" />
        </div>

       <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-col ml-3'>
                <h1 className='text-white text-[18px] font-semibold
                text-start my-4 '>Brainwave
                </h1>

                <div  className='flex items-center justify-center'>
                    <p className='bg-purple-800/90 p-[5px] rounded-sm text-white mr-3'>Development</p>
                    
                </div>
            </div>

            <a href='#' className=' bg-white rounded-md mr-3'>
                <i class='bx bx-link-external text-[2rem] p-2 '></i>
            </a>
            
       </div>
    </div>
  )
}

export default Card

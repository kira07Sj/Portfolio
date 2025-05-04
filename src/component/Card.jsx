import React from 'react'

const Card = ({name,imgUrl,link, className, frameworks}) => {
  return (
    <div className={`flex flex-col items-start 
    justify-center  fourth_bg rounded-xl p-[15px] m-[1rem] hover:scale-95 ${className}`}>
        <div className='bg-black/25 flex items-center justify-center w-full
         h-[200px] lg:h-[340px]  rounded-lg overflow-hidden '>
            <img src={imgUrl} alt="" className='object-cover w-full h-full '/>
        </div>

       <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-col ml-3'>
                <h1 className='text-white text-[18px] font-semibold
                text-start my-4 '>{name}
                </h1>

                <div  className='flex items-center justify-center'>
                    <p className='bg-purple-800/90 p-[5px] rounded-md text-white text-[13px]  mr-3'>{frameworks}</p>
                    
                </div>
            </div>

            <a href={link} target='__blank' className=' bg-white rounded-md mr-3'>
                <i class='bx bx-link-external text-[2rem] p-2 '></i>
            </a>
            
       </div>
    </div>
  )
}

export const ImgCard = ({name,imgUrl,onClick}) => {
  return (
    <div className='flex flex-col items-start 
    justify-center  fourth_bg rounded-xl p-[15px] m-[1rem] hover:scale-95'>
        <div onClick={onClick} className='bg-black/25 flex items-center justify-center
         w-[290px] h-[270px] max-sm:w-[260px] max-sm:h-[240px] rounded-lg overflow-hidden '>
            <img src={imgUrl} alt="" className='object-cover w-full h-full '/>
        </div>

       <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-col ml-3'>
                <h1 className='text-white text-[18px] font-semibold
                text-start my-4 '>{name}
                </h1>

             </div>

            
            
       </div>
    </div>
  )
}

export default Card

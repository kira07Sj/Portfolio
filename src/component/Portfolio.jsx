import React from 'react'
import Card, {ImgCard} from './Card'
import { Projects, Graphics } from '../constant'


const Portfolio = () => {
  return (
    <div id="Portfolio" data-nav-id className='w-full h-full  primary_bg   flex flex-col  items-center z-20 pb-[4rem]'>
      <div className='w-full flex items-start'> 
        <h1 className='text-white text-[2.4rem] font-bold mt-[6rem] ml-[1rem]
         md:ml-[11rem] max-md:text-[1.6rem] max-sm:text-[1.4rem] max-md:ml-[2.5rem]'>My Portfolio highlights</h1>
      </div>

      <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 items-center  justify-center mt-[2rem]'>
            {Projects.map((items)=>(
              <Card key={items.id}
                    name={items.name}
                    imgUrl={items.src}
                    link={items.link}
                    />
                   
            ))}

      </div>
      <div className='w-full flex items-start'> 
        <h1 className='text-white text-[2.4rem] font-bold mt-[6rem] ml-[1rem]
         md:ml-[11rem] max-md:text-[1.6rem] max-sm:text-[1.4rem] max-sm:w-[80%]  max-md:ml-[2.5rem]'>Some of my Graphics Design</h1>
      </div>

      <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center justify-center mt-[2rem] '>
                
                    {Graphics.map((itmes)=>(
                      <ImgCard  key={itmes.id}
                                name={itmes.name}
                                imgUrl={itmes.src}/>
                    ))}
                
      </div>
    </div>
  )
}

export default Portfolio

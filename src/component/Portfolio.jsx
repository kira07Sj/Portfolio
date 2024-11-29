import React from 'react'
import Card, {ImgCard} from './Card'
import { Projects, Graphics } from '../constant'


const Portfolio = () => {
  return (
    <div id='Portfolio' className='w-full  primary_bg   flex flex-col  items-center z-20 pb-[4rem]'>
      <div className='w-full flex items-start'> 
        <h1 className='text-white text-[2.4rem] font-bold mt-[6rem] ml-[1rem]
         md:ml-[11rem] max-md:text-[1.6rem] max-md:ml-[2.5rem]'>My Portfolio highlights</h1>
      </div>

      <div className='w-[85%] flex flex-wrap items-center justify-center mt-[2rem]'>
            {Projects.map((items)=>(
              <Card key={items.id}
                    name={items.name}
                    imgUrl={items.src}
                    link={items.link}/>
            ))}

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

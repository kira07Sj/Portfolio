import { useState } from 'react'
import Hero from './component/Hero'
import Navbar from './component/navbar'


function App() {

  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App

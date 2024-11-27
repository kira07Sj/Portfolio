import { useState } from 'react'
import Hero from './component/Hero'
import Navbar from './component/navbar'
import About from './component/About'
import Portfolio from './component/Portfolio'


function App() {

  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
    </div>
  )
}

export default App

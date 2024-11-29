import { useState } from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar.jsx'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact.jsx'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App

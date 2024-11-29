import { useState } from 'react'
import Hero from './component/Hero'
import Navbar from './component/navbar.jsx'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact.jsx'
import Footer from './component/footer.jsx'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

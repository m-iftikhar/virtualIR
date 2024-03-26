import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
 import Feature from './Component/Feature'
 import Workflow from './Component/Workflow'
import  Pricing  from './Component/Pricing'
import Testimonials from './Component/Testimonials'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Feature/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default App

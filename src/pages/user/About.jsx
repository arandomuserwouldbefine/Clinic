import AboutUs from '@/components/user/AboutUs'
import { Footer } from '@/components/user/Footer'
import Navbar from '@/components/user/Navbar'
import React from 'react'

function About() {
  return (
    <div>
        <Navbar />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default About
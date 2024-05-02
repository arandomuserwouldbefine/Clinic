import { Footer } from '@/components/user/Footer'
import Navbar from '@/components/user/Navbar'
import ServicesCards from '@/components/user/ServiceCards'
import React from 'react'

function Services() {
  return (
    <div>
      <Navbar />
      <ServicesCards />
      <Footer />
    </div>
  )
}

export default Services
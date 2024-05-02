import ContactForm from '@/components/user/ContactForm'
import { Footer } from '@/components/user/Footer'
import Navbar from '@/components/user/Navbar'
import React from 'react'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center mt-10'>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
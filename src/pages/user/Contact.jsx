import ContactForm from '@/components/user/ContactForm'
import Navbar from '@/components/user/Navbar'
import React from 'react'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center mt-10'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import Menubar from '../components/Menubar'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import SocialFooter from '../components/SocialFooter'
import ContactBanner from '../components/ContactBanner'

function Contact() {
  return (
    <div>
    <Menubar/>
    <Navbar />
    <ContactBanner />
    <Footer />
    <SocialFooter />
      
    </div>
  )
}

export default Contact

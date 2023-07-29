import React from 'react'
import { NavBar, Footer, Contact, GoogleMap, ContactHeader } from '../../components'
const index = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <Contact/>
      <GoogleMap/>
      <Footer />    
    </div>
  )
}

export default index

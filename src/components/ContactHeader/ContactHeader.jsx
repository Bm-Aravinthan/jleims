import React from 'react'
import './ContactHeader.css'
import {images} from '../../constants/index'

const ContactHeader = () => {
  return (
    <div className="contact-header-container">
      <img src={images.Contact} alt="contact header" />
    </div>
  )
}

export default ContactHeader
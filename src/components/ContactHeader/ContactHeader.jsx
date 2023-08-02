import React from 'react'
import './ContactHeader.css'
import {images} from '../../constants/index'

// const ContactHeader = () => {
//   return (
//     <div className="contact-header-container">
//       <img src={images.Contact} alt="contact header" />
//     </div>
//   )
// }

// export default ContactHeader

const ContactHeader = () => {
  return (
    <div className="contact-header-container">
        <img src={images.Contact} alt="About header" />
        <div className="contact-header-text">
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just to have a chats</p>
        </div>
    </div>
  )
}

export default ContactHeader
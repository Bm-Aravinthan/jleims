import React from 'react'
import './AboutWelcome.css'
import {images} from '../../constants/index'

// const AboutWelcome = () => {
//   return (
//     <div className="about-header-container">
//       <img src={images.AboutHeader} alt="about header" />
//     </div>
//   )
// }

// export default AboutWelcome

const AboutWelcome = () => {
  return (
    <div className="about-header-container">
        <img src={images.AboutHeader} alt="About header" />
        <div className="about-header-text">
            <h1>About Us</h1>
            <p>Serving the world around us</p>
        </div>
    </div>
  )
}

export default AboutWelcome
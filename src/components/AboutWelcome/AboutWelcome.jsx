import React from 'react'
import './AboutWelcome.css'
import {images} from '../../constants/index'

const AboutWelcome = () => {
  return (
    <div className="about-header-container">
      <img src={images.AboutHeader} alt="about header" />
    </div>
  )
}

export default AboutWelcome
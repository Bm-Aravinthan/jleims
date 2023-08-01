import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-content">
            <span className="hero-title">Jesus Loves Evangelical International Ministry</span>
            <span className="hero-subtitle">MIRACLE HAPPENS EVERY TIME BY GOD</span>
            <p className="hero-description">
                And you shall know the truth and the truth shall make you free (John 8:32)
            </p>
            {/* <div className="social-icons">
                <SocialMediaIcons size={51}/>
            </div>
            <div className="down-button">
                <a href="#about">
                    <ExpandCircleDownIcon sx={{ fontSize: 50 }}/>
                </a>
            </div> */}
        </div>
    </div>
  )
}

export default Hero
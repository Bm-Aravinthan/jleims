import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-content">
            <span className="hero-title">Jesus Loves Evangelical International Ministry</span>
            <span className="hero-subtitle">MIRACLE HAPPENS EVERY TIME WITH GOD</span>
            <p className="hero-description">
                A lot of people say a lot of things about Jesus, but the only way to
                really get the truth is to listen to his own words
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
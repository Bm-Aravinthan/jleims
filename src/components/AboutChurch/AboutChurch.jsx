import React from 'react'
import './AboutChurch.css'
import { images } from '../../constants'

const Welcome = () => {
  return (
    <div className="about-container">
            <div className="title">Welcome to our church</div>
            <div className="sub-title">
                We are Tamil speaking (Sri Lankan) church in Wageningen Netherlands, since 2001. We focus on God, Jesus with our brother and sister as one family of Christ. Our Activities are according to the bible. Love each other, preach the gospel to all nations (Mathew 28: 19)
            </div>
            <div className="card-container">
                <div className='img-container'>
                <img src={images.About1} alt="Welcome" />
                </div>
                <div className="img-container">
                <img src={images.About2} alt="Welcome" />
                </div>
                <div className="img-container">
                <img src={images.About3} alt="Welcome" />
                </div>
            </div>
    </div>
  )
}

export default Welcome
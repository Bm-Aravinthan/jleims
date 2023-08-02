import React from 'react'
import './Welcome.css'
import { images } from '../../constants'

const Welcome = () => {
  return (
    <div className="welcome-container">
        <div className="img-container">
            <img src={images.Welcome} alt="Welcome" />
        </div>
        <div className="text-container">
            <div className="title">Welcome</div>
            <div className="description">
                Dear brothers and sisters in Christ, we are heartly welcome you to our Tamil church in Wageningen Netherland. We are praising and worshiping our lord Jesus Christ as one family. You are always welcome to join our service.
            </div>
            <div className="sub-title">
                Jesus said to him "I am the way, The truth and the life" 
            </div>
        </div>
    </div>
  )
}

export default Welcome
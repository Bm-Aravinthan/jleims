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
                Dear brother and sisters in Christ, we hearty welcome you to our Tamil church in Wageningen. We praise and worship our lord Jesus Christ as one family. You are always welcome to join our service.
            </div>
            <div className="sub-title">
                Discovering Jesus Christ - the greatest event in anyone's life! 
            </div>
        </div>
    </div>
  )
}

export default Welcome
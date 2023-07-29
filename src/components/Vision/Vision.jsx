import React from 'react'
import './Vision.css'
import { images } from '../../constants'

const Vision = () => {
  return (
    <div className="vision-container">
        <div className="img-container">
            <img src={images.Vision} alt="Vision" />
        </div>
        <div className="vision-content">
            <div className="title">Our Vision</div>
            <div className="description">
                Our vision is based on God's word, the bible:  So, go and make all nations my disciples by baptising them in the name of the Father and the Son and the Holy Spirit and teaching them to abide by all that I have instructed you. Matthew 28: 19-20
            </div>
            <div className="description sub">
                Love the Lord your God with all your heart and with all your soul and with all your mind. That is the largest and first commandment. The second is the same: love your neighbour as yourself. Matthew: 22: 37-39
            </div>
        </div>
    </div>
  )
}

export default Vision
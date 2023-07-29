import React from 'react'
import './SermonsHeader.css'
import {images} from '../../constants'

const SermonsHeader = () => {
  return (
    <div className="sermons-header-container">
        <img src={images.SermonHeader} alt="sermons" />
        <div className="sermons-header-text">
            <h1>Sermons</h1>
            <p>Take part in our sermons</p>
        </div>
    </div>
  )
}

export default SermonsHeader
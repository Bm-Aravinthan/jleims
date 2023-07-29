import React from 'react'
import './BlogHeader.css'
import {images} from '../../constants/index'

const BlogHeader = () => {
  return (
    <div className="blog-header-container">
      <img src={images.BlogHeader} alt="blog header" />
    </div>
  )
}

export default BlogHeader
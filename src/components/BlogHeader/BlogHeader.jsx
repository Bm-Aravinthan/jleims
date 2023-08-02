import React from 'react'
import './BlogHeader.css'
import {images} from '../../constants/index'

// const BlogHeader = () => {
//   return (
//     <div className="blog-header-container">
//       <img src={images.BlogHeader} alt="blog header" />
//     </div>
//   )
// }

// export default BlogHeader


const BlogHeader = () => {
  return (
    <div className="blog-header-container">
        <img src={images.BlogHeader} alt="Blog" />
        <div className="blog-header-text">
            <h1>Our Blog</h1>
            <p>We are committed. We are passionate. We are on a journey.</p>
        </div>
    </div>
  )
}

export default BlogHeader
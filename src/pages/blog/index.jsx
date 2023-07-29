import React from 'react'
import { BlogHeader, Blogs, Footer, LatestBlog, NavBar } from '../../components'

const index = () => {
  return (
    <div>
        <NavBar />
        <BlogHeader />
        <LatestBlog />
        <Blogs />
        <Footer />
    </div>
  )
}

export default index
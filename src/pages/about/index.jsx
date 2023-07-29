import React from 'react'
import {AboutWelcome,AboutChurch,Footer, NavBar, ImageSlider } from '../../components'

const index = () => {
  return (
    <div>
      <NavBar />
      <AboutWelcome/>
      <ImageSlider />
      {/* <AboutChurch/> */}
      <Footer />
    </div>
  )
}

export default index

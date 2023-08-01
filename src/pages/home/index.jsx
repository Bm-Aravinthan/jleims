import React from 'react'
import { Stack } from "@mui/material";
import "./home.css"

import { NavBar, Footer, Hero, Welcome, Vision, VisionSub, Mission, GoogleMap } from '../../components'

const index = () => {
  return (
    <div>
       <NavBar />
       <Hero />
       <Welcome />
       <Vision />
       <VisionSub />
       <Mission />
       <section className='our-location-section'>
            
            <div className='locationHeading'>
                Our Location
            </div>
            
            <Stack>
                <GoogleMap />
            </Stack>
        </section>
       <Footer />
    </div>
  )
}

export default index
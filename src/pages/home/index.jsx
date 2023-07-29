import React from 'react'
import { Stack } from "@mui/material";

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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                backgroundColor: "#f5f5f5",
                padding: "2rem 0",
              }
              } 
            >
                <h1
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                    Our Location
                </h1>
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
import React from "react"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard

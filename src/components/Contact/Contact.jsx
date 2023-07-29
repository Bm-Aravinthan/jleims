import React from "react"
import "./Contact.css"


const Contact = () => {
  return (
    // <>
    //   <section className='contacts padding'>
    //     <div className='container shadow flexSB'>
    //       <div className='right row'>
    //         <h1>Contact us</h1>
    //         <p>We're open for any suggestion or just to have a chat</p>

    //         <div className='items grid2'>
    //           <div className='box'>
    //             <h4>ADDRESS:</h4>
    //             <p>Vredehorst,Tarthorst 1, 6706 HG Wageningen,The Netherlands </p>
    //           </div>
    //           <div className='box'>
    //             <h4>EMAIL:</h4>
    //             <p> houseoflovefoundation@gmail.com</p>
    //           </div>
    //           <div className='box'>
    //             <h4>PHONE:</h4>
    //             <p>+31641435566 </p>
    //           </div>
    //         </div>

    //         <form action=''>
    //           <div className='flexSB'>
    //             <input type='text' placeholder='Name' />
    //             <input type='email' placeholder='Email' />
    //           </div>
    //           <input type='text' placeholder='Subject' />
    //           <textarea cols='30' rows='10'>
    //             Create a message here...
    //           </textarea>
    //           <button className='primary-btn'>SEND MESSAGE</button>
    //         </form>

    //         <h3>Follow us here</h3>
    //         <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
    //       </div>
    //     </div>
    //   </section>
    // </>

      <div className="container-main">
        <div className="contact-container">
            <div className="title">Get in Touch</div>
            <div className="sub-title"> Feel free to get in touch with us </div>
        </div>
        <form action="#" method="POST" id="my-form">
          <div className="form-group col-12">
            <input type="text" name="text" id="name" className="form-control" placeholder="Enter Your Name" required />
          </div>
          <div className="form-group col-12">
            <input type="email" name="email" id="email" className="form-control" placeholder="Enter Your Email" required />
          </div>
          <div class="form-group col-12">
            <textarea name="textarea" id="message" cols="30" rows="5" className="form-control" placeholder="Enter Message"></textarea>
          </div>
          <div className="send">
            <button className="send-btn">Send Message</button>
            {/* <p id="my-form-status"></p> */}
          </div>
        </form>
      </div>
  )
}

export default Contact

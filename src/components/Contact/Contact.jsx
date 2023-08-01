import React from "react"
import "./Contact.css"

// const mess = document.getElementById("my-form-status");

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "729abdbb-3de4-485f-9c8d-ffb4670b4c16");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // console.log(mess)
      // mess.innerText = "Successfully Sent!, Thanks for your submission!"
      // console.log(mess)
      const mess = document.getElementById("my-form-status");
      if (mess) {
      mess.innerText = "Successfully Sent! Thanks for your submission!";
    }
    event.target.reset();
    }
  };
  return (
      <div className="container-main">
        <div className="contact-container">
            <div className="title">Get in Touch</div>
            <div className="sub-title"> Feel free to get in touch with us </div>
        </div>
        <form onSubmit={onSubmit} id="my-form">
          <div className="form-group col-12">
            <input type="text" name="name" id="name" className="form-control" placeholder="Enter Your Name" required />
          </div>
          <div className="form-group col-12">
            <input type="email" name="email" id="email" className="form-control" placeholder="Enter Your Email" required />
          </div>
          <div class="form-group col-12">
            <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Enter Message"></textarea>
          </div>
          <div className="send">
            <button type="submit" className="send-btn">Send Message</button>
            <p id="my-form-status"></p>
          </div>
        </form>
      </div>
  )
}

export default Contact

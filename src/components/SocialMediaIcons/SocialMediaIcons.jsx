import React from "react";
import { images } from "../../constants";
import "./SocialMediaIcons.css";

const SocialMediaIcons = ({ size }) => {
  const iconStyle = {
    height: size,
    width: size,
  };

  return (
    <div className="social-media">
      <a href="https://www.facebook.com/rebecca.bala" className="social-media-link" target="_blank" rel="noreferrer">
        <img
          src={images.Facebook}
          alt="facebook"
          className="social-media-icon"
          style={iconStyle}
        />
      </a>
      <a href="https://jleiministry.blogspot.com/" className="social-media-link" target="_blank" rel="noreferrer">
        <img
          src={images.Blogger}
          alt="Blogger"
          className="social-media-icon"
          style={iconStyle}
          id="blogger"
        />
      </a>
      <a href="#home" className="social-media-link" target="_blank">
        <img
          src={images.Whatsapp}
          alt="whatsapp"
          className="social-media-icon"
          style={iconStyle}
        />
      </a>
      <a href="https://youtube.com/@PastorRebeccaBala" className="social-media-link" target="_blank" rel="noreferrer">
        <img
          src={images.Youtube}
          alt="youtube"
          className="social-media-icon"
          style={iconStyle}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

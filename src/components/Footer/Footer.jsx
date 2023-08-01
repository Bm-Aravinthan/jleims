import React from "react";
import "./Footer.css";
import { SocialMediaIcons } from "../../components";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <Router></Router> */}
        <div className="footer-left">
          {/* <a href="#home" className="logo">
            JLEIM
          </a> */}
          <Link to="/" className="logo">JLEIM</Link>
          <span className="description">
            Jesus loves evangelical international ministry
          </span>
          <span className="address">
            Vredehorst Tarthorst 1, <br /> 6708 HG Wageningen, <br /> Netherlands
          </span>
          <SocialMediaIcons />
        </div>
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {/* <li>
              <a href="#home" className="footer-link">
                About
              </a>
            </li> */}
            <li>
              {/* <a href="#home" className="footer-link">
                Blog
              </a> */}
              <Link to="/blog" className="footer-link">Blog</Link>
            </li>
            <li>
              {/* <a href="#home" className="footer-link">
                Videos
              </a> */}
              <Link to="/videos" className="footer-link">Videos</Link>
            </li>
            <li>
              {/* <a href="#home" className="footer-link">
                Gallery
              </a> */}
              <Link to="/gallery" className="footer-link">Gallery</Link>
            </li>
            <li>
              {/* <a href="#home" className="footer-link">
                Sermons
              </a> */}
              <Link to="/sermons" className="footer-link">Sermons</Link>
            </li>
            <li>
              {/* <a href="#home" className="footer-link">
                About
              </a> */}
              <Link to="/about" className="footer-link">About</Link>
            </li>
            <li>
              {/* <a href="#home" className="footer-link">
                Contact
              </a> */}
              <Link to="/contact" className="footer-link">Contact</Link>
            </li>
          </ul>
        </div>
        {/* </Router> */}
        <div className="footer-right">
          <h3>Subscribe to get latest updates and news</h3>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <button type="submit" className="footer-button">
              Subscribe
            </button>
          </form>
          <span className="email">
            <LocalPostOfficeIcon className="icon" />
            <a href="mailto:houseoflovefoundation@gmail.com " className="email-link">
                houseoflovefoundation@gmail.com 
            </a>
          </span>
          <span className="email">
            <LocalPostOfficeIcon className="icon" />
            <a href="mailto:balarebecca21@gmail.com" className="email-link">
                balarebecca21@gmail.com 
            </a>
          </span>
          <span className="phone">
            <LocalPhoneIcon className="icon" />
            <a href="tel:+31641435566" className="phone-link">
                +31641435566
            </a>
          </span>
        </div>
      </div>
      <div className="bottom-bar">
        <span className="bottom-bar-left">
          JLEIM &copy; Copyright {getCurrentYear()} | All Rights Reserved
        </span>
        <span className="bottom-bar-center">
          Designed &amp; Developed by <a href="http://www.clevonex.tech" target="_blank">Clevonex</a>
        </span>
        <span className="bottom-bar-right">
          Privacy &amp; Cookie Policy | Terms of Service
        </span>
      </div>
    </footer>
  );
};

export default Footer;

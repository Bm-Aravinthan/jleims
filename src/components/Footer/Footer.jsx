import React from "react";
import "./Footer.css";
import { SocialMediaIcons } from "../../components";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="#home" className="logo">
            JLEIM
          </a>
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
            <li>
              <a href="#home" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#home" className="footer-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#home" className="footer-link">
                Events
              </a>
            </li>
            <li>
              <a href="#home" className="footer-link">
                Ministries
              </a>
            </li>
            <li>
              <a href="#home" className="footer-link">
                Sermons
              </a>
            </li>
            <li>
              <a href="#home" className="footer-link">
                Resources
              </a>
            </li>
            <li>
              <a href="#home" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
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
          JLEIM &copy; Copyright 2023 | All Rights Reserved
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

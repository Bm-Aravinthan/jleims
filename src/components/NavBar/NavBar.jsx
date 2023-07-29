import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  // add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* logo */}
        <NavLink exact to="/" className="logo">
          JLEIM
        </NavLink>

        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li onClick={removeActive}>
            <NavLink
              exact
              to="/"
              className="navLink"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink to="/blog" className="navLink" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink to="/videos" className="navLink" activeClassName="active">
              Videos
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink
              to="/gallery"
              className="navLink"
              activeClassName="active"
            >
              Gallery
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink to="/sermons" className="navLink" activeClassName="active">
              Sermons
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink to="/about" className="navLink" activeClassName="active">
              About
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink
              to="/contact"
              className="navLink"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <span className="follow-us-btn">
          <a href="https://www.facebook.com/rebecca.bala" target="_blank" rel="noreferrer">Follow</a>
        </span>

        <div
          className={`hamburger ${isActive ? 'active' : ''}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

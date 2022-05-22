import React, { useRef, useState } from "react";
import { images } from "../../constants";
import SetMealIcon from "@mui/icons-material/SetMeal";

import "./Navbar.css";
import { IconButton } from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const isMobile = window.innerWidth < 578;
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const scrollNav = useRef(null)
  window.addEventListener("scroll", () => {
    // let navBar = document.querySelector(".app__navbar-nav");
    let windowScroll = window.scrollY > 150;
    // navBar.classList.toggle("scrolling-nav", windowScroll);
    scrollNav.current.classList.toggle('scrolling-nav' , windowScroll)
  });
  return (
    <nav className="app__navbar-nav" ref={scrollNav}>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="primary-logo" />
      </div>
      <ul className="app__navbar-menu">
        <li className="links">
          <a href="#home">Home</a>
        </li>
        <li className="links">
          <a href="#pages">Pages</a>
        </li>
        <li className="links">
          <a href="#contact">Contact Us</a>
        </li>
        <li className="links">
          <a href="#blog">Blog</a>
        </li>
        <li className="links">
          <a href="#landing">Landing</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <div className="login-link">
          <a href="#login">Log In </a> /{" "}
          <a href="#registration">Registration</a>
        </div>
        <p>Book Table</p>
      </div>
      <div className="small-screen-nav">
        <IconButton
          onClick={() => setToggleMenu(true)}
          style={{ color: "white" }}
        >
          <SetMealIcon fontSize="large" />
        </IconButton>

        <div className={`small-screen-nav-wrapper ${toggleMenu && "active"}`}>
          <IconButton
            className="small-screen-menu-close-btn"
            onClick={() => setToggleMenu(false)}
          >
            <LocalDiningIcon fontSize="large" />
          </IconButton>
          <ul className="small-screen-menu">
            <li className="links">
              <a href="#home">Home</a>
            </li>
            <li className="links">
              <a href="#pages">Pages</a>
            </li>
            <li className="links">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="links">
              <a href="#blog">Blog</a>
            </li>
            <li className="links">
              <a href="#landing">Landing</a>
            </li>
            {isMobile && (
              <>
                <li>
                  <a href="#login">Log In</a>
                </li>
                <li>
                  <a href="#login">Resgistration</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

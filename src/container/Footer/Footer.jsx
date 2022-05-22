import React from "react";
import { SubHeading } from "../../components";

import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => (
  <div className="app__footer section__padding app__bg">
    <div className="app__wrapper">
      <div className="app__wrapper_info news-letter">
        <SubHeading title="News letter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>

        <form>
          <input
            type="email"
            placeholder="put your email and push the button"
          />
          <button className="custom__button">Subscribe</button>
        </form>
      </div>
      <footer>
        <div className="footer__wrapper">
          <div className="contact__info">
            <SubHeading title="Contact us" />
            <p style={{ margin: "1rem 0" }}>
              9 W 53rd St, New York, NY 10019, USA
            </p>

            <p>
              +1 212-344-1230 <br /> +1 212-555-1230
            </p>
          </div>
          <div className="restaurant__info">
            <h1
              className="headtext__cormorant"
              style={{
                textTransform: "uppercase",
                lineHeight: "29.9px",
                marginBottom: "2rem",
              }}
            >
              Gerícht
            </h1>
            <SubHeading pTag='"The best way to find yourself is to lose yourself in the service of others.”' />

            <div className="social__icon">
              <a href="#f">
                <FacebookRoundedIcon className="Icon" />
              </a>
              <a href="#I">
                <InstagramIcon className="Icon" />
              </a>
              <a href="#W">
                <WhatsAppIcon className="Icon" />
              </a>
            </div>
          </div>
          <div className="working__hours">
            <SubHeading title="Working Hours" />

            <p>
              Monday-Friday: <br />
              08:00 am -12:00 am
            </p>
            <p>
              Saturday-Sunday: <br />
              07:00am -11:00 pm
            </p>
          </div>
        </div>
        <p className="copy-right">2022 Gerícht. All Rights reserved.</p>
      </footer>
    </div>
  </div>
);

export default Footer;

import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./findus.css";
const FindUs = () => (
  <div className="app__find-us section__padding flex__center app__bg ">
    <div className="app__wrapper   ">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>

        <div className="find__info">
          <p className="p__opensans find__subtitle">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>

          <h2 className="p__cormorant">Opening Hours</h2>

          <p className="open-hour">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="open-hour">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <button className="custom__button">Visit Us</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findUs" />
      </div>
    </div>
  </div>
);

export default FindUs;

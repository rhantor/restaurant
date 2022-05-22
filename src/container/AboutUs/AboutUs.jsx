import React from "react";

import "./AboutUs.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
const AboutUs = () => (
  <div className="app__about section__padding">
    <div className="app__wrapper g__wrapper">
      <div className="about__overlay">
        <img src={images.G} alt="g" />
      </div>
      <div className="app__wrapper-info about">
        <SubHeading lgTitle="About Us" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
      <div className="knife ">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__wrapper-info history">
        <SubHeading lgTitle="Our History" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

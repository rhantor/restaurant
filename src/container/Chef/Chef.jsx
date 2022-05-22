import React from "react";

import "./Chef.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
const Chef = () => (
  <div className="section__padding app__bg">
    <div className="app__wrapper">
      <div className="app__wrapper_img app__wrapper_img-reverse chef__img">
        <img src={images.chef} alt="" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word's" />

        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="chefs-word">
          <img src={images.quote} alt="quote" />
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
          </i>
          <p>
            <i>
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </i>
          </p>
        </div>
      
      <div className="chef__details">
        <h1>Kevin Luo</h1>
        <p>chef & Founder</p>

        <div className="sign">
          <img src={images.sign} alt="sign" />
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default Chef;

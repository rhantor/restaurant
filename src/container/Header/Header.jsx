import React from "react";

import "./Header.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
const Header = () => {
  return (
    <div className="app__header section__padding">
      <div className="app__wrapper">
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new Flavour" />
          <h1 className="headtext__cormorant">
            The key to <br /> Fine dining
          </h1>
          <p className="p__opensans">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button className="custom__button">Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
          <img src={images.welcome} alt="welcome" />
        </div>

        <div className="absolute__title-left p__opensans">
          <p>#Bar</p>
          <p>#Gericht</p>
        </div>
        <div className="absolute__title-bottom p__opensans">
          <span className="opensans">01 </span> <span className="span2"> </span>
          <span>02 </span>
          <span>03 </span>
          <span>04 </span>
        </div>
        <div className="absolute__title-right p__opensans">Scroll</div>
      </div>
    </div>
  );
};

export default Header;

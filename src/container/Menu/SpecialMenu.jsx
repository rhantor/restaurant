import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";

const SpecialMenu = () => {
  return (
    <div className="section__padding app__special-menu">
      <div className="app__wrapper">
        <div className="special__menu-header">
          <SubHeading title="Menu that fits you palatte" />
          <h1 className="headtext__cormorant">Today’s Special</h1>
        </div>
        <div className="app__wrapperr_info spacial__menu-list1">
          <h1 className="menu__list-header">Wine & Beer</h1>
          {data.wines.map((wine, index) => (
            <MenuItem
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
              key={index}
            />
          ))}
        </div>
        <div className="app__wrapper_img app__wrapper_img-reverse ">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__wrapperr_info special__menu-list2">
          <h1 className="menu__list-header">Cocktails</h1>

          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={index}
              price={cocktail.price}
              title={cocktail.title}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
      <div className="flex__center">
        <button className="custom__button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;

import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="menu__item">
    <div className="menu__item-details">
      <div className="title">{title}</div>
      <div className="price">{price}</div>
    </div>
    <div className="menu__item-sub-title">
      <p>{tags}</p>
    </div>
  </div>
);

export default MenuItem;

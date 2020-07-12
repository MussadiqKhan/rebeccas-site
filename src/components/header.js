import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </div>
  );
};

export default Header;

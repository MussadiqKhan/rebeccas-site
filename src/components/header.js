import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <div className="links">
          <p>Work</p>
          <p>About</p>
          <p>Play</p>
        </div>
      </div>
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </div>
  );
};

export default Header;

import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <div className="links">
        <a
                  href="https://yeapster.com/index.html"
                  
                  ><p>Projects</p></a>
          <a
                  href="https://yeapster.com/about.html"
                  
                  ><p>About</p></a>
          <a
                  class="text-light-14 Galano menu-color tx-capital"
                  href="https://yeapster.com/nonwork.html"
                  
                  ><p>Photo</p></a>        </div>
      </div>
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </div>
  );
};

export default Header;

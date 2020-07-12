import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Menu = (props) => {
  const [menu, setMenu] = useState("");

  const onClick = (location) => {
    setMenu(location);
  };

  return (
    <div>
      <ul className="menu">
        {props.menu.map((item, index) => (
          <li key={index}>
            <AnchorLink
              href={`#` + item}
              className={menu === item ? item : "menus"}
              onClick={() => onClick(item)}
            >
              {item}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

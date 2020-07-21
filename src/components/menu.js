import React from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

const Menu = (props) => {
  // const [menu, setMenu] = useState("Define");

  // const onClick = (location) => {
  //   setMenu(location);
  // };

  return (
    <div>
      {" "}
      <Scrollspy
        className="menu"
        items={props.menu}
        currentClassName="is-current"
      >
        {props.menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item}
              smooth={true}
              duration={1000}
              className="menus"
              // onClick={() => onClick(item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </Scrollspy>
    </div>
  );
};

export default Menu;

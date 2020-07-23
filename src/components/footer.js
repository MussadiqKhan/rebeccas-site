import React from "react";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.png";

const Footer = (props) => {
  return (
    <div>
      <footer>
        <div className="container">
          <div>
            <h4>Next Project ></h4>
            <h2>{props.title}</h2>
          </div>
          <div className="social">
            <img src={email} alt="email" style={{ marginRight: "25px" }} />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

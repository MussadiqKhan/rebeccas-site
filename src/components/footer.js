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
            <a href={props.link}>
              {" "}
              <h2>{props.title}</h2>
            </a>
          </div>
          <div className="social">
            <a href="mailto:rebeccayeap@berkeley.edu">
              {" "}
              <img
                src={email}
                alt="email"
                style={{ marginRight: "25px" }}
              />{" "}
            </a>
            <a href="https://www.linkedin.com/in/rebeccayeapberkeley/">
              {" "}
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

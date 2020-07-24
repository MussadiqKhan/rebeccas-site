import React from "react";
import icon from "../images/icon.png";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.png";

const Footer = (props) => {
  return (
    <div>
      <a href={props.link}>
        <footer>
          <div className="container" style={{ marginTop: "80px" }}>
            <div>
              <h4>
                NEXT PROJECT{" "}
                <span>
                  <img src={icon} alt="icon" />
                </span>
              </h4>{" "}
              <h2>{props.title}</h2>
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
      </a>
    </div>
  );
};

export default Footer;

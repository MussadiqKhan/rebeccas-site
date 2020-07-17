import React from "react";
import stat1 from "../images/stats1.png";
import stat2 from "../images/stats2.png";

const Challenge = () => {
  return (
    <div id="Define">
      <div className="container">
        <div className="challenge-text">
          <h3>The Challenge</h3>
          <p>
            Many of the existing solutions targeted the inconvenience of
            physical therapy for patients by offering at-home exercise
            solutions. Instead competitors in Europe are working to solve
            patient-specific issues, including motivation and engagement, while
            mistakenly disregarding the physical therapists' role.{" "}
          </p>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "20",
            letterSpacing: "0.08em",
            color: "#989898",
            fontFamily: "Galano Grotesque",
            fontWeight: "300",
            fontStyle: "normal",
          }}
        >
          U.S. BONE AND JOINT INITIATIVE, 2015
        </p>
        <div className="stats">
          <div className="stat1">
            <img
              src={stat2}
              style={{ marginBottom: "40px" }}
              width="190"
              alt="stats"
            />
            <p>
              Half of American adults develop a musculoskeletal injury that
              lasts longer than three months
            </p>
          </div>
          <div className="stat1">
            <img
              src={stat1}
              style={{ marginBottom: "50px" }}
              width="310"
              alt="stats"
            />
            <p>
              of physical therapy patients do not fully adhere to their plans of
              care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;

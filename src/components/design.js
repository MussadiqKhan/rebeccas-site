import React from "react";
import lot from "../images/lot.png";
import wireframe from "../images/wirefram.png";
import userflow from "../images/userflow.png";

const Design = () => {
  return (
    <div id="Design Process" style={{ marginTop: "40px", paddingTop: "40px" }}>
      <div className="container">
        <div className="design">
          <h3>Storyboarding</h3>
          <p>
            As a concept development tool, I used storyboarding to to visualize
            how patients and physicians, would utilize two aspects of the
            solution – the web portal and gamified exercise. Through this sprint
            activity, I gained clarity on how my design will engage users, and
            aligned on the potential solution with my team.
          </p>
          <img src={lot} alt="lot" />
          <div className="design-2">
            <h3>Userflow</h3>
            <img src={userflow} alt="userflow" />
          </div>
          <div className="design-2">
            <h3>Wireframing</h3>
            <p>
              I created high-fidelity functional wireframes with Adobe InDesign.
              Below is a snippet of the desktop experience for two user flows:
              patients and physicians.
            </p>
            <img src={wireframe} alt="wireframe" />
          </div>
        </div>
      </div>
      <div className="design-bg"></div>
    </div>
  );
};

export default Design;

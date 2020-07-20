import React from "react";
import p1 from "../images/person1.png";
import p2 from "../images/person2.png";

const Research = () => {
  return (
    <div id="Research">
      <div className="container">
        <div className="research-1">
          <h3>Preliminary User Interviews</h3>
          <p>
            The team conducted <b>22</b> user research interviews on physical
            therapy patients, including both existing and past patients.
            Splitting our team into two groups, we conducted 1:1 interviews in
            two major cities in Portugal–Lisbon and Cascais. Below are our key
            findings from the commonalities shared by interviewees:
          </p>
        </div>
        <div className="research-2">
          <div className="tst" style={{ marginTop: "35px" }}>
            <img src={p1} alt="person" />
            <div className="div-1">
              <p className="p1">INSIGHTS FROM PATIENTS</p>
              <p className="p2">
                Lack of motivation to perform physical therapy exercises
              </p>
              <p className="p2">
                Distrust around the process and frustration over lack of
                transparency
              </p>
            </div>
          </div>
          <div className="tst">
            <img src={p2} alt="person2" />
            <div className="div-2">
              <p className="p1">INSIGHTS FROM PATIENTS</p>
              <p className="p2">
                Unable to monitor patients outside of in-clinic therapy sessions
              </p>
              <p className="p2">
                Delayed recovery and recurring injuries due to patient’s not
                abiding to the plan
              </p>
            </div>
          </div>
        </div>
        <div className="research-3">
          <p>
            Although the end-user is a patient, our subsequent <b>6+</b>{" "}
            interviews with physicians heightened the critical role each play
            for a patient's smooth recovery. We found specific stages in the
            recovery progress, including the diagnosis, and injury severity, to
            require the in-person expertise of a physician. This fundamental
            understanding not only informed my design process for the MVP but
            later informed Clynx's business model from a B2C to a{" "}
            <b>B2B2C model</b>.
          </p>
        </div>

        <div className="research-4">
          <p>
            “I have no idea if therapy even helps...honestly, I don’t actually
            do the exercises at home, but I stopped because I did not notice any
            improvements.”
          </p>
          <p
            style={{
              marginTop: "60px",
              fontSize: "14px",
              lineHeight: "140%",
              color: "#989898",
              fontFamily: "Galano Grotesque",
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            LUCA, AN ONGOING PHYSICAL THERAPY PATIENT INTERVIEWED OUTSIDE A
            CLINIC IN CASCAIS
          </p>
        </div>
      </div>
      <div
        className="headers-bg"
        style={{ marginTop: "80px", height: "540px" }}
      ></div>
    </div>
  );
};

export default Research;

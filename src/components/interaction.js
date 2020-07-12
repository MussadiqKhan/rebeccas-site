import React from "react";
import interaction1 from "../images/interaction1.png";
import interaction2 from "../images/interaction2.png";
import interaction3 from "../images/interaction3.png";

const Interaction = () => {
  return (
    <div id="Interaction">
      <div className="container">
        <div className="interaction">
          <div className="interaction1">
            <img src={interaction1} alt="interaction" />
            <div className="interaction-text">
              <h4>CREATE AN EXERCISE</h4>
              <hr />
              <p>
                At the clinic, the physician creates the patient profile on the
                portal and prescribes the treatment plan including the type of
                exercise, repetition, and other parameters.{" "}
              </p>
              <h4>EXERCISE SELECTION</h4>
              <p>
                Exercise selection displays the game visually with customized
                instructions to prevent injuries.
              </p>
              <h4>PARAMETERS</h4>
              <p>
                Parameters customized for every patient (ie. range of motion) to
                maintain performance accuracy without constant monitoring.{" "}
              </p>
            </div>
          </div>
          <div className="interaction1">
            <img src={interaction2} alt="interaction" />
            <div className="interaction-text">
              <h4>GAMIFIED EXERCISE</h4>
              <hr />
              <p>
                The patient downloads the portal and sets up the body sensor
                camera to a computer to begin the exercises. Our software does
                not require any wearables, since the camera is able to detect
                the body and create a virtual model.
              </p>
              <h4>STARS POINT SYSTEM</h4>
              <p>
                Point system to encourage patients to perform the exercises
                accurately and work towards a goal.
              </p>
              <h4>DYNAMIC BAR</h4>
              <p>
                Bar represents the current range of motion compared to the
                parameter goal set by the physician.{" "}
              </p>
            </div>
          </div>
          <div className="interaction1">
            <img src={interaction3} alt="interaction" />
            <div className="interaction-text">
              <h4>REAL-TIME FEEDBACK</h4>
              <hr />
              <p>
                The physician can access the portal remotely to monitor the
                patient’s treatment. Additionally, the patient can also access
                the portal to view the progress over each session and
                communicate with the physician.
              </p>
              <h4> VARIABLES</h4>
              <p>
                The progress report tracks the range of motion, speed, and
                reaction time.{" "}
              </p>
              <h4>TIME PERIODS</h4>
              <p>
                Graph results of 3 different parameters across the period of a
                day, week, month, or year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interaction;

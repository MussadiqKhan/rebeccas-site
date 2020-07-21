import React from "react";
import hands from "../images/hands.png";
import story from "../images/story.png";
import mobile from "../images/mobilehand.png";
import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.png";

const Learning = () => {
  return (
    <div id="Learnings">
      <div className=" container">
        <div className="learning">
          <div className="learning-1">
            <h2>Learnings</h2>
          </div>
          <div className="learning-2" style={{ marginTop: "25px" }}>
            <img src={story} alt="hands" />
            <h3>Storytelling + presentation skill</h3>
            <p>
              In order to build upon my storytelling skills, I actively sought
              feedback for my work internally and externally from my immediate
              team. This gave me the opportunity to tailor my presentations in a
              succinct manner to a range of audiences. By the end, I had
              presented each project over 5x to stakeholders across teams.
            </p>
          </div>
          <div className="learning-2">
            <img src={hands} alt="hands" />
            <h3>Cross-functional collaboration</h3>
            <p>
              The PM and Eng team within my team was remote which posed
              challenges, but also strengthened my communication skills. Through
              actively seeking feedback during 1:1s and weekly meetings, I was
              able to foster and strengthen my relationships.
            </p>
          </div>
          <div className="learning-2 learning-margin">
            <img src={mobile} alt="hands" />
            <h3>Prototyping skills</h3>
            <p>
              Based on my team’s familiarity with existing tools, I learned how
              to prototype more efficiently on Sketch and Principle. During my
              internship, I also learned from Googlers how to use Framer X and
              Procreate, to rapidly sketch ideas!
            </p>
          </div>
        </div>
      </div>
      <div className="image-gallery" style={{ marginTop: "190px" }}>
        <img
          src={bg1}
          alt="imageone"
          style={{ width: "33.3%", height: "480px" }}
        />
        <img
          src={bg2}
          alt="imageone"
          style={{ width: "33.3%", height: "480px" }}
        />
        <img
          src={bg3}
          alt="imageone"
          style={{ width: "33.3%", height: "480px" }}
        />
      </div>
    </div>
  );
};

export default Learning;

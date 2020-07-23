import React from "react";

const Overview = () => {
  return (
    <div>
      <div
        className="main-overview container"
        id="Overview"
        style={{ marginTop: "40px", paddingTop: "40px" }}
      >
        <div className="overview-text">
          <h2>Overview</h2>
          <p>
            The goal of the Social Distribution is to enable distribution
            through people specifically creator-to-creator, creator-to-viewer,
            and viewer-to-creator. I had the opportunity to work on{" "}
            <b>three projects </b>
            during my time at YouTube which allowed me greater visibility not
            only on social distribution, but also various other project areas
            including Watch, Comments, and Posts.
          </p>
        </div>
      </div>
      <div className="grey-background"></div>
      <div className=" container">
        <div className="overview-sections">
          <div className="section" style={{ marginTop: "5px" }}>
            <h4>Creator to Creator</h4>
            <p>
              In a 2-week timeline, I prototyped and iterated on three potential
              solutions to enable Youtube creators to support and recognize one
              another on the platform.
            </p>
          </div>
          <div className="section">
            <h4>Creator to Viewer</h4>
            <p>
              In a 4-week timeline, I prototyped three potential solutions to a
              problem facing various teams/platforms on Youtube. This feature
              enabled viewers to react and support a creator’s content.
            </p>
          </div>
          <div className="section">
            <h4>Viewer to Viewer</h4>
            <p>
              In a 4-week timeline, I prototyped three potential solutions to a
              problem facing various teams/platforms on Youtube. This feature
              enabled viewers to react and support a creator’s content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

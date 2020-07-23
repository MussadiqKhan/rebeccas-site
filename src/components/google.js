import React from "react";
import Footer from "./footer";
import Menu from "./menu";
import Header from "./header";
import ImageGallery from "./image-roll";
import Overview from "./overview";
import Learning from "./learning";
import header from "../images/header.png";

const Google = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Header image={header} />

      <div className="google-main">
        <Menu menu={["Overview", "Learnings"]} />
        <div className="container">
          <div className="google-sub">
            <div className="text-1">
              <p className="top-text">INTERACTION DESIGN — SUMMER 2019</p>
              <h1>Google Design</h1>
              <h1>Internship</h1>
              <p
                className="main-text"
                style={{
                  fontFamily: "TT Norms",
                  fontWeight: "300",
                  fontStyle: "normal",
                  lineHeight: "170%",
                  letterSpacing: "0.03em",
                  fontSize: "14px",
                  marginTop: "40px",
                }}
              >
                In the summer of 2019, I was fortunate to be a User Experience
                Design Intern at Google on YouTube’s Social Distribution team.
                Within the span of my 13-week internship, I had the opportunity
                to work on three projects for desktop and IOS mobile.
                Unfortunately due to NDA, I am not allowed to talk about the
                projects, but below I’ve shared my high-level process and
                learnings!
              </p>
              <button
                style={{
                  fontFamily: "Galano Grotesque",
                  fontStyle: "normal",
                }}
              >
                1-WK DESIGN CHALLENGE
              </button>
            </div>
            <div className="text-2">
              <p
                style={{
                  marginBottom: "10px",
                  fontFamily: "Galano Grotesque",
                  fontStyle: "normal",
                  color: "#919191",
                  fontWeight: "500",
                }}
              >
                MY ROLE
              </p>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontFamily: "TT Norms",
                  fontWeight: "300",
                  fontStyle: "normal",
                  lineHeight: "170%",
                  letterSpacing: "0.03em",
                  fontSize: "14px",
                }}
              >
                UX Design Intern–competitive audit,
              </p>
              <p
                style={{
                  lineHeight: "170%",
                  marginBottom: "10px",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontFamily: "TT Norms",
                  fontWeight: "300",
                  fontStyle: "normal",
                  letterSpacing: "0.03em",
                  fontSize: "14px",
                }}
              >
                usability testing, product strategy
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Galano Grotesque",
                  fontStyle: "normal",
                  color: "#919191",
                  fontWeight: "500",
                }}
              >
                MY CONTRIBUTIONS
              </p>
              <ul>
                <li>
                  Presented three experiences for YouTube viewers and creators
                </li>
                <li>Collaborated with PM on strategy for a new project area</li>
                <li>Conducted 2 user research studies</li>
              </ul>
            </div>
            <div className="text-3">
              <p
                style={{
                  marginBottom: "10px",
                  fontFamily: "Galano Grotesque",
                  fontStyle: "normal",
                  color: "#919191",
                  fontWeight: "500",
                }}
              >
                IMPACT
              </p>
              <ul>
                <li>Build 2 projects in Q4</li>
                <li>Launch 1 project in Q4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ImageGallery />
      <Overview />
      <Learning />
      <Footer title="Clynx Dashboard" link="/clynx" />
    </div>
  );
};

export default Google;

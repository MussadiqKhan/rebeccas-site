import React from "react";
import Header from "./header";
import mac from "../images/mac.png";
import macbook from "../images/macbook.png";
import Menu from "./menu";
import Challenge from "./challenge";
import Research from "./research";
import Design from "./design";
import Interaction from "./interaction";
import Future from "./future";
import Footer from "./footer";

const Clynx = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div>
        {" "}
        <div style={{ position: "relative" }}>
          <Header image={mac} />
          <div className="google-main">
            <Menu
              menu={[
                "Define",
                "Research",
                "Design Process",
                "Interaction",
                "Reflection",
              ]}
            />
            <div className="container">
              <div className="google-sub" style={{ paddingBottom: "20%" }}>
                <div className="text-1">
                  <p className="top-text">INTERACTION DESIGN ・ FALL 2018</p>
                  <h1>Clynx Dashboard</h1>
                  <p
                    className="main-text"
                    style={{
                      marginTop: "48px",
                      fontFamily: "TT Norms",
                      fontWeight: "300",
                      fontStyle: "normal",
                      lineHeight: "170%",
                      letterSpacing: "0.03em",
                      fontSize: "14px",
                      color: " rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Clynx is a healthcare technology startup I co-founded with
                    four team members based in Lisbon, Portugal. Our solution
                    utilizes gamification and digitalization to help physical
                    therapy patients recover faster.
                  </p>
                  <p
                    className="main-text"
                    style={{
                      marginTop: "32px",
                      fontFamily: "TT Norms",
                      fontWeight: "300",
                      fontStyle: "normal",
                      lineHeight: "170%",
                      letterSpacing: "0.03em",
                      fontSize: "14px",
                      color: " rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    I designed the <b>desktop MVP </b> for the dashboard
                    experience to help patients perform exercises and physicians
                    to monitor therapy progress.
                  </p>
                  <button
                    style={{
                      fontFamily: "Galano Grotesque",
                      fontStyle: "normal",
                    }}
                  >
                    CLYNX LANDING PAGE{" "}
                  </button>
                </div>
                <div
                  className="text-2"
                  style={{
                    marginTop: "260px",
                  }}
                >
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
                      lineHeight: "170%",
                      maxWidth: "270px",
                      fontFamily: "TT Norms",
                      fontWeight: "300",
                      fontStyle: "normal",
                      letterSpacing: "0.03em",
                      fontSize: "14px",
                      color: " rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Solo UX Designer–discovery, user research, competitive
                    audit, testing, feature prioritization, product strategy
                  </p>

                  <p
                    style={{
                      marginTop: "40px",
                      marginBottom: "10px",
                      fontFamily: "Galano Grotesque",
                      fontStyle: "normal",
                      color: "#919191",
                      fontWeight: "500",
                    }}
                  >
                    MY CONTRIBUTIONS
                  </p>
                  <ul>
                    <li>Led user research with 20+ interviews</li>
                    <li> Designed entire product’s visual interface</li>{" "}
                    <li>
                      Collaborated on product strategy & MVP pitch to investors
                    </li>
                  </ul>
                </div>
                <div className="text-3" style={{ marginTop: "260px" }}>
                  <p
                    style={{
                      marginBottom: "10px",
                      fontFamily: "Galano Grotesque",
                      fontStyle: "normal",
                      color: "#919191",
                      fontWeight: "500",
                    }}
                  >
                    TEAM
                  </p>
                  <ul>
                    <li> Joana Pinto, Product Manager</li>{" "}
                    <li>Henrique Carvalho, Game Engineer </li>{" "}
                    <li> Gonçalo Chambel, Game Engineer</li>{" "}
                    <li>João Ramiro, Software Engineer</li>
                  </ul>
                  <p
                    style={{
                      marginTop: "40px",
                      marginBottom: "10px",
                      fontFamily: "Galano Grotesque",
                      fontStyle: "normal",
                      color: "#919191",
                      fontWeight: "500",
                    }}
                  >
                    IMPACT
                  </p>
                  <ul style={{ maxWidth: "290px" }}>
                    <li>
                      {" "}
                      Partnership with CUF, largest hospital chain in PT Grant
                      of 10,000 euros @ EITHealth
                    </li>{" "}
                    <li>
                      InnoStars Award 2018 Finalist, prize of 30,000 euros @
                      GovTech Lisboa 2019
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={macbook} alt="macbook" style={{ maxWidth: "100%" }} />
          </div>
        </div>
        <div className="container">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/mDjL9s_PjJQ?rel=0&showinfo=0"
              marginwidth="0"
              marginheight="0"
              hspace="0"
              vspace="0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="video"
            ></iframe>
          </div>
        </div>
        <div className="background-athlete" id="Define">
          <div className="container">
            <div className="bg-text" style={{ paddingTop: "130px" }}>
              <p
                style={{
                  maxWidth: "800px",
                  color: "#FFFFFF",
                  fontSize: "15px",
                  lineHeight: "140%",
                  fontFamily: "Galano Grotesque",
                  fontWeight: "300",
                  fontStyle: "normal",
                }}
              >
                PROBLEM
              </p>
              <p
                style={{
                  marginTop: "40px",
                  maxWidth: "800px",
                  color: "#FFFFFF",
                  fontSize: "25px",
                  lineHeight: "140%",
                  fontFamily: "Galano Grotesque",
                  fontWeight: "100",
                }}
              >
                In physical therapy, the recovery process requires home
                exercises beyond in-clinic sessions — failure to keep us slows
                down recovery and can lead to future recurring injuries.
              </p>{" "}
              <br /> <br />
              <p
                style={{
                  maxWidth: "800px",
                  color: "#FFFFFF",
                  fontSize: "25px",
                  lineHeight: "140%",
                  fontFamily: "Galano Grotesque",
                  fontWeight: "100",
                  fontStyle: "normal",
                }}
              >
                <b>Patients</b> who perform home exercises often perform
                exercises incorrectly and over time lack motivation.{" "}
                <b>Physical therapists </b>
                struggle to help patients who miss sessions and fail to perform
                the exercise recommendations.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bg-text" style={{ borderLeft: "10px solid #26A2CB" }}>
            <p
              style={{
                marginLeft: "32px",
                marginTop: "160px",
                maxWidth: "800px",
                color: "#242424",
                fontSize: "40px",
                fontFamily: "Galano Grotesque",
                fontWeight: "100",
                lineHeight: "140%",
              }}
            >
              We had an idea — create a gamified physical therapy exercise to
              help patients recover faster.
            </p>
          </div>
        </div>
        <Challenge />
      </div>

      <Research />
      <Design />
      <Interaction />
      <Future />
      <Footer title="Google Design Project" link="/google" />
    </div>
  );
};

export default Clynx;

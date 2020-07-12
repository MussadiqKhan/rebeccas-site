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

const Clynx = () => {
  return (
    <div>
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
                <p className="main-text" style={{ marginTop: "48px" }}>
                  Clynx is a healthcare technology startup I co-founded with
                  four team members based in Lisbon, Portugal. Our solution
                  utilizes gamification and digitalization to help physical
                  therapy patients recover faster.
                </p>
                <p className="main-text" style={{ marginTop: "48px" }}>
                  I designed the <b>desktop MVP </b> for the dashboard
                  experience to help patients perform exercises and physicians
                  to monitor therapy progress.
                </p>
                <button>CLYNX LANDING PAGE </button>
              </div>
              <div className="text-2" style={{ marginTop: "260px" }}>
                <p style={{ marginBottom: "10px" }}>MY ROLE</p>
                <p
                  style={{
                    lineHeight: "170%",
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "270px",
                  }}
                >
                  Solo UX Designer–discovery, user research, competitive audit,
                  testing, feature prioritization, product strategy
                </p>

                <p style={{ marginBottom: "10px", marginTop: "40px" }}>
                  MY CONTRIBUTIONS
                </p>
                <p
                  style={{
                    lineHeight: "170%",
                    marginBottom: "10px",
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "270px",
                  }}
                >
                  Led user research with 20+ interviews Designed entire
                  product’s visual interface Collaborated on product strategy &
                  MVP pitch to investors
                </p>
              </div>
              <div className="text-3" style={{ marginTop: "260px" }}>
                <p style={{ marginBottom: "10px" }}>TEAM</p>
                <p
                  style={{
                    lineHeight: "170%",
                    marginBottom: "10px",
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "270px",
                  }}
                >
                  Joana Pinto, Product Manager Henrique Carvalho, Game Engineer
                  Gonçalo Chambel, Game Engineer João Ramiro, Software Engineer
                </p>
                <p style={{ marginBottom: "10px", marginTop: "60px" }}>
                  IMPACT
                </p>
                <p
                  style={{
                    lineHeight: "170%",
                    marginBottom: "10px",
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "270px",
                  }}
                >
                  Partnership with CUF, largest hospital chain in PT Grant of
                  10,000 euros @ EITHealth InnoStars Award 2018 Finalist, prize
                  of 30,000 euros @ GovTech Lisboa 2019
                </p>
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
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video"
          ></iframe>
        </div>
      </div>
      <div className="background-athlete">
        <div className="container">
          <div className="bg-text" style={{ paddingTop: "180px" }}>
            <p
              style={{
                maxWidth: "800px",
                color: "#FFFFFF",
                fontSize: "15px",
                lineHeight: "140%",
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
              }}
            >
              In physical therapy, the recovery process requires home exercises
              beyond in-clinic sessions — failure to keep us slows down recovery
              and can lead to future recurring injuries.
            </p>{" "}
            <br /> <br />
            <p
              style={{
                maxWidth: "800px",
                color: "#FFFFFF",
                fontSize: "25px",
                lineHeight: "140%",
              }}
            >
              Patients who perform home exercises often perform exercises
              incorrectly and over time lack motivation. Physical therapists
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
              color: "grey",
              fontSize: "40px",
              fontWeight: "300px",
              lineHeight: "140%",
            }}
          >
            We had an idea — create a gamified physical therapy exercise to help
            patients recover faster.
          </p>
        </div>
      </div>
      <Challenge />
      <Research />
      <Design />
      <Interaction />
      <Future />
    </div>
  );
};

export default Clynx;

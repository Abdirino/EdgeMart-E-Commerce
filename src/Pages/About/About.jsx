import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="history">
          <h3>Our History</h3>
          <h1>Creative and Renovate Fashion Trend</h1>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            maintain networks. Dynamically usable procrastinate B2B users after
            installed base benefits. Dramatically visualize customer directed
            convergence without revolutionary ROI.
          </p>
          <div className="nums">
            <div className="num">
                <h1>12K</h1>
                <p>Years of Experience</p>
            </div>
            <div className="num">
                <h1>20K</h1>
                <p>Happy Customers</p>
            </div>
            <div className="num">
                <h1>100%</h1>
                <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="a-vision"></div>
      </div>
    </>
  );
};

export default About;

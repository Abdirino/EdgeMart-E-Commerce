import React from "react";
import "./about.css";

import AboutIMG1 from "../../images/about_us_img_11.png";
import AboutIMG2 from "../../images/about_us_img_21.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import News from "../../Components/NewsLetter/News";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="history">
          <div className="h-detail">
            <h3>Our History</h3>
            <h1>Creative and Renovate Fashion Trend</h1>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              maintain networks. Dynamically usable procrastinate B2B users
              after installed base benefits. Dramatically visualize customer
              directed convergence without revolutionary ROI.
            </p>
            <div className="nums">
              <div className="num">
                <h2>12K</h2>
                <p>Years of Experience</p>
              </div>
              <div className="num">
                <h2>20K</h2>
                <p>Happy Customers</p>
              </div>
              <div className="num">
                <h2>100%</h2>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="h-image">
            <img src={AboutIMG1} alt="" />
          </div>
        </div>
        <div className="a-vision">
          <div className="v-image">
            <img src={AboutIMG2} alt="" />
          </div>
          <div className="v-detail">
            <h3>Our Vision</h3>
            <h1>We Are EdgeMart</h1>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              maintain networks. Dynamically usable procrastinate B2B users
              after installed base benefits. Dramatically visualize customer
              directed convergence without revolutionary ROI.
            </p>
            <ul>
              <li>Credibly innovate granular internal</li>
              <li>Grantedly underconstructions reloaded</li>
              <li>Completely synergize resource taxing relationships</li>
            </ul>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </>
  );
};

export default About;

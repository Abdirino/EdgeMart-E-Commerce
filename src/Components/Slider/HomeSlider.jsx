import React from "react";
import "./homeSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../images/banner-2.png";

import offer1 from "../../images/offer_banner_21-1-1-1.jpg";
import offer2 from "../../images/offer_banner_31-1-1-1.png";
import offer3 from "../../images/offer_banner_41-1-1-1.jpg";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slide">
          <div className="details">
            <h1>!00% Discount Offer</h1>
            <p>Come get your index now cartoon network noise teen titans</p>
            <button>Claim your prize Now</button>
          </div>
          <div className="image">
            <img src={banner} alt="" />
          </div>
        </div>
        <div className="slide">
          <img src={banner} alt="" />
        </div>
        <div className="slide">
          <img src={banner} alt="" />
        </div>
        <div className="slide">
          <img src={banner} alt="" />
        </div>
      </Slider>
      <div className="home-offers">
        <div className="img1">
          <img src={offer1} alt="" />
        </div>
        <div className="img1">
          <img src={offer2} alt="" />
        </div>
        <div className="img1">
          <img src={offer3} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeSlider;

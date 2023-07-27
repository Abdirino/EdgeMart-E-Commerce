import React from "react";
import "./HSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Offers from '../Offers/Offers'

// import headphone from "../../images/headphone_2-1.png";
import headphone2 from "../../images/head_phone_2-2.png";
import banner from "../../images/offer_banner_21-1-1-1.jpg";
import banner2 from "../../images/offer_banner_31-1-1-1.png";
import banner3 from "../../images/offer_banner_41-1-1-1.jpg";

const HSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4200,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="home-slider">
        <Slider {...settings}>
          <div>
            <div className="h-slider">
              <div className="h-details">
                <h1>
                  Sony 1000-GH<span>Gaming Headphones</span>
                </h1>
                <p>
                  Sony 1000-GH Gaming Headphones, the ultimate audio companion
                  for gamers seeking unparalleled immersion and precision in
                  their gaming experience.
                </p>
                <p className="price">$ 120 /ONLY- </p>
                <button className="button">
                  <span className="transition"></span>
                  <span className="label">BUY NOW</span>
                </button>
              </div>
              <div className="h-image">
                <img src={headphone2} alt="" />
              </div>
            </div>
          </div>

        </Slider>
      </div>
      
      <Offers />
      
      <div className="home-images">
        <div className="image">
          <img src={banner} alt="" />
        </div>
        <div className="image">
          <img src={banner2} alt="" />
        </div>
        <div className="image">
          <img src={banner3} alt="" />
        </div>
      </div>
    </>
  );
};

export default HSlider;

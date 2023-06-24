import React from "react";
import "./HSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import headphone from "../../images/headphone_2-1.png";

const HSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="home-slider">
        <Slider {...settings}>
          <div>
            <div className="h-slider">
              <div className="h-details">
                <p>Get 50% OFF</p>
                <h1>Shop Wise With Price Comparison</h1>
                <button>View Collection</button>
              </div>
              <div className="h-image">
                <img src={headphone} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HSlider;

import React from "react";
import "./HSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import headphone from "../../images/headphone_2-1.png";
import banner from "../../images/offer_banner_21-1-1-1.jpg";
import banner2 from "../../images/offer_banner_31-1-1-1.png";
import banner3 from "../../images/offer_banner_41-1-1-1.jpg";
import headphone2 from "../../images/head_phone_2-2.png";

const HSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
                <h1>Shop Wisely With<span> Price Comparison</span></h1>
                <button>
                  <span>View Collection</span>
                </button>
              </div>
              <div className="h-image">
                <img src={headphone2} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="h-slider">
              <div className="h-details">
                <p>Get 50% OFF</p>
                <h1>Shop Wisely With<span> Price Comparison</span></h1>
                <button>
                  <span>View Collection</span>
                </button>
              </div>
              <div className="h-image">
                <img src={headphone} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
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

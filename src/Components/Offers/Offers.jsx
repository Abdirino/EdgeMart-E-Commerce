import React from "react";
import "./offers.css";

const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="offer-details">
          <div className="offer">
            <div className="o-icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="o-detail">
              <h3>Free Shipping</h3>
              <p>When ordering over $100</p>
            </div>
          </div>
          <div className="offer">
            <div className="o-icon">
              <i class="fa-solid fa-arrow-rotate-left"></i>
            </div>
            <div className="o-detail">
              <h3>Free Returns</h3>
              <p>Get return within 30 days</p>
            </div>
          </div>
          <div className="offer">
            <div className="o-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div className="o-detail">
              <h3>Secure Payment</h3>
              <p>100% secure online payment</p>
            </div>
          </div>
          <div className="offer">
            <div className="o-icon">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div className="o-detail">
              <h3>Best Quality</h3>
              <p>Original products guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;

import React from "react";
import "./offers.css";

const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="offer-details">
          <div className="offer">
            <i class="fa-solid fa-truck-fast"></i>
            <h3>Worldwide Delivery</h3>
            <p>
              At our company, we take pride in offering competitive prices on a
              vast selection of products.
            </p>
          </div>
          <div className="offer">
            <i class="fa-solid fa-credit-card"></i>
            <h3>Safe Payment</h3>
            <p>
              At our company, we take pride in offering competitive prices on a
              vast selection of products.
            </p>
          </div>
          <div className="offer">
            <i class="fa-sharp fa-solid fa-shield-halved"></i>
            <h3>Security</h3>
            <p>
              At our company, we take pride in offering competitive prices on a
              vast selection of products.
            </p>
          </div>
          <div className="offer">
            <i class="fa-solid fa-headset"></i>
            <h3>24 / 7 Support</h3>
            <p>
              At our company, we take pride in offering competitive prices on a
              vast selection of products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;

import React from "react";
import "./footer.css";
import logo from "../../images/Edge-mart web icon.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="f-content">
          <div className="upper">
            <div className="f-logo">
              <img src={logo} alt="" />
              <h1>
                <span>Edge</span>Mart<span>.</span>
              </h1>
            </div>
            <div className="socials">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>

          <div className="lower">
            <div className="l">
              <h2>About Us</h2>
              <p>Careers</p>
              <p>Our Store</p>
              <p>Our Services</p>
              <p>Terms & conditions</p>
            </div>
            <div className="l">
              <h2>Customer Care</h2>
              <p>Help Center</p>
              <p>How to buy</p>
              <p>Track your Order</p>
              <p>Returns and refunds</p>
            </div>
            <div className="l">
              <h2>Contact Us</h2>
              <p>New York, NY 10012, United States</p>
              <p>Email: uilib.help@gmail.com</p>
              <p>Phone: +1 1123 456 780</p>
            </div>
            <div className="l">
              <h2>Help</h2>
              <p>Support</p>
              <p>Co-operate & Bulk Purchasing</p>
              <p>Troubleshooting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-write">
        <p>
          Copyright © 2021 Edge Mart. All Rights Reserved.Developed by @Abdirino
        </p>
      </div>
    </>
  );
};

export default Footer;

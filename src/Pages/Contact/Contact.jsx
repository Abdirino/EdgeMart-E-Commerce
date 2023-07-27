import React from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/News";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="head">
        <h1>Contact <span>Us</span></h1>
      </div>
      <div className="contact">
        <div className="form">
          <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-Mail" />
            <input type="text stretch" placeholder="Subject" />
            <textarea placeholder="Message" cols="30" rows="10"></textarea>
          </form>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Contact;

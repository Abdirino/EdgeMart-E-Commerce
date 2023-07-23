import React from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="form">
          <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-Mail" />
            <input type="text stretch" placeholder="Subject" />
            <textarea placeholder="Message" cols="30" rows="10"></textarea>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

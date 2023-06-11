import React from "react";
import "./home.css";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
            <Slider />
        </div>
      </section>
    </>
  );
};

export default Home;

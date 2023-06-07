import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">

          <div className="left row">
            <i class="fa-solid fa-phone"></i>
            <label htmlFor="">+99034 5467 9912</label>
            <i class="fa-solid fa-envelope"></i>
            <label>EdgeMart@gmail.com</label>
          </div>

          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Help</label>
            <span>🏴</span>
            <label htmlFor="">Eng</label>
            <span>🏳️</span>
            <label htmlFor="">USA</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;

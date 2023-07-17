import React from "react";
import "./news.css";

const News = () => {
  return (
    <>
      <div className="news">
        <div className="n-detail">
          <h2>Subscribe and Get Updated</h2>
          <p>Sign up for our newsletter to get up-to-date from us</p>
        </div>
        <div className="n-input">
            <input type="text" placeholder="Enter Your E-Mail..." />
            <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default News;

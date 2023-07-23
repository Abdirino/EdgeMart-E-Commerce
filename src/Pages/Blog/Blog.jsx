import React from "react";
import "./blog.css";
import news1 from "../../images/news-1-1.jpg";
import news2 from "../../images/news-4-1.jpg";
import news3 from "../../images/news-2.jpg";
import news4 from "../../images/news-3-1.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import News from "../../Components/NewsLetter/News";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="head">
        <h1>
          Our <span>Blog</span>
        </h1>
      </div>
      <div className="Blog">
        <div className="blog">
          <div className="b-image">
            <img src={news1} alt="" />
          </div>
          <div className="b-detail">
            <div className="topic">
              <i class="fa-solid fa-folder"></i>
              <p>Electronics</p>
            </div>
            <h2>Seating Inspiration Is Enough For Computers</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
          </div>
        </div>
        <div className="blog">
          <div className="b-image">
            <img src={news2} alt="" />
          </div>
          <div className="b-detail">
            <div className="topic">
              <i class="fa-solid fa-folder"></i>
              <p>Speaker</p>
            </div>
            <h2>Exterior Ideas: 10 Colored Fiber Garden Seats</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
          </div>
        </div>
        <div className="blog">
          <div className="b-image">
            <img src={news3} alt="" />
          </div>
          <div className="b-detail">
            <div className="topic">
              <i class="fa-solid fa-folder"></i>
              <p>Fashion</p>
            </div>
            <h2>Creative Water Features And Exterior Design</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
          </div>
        </div>
        <div className="blog">
          <div className="b-image">
            <img src={news4} alt="" />
          </div>
          <div className="b-detail">
            <div className="topic">
              <i class="fa-solid fa-folder"></i>
              <p>Computer</p>
            </div>
            <h2>Beating Inspiration Is Not Enough For People</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
          </div>
        </div>
      </div>
      <div className="continue">
        <div className="prev">Prev</div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <div className="next">Next</div>
      </div>
      <News />
      <Footer />
    </>
  );
};

export default Blog;

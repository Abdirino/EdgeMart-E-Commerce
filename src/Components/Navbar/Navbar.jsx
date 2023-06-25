import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <div className="header">
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <NavLink className="logo">
            <h1>
              <span>Edge</span>Mart<span>.</span>
            </h1>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/car-listing"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="s-icons">
            <i className="fa-solid fa-search"></i>
            <i className="fa-regular fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </nav>
      </div>
      <div className="search">
        <div className="h-search">
          <input type="text" placeholder="Find your Product..." />
          <i className="fa-solid fa-search"></i>
        </div>
        <div className="h-deal">
          <h2>Black Friday Deals</h2>
          <p>Get 45% Off!</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

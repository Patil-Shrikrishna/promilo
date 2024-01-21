import React from "react";
import "./Navbar.css";
import pro from "../../assets/pro.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar-container">
      <img src={pro} className="logo" />
      <div className="menu">
        <Link className="menu-item" to="/products">
          Browse products
        </Link>
        <Link className="menu-item" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

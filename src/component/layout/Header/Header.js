import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../../../images/logo.png";
import "./Header.css";
import { toast } from "react-toastify";

const Header = () => {


  return (
    <div className="navBar">
      <div className="nav1">
      <Link to="/" className="home" id="logoImage"><img src={logo} height="80px" alt="logoImage" /></Link>
      <Link to="/" className="home"><h2>ShopOnline</h2></Link>
      <Link to="/" className="home">Home</Link> 
      <Link to="/contact" className="contact">Contact</Link> 
      </div>
      <div className="nav2"> 
      <Link to="/products" className="products">Products</Link>
      <Link to="/search" className="search">Search</Link>
      <Link to="/cart" className="cart">Cart</Link>
      <Link to="/login"className="login">Login</Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";



function Navbar() {


    return <>
     <nav className="navwrapper">
        <div>
        <span>T/S</span>
        </div>
        <div className="navigation__wrapper">
        <div className="navigation">
            <Link to="/">
            <span>Home</span>
            </Link>
            <Link to="/aboutus" >
            <span>About Us</span>
            </Link>
            <Link to="/products">
            <span>Products</span>
            </Link>
            <a href="#contact-us">
            <span>Contact Us</span>
            </a>
            </div>
        <div>
            <span className="signin-btn" >Sign In</span>
            <span className="signup-btn" >Sign up</span>
        </div>
        </div>
     </nav>
    </>
}


export default Navbar;
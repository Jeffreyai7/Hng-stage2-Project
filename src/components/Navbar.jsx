import React from "react";



function Navbar() {


    return <>
     <nav className="navwrapper">
        <div>
        <span>T/S</span>
        </div>
        <div className="navigation__wrapper">
        <div className="navigation"><span>Home</span><span>About Us</span><span>Products</span><span>Contact Us</span></div>
        <div>
            <span className="signin-btn" >Sign In</span>
            <span className="signup-btn" >Sign up</span>
        </div>
        </div>
     </nav>
    </>
}


export default Navbar;
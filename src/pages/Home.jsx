import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../assets/Images/heropage.png"
import Aboutinfo from "../components/Aboutinfo";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ham from "../assets/svg/quill.svg";
import close from "../assets/svg/close.svg"




function Home () {

const [display, setDisplay] = useState(false)

const handleClick = () => {

    setDisplay(!display)

}

// const handleClose = () => {

//     setDisplay(false)

// }

    return <>
    <Navbar/>
    <div className="hero-section">
    <div className="ham-container">
        <img src={ham} alt="" onClick={handleClick} />
    </div>
    <div className={display ? "popup" : "close"}>
        <img src={close} alt=""onClick={handleClick}  />
        <h3 className="title">T/S</h3>
        <Link to="/">
        <h3>Home</h3>
        </Link>
        <Link to="/aboutus">
        <h3>About Us</h3>
        </Link>
        <Link to="/products">
        <h3>Products</h3>
        </Link>

        <h3>Contact Us</h3>
        <h3>Sign In</h3>
        <h3>Sign Up</h3>
    </div>
    <img src={Hero} alt="hero" />
    </div>
    <Aboutinfo/>
    <Products/>
    <Footer/>
    </>
}



export default Home
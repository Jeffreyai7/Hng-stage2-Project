import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../assets/Images/heropage.png"
import Aboutinfo from "../components/Aboutinfo";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";




function Home () {

    return <>
    <Navbar/>
    <div className="hero-section">
        <img src={Hero} alt="hero" />
    </div>
    <Aboutinfo/>
    <Products/>
    <Footer/>
    </>
}



export default Home
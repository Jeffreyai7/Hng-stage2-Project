import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../assets/Images/heropage.png"
import Aboutus from "../components/Aboutus";
import ProductList from "../components/ProductList";


function Home () {

    return <>
    <Navbar/>
    <div className="hero-section">
        <img src={Hero} alt="hero" />
    </div>
    <Aboutus/>
    <ProductList/>
    </>
}



export default Home
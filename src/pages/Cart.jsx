import React from "react";
import Navbar from "../components/Navbar";
import cloth1 from "../assets/Images/cloth1.png"
import Ellip1 from "../assets/svg/Ellipse60.svg"
import Ellip2 from "../assets/svg/Ellipse61.svg"
import Ellip3 from "../assets/svg/Ellipse62.svg"
import Ellip4 from "../assets/svg/Ellipse63.svg"
import Ellip5 from "../assets/svg/Ellipse64.svg"
import Ellip6 from "../assets/svg/Ellipse65.svg"



function Cart () {


    return <>
    <Navbar/>
    <div className="cart-container">
        <div className="item_wrapper">
            <div>
                <div><img src={cloth1} alt="ex" /></div>
                <div className="circles">
                    <img src={Ellip1} alt="circle" />
                    <img src={Ellip2} alt="circle" />
                    <img src={Ellip3} alt="circle" />
                    <img src={Ellip4} alt="circle" />
                    <img src={Ellip5} alt="circle" />
                    <img src={Ellip6} alt="circle" />

                </div>
            </div>
            <div></div>
        </div>
        <div></div>
    </div>
    </>
}

export default Cart
import React from "react";
import Navbar from "../components/Navbar";
import cloth1 from "../assets/Images/cloth1.png"
import Ellip1 from "../assets/svg/Ellipse60.svg"
import Ellip2 from "../assets/svg/Ellipse61.svg"
import Ellip3 from "../assets/svg/Ellipse62.svg"
import Ellip4 from "../assets/svg/Ellipse63.svg"
import Ellip5 from "../assets/svg/Ellipse64.svg"
import Ellip6 from "../assets/svg/Ellipse65.svg"
import whitecart from "../assets/svg/whitecart.svg"


function Cart () {


    return <>
    <Navbar/>
    <div className="cart-container">
        <div className="item_wrapper">
            <div className="product-container">
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
            <div className="product-footer">
                <div className="size-container">
                    <span className="sizes">X</span>
                    <span className="sizes">L</span>
                    <span className="sizes">XL</span>
                    <span className="sizes">XXL</span>
                </div>
                <div className="product-footer__btn">
                    <div className="btn-cart"><span>Add to Cart</span><span><img src={whitecart} alt="cart"/></span></div>
                    <div className="num-btn"><span>-</span><span>1</span><span>+</span></div>
                </div>
            </div>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente culpa odio quis atque nihil consectetur dicta consequatur quia soluta.</p>
        </div>
    </div>
    </>
}

export default Cart
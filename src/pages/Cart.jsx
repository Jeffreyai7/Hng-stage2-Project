import React, { useState } from "react";
import Navbar from "../components/Navbar";
import cloth1 from "../assets/Images/cloth1.png"
import Ellip1 from "../assets/svg/Ellipse60.svg"
import Ellip2 from "../assets/svg/Ellipse61.svg"
import Ellip3 from "../assets/svg/Ellipse62.svg"
import Ellip4 from "../assets/svg/Ellipse63.svg"
import Ellip5 from "../assets/svg/Ellipse64.svg"
import Ellip6 from "../assets/svg/Ellipse65.svg"
import whitecart from "../assets/svg/whitecart.svg"
import { Link } from "react-router-dom";


function Cart () {
const [num, setNum] = useState(1)


function increase (){

    setNum(num + 1)
}

function decrease (){

    setNum(num - 1)
}


    return <>
    <div className="cart_wrapper">
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
                    <Link to="/checkout">
                    <div className="btn-cart"><span>Add to Cart</span><span><img src={whitecart} alt="cart"/></span></div>
                    </Link>
                    <div className="num-btn"><span onClick={decrease}>-</span><span>{num}</span><span onClick={increase}>+</span></div>
                </div>
            </div>
        </div>
        <div>
            <h1 className="exo">Round neck T-Shirt</h1>
            <div className="description">
            <p>
            Classic Round Neck T-Shirt
Upgrade your everyday wardrobe with our Classic Round Neck T-Shirt. Made from premium, breathable cotton, this t-shirt offers unmatched comfort and style. 
            </p>
            <p>Key Features:</p>
            <ul>
                <li>Soft and breathable premium cotton fabric</li>
                <li>Versatile round neckline</li>
                <li>Flattering tailored fit</li>
                <li>Available in multiple vibrant colors</li>
                <li>Easy machine wash care</li>
            </ul>
            <p>
            Experience the perfect blend of comfort and style with our Classic Round Neck T-Shirt, an essential piece for any wardrobe.
            </p>
            </div>
        </div>
    </div>
    <div className="chekout-btn">
    <Link to="/checkout">
        <span>Checkout</span>
    </Link>
    </div>
    </div>

    </>
}

export default Cart
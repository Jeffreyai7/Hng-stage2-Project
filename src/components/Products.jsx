import React from "react";
import Navbar from "./Navbar";
import cloth1 from "../assets/Images/cloth1.png"
import cloth2 from "../assets/Images/cloth2.png"
import cloth3 from "../assets/Images/cloth3.png"
import cloth4 from "../assets/Images/cloth4.png"
import cloth5 from "../assets/Images/cloth5.png"
import cloth6 from "../assets/Images/cloth6.png"
import star from "../assets/svg/Star1.svg"
import cart from "../assets/svg/mdi_cart-outline.svg"



function Products(){

    return (
        <>
        <section>
            <div className="products_title">
            <h1>Trending Products</h1><img src={cart} alt="cart" />
            </div>
        <div className="products-grid" >
        <div>
            <div>
                <img src={cloth1} alt="cloth" />
            </div>
            <div className="product-info">
                <div className="star-con">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className="type">
                    <span>Round neck T-shirt</span>
                    <span>$3.99</span>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src={cloth2} alt="cloth" />
            </div>
            <div className="product-info">
                <div className="star-con">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className="type">
                    <span>Stripe polo</span>
                    <span>$15.99</span>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src={cloth3} alt="cloth" />
            </div>
            <div className="product-info">
                <div className="star-con">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className="type">
                    <span>Long Sleeve Shirt</span>
                    <span>$15.99</span>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src={cloth4} alt="cloth" />
            </div>
            <div className="product-info">
                <div className="star-con">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className="type">
                    <span>Yellow Flare Gown</span>
                    <span>$30.99</span>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src={cloth5} alt="cloth" />
            </div>
            <div className="product-info">
                <div className="star-con">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className="type">
                    <span>Round neck T-shirt</span>
                    <span>$35.99</span>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src={cloth6} alt="cloth" />
            </div>
            <div className="product-info">
                <div className="star-con">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className="type">
                    <span>Flora Beach Gown</span>
                    <span>$40.99</span>
                </div>
            </div>
        </div>
        </div>
        <div className="btn"><span>Load More</span></div>

        </section>
        </>
        
    )
}


export default Products;
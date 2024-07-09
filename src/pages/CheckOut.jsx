import React from "react";
import cloth1 from "../assets/Images/cloth1.png"
import cloth2 from "../assets/Images/cloth2.png"
import cloth3 from "../assets/Images/cloth3.png"
import { Link } from "react-router-dom";





function CheckOut () {


    return <>
    <div className="checkout-container">
        <form>
            <h1 className="exo">Check Out</h1>
            <div className="first-row">
                <div>
                <label htmlFor="firstname">First Name</label>
                <input className="input-styles" type="text" name="firstname"/>
                </div>
                <div>
                <label htmlFor="Lastname">Last Name</label>
                <input className="input-styles" type="text" name="Lastname" />
                </div>
            </div>
            <div className="second-row">
                <div>
                <label htmlFor="email">Email Addres</label>
                <input className="input-styles" type="text" name="email" id="" />
                </div>
            </div>
            <div>
                <div>
                <label htmlFor="card">Card</label>
                <input className="input-styles card-input" type="text" name="card" id="" placeholder="xxxx - xxxx - xxxx - xxxx" />
                </div>
            </div>
            <div className="expiring">
                <div>
                <label  htmlFor="year">Expiring Date</label>
                <input className="exp input-styles" type="text" name="year" placeholder="MM/YYYY" />
                </div>
                <div>
                <label htmlFor="cvv">CVV</label>
                <input className="cvv input-styles" type="text"  name="cvv"/>
                </div>
            </div>

            <div className="paynow-btn">
                <Link to="/">
                <span>Pay Now</span>
                </Link>
            </div>
        </form>
        <div className="picked-products-container">
            <div className="picked-products-container__wrapper">
                <h1 className="exo">Picked Items</h1>
                <div className="picked-products__wrapper" >
                <img src={cloth1} alt="picked-products"/>
                <div className="picked-total">
                    <span>2 items</span><span>$10.00</span>
                </div>
                </div>
                <div className="picked-products__wrapper" >
                <img src={cloth2} alt="picked-products"/>
                <div className="picked-total">
                    <span>4 items</span><span>$20.00</span>
                </div>
                </div><div className="picked-products__wrapper" >
                <img src={cloth3} alt="picked-products"/>
                <div className="picked-total">
                    <span>3 items</span><span>$15.00</span>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
}


export default CheckOut;
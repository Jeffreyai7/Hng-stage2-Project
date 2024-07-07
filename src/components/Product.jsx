import React from "react";
import {ProductData} from "../data"

function Product(){

    return (
        ProductData.map(product=>{
            return (
                <img src={product.img} alt="" />
            )
        })
    )
}

export default Product;
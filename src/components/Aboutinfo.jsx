import React from "react";
import firstrack  from "../assets/Images/firstrack.png"
import secondrack from "../assets/Images/secondrack.png"


function Aboutinfo(){


    return (
        <section id="about-us" className="about-us">
        <h1>About our Products</h1>
        <div className="advertisedProducs-container">
            <div className="flexbox">
            <div>
                <h2>Elevate Your Style With Our Exclusive Clothing Line</h2>
                <p>Our clothing line is designed for those who believe in expressing their unique style with confidence and 
                    grace. Each piece in our collection is carefully curated to blend contemporary trends with timeless elegance,
                    ensuring you always look your best, no matter the occasion. From casual wear that embodies comfort and chic, to sophisticated evening attire that turns heads, our range offers something 
                    for everyone. Dive into our latest collection and discover how our passion for fashion can elevate your wardrobe, helping you embrace every moment with unparalleled style.
                </p>
            </div>
            <div>
                <img src={firstrack} alt="clothesrack" />
            </div>
            </div>
            <div className="flexbox">
            <div>
                <img src={secondrack} alt="clothesrack" />
            </div>
            <div>
                <h2>Unleash Your Fashion Potential with Our Signature Clothing Line</h2>
                <p>Step into a realm where your style knows no bounds.
                 Our clothing line is more than just apparel; it's a celebration of individuality, a blend of modern chic and timeless sophistication crafted to make you stand out.
                  Every piece is a masterpiece, designed to accentuate your personality and elevate your wardrobe. From effortlessly stylish casual wear to breathtaking evening outfits, our collection empowers you to express yourself with confidence and flair. Embrace the allure of high fashion, redefine your look, and make every day a runway moment with our exclusive selection.
                </p>
            </div>
            </div>
        </div>
        </section>

    )
}


export default Aboutinfo;
import React from "react";
import Google from "../assets/svg/fe_google.svg"
import insta from "../assets/svg/Group.svg"
import twitter from "../assets/svg/mage_x.svg"
import facebook from "../assets/svg/cib_facebook.svg"





function Footer(){



    return(
<footer id="contact-us">
<div className="footer-container">
    <h2>Newsletters</h2>
    <div className="input-container">
    <input type="email" name="emial" id="email" placeholder="Email" /><button>Send</button>
    </div>
    <div className="social-icons">
    <img src={Google} alt="google" />
    <img src={facebook} alt="facebook" />
    <img src={twitter} alt="twitter" />
    <img src={insta} alt="insta"/>
    </div>
</div>
</footer>
    )
}


export default Footer;
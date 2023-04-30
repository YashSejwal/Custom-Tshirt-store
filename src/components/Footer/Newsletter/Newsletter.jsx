import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div className="newsletter-section" style={{marginTop:"250px"}}>
            <div className="newsletter-content">
                <span className="small-text" style={{color:"white"}}>Newsletter</span>
                <span className="big-text" style={{color:"white"}}>
                    Sign up for latest updates and offers
                </span>
                <div className="form ">
                    <input type="text" placeholder="Email Address" />
                    <button id="subs">Subscribe</button>
                </div>
                <br/>
                &nbsp;
                <span className="social-icons">
                    <div className="icon" id="social-icons">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon" id="social-icons">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon" id="social-icons">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon" id="social-icons">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;

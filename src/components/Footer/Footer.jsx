import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Our company is an online store that allows customers to design and customize their own t-shirts according to their preferences. We provide a user-friendly platform where customers can choose from a variety of t-shirt styles, colors, and designs, and then add their own text or graphics to create a unique and personalized shirt. Our goal is to provide high-quality custom t-shirts at affordable prices while ensuring a hassle-free and enjoyable shopping experience for our customers.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            ECR-111, E-Block, USICT, Guru Gobind Singh Indraprastha University, New Delhi - 110075 
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 8700352079</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: yashsejwal02@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Polo Tshirts</span>
                    <span className="text">Regular Fit</span>
                    <span className="text">Long Tshirts</span>
                    <span className="text">Trending Tshirts</span>
                    <span className="text">Oversized Tshirts</span>
                    <span className="text">Lounge Tshirts</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Returns</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        TEAM BYTE BUILDERS | 	&copy; COPYRIGHT 2023 
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;

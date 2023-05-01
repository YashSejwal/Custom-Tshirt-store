import React from "react";
import "./Banner.css";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img-2.png";

const Banner = () => {
    return (
        <div className="hero-banner" style={{marginBottom:"100px"}}>
            <div className="content">
                <div className="text-content">
                    <h1>TSHIRT</h1>
                    <p>
                        Create your own trend now !<br/>
                        Get your own designed tshirt from thousands of variants.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" id="bannerButton"> <a href="#aboutUs">Read More</a></div>
                        <div className="banner-cta v2" id="bannerButton">Shop Now</div>

                    </div>
                </div>
                <img className="banner-img" src={BannerImg} 
                alt="Coming Soon"/>
            </div>
        </div>
    );
};

export default Banner;

import React, { useState } from "react";
import "./Banner.css";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img-2.png";
import { Link } from "react-router-dom";
const Banner = () => {
  const [hover, setHover] = useState(false);
  const style = {
    color: hover ? "white" : "#7014E4",
  };
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className="hero-banner" style={{ marginBottom: "100px" }}>
      <div className="content">
        <div className="text-content">
          <h1>TSHIRT</h1>
          <p>
            Create your own trend now !<br />
            Get your own designed tshirt from thousands of variants.
          </p>
          <div className="ctas">
            <div className="banner-cta" id="bannerButton">
              {" "}
              <a href="#aboutUs">Read More</a>
            </div>
            <div className="banner-cta v2" id="bannerButton">
              <Link
                to="/shirtcustomize"
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="Coming Soon" />
      </div>
    </div>
  );
};

export default Banner;

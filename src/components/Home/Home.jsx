import React, { useEffect, useContext } from "react";
import "./Home.scss";
import "./Home.css";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import BannerImg from "../../assets/banner-ad.png";
import BannerImgF from "../../assets/1.png";
import BannerImgS from "../../assets/2.png";
import BannerImgT from "../../assets/3.png";
import BannerImgFo from "../../assets/4.png";
import BannerImgFW from "../../assets/5.png";
import BannerImgSW from "../../assets/6.png";
import BannerImgTW from "../../assets/7.png";
import BannerImgFoW from "../../assets/8.png";
import BannerAd1 from "../../assets/ad1.png";
import BannerAd2 from "../../assets/ad2.png";
import BannerAd3 from "../../assets/ad3.png";
import BannerAd4 from "../../assets/ad4.png";
import MainAd from "../../assets/categoryAd.png";
import AboutImg from "../../assets/aboutImg.png";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    });

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };
    const cards = [
        { id: 1, img: 'image1.jpg' },
        { id: 2, img: 'image2.jpg' },
        { id: 3, img: 'image3.jpg' },
        { id: 4, img: 'image4.jpg' },
      ];
      function Card({ img }) {
        return (
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={img} alt="Card image cap" />
            </div>
          </div>
        );
      }
      
      function CardRow() {
        return (
          <div className="row">
            {cards.map((card) => (
              <Card key={card.id} img={card.img} />
            ))}
          </div>
        );
      }
      
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <img src={BannerImg} id="bannerAd"/>    
                    <section class="about-section" id="aboutUs">
                        <div class="about-image">
                            <img src={AboutImg} style={{height:"400px", width:"100%", marginBottom:"80px",marginTop:"20px"}} alt="About Us" id="about-image"/>
                        </div> 
                        <div class="about-text">
                            <h2 className="abtTitle">About Us</h2>
                            &nbsp;
                            <br/> <br />
                            <p>Our company is an online store that allows customers to design and customize their own t-shirts according to their preferences. We provide a user-friendly platform where customers can choose from a variety of t-shirt styles, colors, and designs, and then add their own text or graphics to create a unique and personalized shirt. Our goal is to provide high-quality custom t-shirts at affordable prices while ensuring a hassle-free and enjoyable shopping experience for our customers.</p>
                        </div>
                    </section>

                    <div className="row rowOne">
                    <div className="col-md-3">
                        <div className="card"  id="productAd" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd1} alt="Card image cap" style={{height: "89.2%", width: "100%", padding:"4px"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productAd" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd2} alt="Card image cap" style={{height: "90%", width: "100%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productAd" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd3} alt="Card image cap" style={{height: "90%", width: "100%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productAd"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd4} alt="Card image cap" style={{height: "90%", width: "100%", padding:"4px",margin:"0%" }}/>
                        </div>
                    </div>
                </div>
                <center>
                <div className="mainAd">
               
                    <img src={MainAd} id="categoryAd" style={{width:"1080px"}} />
                </div>
                </center>  
                    <center>
                    <Products
                        headingText="Popular Products and Offers"
                        products={products}
                        style={{textAlign:"center"}}
                    />
                    </center>         
                </div>
               

{/* MEN & WOMEN SECTION */}

            <div className="container-fluid">
                    <h1 className="productTitle" style={{textAlign:"center"}}>MEN</h1>
                        &nbsp;
                <div className="row rowOne">
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgF} alt="Card image cap" style={{height: "100%", width: "90%", padding:"4px"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgS} alt="Card image cap" style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgT} alt="Card image cap" style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productCard"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgFo} alt="Card image cap" style={{height: "100%", width: "90%", padding:"4px",margin:"0%" }}/>
                        </div>
                    </div>
                </div>
                  <h1 className="productTitle" style={{textAlign:"center"}}>WOMEN</h1>
                  &nbsp;
                <div className="row rowTwo">
                    <div className="col-md-3">
                        <div className="card" id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgFW} alt="Card image cap" style={{height: "100%", width: "90%", padding:"4px"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productCard"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgSW} alt="Card image cap" style={{height: "100%", width: "90%",padding:"4px"  }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productCard"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgTW} alt="Card image cap" style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgFoW} alt="Card image cap" style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={BannerImgAd} style={{justifyContent:'center'}} id="bannerAdMain" />  */}
            </div>
        </div>
     
    )
};

export default Home;
